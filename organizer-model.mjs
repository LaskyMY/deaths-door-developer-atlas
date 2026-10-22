// User-owned flat forest: unlimited logical nesting, no Unity writes or network saves.
export const clone=x=>JSON.parse(JSON.stringify(x));
const finite=n=>typeof n==='number'&&Number.isFinite(n)&&Math.abs(n)<1e9;
const color=c=>typeof c==='string'&&/^#[0-9a-f]{6}$/i.test(c)?c:'#7e9fe8';
export function validatePlan(raw,known){
 if(!raw||raw.schema!==2||!Array.isArray(raw.groups)||raw.groups.length>20000)throw Error('不是受支持的整理方案（版本2）');
 const ids=new Set(known),gids=new Set(),groups=raw.groups.map(g=>{
  if(!g||typeof g.id!=='string'||!/^g:[\w-]{1,100}$/.test(g.id)||gids.has(g.id))throw Error('分组编号重复或格式错误');gids.add(g.id);
  if(![g.x,g.y].every(finite))throw Error('分组位置无效');
  return {id:g.id,name:String(g.name||'未命名分组').slice(0,100),parent:g.parent||null,color:color(g.color),collapsed:!!g.collapsed,x:g.x,y:g.y,note:String(g.note||'').slice(0,6000)};
 });
 const children=new Map(groups.map(g=>[g.id,[]])),queue=[];
 for(const g of groups){if(g.parent){if(!gids.has(g.parent)||g.parent===g.id)throw Error('分组包含不存在的父级或自身');children.get(g.parent).push(g.id)}else queue.push(g.id)}
 let visited=0;for(let i=0;i<queue.length;i++){visited++;queue.push(...children.get(queue[i]))}if(visited!==groups.length)throw Error('分组形成循环，不能把祖先装进后代');
 const positions={},parents={},annotations={};let unknown=0;
 for(const [id,p]of Object.entries(raw.positions||{})){if(!ids.has(id)){unknown++;continue}if(!p||![p.x,p.y].every(finite))throw Error('节点位置无效');positions[id]={x:p.x,y:p.y};}
 for(const [id,gid]of Object.entries(raw.parents||{})){if(!ids.has(id))continue;if(gid&&!gids.has(gid))throw Error('节点所属分组不存在');if(gid)parents[id]=gid;}
 for(const [id,a]of Object.entries(raw.annotations||{})){if(!ids.has(id)||!a||typeof a!=='object')continue;annotations[id]={keywords:Array.isArray(a.keywords)?a.keywords.slice(0,6).map(x=>String(x).slice(0,30)):[],note:String(a.note||'').slice(0,6000),mark:String(a.mark||'').slice(0,30)};}
 const v=raw.view||{};const view={scale:finite(v.scale)?Math.max(.02,Math.min(5,v.scale)):1,x:finite(v.x)?v.x:0,y:finite(v.y)?v.y:0};
 return {plan:{schema:2,id:typeof raw.id==='string'?raw.id:'p:'+Date.now(),name:String(raw.name||'我的整理').slice(0,100),updated:raw.updated||new Date().toISOString(),groups,positions,parents,annotations,view},unknown};
}
export class Organizer{
 constructor(nodes,initial,onChange=()=>{}){this.nodes=new Map(nodes.map(n=>[n.id,n]));this.defaults=clone(initial);this.onChange=onChange;this.undoStack=[];this.redoStack=[];this.load(initial);}
 load(plan){const {plan:p}=validatePlan(plan,this.nodes.keys());for(const[id,pos]of Object.entries(this.defaults.positions))if(!p.positions[id])p.positions[id]=clone(pos);this.data=p;this.undoStack=[];this.redoStack=[];}
 group(id){if(this._groupArray!==this.data.groups||this._groupIndex?.size!==this.data.groups.length){this._groupArray=this.data.groups;this._groupIndex=new Map(this.data.groups.map(g=>[g.id,g]))}return this._groupIndex.get(id)}
 exists(id){return this.nodes.has(id)||!!this.group(id)}
 parent(id){return this.nodes.has(id)?this.data.parents[id]||null:this.group(id)?.parent||null}
 children(parent=null){return [...this.data.groups.filter(g=>g.parent===parent).map(g=>g.id),...[...this.nodes.keys()].filter(id=>this.parent(id)===parent)];}
 descendants(ids){const all=new Set(),q=[...ids],childMap=new Map();for(const g of this.data.groups){if(!childMap.has(g.parent))childMap.set(g.parent,[]);childMap.get(g.parent).push(g.id)}for(const id of this.nodes.keys()){const p=this.parent(id);if(!childMap.has(p))childMap.set(p,[]);childMap.get(p).push(id)}for(let i=0;i<q.length;i++){const id=q[i];if(all.has(id))continue;all.add(id);if(this.group(id))q.push(...childMap.get(id)||[])}return all;}
 roots(ids){const selected=new Set([...ids].filter(id=>this.exists(id)));return [...selected].filter(id=>{let p=this.parent(id);while(p){if(selected.has(p))return false;p=this.parent(p)}return true});}
 canParent(id,parent){if(!parent)return true;if(!this.group(parent)||id===parent)return false;let p=parent;while(p){if(p===id)return false;p=this.parent(p)}return true;}
 commit(label,fn){const before=clone(this.data);try{fn();this.data=validatePlan(this.data,this.nodes.keys()).plan;}catch(e){this.data=before;throw e}if(JSON.stringify(before)===JSON.stringify(this.data))return false;this.data.updated=new Date().toISOString();this.undoStack.push({label,data:before});if(this.undoStack.length>60)this.undoStack.shift();this.redoStack=[];this.onChange(label);return true;}
 undo(){const item=this.undoStack.pop();if(!item)return;const view=clone(this.data.view);this.redoStack.push({label:item.label,data:clone(this.data)});this.data=item.data;this.data.view=view;this.onChange('撤销：'+item.label)}
 redo(){const item=this.redoStack.pop();if(!item)return;const view=clone(this.data.view);this.undoStack.push({label:item.label,data:clone(this.data)});this.data=item.data;this.data.view=view;this.onChange('重做：'+item.label)}
 setParentRaw(ids,parent){for(const id of this.roots(ids)){if(!this.canParent(id,parent))throw Error('不能把分组装进自己或后代');if(this.nodes.has(id)){if(parent)this.data.parents[id]=parent;else delete this.data.parents[id]}else this.group(id).parent=parent}}
 moveRaw(ids,dx,dy){if(![dx,dy].every(finite))throw Error('移动距离无效');for(const id of this.descendants(this.roots(ids))){const p=this.nodes.has(id)?this.data.positions[id]:this.group(id);p.x+=dx;p.y+=dy}}
 move(ids,dx,dy,parent=undefined){this.commit('移动方块',()=>{this.moveRaw(ids,dx,dy);if(parent!==undefined)this.setParentRaw(ids,parent)})}
 reparent(ids,parent){this.commit(parent?'移入分组':'取出到画布',()=>this.setParentRaw(ids,parent))}
 newGroupRaw(ids,name='新分组',point={x:0,y:0}){const roots=this.roots(ids);const p=roots.length&&roots.every(i=>this.parent(i)===this.parent(roots[0]))?this.parent(roots[0]):null;const id='g:'+crypto.randomUUID();this.data.groups.push({id,name:String(name).slice(0,100),parent:p,color:'#7e9fe8',collapsed:false,x:point.x,y:point.y,note:''});this.setParentRaw(roots,id);return id;}
 newGroup(ids,name='新分组',point={x:0,y:0}){let id;this.commit('装成一组',()=>{id=this.newGroupRaw(ids,name,point)});return id;}
 dissolveRaw(id){if(!this.group(id))return;const parent=this.parent(id);this.setParentRaw(this.children(id),parent);this.data.groups=this.data.groups.filter(g=>g.id!==id)}
 dissolve(id){if(this.group(id))this.commit('打散分组',()=>this.dissolveRaw(id))}
 toggle(id,rect){const g=this.group(id);if(!g)return;this.commit(g.collapsed?'展开分组':'收起分组',()=>{if(!g.collapsed&&rect){g.x=rect.x;g.y=rect.y}g.collapsed=!g.collapsed})}
 annotate(id,a){this.commit('保存说明',()=>{if(this.group(id))Object.assign(this.group(id),a);else if(this.nodes.has(id))this.data.annotations[id]={...this.data.annotations[id],...a}})}
 resetPositions(){this.commit('恢复初始位置',()=>{for(const[id,pos]of Object.entries(this.defaults.positions))this.data.positions[id]=clone(pos)})}
}
