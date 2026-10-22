const CSS = `
*{box-sizing:border-box}html,body{margin:0;height:100%}body{background:#0b1220;color:#c8d3e6;font:13px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Microsoft YaHei",sans-serif}
#app{display:flex;flex-direction:column;height:100%}
.hdr{display:flex;align-items:center;gap:12px;padding:8px 12px;background:#0f1a2e;border-bottom:1px solid #1c2b45;flex:0 0 auto}
.hdr h1{font-size:17px;white-space:nowrap;margin:0;font-weight:600;color:#e6eefc}
.hdr a{color:#5cc7d6;text-decoration:none;font-size:12px}
.hdr a:hover{text-decoration:underline}
.counts{color:#7d8ba6;font-size:11px;margin-left:auto;display:flex;gap:10px;flex-wrap:wrap}
.body{display:flex;flex:1;min-height:0}
.left{width:235px;flex:0 0 235px;background:#0d1728;border-right:1px solid #1c2b45;overflow:auto;padding:8px}
.center{flex:1;position:relative;min-width:0;min-height:0;background:#0a1322}
.right{width:360px;flex:0 0 360px;background:#0d1728;border-left:1px solid #1c2b45;overflow:auto;padding:10px}
.sec{margin-bottom:10px}
.sec h3{margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#7d8ba6;font-weight:600}
input[type=search],input[type=text]{width:100%;background:#0a1322;border:1px solid #1c2b45;color:#c8d3e6;border-radius:4px;padding:5px 7px;font-size:12px;outline:none}
input[type=search]:focus{border-color:#2e8ea8}
.row{display:flex;align-items:center;gap:6px;padding:2px 0;cursor:pointer;font-size:12px;border-radius:3px}
.row:hover{background:#12213a}
.row input{accent-color:#2e8ea8;margin:0}
.sw{width:9px;height:9px;border-radius:2px;flex:0 0 auto}
.btn{background:#152444;border:1px solid #23365a;color:#c8d3e6;border-radius:4px;padding:4px 8px;font-size:11px;cursor:pointer;font-family:inherit}
.btn:hover{background:#1b2e54;border-color:#2e8ea8}
.btn:focus-visible{outline:2px solid #2e8ea8;outline-offset:1px}
.btn.pri{background:#163a4a;border-color:#2e8ea8;color:#8fe0ee}
.btns{display:flex;gap:4px;flex-wrap:wrap}
.res{max-height:220px;overflow:auto;border:1px solid #1c2b45;border-radius:4px;background:#0a1322}
.res button{display:block;width:100%;text-align:left;background:none;border:0;border-bottom:1px solid #142239;color:#c8d3e6;padding:4px 6px;font-size:11px;cursor:pointer;font-family:inherit}
.res button:hover{background:#12213a}
.res button mark{background:#2e8ea8;color:#fff;border-radius:2px;padding:0 1px}
.res .empty{color:#5a6b88;padding:8px;text-align:center}
canvas{display:block;width:100%;height:100%;outline:none;touch-action:none}
canvas:focus-visible{box-shadow:inset 0 0 0 2px #2e8ea8}
.tbtn{position:static;z-index:5;display:none}
.ctr{position:absolute;left:8px;bottom:8px;display:flex;gap:4px;background:rgba(13,23,40,.85);padding:4px;border-radius:5px;border:1px solid #1c2b45;z-index:4}
.ins{overflow-wrap:anywhere}.right{overflow-x:hidden}.ins h2{font-size:13px;margin:0 0 4px;color:#e6eefc;word-break:break-word}
.ins .sub{color:#7d8ba6;font-size:11px;margin-bottom:8px;word-break:break-all}
.ins .tw{color:#9fb0cc;background:#0a1322;border:1px solid #142239;border-radius:4px;padding:6px;margin-bottom:8px;white-space:pre-wrap;word-break:break-word}
.ins ul{margin:2px 0 8px;padding-left:16px}
.ins li{margin:1px 0}
.ins a{color:#5cc7d6;text-decoration:none;font-size:11px}
.ins a:hover{text-decoration:underline}
.ins .kv{display:grid;grid-template-columns:70px 1fr;gap:2px 6px;font-size:11px;margin-bottom:8px}
.ins .kv>span{color:#7d8ba6}
.ins .kv>div{color:#c8d3e6;word-break:break-word}
.ins .kw{display:inline-block;background:#142239;border:1px solid #23365a;border-radius:3px;padding:0 4px;margin:1px 2px 1px 0;font-size:10px;color:#9fb0cc}
.ins .rel{border-top:1px solid #142239;padding:5px 0;font-size:11px}
.ins .rel .l{color:#5a6b88;font-size:10px;text-transform:uppercase;letter-spacing:.4px;margin-bottom:2px}
.ins .rel button{background:none;border:0;color:#8fe0ee;cursor:pointer;padding:0;font-size:11px;text-align:left;font-family:inherit}
.ins .rel button:hover{text-decoration:underline}
.ins .edge-box{background:#0a1322;border:1px solid #142239;border-radius:4px;padding:6px;margin-bottom:6px;font-size:11px}
.ins .edge-box .lbl{color:#7d8ba6;font-size:10px;text-transform:uppercase;letter-spacing:.4px}
.ins .edge-box code{background:#142239;padding:0 3px;border-radius:2px;color:#e6eefc;font-size:10px;word-break:break-all}
.ins .warn{color:#b8a86b;font-size:11px;background:#241f10;border:1px solid #3a3018;border-radius:4px;padding:6px;margin-bottom:8px}
.guide{color:#7d8ba6;font-size:12px;line-height:1.6}
.guide h2{color:#e6eefc;font-size:13px}
.err{padding:20px;color:#ff9f9f;text-align:center}
.err button{margin-top:10px}
.relation-group{border-top:1px solid #1c2b45;padding:6px 0}.relation-group summary{cursor:pointer;color:#b3d0ed;word-break:break-word}.relation-group small{float:right;color:#8b9cb6}.ins h3{margin-top:16px!important}.hdr .counts{font-size:11px}.hdr{min-height:60px}
@media(max-width:900px){
.hdr{flex-wrap:wrap;gap:8px;padding:10px 12px}.hdr h1{font-size:16px}.counts{width:100%;margin-left:0!important}.hdr a{margin-left:auto}.right.open{min-height:190px}
.body{flex-direction:column}
.left{width:100%;flex:0 0 auto;max-height:0;overflow:hidden;visibility:hidden;padding:0 8px;transition:max-height .2s;border-right:0;border-bottom:1px solid #1c2b45}
.left.open{visibility:visible;max-height:50vh;overflow:auto;padding:8px}
.center{flex:1 1 auto;min-height:200px}
.right{width:100%;flex:0 0 auto;max-height:0;overflow:hidden;visibility:hidden;padding:0 10px;border-left:0;border-top:1px solid #1c2b45;transition:max-height .2s}
.right.open{visibility:visible;max-height:45vh;overflow:auto;padding:10px}
.tbtn{display:block}
}
`;
const CAT_COLORS = {player:'#2ec4b6',combat:'#e63946',ai:'#f4a261',camera:'#9b5de5',world:'#43aa8b',visual:'#ff3ca6',audio:'#3a86ff',ui:'#ffd60a',progress:'#22d3ee',engineering:'#8892a6'};
const CAT_LABELS = {player:'玩家',combat:'战斗',ai:'AI',camera:'相机',world:'世界',visual:'视觉',audio:'音频',ui:'界面',progress:'进度',engineering:'工程'};
const KIND_LABELS = {call:'调用',field:'字段',inherit:'继承',component:'组件',signature:'签名'};
const KIND_COLORS = {call:'#5cc7d6',field:'#f4a261',inherit:'#9b5de5',component:'#43aa8b',signature:'#ff3ca6'};
const NODE_W=218,NODE_H=72,GAP=18,COLS_PER_ROW=9;
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s||'').toLowerCase().replace(/镜头|屏幕|摄像机/g,'相机').replace(/抖动/g,'震动');
function injectCSS(){if(document.getElementById('smap-css'))return;const st=document.createElement('style');st.id='smap-css';st.textContent=CSS;document.head.appendChild(st);}
function parseHashId(){const m=location.hash.match(/#?script\/([^/?#]+)/);return m?decodeURIComponent(m[1]):(location.hash.startsWith('#script%3A')?decodeURIComponent(location.hash.slice(1)):null);}
function hashBody(id){return 'index.html#script/'+encodeURIComponent(id);}

async function boot(){
  injectCSS();
  const app=document.getElementById('app');
  app.innerHTML=`<div class="hdr"><h1>系统关系地图</h1><a href="./index.html">← 返回</a><button class="btn tbtn" id="mLeft" aria-label="切换筛选">筛选</button><button class="btn tbtn" id="mRight" style="right:auto;left:auto;margin-left:4px" aria-label="切换详情">详情</button><span class="counts" id="counts">加载中…</span></div><div class="body"><aside class="left" id="left"></aside><div class="center"><canvas id="cv" tabindex="0" aria-label="系统关系地图画布：拖拽平移，滚轮缩放，点击节点或连线查看详情"></canvas><div class="ctr"><button class="btn" data-z="in" aria-label="放大">+</button><button class="btn" data-z="out" aria-label="缩小">−</button><button class="btn" data-z="fit" aria-label="全图适配">全图</button><button class="btn" data-z="fitvis" aria-label="可见范围适配">可见</button><button class="btn" data-z="reset" aria-label="重置视图">重置</button></div></div><aside class="right" id="right"></aside></div>`;
  const counts=document.getElementById('counts');
  const left=document.getElementById('left');
  const right=document.getElementById('right');
  const cv=document.getElementById('cv');
  const ctx=cv.getContext('2d');
  document.getElementById('mLeft').onclick=()=>{left.classList.toggle('open');if(window.innerWidth<=900&&left.classList.contains('open'))right.classList.remove('open');};
  document.getElementById('mRight').onclick=()=>{right.classList.toggle('open');if(window.innerWidth<=900&&right.classList.contains('open'))left.classList.remove('open');};
  let graph,scripts,maps,state;
  try{
    const [g,s]=await Promise.all([
      fetch('data/system-graph.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('graph '+r.status);return r.json();}),
      fetch('data/scripts.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('scripts '+r.status);return r.json();})
    ]);
    graph=g;
    scripts=Array.isArray(s)?s:(s.scripts||[]);
  }catch(e){
    app.innerHTML=`<div class="err">数据加载失败：${esc(e.message)}<br><button class="btn" id="rt">重试</button></div>`;
    document.getElementById('rt').onclick=()=>location.reload();
    return;
  }
  const scriptList=Array.isArray(scripts)?scripts:[];
  const scriptById=new Map(scriptList.map(s=>[String(s.id),s]));
  const nodes=(graph.nodes||[]).map(n=>({...n,id:String(n.id),category:n.category||'engineering'}));
  const nodeById=new Map(nodes.map(n=>[n.id,n]));
  const groups=(graph.groups&&graph.groups.length?graph.groups:Object.keys(CAT_COLORS).map(id=>({id,title:CAT_LABELS[id]||id,color:CAT_COLORS[id]})));
  const groupColor={};groups.forEach(g=>groupColor[g.id]=g.color||CAT_COLORS[g.id]||'#8892a6');
  const groupTitle={};groups.forEach(g=>groupTitle[g.id]=g.title||CAT_LABELS[g.id]||g.id);
  function ccolor(c){return groupColor[c]||CAT_COLORS[c]||'#8892a6';}
  function clabel(c){return groupTitle[c]||CAT_LABELS[c]||c;}
  const thirdParty=new Set();scriptList.forEach(s=>{if(s&&s.thirdParty)thirdParty.add(String(s.id));});
  nodes.forEach(n=>{const s=scriptById.get(n.id);if(s&&s.thirdParty)thirdParty.add(n.id);});
  // deterministic cluster layout
  const cats=groups.map(g=>g.id).filter(c=>nodes.some(n=>n.category===c));
  const rowsPerCat=Math.max(1,Math.ceil(Math.sqrt(Math.max(1,nodes.length/Math.max(1,cats.length)))));
  const nodesByCat={};cats.forEach(c=>nodesByCat[c]=[]);
  nodes.slice().sort((a,b)=>a.category===b.category?a.name.localeCompare(b.name,'zh'):a.category.localeCompare(b.category)).forEach(n=>{if(!nodesByCat[n.category])nodesByCat[n.category]=[];nodesByCat[n.category].push(n);});
  let yOff=0;const catBlocks=[];const laneY=[0,0,0];
  const perRow=COLS_PER_ROW;
  cats.forEach((c,ci)=>{
    const lane=ci%3, xOff=lane*(perRow*(NODE_W+GAP)+160);yOff=laneY[lane];
    const arr=nodesByCat[c];const rows=Math.ceil(arr.length/perRow)||1;
    const w=perRow*(NODE_W+GAP)+GAP,h=rows*(NODE_H+GAP)+GAP+28;
    catBlocks.push({cat:c,x:xOff,y:yOff,w,h,rows});
    arr.forEach((n,i)=>{
      const r=Math.floor(i/perRow),col=i%perRow;
      n.x=xOff+(col*(NODE_W+GAP))+GAP;
      n.y=yOff+28+GAP+r*(NODE_H+GAP);
    });
    laneY[lane]=yOff+h+110;
  });
  const maxW=Math.max(...catBlocks.map(b=>b.w),2000);
  catBlocks.forEach(b=>{b.cy=b.y+b.h/2;b.labelY=b.y+22;});
  const edges=(graph.edges||[]).map((e,i)=>({...e,id:e.id||('e'+i),source:String(e.source),target:String(e.target),kind:e.kind||'call',params:Array.isArray(e.params)?e.params:[]}));
  const outEdges=new Map(),inEdges=new Map();
  nodes.forEach(n=>{outEdges.set(n.id,[]);inEdges.set(n.id,[]);});
  edges.forEach(e=>{(outEdges.get(e.source)||[]).push(e);(inEdges.get(e.target)||[]).push(e);});
  const editorId=parseHashId();
  // state
  state={scale:1,tx:0,ty:0,w:0,h:0,dpr:1,sel:editorId&&nodeById.has(editorId)?editorId:null,selEdge:null,hover:null,hoverEdge:null,isolate:false,depth:1,dir:'all',search:'',searchSet:null,kindSet:new Set(Object.keys(KIND_LABELS)),showThird:true,hasSelection:false,catSet:new Set(cats),restrictSearch:false};
  try{const ls=localStorage.getItem('smap-prefs');if(ls){const p=JSON.parse(ls);if(p.kindSet)state.kindSet=new Set(p.kindSet.filter(k=>KIND_LABELS[k]));if(typeof p.showThird==='boolean')state.showThird=p.showThird;if(p.dir)state.dir=p.dir;if(typeof p.isolate==='boolean')state.isolate=p.isolate;if(p.depth)state.depth=p.depth;}}catch(_){}
  const savePrefs=()=>{try{localStorage.setItem('smap-prefs',JSON.stringify({kindSet:[...state.kindSet],showThird:state.showThird,dir:state.dir,isolate:state.isolate,depth:state.depth}));}catch(_){}};

  function catVisible(n){return state.catSet.has(n.category)&&(!state.restrictSearch||!state.searchSet||state.searchSet.has(n.id));}
  function thirdVisible(n){return state.showThird||!thirdParty.has(n.id);}
  function kindVisible(e){return state.kindSet.has(e.kind);}
  function nodeVisible(n){return catVisible(n)&&thirdVisible(n);}
  function neighborSet(id,depth,dir){
    const s=new Set([id]);let frontier=[id];
    for(let d=0;d<depth;d++){
      const nx=[];
      for(const fid of frontier){
        if(dir!=='out'){(inEdges.get(fid)||[]).forEach(e=>{if(kindVisible(e)&&!s.has(e.source)){s.add(e.source);nx.push(e.source);}});}
        if(dir!=='in'){(outEdges.get(fid)||[]).forEach(e=>{if(kindVisible(e)&&!s.has(e.target)){s.add(e.target);nx.push(e.target);}});}
      }
      frontier=nx;
    }
    return s;
  }
  function computeVisibleSets(){
    const visNodes=new Set();
    if(state.sel&&state.isolate){
      const ns=neighborSet(state.sel,state.depth,state.dir);
      ns.forEach(id=>{const n=nodeById.get(id);if(n&&nodeVisible(n))visNodes.add(id);});
    }else{
      nodes.forEach(n=>{if(nodeVisible(n))visNodes.add(n.id);});
    }
    const visEdges=[];
    edges.forEach(e=>{
      if(!kindVisible(e))return;
      if(!visNodes.has(e.source)||!visNodes.has(e.target))return;
      visEdges.push(e);
    });
    return {nodes:visNodes,edges:visEdges};
  }
  let vis={nodes:new Set(),edges:[]};
  nodes.forEach(n=>{n.gx=n.x;n.gy=n.y});
  function refreshVis(){
    vis=computeVisibleSets();
    nodes.forEach(n=>{n.x=n.gx;n.y=n.gy});
    if(state.isolate&&state.sel){
      const center=nodeById.get(state.sel);center.x=0;center.y=0;
      const outgoing=new Set((outEdges.get(state.sel)||[]).map(e=>e.target));
      const lists=[[],[]];
      for(const id of vis.nodes){if(id===state.sel)continue;lists[outgoing.has(id)?1:0].push(nodeById.get(id));}
      lists.forEach((list,side)=>{list.sort((a,b)=>a.category.localeCompare(b.category)||a.name.localeCompare(b.name));const rows=Math.min(10,list.length);list.forEach((n,i)=>{n.x=(side?1:-1)*(350+Math.floor(i/10)*(NODE_W+GAP));n.y=(i%10-(rows-1)/2)*(NODE_H+GAP);});});
    }
    counts.textContent=`${nodes.length} 脚本 · ${edges.length.toLocaleString()} 条静态关联 · 当前 ${vis.nodes.size} 节点 / ${vis.edges.length} 线`;
    requestDraw();
  }
  // rendering
  let rafId=0;
  function requestDraw(){if(rafId)return;rafId=requestAnimationFrame(()=>{rafId=0;draw();});}
  function resize(){
    const r=cv.getBoundingClientRect();
    const dpr=Math.max(1,Math.min(3,window.devicePixelRatio||1));
    state.w=Math.max(1,Math.round(r.width));state.h=Math.max(1,Math.round(r.height));state.dpr=dpr;
    cv.width=Math.round(state.w*dpr);cv.height=Math.round(state.h*dpr);
    requestDraw();
  }
  function worldToScreen(x,y){return {x:(x+state.tx)*state.scale,y:(y+state.ty)*state.scale};}
  function screenToWorld(x,y){return {x:x/state.scale-state.tx,y:y/state.scale-state.ty};}
  function boundsOfNodes(ids){
    let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity,any=false;
    ids.forEach(id=>{const n=nodeById.get(id);if(!n)return;any=true;minX=Math.min(minX,n.x);minY=Math.min(minY,n.y);maxX=Math.max(maxX,n.x+NODE_W);maxY=Math.max(maxY,n.y+NODE_H);});
    if(!any)return null;return {minX,minY,maxX,maxY};
  }
  function fitBounds(b){
    if(!b)return;
    const pad=40;
    const bw=Math.max(1,b.maxX-b.minX),bh=Math.max(1,b.maxY-b.minY);
    const s=Math.min((state.w-pad*2)/bw,(state.h-pad*2)/bh);
    state.scale=Math.max(0.02,Math.min(3,s));
    state.tx=(state.w/state.scale-bw)/2-b.minX;
    state.ty=(state.h/state.scale-bh)/2-b.minY;
    requestDraw();
  }
  function fitAll(){const ids=new Set(nodes.map(n=>n.id));fitBounds(boundsOfNodes(ids));}
  function fitVisible(){const ids=new Set(vis.nodes);const b=boundsOfNodes(ids);if(b)fitBounds(b);else fitAll();}
  function resetView(){state.scale=0.5;state.tx=20;state.ty=20;requestDraw();}
  function zoomAt(factor,mx,my){
    const ns=Math.max(0.03,Math.min(4,state.scale*factor));
    const w=screenToWorld(mx,my);
    state.scale=ns;
    state.tx=mx/state.scale-w.x;
    state.ty=my/state.scale-w.y;
    requestDraw();
  }
  function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
  function draw(){
    const {dpr,scale:t,sel,selEdge,hover}=state;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,state.w,state.h);
    // grid
    ctx.fillStyle='#0a1322';ctx.fillRect(0,0,state.w,state.h);
    ctx.strokeStyle='rgba(60,90,140,0.10)';ctx.lineWidth=1;
    const gs=64*t;
    if(gs>6){
      let ox=(state.tx*t)%gs,oy=(state.ty*t)%gs;
      if(ox<0)ox+=gs;if(oy<0)oy+=gs;
      ctx.beginPath();
      for(let x=ox;x<state.w;x+=gs){ctx.moveTo(x,0);ctx.lineTo(x,state.h);}
      for(let y=oy;y<state.h;y+=gs){ctx.moveTo(0,y);ctx.lineTo(state.w,y);}
      ctx.stroke();
    }
    // category labels + overview
    const overview=t<0.32;
    const showBoxes=t>=0.32;
    const showLabels=t>=0.6;
    const showArrows=t>=0.7;
    const showEdgeLabels=t>=0.8;
    // category labels
    ctx.font='600 13px system-ui,"PingFang SC",sans-serif';
    ctx.textBaseline='top';
    if(!state.isolate)catBlocks.forEach(b=>{
      const p=worldToScreen(b.x,b.labelY);
      if(p.y<-30||p.y>state.h+30)return;
      const on=state.catSet.has(b.cat);if(!on)return;
      ctx.fillStyle=on?ccolor(b.cat):'rgba(136,146,166,0.4)';
      ctx.fillText((overview?CAT_LABELS[b.cat]:clabel(b.cat))+' '+nodesByCat[b.cat].length,p.x+8,p.y);
    });
    if(overview){
      // Aggregated system links keep the full map readable; script-level links
      // appear when zoomed in. These are sums of extracted edges, not inference.
      const aggregate=new Map();
      vis.edges.forEach(e=>{const a=nodeById.get(e.source),b=nodeById.get(e.target);if(!a||!b||a.category===b.category)return;const key=[a.category,b.category].sort().join('|');aggregate.set(key,(aggregate.get(key)||0)+1)});
      if(!state.isolate)aggregate.forEach((count,key)=>{const [a,b]=key.split('|').map(cat=>catBlocks.find(b=>b.cat===cat));if(!a||!b)return;const p=worldToScreen(a.x+a.w/2,a.y+a.h/2),q=worldToScreen(b.x+b.w/2,b.y+b.h/2);ctx.strokeStyle=ccolor(a.cat);ctx.globalAlpha=.14;ctx.lineWidth=Math.min(4,1+Math.log10(count));ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();ctx.globalAlpha=1;});
      else {ctx.strokeStyle='#7c9cb3';ctx.lineWidth=.6;ctx.globalAlpha=.3;vis.edges.forEach(e=>{const a=nodeById.get(e.source),b=nodeById.get(e.target);const p=worldToScreen(a.x+NODE_W/2,a.y+NODE_H/2),q=worldToScreen(b.x+NODE_W/2,b.y+NODE_H/2);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();});ctx.globalAlpha=1;}
      // dots
      vis.nodes.forEach(id=>{
        const n=nodeById.get(id);if(!n)return;
        const p=worldToScreen(n.x+NODE_W/2,n.y+NODE_H/2);
        if(p.x<-10||p.x>state.w+10||p.y<-10||p.y>state.h+10)return;
        ctx.fillStyle=(state.searchSet?.has(id)||state.sel===id)?'#fff':ccolor(n.category);
        ctx.beginPath();ctx.arc(p.x,p.y,Math.max(1,Math.min(2,state.scale*11)),0,Math.PI*2);ctx.fill();
      });
      return;
    }
    // compute viewport in world for culling
    const vx0=-state.tx,vy0=-state.ty,vx1=vx0+state.w/t,vy1=vy0+state.h/t;
    const inView=(x,y,w,h,pad=40)=>x+w>=vx0-pad&&x<=vx1+pad&&y+h>=vy0-pad&&y<=vy1+pad;
    // One visible stroke per script pair; individual callsites remain in inspector.
    const drawnPairs=new Set();
    vis.edges.forEach(e=>{
      const pair=e.source+'|'+e.target;if(drawnPairs.has(pair)&&e.id!==state.selEdge)return;drawnPairs.add(pair);
      const a=nodeById.get(e.source),b=nodeById.get(e.target);
      if(!a||!b)return;
      const ax=a.x+NODE_W/2,ay=a.y+NODE_H/2,bx=b.x+NODE_W/2,by=b.y+NODE_H/2;
      if(!inView(Math.min(ax,bx),Math.min(ay,by),Math.abs(bx-ax)+1,Math.abs(by-ay)+1,80))return;
      const pa=worldToScreen(ax,ay),pb=worldToScreen(bx,by);
      const related=sel&&(e.source===sel||e.target===sel);
      if(sel&&!related&&state.selEdge!==e.id&&!state.isolate)return;
      const isSelEdge=selEdge===e.id;
      const isHov=state.hoverEdge===e.id;
      ctx.strokeStyle=isSelEdge?'#ffe066':related?'rgba(255,224,102,0.55)':KIND_COLORS[e.kind]||'#5cc7d6';
      ctx.globalAlpha=isSelEdge||related||isHov?0.95:0.35;
      ctx.lineWidth=(isSelEdge?2.2:related?1.5:1)/Math.max(0.6,Math.min(1.6,t));
      if((isSelEdge||related)&&showArrows)ctx.lineWidth=Math.max(1.2,1.4/t);
      ctx.beginPath();ctx.moveTo(pa.x,pa.y);ctx.lineTo(pb.x,pb.y);ctx.stroke();
      // arrow
      if(showArrows||isSelEdge||related){
        const ang=Math.atan2(pb.y-pa.y,pb.x-pa.x);
        const r=Math.max(5,8);
        const clip=Math.min(NODE_W*t/2/Math.max(.001,Math.abs(Math.cos(ang))),NODE_H*t/2/Math.max(.001,Math.abs(Math.sin(ang))))+3;
        const tip={x:pb.x-Math.cos(ang)*clip,y:pb.y-Math.sin(ang)*clip};
        const hx=tip.x-Math.cos(ang)*r,hy=tip.y-Math.sin(ang)*r;
        ctx.fillStyle=ctx.strokeStyle;
        ctx.beginPath();
        ctx.moveTo(tip.x,tip.y);
        ctx.lineTo(hx-Math.sin(ang)*5,hy+Math.cos(ang)*5);
        ctx.lineTo(hx+Math.sin(ang)*5,hy-Math.cos(ang)*5);
        ctx.closePath();ctx.fill();
      }
      if(showEdgeLabels&&(sel&&(e.source===sel||e.target===sel)||isSelEdge)&&e.member){
        const mx=(pa.x+pb.x)/2,my=(pa.y+pb.y)/2;
        const lbl=(e.member||'')+(e.kind==='call'?('('+e.params.length+')'):'');
        ctx.font='10px system-ui,sans-serif';ctx.textBaseline='bottom';
        const w=ctx.measureText(lbl).width+6;
        ctx.fillStyle='rgba(10,19,34,0.85)';roundRect(ctx,mx-w/2,my-13,w,12,3);ctx.fill();
        ctx.fillStyle=related?'#ffe066':'#9fb0cc';ctx.textAlign='left';ctx.fillText(lbl,mx-w/2+3,my-2);
      }
      ctx.globalAlpha=1;
    });
    // nodes
    const selectedNeighbors=sel?neighborSet(sel,state.depth,state.dir):new Set();
    vis.nodes.forEach(id=>{
      const n=nodeById.get(id);if(!n)return;
      if(!inView(n.x,n.y,NODE_W,NODE_H,20))return;
      const p=worldToScreen(n.x,n.y);
      const selN=sel===id;
      const hov=hover===id;
      const relatedN=selectedNeighbors.has(id);
      const col=ccolor(n.category);
      if(!showBoxes){
        ctx.fillStyle=col;ctx.beginPath();ctx.arc(p.x+NODE_W*t/2,p.y+NODE_H*t/2,Math.max(2,4*t),0,Math.PI*2);ctx.fill();
        return;
      }
      const w=NODE_W*t,h=NODE_H*t;
      ctx.fillStyle=selN?'rgba(46,142,168,0.28)':relatedN?'rgba(20,40,70,0.9)':'rgba(15,26,46,0.92)';
      roundRect(ctx,p.x,p.y,w,h,5*t);ctx.fill();
      ctx.strokeStyle=selN?'#ffe066':hov?'#8fe0ee':col;
      ctx.lineWidth=(selN?2:1)/Math.max(0.6,t);
      ctx.stroke();
      // left bar
      ctx.fillStyle=col;ctx.fillRect(p.x+1,p.y+1,3*t,h-2*t);
      if(showLabels){
        ctx.fillStyle=selN?'#ffffff':'#dbe6f7';
        ctx.font=`600 ${Math.max(9,Math.min(13,11*t))}px system-ui,"PingFang SC",sans-serif`;
        ctx.textBaseline='top';ctx.textAlign='left';
        let name=n.name||n.id;
        let maxw=w-10;
        while(name.length>2&&ctx.measureText(name).width>maxw)name=name.slice(0,-1);
        ctx.fillText(name,p.x+8*t,p.y+5*t);
        ctx.fillStyle='#7d8ba6';
        ctx.font=`${Math.max(8,Math.min(11,9*t))}px system-ui,sans-serif`;
        let path=n.title||'';
        while(path.length>2&&ctx.measureText(path).width>maxw)path=path.slice(0,-4)+'…';
        ctx.fillText(path,p.x+8*t,p.y+5*t+Math.max(11,13*t));
        // category
        ctx.fillStyle=col;ctx.font=`${Math.max(8,9*t)}px system-ui,sans-serif`;
        let kws=(n.keywords||[]).join(' · ');while(kws.length>2&&ctx.measureText(kws).width>maxw)kws=kws.slice(0,-2);ctx.fillText(kws,p.x+8*t,p.y+h-Math.max(12,13*t));
      }else if(t>0.45){
        ctx.fillStyle='#dbe6f7';ctx.font=`600 ${Math.max(9,11*t)}px system-ui,sans-serif`;ctx.textBaseline='middle';ctx.textAlign='left';
        let name=n.name||n.id;let maxw=w-10;
        while(name.length>2&&ctx.measureText(name).width>maxw)name=name.slice(0,-1);
        ctx.fillText(name,p.x+8*t,p.y+h/2);
      }
      ctx.globalAlpha=1;
    });
  }
  // hit test
  function hitTest(sx,sy){
    const t=state.scale;
    const w=NODE_W*t,h=NODE_H*t;
    let best=null,bestD=Infinity;
    const wx=sx/t-state.tx,wy=sy/t-state.ty;
    for(const id of vis.nodes){
      const n=nodeById.get(id);if(!n)continue;
      if(wx>=n.x&&wx<=n.x+NODE_W&&wy>=n.y&&wy<=n.y+NODE_H){return {type:'node',id};}
    }
    // edge hit
    let be=null,bd=Infinity;
    for(const e of vis.edges){
      const a=nodeById.get(e.source),b=nodeById.get(e.target);if(!a||!b)continue;
      const ax=a.x+NODE_W/2,ay=a.y+NODE_H/2,bx=b.x+NODE_W/2,by=b.y+NODE_H/2;
      const dx=bx-ax,dy=by-ay,len2=dx*dx+dy*dy;
      if(len2<1)continue;
      let tt=((wx-ax)*dx+(wy-ay)*dy)/len2;tt=Math.max(0,Math.min(1,tt));
      const px=ax+tt*dx,py=ay+tt*dy;
      const d=Math.hypot(wx-px,wy-py);
      if(d<Math.max(3,6/t)&&d<bd){bd=d;be=e;}
    }
    if(be)return {type:'edge',edge:be};
    return null;
  }
  // canvas events
  let drag=null,pinch=null;
  cv.addEventListener('pointerdown',e=>{
    if(e.button!==0&&e.pointerType==='mouse')return;
    cv.focus();cv.setPointerCapture(e.pointerId);
    const r=cv.getBoundingClientRect();const sx=e.clientX-r.left,sy=e.clientY-r.top;
    drag={sx,sy,tx:state.tx,ty:state.ty,moved:false};
  });
  cv.addEventListener('pointermove',e=>{
    const r=cv.getBoundingClientRect();const sx=e.clientX-r.left,sy=e.clientY-r.top;
    if(drag){
      const dx=sx-drag.sx,dy=sy-drag.sy;
      if(Math.abs(dx)+Math.abs(dy)>3)drag.moved=true;
      state.tx=drag.tx+dx/state.scale;state.ty=drag.ty+dy/state.scale;
      requestDraw();
      return;
    }
    const hit=hitTest(sx,sy);
    let h=null,he=null;
    if(hit){if(hit.type==='node')h=hit.id;else if(hit.type==='edge')he=hit.edge.id;}
    if(h!==state.hover||he!==state.hoverEdge){state.hover=h;state.hoverEdge=he;cv.style.cursor=h?'pointer':he?'pointer':'grab';requestDraw();}
  });
  cv.addEventListener('pointerup',e=>{
    const r=cv.getBoundingClientRect();const sx=e.clientX-r.left,sy=e.clientY-r.top;
    const wasDrag=drag&&drag.moved;drag=null;
    if(wasDrag)return;
    const hit=hitTest(sx,sy);
    if(!hit){selectNode(null,null);return;}
    if(hit.type==='node'){selectNode(hit.id);}
    else if(hit.type==='edge'){selectEdge(hit.edge);}
  });
  cv.addEventListener('pointercancel',()=>{drag=null;});
  cv.addEventListener('pointerleave',()=>{if(state.hover||state.hoverEdge){state.hover=null;state.hoverEdge=null;requestDraw();}});
  cv.addEventListener('wheel',e=>{
    e.preventDefault();
    const r=cv.getBoundingClientRect();
    const mx=e.clientX-r.left,my=e.clientY-r.top;
    const f=e.deltaY<0?1.15:1/1.15;
    zoomAt(f,mx,my);
  },{passive:false});
  cv.addEventListener('keydown',e=>{
    if(e.key==='+'||e.key==='='){zoomAt(1.2,state.w/2,state.h/2);e.preventDefault();}
    else if(e.key==='-'||e.key==='_'){zoomAt(1/1.2,state.w/2,state.h/2);e.preventDefault();}
    else if(e.key==='ArrowLeft'||e.key==='ArrowRight'||e.key==='ArrowUp'||e.key==='ArrowDown'){
      e.preventDefault();const step=60;
      if(e.key==='ArrowLeft')state.tx+=step/state.scale;
      if(e.key==='ArrowRight')state.tx-=step/state.scale;
      if(e.key==='ArrowUp')state.ty+=step/state.scale;
      if(e.key==='ArrowDown')state.ty-=step/state.scale;
      requestDraw();
    }
  });
  // controls
  document.querySelectorAll('[data-z]').forEach(b=>{
    b.addEventListener('click',()=>{
      const a=b.dataset.z;
      if(a==='in')zoomAt(1.2,state.w/2,state.h/2);
      else if(a==='out')zoomAt(1/1.2,state.w/2,state.h/2);
      else if(a==='fit')fitAll();
      else if(a==='fitvis')fitVisible();
      else if(a==='reset')resetView();
    });
  });
  // selection
  function selectNode(id,keepEdge){
    state.sel=id;if(!keepEdge)state.selEdge=null;
    if(id){state.hasSelection=true;if(window.innerWidth<=900)left.classList.remove('open');}
    refreshVis();
    renderInspector();
    renderLeft();
    if(id){const n=nodeById.get(id);if(n){state.catSet.add(n.category);if(thirdParty.has(id))state.showThird=true;state.restrictSearch=false;state.scale=1;state.tx=state.w/2-(n.x+NODE_W/2);state.ty=state.h/2-(n.y+NODE_H/2);refreshVis();}right.classList.add('open');right.scrollTop=0;}
    if(id){try{history.replaceState(null,'','#'+encodeURIComponent(id));}catch(_){}}
  }
  function selectEdge(e){
    state.selEdge=e.id;
    state.sel=e.source;
    refreshVis();
    renderInspector();
    renderLeft();right.classList.add('open');right.scrollTop=0;
  }
  // left panel
  function renderLeft(){
    const catsPresent=[...new Set(nodes.map(n=>n.category))].sort();
    const catChecks=catsPresent.map(c=>{
      const on=state.catSet.has(c);
      const count=nodes.filter(n=>n.category===c).length;
      return `<label class="row"><input type="checkbox" ${on?'checked':''} data-cat="${esc(c)}" aria-label="${esc(clabel(c))}"><span class="sw" style="background:${esc(ccolor(c))}"></span><span>${esc(clabel(c))} <span style="color:#5a6b88">${count}</span></span></label>`;
    }).join('');
    const kinds=Object.keys(KIND_LABELS).map(k=>`<label class="row"><input type="checkbox" ${state.kindSet.has(k)?'checked':''} data-kind="${esc(k)}"><span class="sw" style="background:${esc(KIND_COLORS[k])}"></span>${esc(KIND_LABELS[k])} <span style="color:#5a6b88">${edges.filter(e=>e.kind===k).length}</span></label>`).join('');
    left.innerHTML=`
      <div class="sec"><input type="search" id="q" placeholder="搜索中文/名称/路径/标签" value="${esc(state.search)}" aria-label="搜索脚本"></div>
      <div class="sec"><label class="row"><input type="checkbox" id="restrict" ${state.restrictSearch?'checked':''}>只显示搜索结果</label><h3>搜索结果</h3><div class="res" id="res">${renderResults()}</div></div>
      <div class="sec"><h3>类别 <span style="float:right"><button class="btn" data-cc="all">全</button> <button class="btn" data-cc="none">无</button></span></h3>${catChecks}</div>
      <div class="sec"><h3>关系类型</h3>${kinds}</div>
      <div class="sec"><label class="row"><input type="checkbox" id="third" ${state.showThird?'checked':''}>显示第三方脚本</label></div>
      <div class="sec"><h3>邻域</h3>
        <label class="row"><input type="checkbox" id="iso" ${state.isolate?'checked':''}>聚焦关联（重新排布）</label>
        <div class="btns" style="margin-top:4px">
          <label class="row"><input type="radio" name="depth" value="1" ${state.depth===1?'checked':''}>深度1</label>
          <label class="row"><input type="radio" name="depth" value="2" ${state.depth===2?'checked':''}>深度2</label>
        </div>
        <div class="btns" style="margin-top:2px">
          <label class="row"><input type="radio" name="dir" value="all" ${state.dir==='all'?'checked':''}>全部</label>
          <label class="row"><input type="radio" name="dir" value="in" ${state.dir==='in'?'checked':''}>入</label>
          <label class="row"><input type="radio" name="dir" value="out" ${state.dir==='out'?'checked':''}>出</label>
        </div>
      </div>`;
    document.getElementById('restrict').onchange=e=>{state.restrictSearch=e.target.checked;refreshVis();};
    const q=document.getElementById('q');
    q.addEventListener('input',()=>{
      state.search=q.value;applySearch();
    });
    q.addEventListener('keydown',e=>{
      if(e.key==='Enter'){const b=left.querySelector('#res button[data-id]');if(b)b.click();}
      else if(e.key==='Escape'){q.value='';state.search='';applySearch();}
    });
    document.getElementById('res').addEventListener('click',e=>{
      const b=e.target.closest('button[data-id]');if(!b)return;
      selectNode(b.dataset.id);
    });
    left.querySelectorAll('[data-cat]').forEach(cb=>{
      cb.addEventListener('change',()=>{
        const c=cb.dataset.cat;
        if(cb.checked)state.catSet.add(c);else state.catSet.delete(c);
        refreshVis();renderLeft();
      });
    });
    left.querySelectorAll('[data-kind]').forEach(cb=>{
      cb.addEventListener('change',()=>{
        const k=cb.dataset.kind;
        if(cb.checked)state.kindSet.add(k);else state.kindSet.delete(k);
        savePrefs();refreshVis();renderInspector();
      });
    });
    left.querySelectorAll('[data-cc]').forEach(b=>{
      b.addEventListener('click',()=>{
        if(b.dataset.cc==='all')state.catSet=new Set(cats);
        else state.catSet.clear();
        refreshVis();renderLeft();
      });
    });
    document.getElementById('third').addEventListener('change',e=>{state.showThird=e.target.checked;savePrefs();refreshVis();renderLeft();});
    document.getElementById('iso').addEventListener('change',e=>{state.isolate=e.target.checked;savePrefs();refreshVis();fitVisible();});
    left.querySelectorAll('input[name=depth]').forEach(r=>r.addEventListener('change',()=>{state.depth=+r.value;savePrefs();refreshVis();renderInspector();}));
    left.querySelectorAll('input[name=dir]').forEach(r=>r.addEventListener('change',()=>{state.dir=r.value;savePrefs();refreshVis();renderInspector();}));
  }
  function renderResults(){
    const q=norm(state.search);
    if(!q)return '<div class="empty">输入以搜索</div>';
    const res=[];
    nodes.forEach(n=>{
      const s=scriptById.get(n.id)||{};
      const tags=(s.analysis&&s.analysis.tags)||[];
      const hay=norm([n.name,n.title,n.path,n.id,(n.keywords||[]).join(' '),s.analysis?.summary,s.name,s.path,tags.join(' ')].join(' '));
      if(hay.includes(q)){res.push(n);}
    });
    res.sort((a,b)=>{const score=n=>norm(n.name)===q?0:norm(n.title).startsWith(q)?1:norm(n.title+' '+n.name).includes(q)?2:3;return score(a)-score(b)||(a.name||'').localeCompare(b.name||'','zh')});
    if(!res.length)return '<div class="empty">无匹配</div>';
    return res.slice(0,80).map(n=>{
      const s=scriptById.get(n.id)||{};
      const tl=[n.name,n.title,(n.keywords||[]).join(' · ')].join(' — ');
      const i=norm(tl).indexOf(q);
      let html=esc(tl);
      if(i>=0)html=esc(tl.slice(0,i))+'<mark>'+esc(tl.slice(i,i+state.search.length))+'</mark>'+esc(tl.slice(i+state.search.length));
      return `<button data-id="${esc(n.id)}" title="${esc(n.path||'')}"><span class="sw" style="display:inline-block;background:${esc(ccolor(n.category))};margin-right:4px"></span>${html}</button>`;
    }).join('')+(res.length>80?`<div class="empty">还有 ${res.length-80} 条…</div>`:'');
  }
  function applySearch(){
    const q=norm(state.search);
    if(!q)state.searchSet=null;
    else{
      const set=new Set();
      nodes.forEach(n=>{
        const s=scriptById.get(n.id)||{};
        const tags=(s.analysis&&s.analysis.tags)||[];
        const hay=norm([n.name,n.title,n.path,n.id,(n.keywords||[]).join(' '),s.analysis?.summary,s.name,s.path,tags.join(' ')].join(' '));
        if(hay.includes(q))set.add(n.id);
      });
      state.searchSet=set;
    }
    refreshVis();document.getElementById('res').innerHTML=renderResults();
  }
  // inspector
  function renderInspector(){
    if(state.selEdge){
      const e=edges.find(x=>x.id===state.selEdge);
      if(e){right.innerHTML=renderEdgeDetail(e);right.querySelectorAll('[data-goto]').forEach(b=>b.onclick=()=>selectNode(b.dataset.goto));document.getElementById('backNode').onclick=()=>selectNode(e.source);return;}
    }
    if(!state.sel){
      right.innerHTML=`<div class="guide"><h2>系统关系地图</h2>
      <p>点击节点查看职责、面向设计师字段与静态引用关系；点击连线查看成员、参数与置信度。</p>
      <p>关系来自静态代码引用分析，可能存在重载歧义；未做运行时验证。</p>
      <p>类别与功能分组用于导航。全图显示系统间汇总线，放大后显示脚本关联；选中后突出它的关联。</p><p>当前不覆盖UnityEvent、动画事件、反射及DLL内部依赖。没有连线不代表没有协作。</p><p>滚轮缩放，拖动画布平移；左侧搜索后点击结果定位。</p>
      <p>快捷键：+/- 缩放，方向键平移，Enter 选中首个搜索结果，Esc 清除选择。</p></div>`;
      return;
    }
    const n=nodeById.get(state.sel);
    if(!n){right.innerHTML='<div class="guide">节点不存在</div>';return;}
    const s=scriptById.get(n.id)||{};
    const a=s.analysis||{};
    const outs=outEdges.get(n.id)||[],ins=inEdges.get(n.id)||[];
    const renderRelations=(list,dir)=>{const buckets=new Map();for(const e of list){const id=dir==='out'?e.target:e.source;if(!buckets.has(id))buckets.set(id,[]);buckets.get(id).push(e);}return [...buckets].map(([id,items])=>`<details class="relation-group"><summary>${esc(nodeById.get(id)?.name||id)} <small>${items.length} 条</small></summary>${items.map(e=>rel(e,dir)).join('')}</details>`).join('')};
    const kws=[...(n.keywords||[]),...(a.tags||[])];
    const uniqKws=[...new Set(kws)].slice(0,20);
    const rel=(e,dir)=>{
      const otherId=dir==='out'?e.target:e.source;
      const o=nodeById.get(otherId);
      return `<div class="rel"><div class="l">${esc(KIND_LABELS[e.kind]||e.kind)} ${esc(dir==='out'?'→':'←')}</div>
      <button data-goto="${esc(otherId)}">${esc(o?o.name:otherId)}</button>
      <button data-edge="${esc(e.id)}" style="float:right;color:#7d8ba6;font-size:10px">详情</button>
      <div style="color:#9fb0cc;margin-top:1px">${esc(e.member||'')}${e.kind==='call'?`(${e.params.length})`:''}</div></div>`;
    };
    right.innerHTML=`<div class="ins"><h2>${esc(n.name||n.id)}</h2>
    <div class="sub">${esc(n.path||'')}</div>
    <div class="kv"><span>类别</span><div><span class="sw" style="display:inline-block;background:${esc(ccolor(n.category))};margin-right:4px"></span>${esc(clabel(n.category))}</div></div>
    <div class="kw">${uniqKws.map(k=>`<span class="kw">${esc(k)}</span>`).join('')}</div>
    ${a.title?`<div class="tw"><strong>${esc(a.title)}</strong>${a.summary?'\n'+esc(a.summary):''}</div>`:(a.summary?`<div class="tw">${esc(a.summary)}</div>`:'')}
    ${a.responsibility&&a.responsibility.length?`<h3 style="font-size:11px;color:#7d8ba6;margin:8px 0 3px">职责</h3><ul>${a.responsibility.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
    ${a.execution&&a.execution.length?`<h3 style="font-size:11px;color:#7d8ba6;margin:8px 0 3px">执行</h3><ul>${a.execution.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
    ${a.designer&&a.designer.length?`<h3 style="font-size:11px;color:#7d8ba6;margin:8px 0 3px">设计师字段</h3><ul>${a.designer.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
    ${a.cautions&&a.cautions.length?`<div class="warn">${a.cautions.map(x=>`• ${esc(x)}`).join('<br>')}</div>`:''}
    ${s.fields&&s.fields.length?`<h3 style="font-size:11px;color:#7d8ba6;margin:8px 0 3px">字段</h3><div class="tw">${s.fields.slice(0,30).map(f=>`${esc(f.name)}: ${esc(f.type||'')}${f.default!=null?' = '+esc(f.default):''}${f.description?' // '+esc(f.description):''}`).join('\n')}</div>`:''}
    ${s.methods&&s.methods.length?`<h3 style="font-size:11px;color:#7d8ba6;margin:8px 0 3px">方法</h3><div class="tw">${s.methods.slice(0,30).map(m=>`${esc(m.name)}${m.line?' @'+esc(m.line):''}`).join('\n')}</div>`:''}
    <h3 style="font-size:11px;color:#7d8ba6;margin:8px 0 3px">出向关联 (${outs.length})</h3>
    <div>${outs.length?renderRelations(outs,'out'):'<div style="color:#5a6b88">无</div>'}</div>
    <h3 style="font-size:11px;color:#7d8ba6;margin:8px 0 3px">入向引用 (${ins.length})</h3>
    <div>${ins.length?renderRelations(ins,'in'):'<div style="color:#5a6b88">无</div>'}</div>
    <div style="margin-top:10px"><a href="${esc(hashBody(n.id))}" target="_blank" rel="noopener">打开完整脚本详情 →</a></div></div>`;
    right.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>selectNode(b.dataset.goto)));
    right.querySelectorAll('[data-edge]').forEach(b=>b.addEventListener('click',()=>{const e=edges.find(x=>x.id===b.dataset.edge);if(e)selectEdge(e);}));
  }
  function renderEdgeDetail(e){
    const a=nodeById.get(e.source),b=nodeById.get(e.target);
    const sa=scriptById.get(e.source)||{};
    const params=e.kind!=='call'?'类型/组件关系，没有方法调用参数':e.params&&e.params.length?e.params.map((p,i)=>`${i+1}. ${esc(p)}`).join('<br>'):'无参数';
    const sigs=(e.signatures||[]).length?e.signatures.map(s=>`<code>${esc(s)}</code>`).join('<br>'):'<span style="color:#5a6b88">未提供签名</span>';
    const conf=e.confidence||'unknown';
    return `<h2>关系详情</h2>
    <div class="edge-box"><div class="lbl">类型</div><strong>${esc(KIND_LABELS[e.kind]||e.kind)}</strong>${e.member?` · <code>${esc(e.member)}</code>`:''}</div>
    <div class="edge-box"><div class="lbl">调用方 (source)</div>
      <button data-goto="${esc(e.source)}" style="background:none;border:0;color:#8fe0ee;cursor:pointer;padding:0;font-size:11px">${esc(a?a.name:e.source)}</button>
      <div style="color:#7d8ba6;font-size:10px;word-break:break-all">${esc(sa.path||a?.path||'')}${e.line?` :${esc(e.line)}`:''}</div>
    </div>
    <div class="edge-box"><div class="lbl">被引用 (target)</div>
      <button data-goto="${esc(e.target)}" style="background:none;border:0;color:#8fe0ee;cursor:pointer;padding:0;font-size:11px">${esc(b?b.name:e.target)}</button>
      <div style="color:#7d8ba6;font-size:10px;word-break:break-all">${esc(b?.path||'')}</div>
    </div>
    ${e.reason?`<div class="edge-box"><div class="lbl">为什么关联</div>${esc(e.reason)}<p>调用方职责：${esc(sa.analysis?.title||a?.title||'待解析')}<br>目标脚本职责：${esc(scriptById.get(e.target)?.analysis?.title||b?.title||'待解析')}</p></div>`:''}
    <div class="edge-box"><div class="lbl">${e.kind==='field'?'字段（没有调用参数）':'调用参数表达式'}</div>
      <code>${params}</code>
    </div>
    <div class="edge-box"><div class="lbl">可能的声明签名</div>${sigs}</div>
    <div class="edge-box"><div class="lbl">置信度</div>${esc(conf)}</div>
    <div class="warn">参数是调用处的表达式，非运行数值。静态类型及声明匹配；候选签名不等于已确定重载。未做运行时验证。</div>
    <div class="btns"><button class="btn" id="backNode">查看调用方节点</button></div>`;
    right.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>selectNode(b.dataset.goto)));
    const back=document.getElementById('backNode');if(back)back.onclick=()=>selectNode(e.source);
  }
  // initial view
  const ro=new ResizeObserver(()=>{resize();});
  ro.observe(cv);
  resize();
  refreshVis();
  renderLeft();
  renderInspector();
  
  // fit initially
  fitAll();
  if(state.sel){right.classList.add('open');const n=nodeById.get(state.sel);if(n){state.scale=0.9;state.tx=state.w/2/state.scale-(n.x+NODE_W/2);state.ty=state.h/2/state.scale-(n.y+NODE_H/2);requestDraw();}}

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&!e.target.matches('input,textarea')){selectNode(null);}
  });
  window.addEventListener('resize',resize);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
