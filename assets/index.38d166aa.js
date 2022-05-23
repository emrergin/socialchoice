const ft=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};ft();function E(){}function ot(e){return e()}function qe(){return Object.create(null)}function q(e){e.forEach(ot)}function j(e){return typeof e=="function"}function fe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ut(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function P(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode.removeChild(e)}function rt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function $(){return H(" ")}function ct(){return H("")}function S(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function dt(e){return Array.from(e.childNodes)}function Pe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ht(e,t,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,!1,t),l}let ie;function re(e){ie=e}function it(){if(!ie)throw new Error("Function called outside component initialization");return ie}function pt(e){it().$$.on_mount.push(e)}function mt(){const e=it();return(t,n)=>{const l=e.$$.callbacks[t];if(l){const o=ht(t,n);l.slice().forEach(r=>{r.call(e,o)})}}}const oe=[],He=[],ve=[],Ue=[],gt=Promise.resolve();let Oe=!1;function bt(){Oe||(Oe=!0,gt.then(st))}function Se(e){ve.push(e)}const Ce=new Set;let he=0;function st(){const e=ie;do{for(;he<oe.length;){const t=oe[he];he++,re(t),vt(t.$$)}for(re(null),oe.length=0,he=0;He.length;)He.pop()();for(let t=0;t<ve.length;t+=1){const n=ve[t];Ce.has(n)||(Ce.add(n),n())}ve.length=0}while(oe.length);for(;Ue.length;)Ue.pop()();Oe=!1,Ce.clear(),re(e)}function vt(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Se)}}const ye=new Set;let D;function yt(){D={r:0,c:[],p:D}}function _t(){D.r||q(D.c),D=D.p}function R(e,t){e&&e.i&&(ye.delete(e),e.i(t))}function F(e,t,n,l){if(e&&e.o){if(ye.has(e))return;ye.add(e),D.c.push(()=>{ye.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function _e(e){e&&e.c()}function se(e,t,n,l){const{fragment:o,on_mount:r,on_destroy:s,after_update:i}=e.$$;o&&o.m(t,n),l||Se(()=>{const u=r.map(ot).filter(j);s?s.push(...u):q(u),e.$$.on_mount=[]}),i.forEach(Se)}function ae(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(e,t){e.$$.dirty[0]===-1&&(oe.push(e),bt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,l,o,r,s,i=[-1]){const u=ie;re(e);const f=e.$$={fragment:null,ctx:null,props:r,update:E,not_equal:o,bound:qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:qe(),dirty:i,skip_bound:!1,root:t.target||u.$$.root};s&&s(f.root);let a=!1;if(f.ctx=n?n(e,t.props||{},(c,b,...g)=>{const m=g.length?g[0]:b;return f.ctx&&o(f.ctx[c],f.ctx[c]=m)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](m),a&&wt(e,c)),b}):[],f.update(),a=!0,q(f.before_update),f.fragment=l?l(f.ctx):!1,t.target){if(t.hydrate){const c=dt(t.target);f.fragment&&f.fragment.l(c),c.forEach(M)}else f.fragment&&f.fragment.c();t.intro&&R(e.$$.fragment),se(e,t.target,t.anchor,t.customElement),st()}re(u)}class ce{$destroy(){ae(this,1),this.$destroy=E}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!ut(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}let we=e=>e.map((t,n)=>e.slice(n+1).map(l=>[t,l])).flat(),Me=e=>e.map((t,n)=>e.slice(n+1).map(l=>`${t},${l}`)).flat();const K=e=>{let t=[];const n=(l,o=[])=>{if(l.length===0)t.push(o);else for(let r=0;r<l.length;r++){let s=l.slice(),i=s.splice(r,1);n(s.slice(),o.concat(i))}};return n(e),t};function kt(e,t){return e.length!==t.length?!1:e.split("").sort().toString()===t.split("").sort().toString()}function $t(e){if(e[0].split(",").length!==[...new Set(e[0].split(","))].length)return!1;for(let t=e.length-1;t>=1;t--)if(!kt(e[0],e[t]))return!1;return!0}function at(e,t){let n=[];const l=new Set(e),o=new Set(t);for(const r of o.values())l.delete(r)||n.push(r);for(const r of l.values())n.push(r);return n.length}function Ct(e,t){if(e.length<2)return!1;let n=e.filter(o=>o[0]===t[1]),l=e.filter(o=>o[1]===t[0]);for(let o of n)if(l.filter(r=>r[0]==o[1]).length)return!0;return!1}function N(e){return e.map(t=>t.split(","))}function Ye(e){e=N(e);let t=[];const n=K(e[0]);for(let o of n){let r=Me(o),s=0;for(let i of e){let u=Me(i);s+=at(r,u)}t.push({ruler:o,uzaklik:s})}let l=Math.min(...t.map(o=>o.uzaklik));return t.filter(o=>o.uzaklik===l).map(o=>o.ruler)}function A(e,t=!0,n=!1){t||(e=N(e));let l=we(e[0]),o={};for(let r of l){let s=0;for(let i of e)i.indexOf(r[0])<i.indexOf(r[1])?s++:s--;s<0&&(r=r.reverse()),o[r]=Math.abs(s)}return n?o:Object.getOwnPropertyNames(o).filter(r=>o[r]!==0).map(r=>r.split(","))}function Xe(e){e=N(e);let t=A(e).map(r=>`${r}`);const n=K(e[0]);let l=[];for(let r of n){let s=Me(r),i=at(s,t);l.push({ruler:r,uzaklik:i})}let o=Math.min(...l.map(r=>r.uzaklik));return l.filter(r=>r.uzaklik===o).map(r=>r.ruler)}function Ge(e){e=N(e);let t=A(e,!0,!0),n=Object.getOwnPropertyNames(t),l=we(n);console.log(t);let o=K(n),r=[];e:for(let f of o){for(let a of l){const c=f.indexOf(a[0]),b=f.indexOf(a[1]),g=t[a[0]],m=t[a[1]];if(c>b&&g>m||c<b&&g<m)continue e}r.push(f)}let s=[];for(let f of r){let a=[];for(let c of f)c=c.split(","),Ct(a,c)?a.push(c.reverse()):a.push(c);s.push(a)}let i=[];const u=K(e[0]);e:for(let f of u)for(let a of s)if(we(f).sort().join(",")===a.sort().join(",")){i.push(f);continue e}return i}function Je(e){let t=e.length;e=N(e);let n=A(e,!0,!0),l={};for(let u in n){let f=n[u],a=(t-f)/2,c=a+f;l[`${u.split(",")}`]=c,l[`${u.split(",").reverse()}`]=a}let o={};for(let u of e[0])for(let f of e[0])u!==f&&(l[`${u},${f}`]>l[`${f},${u}`]?o[`${u},${f}`]=l[`${u},${f}`]:o[`${u},${f}`]=0);for(let u of e[0])for(let f of e[0])if(u!==f)for(let a of e[0])u!==a&&f!==a&&(o[`${f},${a}`]=Math.max(o[`${f},${a}`],Math.min(o[`${f},${u}`],o[`${u},${a}`])));let r=[];for(let u in o)o[u]>o[`${u.split(",").reverse()}`]&&r.push(u);let s=[];const i=K(e[0]);e:for(let u of i){for(let f of r){let a=f.split(",");if(u.indexOf(a[0])>u.indexOf(a[1]))continue e}s.push(u)}return s}function pe(e,t=!1){let n=0,l=[e],o=[],r={},s=[b(e)],i=e[0].length,u=e.length,f=t?1:i-1;e:for(;Object.keys(r).length<i;){if(l.length>1e3)return"This specific profile is too complex for Dodgson. Try other rules.";for(let g of l)if(a(g)&&(a(g)in r||(r[a(g)]=n)),Object.keys(r).length>=i)break e;if(n++,o=[],Object.keys(r).length===f){for(let g=0;g<i;g++)e[0][g]in r||(r[e[0][g]]=n);break e}for(let g of l){let m=c(g);for(let _ of m){let h=_.map(w=>w.join(","));h=h.sort().toString(),s.includes(h)||(o.push(_),s.push(b(_)))}}l=o}for(let g in r)r[g]*=-1;return r;function a(g){let m=A(g).map(_=>_[0]).reduce(function(_,h){return _[h]?++_[h]:_[h]=1,_},{});return m=Object.entries(m).filter(_=>_[1]===g[0].length-1),m.length?m[0][0]:null}function c(g){let m=[];for(let _=0;_<u;_++)for(let h=0;h<i-1;h++){let w=structuredClone(g),d=structuredClone(g[_]);d[h]=g[_][h+1],d[h+1]=g[_][h],w[_]=d,m.push(w)}return m}function b(g){let m=g.map(_=>_.join(","));return m=m.sort().toString(),m}}function me(e){let t=A(e).map(n=>n[0]).reduce(function(n,l){return n[l]?++n[l]:n[l]=1,n},{});for(let n of e[0])t.hasOwnProperty(n)||(t[n]=0);return t}function ge(e){let t=e[0].length,n={};for(let l of e[0]){let o=0;for(let r of e)o+=t-r.indexOf(l);n[l]=o}return n}function be(e){let t={};for(let n of e[0]){let l=0;for(let o of e[0]){let r=0;for(let s of e)s.indexOf(o)<s.indexOf(n)&&r++;r>l&&(l=r)}t[n]=-l}return t}function z(e,t){e=N(e);const n=t(e);if(typeof n=="string")return[n];let l=[];const o=K(e[0]),r=we(e[0]);e:for(let s of o){for(let i of r){const u=s.indexOf(i[0]),f=s.indexOf(i[1]),a=n[i[0]],c=n[i[1]];if(u>f&&a>c||u<f&&a<c)continue e}l.push(s)}return l}function B(e,t){e=N(e);const n=t(e);if(typeof n=="string")return[n];let l=[],o=Object.values(n),r=Math.max(...o);return Object.keys(n).forEach(s=>{n[s]===r&&l.push(s)}),l}function Qe(e,t,n){const l=e.slice();return l[4]=t[n],l}function Ze(e){let t,n=e[4].toString().replace(/,/g," > ")+"",l;return{c(){t=y("li"),l=H(n)},m(o,r){P(o,t,r),p(t,l)},p(o,r){r&1&&n!==(n=o[4].toString().replace(/,/g," > ")+"")&&Pe(l,n)},d(o){o&&M(t)}}}function xe(e){let t,n,l,o,r,s;return{c(){t=y("div"),n=y("p"),n.textContent="The result is irresolute. Shall we tie break randomly?",l=$(),o=y("button"),o.textContent="Yes",v(o,"class","btn-orange drop-shadow-md py-2 mt-4 w-1/2 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(t,"class","text-center mt-4")},m(i,u){P(i,t,u),p(t,n),p(t,l),p(t,o),r||(s=S(o,"click",e[2]),r=!0)},p:E,d(i){i&&M(t),r=!1,s()}}}function Ot(e){let t,n,l,o,r,s,i,u,f=e[0],a=[];for(let b=0;b<f.length;b+=1)a[b]=Ze(Qe(e,f,b));let c=e[0].length>1&&xe(e);return{c(){t=y("div"),n=y("div"),l=y("div"),o=$(),r=y("ul");for(let b=0;b<a.length;b+=1)a[b].c();s=$(),c&&c.c(),v(l,"class","close-button"),v(r,"class","w-1/2"),v(n,"class","modal-box [max-height: calc(100vh - 4rem)] flex flex-col md:flex-row"),v(t,"class","modal-background")},m(b,g){P(b,t,g),p(t,n),p(n,l),p(n,o),p(n,r);for(let m=0;m<a.length;m+=1)a[m].m(r,null);p(n,s),c&&c.m(n,null),i||(u=S(l,"click",e[1]),i=!0)},p(b,[g]){if(g&1){f=b[0];let m;for(m=0;m<f.length;m+=1){const _=Qe(b,f,m);a[m]?a[m].p(_,g):(a[m]=Ze(_),a[m].c(),a[m].m(r,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=f.length}b[0].length>1?c?c.p(b,g):(c=xe(b),c.c(),c.m(n,null)):c&&(c.d(1),c=null)},i:E,o:E,d(b){b&&M(t),rt(a,b),c&&c.d(),i=!1,u()}}}function St(e,t,n){let{message:l=["A,B,C,D"]}=t;const o=mt();function r(){o("close")}function s(){n(0,l=[l[Math.floor(Math.random()*l.length)]])}return e.$$set=i=>{"message"in i&&n(0,l=i.message)},[l,r,s]}class Mt extends ce{constructor(t){super(),ue(this,t,St,Ot,fe,{message:0})}}function Pt(e){let t;return{c(){t=y("canvas"),v(t,"width","400"),v(t,"height","400"),v(t,"class","bg-orange-50 mb-4 border-2 border-blue-400 rounded"),v(t,"id","canvas")},m(n,l){P(n,t,l)},p:E,i:E,o:E,d(n){n&&M(t)}}}let et=170,jt=200,Et=200,V=20;function It(e,t,n){let{tournamentData:l={"A,B":1,"B,C":1}}=t,o=[];function r(s){if(document.getElementById("canvas")){let u=2*Math.PI/s.length,f=[];for(let a=0;a<s.length;a++)f.push({name:s[a],loc_x:jt+et*Math.cos(a*u),loc_y:Et+et*Math.sin(a*u)});var i=document.getElementById("canvas").getContext("2d");i.clearRect(0,0,canvas.width,canvas.height),i.strokeStyle="#ea580c",i.lineWidth=2,i.font="24px sans-serif";for(let a in l){let c=a.split(",")[0],b=a.split(",")[1],g=f.filter(L=>L.name===c)[0],m=f.filter(L=>L.name===b)[0],_=g.loc_x,h=g.loc_y,w=(m.loc_x*12+_)/13,d=(m.loc_y*12+h)/13,I=Math.atan2(d-h,w-_);i.beginPath(),i.moveTo(_,h),i.lineTo(w,d),i.stroke(),i.moveTo(w,d),i.lineTo(w-V*Math.cos(I-Math.PI/7),d-V*Math.sin(I-Math.PI/7)),i.lineTo(w-V*Math.cos(I+Math.PI/7),d-V*Math.sin(I+Math.PI/7)),i.lineTo(w,d),i.lineTo(w-V*Math.cos(I-Math.PI/7),d-V*Math.sin(I-Math.PI/7)),i.closePath(),i.stroke(),i.fillStyle="#93c5fd",i.fill(),i.fillStyle="#2563eb",i.fillText(l[a],(3*_+2*w)/5,(2*h+3*d)/5)}i.font="40px sans-serif",i.fillStyle="#2563eb",i.textBaseline="middle",i.textAlign="center";for(let a=0;a<s.length;a++)i.fillText(f[a].name,f[a].loc_x,f[a].loc_y,50)}}return e.$$set=s=>{"tournamentData"in s&&n(0,l=s.tournamentData)},e.$$.update=()=>{e.$$.dirty&3&&(n(1,o=Array.from(new Set([...Object.getOwnPropertyNames(l).flatMap(s=>s.split(","))]))),r(o))},[l,o]}class Tt extends ce{constructor(t){super(),ue(this,t,It,Pt,fe,{tournamentData:0})}}function tt(e,t,n){const l=e.slice();return l[13]=t[n],l}function nt(e){let t,n;return t=new Mt({props:{message:e[5]}}),t.$on("close",e[11]),{c(){_e(t.$$.fragment)},m(l,o){se(t,l,o),n=!0},p(l,o){const r={};o&32&&(r.message=l[5]),t.$set(r)},i(l){n||(R(t.$$.fragment,l),n=!0)},o(l){F(t.$$.fragment,l),n=!1},d(l){ae(t,l)}}}function zt(e){let t;return{c(){t=H(e[1])},m(n,l){P(n,t,l)},p(n,l){l&2&&Pe(t,n[1])},d(n){n&&M(t)}}}function Bt(e){let t,n=e[1],l=[];for(let o=0;o<n.length;o+=1)l[o]=lt(tt(e,n,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=ct()},m(o,r){for(let s=0;s<l.length;s+=1)l[s].m(o,r);P(o,t,r)},p(o,r){if(r&259){n=o[1];let s;for(s=0;s<n.length;s+=1){const i=tt(o,n,s);l[s]?l[s].p(i,r):(l[s]=lt(i),l[s].c(),l[s].m(t.parentNode,t))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},d(o){rt(l,o),o&&M(t)}}}function lt(e){let t,n=e[13]+"",l,o,r,s;return{c(){t=y("button"),l=H(n),v(t,"class","kucukDugme btn-orange px-1 py-1 disabled:invisible"),t.disabled=o=e[0][e[0].length-1].includes(e[13])&&e[0][0].split(",").length!==e[0][e[0].length-1].split(",").length},m(i,u){P(i,t,u),p(t,l),r||(s=S(t,"click",e[8]),r=!0)},p(i,u){u&2&&n!==(n=i[13]+"")&&Pe(l,n),u&3&&o!==(o=i[0][i[0].length-1].includes(i[13])&&i[0][0].split(",").length!==i[0][i[0].length-1].split(",").length)&&(t.disabled=o)},d(i){i&&M(t),r=!1,s()}}}function Rt(e){let t,n,l,o,r,s,i,u,f,a,c,b,g,m,_,h,w,d,I,L,U,je,Y,Ee,X,Ie,G,Te,J,ze,Q,Be,Z,Re,x,De,ke,Ae,ee,Ne,te,Le,ne,We,le,W,$e,Ve,C=e[4]&&nt(e);function Fe(k,O){return O&5&&(m=null),m==null&&(m=!!(k[0].length>1||k[2].endsWith(`
`))),m?Bt:zt}let de=Fe(e,-1),T=de(e);return h=new Tt({props:{tournamentData:e[6]}}),{c(){C&&C.c(),t=$(),n=y("div"),l=y("p"),l.textContent="Please enter ranked votes for each alternative, separated by comma.",o=$(),r=y("p"),r.textContent="Each row must include the same alternatives.",s=$(),i=y("textarea"),f=$(),a=y("div"),c=y("p"),b=y("b"),b.textContent="Candidates",g=H(`: 
        `),T.c(),_=$(),_e(h.$$.fragment),w=$(),d=y("div"),I=y("h3"),I.textContent="Social Welfare Rules",L=$(),U=y("button"),U.textContent="Kemeny",je=$(),Y=y("button"),Y.textContent="Borda",Ee=$(),X=y("button"),X.textContent="Minmax",Ie=$(),G=y("button"),G.textContent="Slater",Te=$(),J=y("button"),J.textContent="Copeland",ze=$(),Q=y("button"),Q.textContent="Tideman",Be=$(),Z=y("button"),Z.textContent="Schulze",Re=$(),x=y("button"),x.textContent="Dodgson",De=$(),ke=y("h3"),ke.textContent="Social Choice Rules",Ae=$(),ee=y("button"),ee.textContent="Borda",Ne=$(),te=y("button"),te.textContent="Minmax",Le=$(),ne=y("button"),ne.textContent="Copeland",We=$(),le=y("button"),le.textContent="Dodgson",v(l,"class","text-center"),v(r,"class","text-center"),i.value=e[2],v(i,"id","votesInput"),v(i,"class",u=(e[3]?"border-8 border-blue-300":"border-8 border-red-500")+" resize-none justify-self-center w-11/12 overflow-auto box-content rounded-md shadow-none outline-none md:w-96"),v(n,"id","input"),v(n,"class","flex flex-col justify-center items-center px-4 gap-4"),v(a,"id","output"),v(a,"class","flex flex-col justify-center items-center px-4 gap-4"),v(U,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(Y,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(X,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(G,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(J,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(Q,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(Z,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(x,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(ee,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(te,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(ne,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(le,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(d,"id","sonuclar"),v(d,"class","grid-component md:col-start-2 self-start md:row-start-1")},m(k,O){C&&C.m(k,O),P(k,t,O),P(k,n,O),p(n,l),p(n,o),p(n,r),p(n,s),p(n,i),P(k,f,O),P(k,a,O),p(a,c),p(c,b),p(c,g),T.m(c,null),p(a,_),se(h,a,null),P(k,w,O),P(k,d,O),p(d,I),p(d,L),p(d,U),p(d,je),p(d,Y),p(d,Ee),p(d,X),p(d,Ie),p(d,G),p(d,Te),p(d,J),p(d,ze),p(d,Q),p(d,Be),p(d,Z),p(d,Re),p(d,x),p(d,De),p(d,ke),p(d,Ae),p(d,ee),p(d,Ne),p(d,te),p(d,Le),p(d,ne),p(d,We),p(d,le),W=!0,$e||(Ve=[S(i,"input",e[12]),S(U,"click",function(){j(e[3]?e[10](Ye(e[0])):!1)&&(e[3]?e[10](Ye(e[0])):!1).apply(this,arguments)}),S(Y,"click",function(){j(e[3]?e[10](z(e[0],ge)):!1)&&(e[3]?e[10](z(e[0],ge)):!1).apply(this,arguments)}),S(X,"click",function(){j(e[3]?e[10](z(e[0],be)):!1)&&(e[3]?e[10](z(e[0],be)):!1).apply(this,arguments)}),S(G,"click",function(){j(e[3]?e[10](Xe(e[0])):!1)&&(e[3]?e[10](Xe(e[0])):!1).apply(this,arguments)}),S(J,"click",function(){j(e[3]?e[10](z(e[0],me)):!1)&&(e[3]?e[10](z(e[0],me)):!1).apply(this,arguments)}),S(Q,"click",function(){j(e[3]?e[10](Ge(e[0])):!1)&&(e[3]?e[10](Ge(e[0])):!1).apply(this,arguments)}),S(Z,"click",function(){j(e[3]?e[10](Je(e[0])):!1)&&(e[3]?e[10](Je(e[0])):!1).apply(this,arguments)}),S(x,"click",function(){j(e[3]?e[10](z(e[0],pe)):!1)&&(e[3]?e[10](z(e[0],pe)):!1).apply(this,arguments)}),S(ee,"click",function(){j(e[3]?e[10](B(e[0],ge)):!1)&&(e[3]?e[10](B(e[0],ge)):!1).apply(this,arguments)}),S(te,"click",function(){j(e[3]?e[10](B(e[0],be)):!1)&&(e[3]?e[10](B(e[0],be)):!1).apply(this,arguments)}),S(ne,"click",function(){j(e[3]?e[10](B(e[0],me)):!1)&&(e[3]?e[10](B(e[0],me)):!1).apply(this,arguments)}),S(le,"click",function(){j(e[3]?e[10](B(e[0],pe)):!1)&&(e[3]?e[10](B(e[0],pe)):!1).apply(this,arguments)})],$e=!0)},p(k,[O]){e=k,e[4]?C?(C.p(e,O),O&16&&R(C,1)):(C=nt(e),C.c(),R(C,1),C.m(t.parentNode,t)):C&&(yt(),F(C,1,1,()=>{C=null}),_t()),(!W||O&4)&&(i.value=e[2]),(!W||O&8&&u!==(u=(e[3]?"border-8 border-blue-300":"border-8 border-red-500")+" resize-none justify-self-center w-11/12 overflow-auto box-content rounded-md shadow-none outline-none md:w-96"))&&v(i,"class",u),de===(de=Fe(e,O))&&T?T.p(e,O):(T.d(1),T=de(e),T&&(T.c(),T.m(c,null)));const Ke={};O&64&&(Ke.tournamentData=e[6]),h.$set(Ke)},i(k){W||(R(C),R(h.$$.fragment,k),W=!0)},o(k){F(C),F(h.$$.fragment,k),W=!1},d(k){C&&C.d(k),k&&M(t),k&&M(n),k&&M(f),k&&M(a),T.d(),ae(h),k&&M(w),k&&M(d),$e=!1,q(Ve)}}}function Dt(e,t,n){let l="",o=[""],r=!0,s="",i=!1,u="",f={};pt(()=>{n(0,o=["Alastair,Brian,Chris","Chris,Brian,Alastair","Chris,Brian,Alastair","Brian,Alastair,Chris"]),n(2,l=o.join(`
`)),a(document.getElementById("votesInput")),n(6,f=A(o,!1,!0))});function a(h){h.value=l,h.focus(),h.style.height="5px",h.style.height=h.scrollHeight+10+"px",h.scrollTop=h.scrollHeight}function c(){if(o[o.length-1]==="")return n(0,o[o.length-1]=`${event.target.textContent}`,o),n(2,l=o.join(`
`)),b(o),!1;o[0].split(",").length-o[o.length-1].split(",").length===0?n(0,o=[...o,event.target.textContent]):n(0,o[o.length-1]+=`,${event.target.textContent}`,o),n(2,l=o.join(`
`)),b(o),a(document.getElementById("votesInput"))}function b(h){n(3,r=$t(h))}function g(h){n(5,u=h),n(4,i=!0)}function m(h){n(4,i=!1)}const _=h=>{let w=o;n(2,l=h.target.value),n(0,o=h.target.value.replace(/  +/ig," ").replace(/(\t| )*,(\t| )*/ig,",").split(`
`).map(d=>d.trim())),b(o),r||n(0,o=w),a(document.getElementById("votesInput"))};return e.$$.update=()=>{if(e.$$.dirty&3){n(1,s=o[0].split(",").sort()),s[0]===""&&s.shift();let h=A(o,!1,!0);n(6,f=Object.keys(h).filter(w=>h[w]>0).reduce((w,d)=>(w[d]=h[d],w),{}))}},[o,s,l,r,i,u,f,a,c,b,g,m,_]}class At extends ce{constructor(t){super(),ue(this,t,Dt,Rt,fe,{})}}function Nt(e){let t;return{c(){t=y("footer"),t.innerHTML=`<span>Made with \u{1F9E0} by <a href="https://emrergin.github.io/personalpage/" target="_blank">Emre Ergin</a>, 
    using <a href="https://svelte.dev/" target="_blank">Svelte</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.</span>`},m(n,l){P(n,t,l)},p:E,i:E,o:E,d(n){n&&M(t)}}}class Lt extends ce{constructor(t){super(),ue(this,t,null,Nt,fe,{})}}function Wt(e){let t,n,l,o,r,s;return l=new At({}),r=new Lt({}),{c(){t=y("div"),n=y("main"),_e(l.$$.fragment),o=$(),_e(r.$$.fragment),v(n,"class","grid-component font-sans"),v(t,"id","everything"),v(t,"class","min-h-screen min-w-screen bg-gradient-to-tr from-teal-50 to-zinc-200")},m(i,u){P(i,t,u),p(t,n),se(l,n,null),p(n,o),se(r,n,null),s=!0},p:E,i(i){s||(R(l.$$.fragment,i),R(r.$$.fragment,i),s=!0)},o(i){F(l.$$.fragment,i),F(r.$$.fragment,i),s=!1},d(i){i&&M(t),ae(l),ae(r)}}}class Vt extends ce{constructor(t){super(),ue(this,t,null,Wt,fe,{})}}new Vt({target:document.getElementById("app")});