const ft=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};ft();function E(){}function ot(e){return e()}function qe(){return Object.create(null)}function W(e){e.forEach(ot)}function j(e){return typeof e=="function"}function se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ut(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode.removeChild(e)}function rt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function $(){return q(" ")}function ct(){return q("")}function C(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function dt(e){return Array.from(e.childNodes)}function Me(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ht(e,t,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,!1,t),l}let re;function oe(e){re=e}function it(){if(!re)throw new Error("Function called outside component initialization");return re}function pt(e){it().$$.on_mount.push(e)}function mt(){const e=it();return(t,n)=>{const l=e.$$.callbacks[t];if(l){const o=ht(t,n);l.slice().forEach(r=>{r.call(e,o)})}}}const le=[],He=[],be=[],Ke=[],gt=Promise.resolve();let Oe=!1;function bt(){Oe||(Oe=!0,gt.then(at))}function Pe(e){be.push(e)}const $e=new Set;let de=0;function at(){const e=re;do{for(;de<le.length;){const t=le[de];de++,oe(t),vt(t.$$)}for(oe(null),le.length=0,de=0;He.length;)He.pop()();for(let t=0;t<be.length;t+=1){const n=be[t];$e.has(n)||($e.add(n),n())}be.length=0}while(le.length);for(;Ke.length;)Ke.pop()();Oe=!1,$e.clear(),oe(e)}function vt(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Pe)}}const ve=new Set;let x;function _t(){x={r:0,c:[],p:x}}function yt(){x.r||W(x.c),x=x.p}function B(e,t){e&&e.i&&(ve.delete(e),e.i(t))}function F(e,t,n,l){if(e&&e.o){if(ve.has(e))return;ve.add(e),x.c.push(()=>{ve.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function _e(e){e&&e.c()}function ie(e,t,n,l){const{fragment:o,on_mount:r,on_destroy:a,after_update:f}=e.$$;o&&o.m(t,n),l||Pe(()=>{const i=r.map(ot).filter(j);a?a.push(...i):W(i),e.$$.on_mount=[]}),f.forEach(Pe)}function ae(e,t){const n=e.$$;n.fragment!==null&&(W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(e,t){e.$$.dirty[0]===-1&&(le.push(e),bt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(e,t,n,l,o,r,a,f=[-1]){const i=re;oe(e);const s=e.$$={fragment:null,ctx:null,props:r,update:E,not_equal:o,bound:qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:qe(),dirty:f,skip_bound:!1,root:t.target||i.$$.root};a&&a(s.root);let u=!1;if(s.ctx=n?n(e,t.props||{},(d,b,...p)=>{const m=p.length?p[0]:b;return s.ctx&&o(s.ctx[d],s.ctx[d]=m)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](m),u&&wt(e,d)),b}):[],s.update(),u=!0,W(s.before_update),s.fragment=l?l(s.ctx):!1,t.target){if(t.hydrate){const d=dt(t.target);s.fragment&&s.fragment.l(d),d.forEach(M)}else s.fragment&&s.fragment.c();t.intro&&B(e.$$.fragment),ie(e,t.target,t.anchor,t.customElement),at()}oe(i)}class ue{$destroy(){ae(this,1),this.$destroy=E}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!ut(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}let ye=e=>e.map((t,n)=>e.slice(n+1).map(l=>[t,l])).flat(),Ce=e=>e.map((t,n)=>e.slice(n+1).map(l=>`${t},${l}`)).flat();const V=e=>{let t=[];const n=(l,o=[])=>{if(l.length===0)t.push(o);else for(let r=0;r<l.length;r++){let a=l.slice(),f=a.splice(r,1);n(a.slice(),o.concat(f))}};return n(e),t};function kt(e,t){return e.length!==t.length?!1:e.split("").sort().toString()===t.split("").sort().toString()}function $t(e){if(e[0].split(",").length!==[...new Set(e[0].split(","))].length)return!1;for(let t=e.length-1;t>=1;t--)if(!kt(e[0],e[t]))return!1;return!0}function st(e,t){let n=[];const l=new Set(e),o=new Set(t);for(const r of o.values())l.delete(r)||n.push(r);for(const r of l.values())n.push(r);return n.length}function Ot(e,t){if(e.length<2)return!1;let n=e.filter(o=>o[0]===t[1]),l=e.filter(o=>o[1]===t[0]);for(let o of n)if(l.filter(r=>r[0]==o[1]).length)return!0;return!1}function D(e){return e.map(t=>t.split(","))}function Ue(e){e=D(e);let t=[];const n=V(e[0]);for(let o of n){let r=Ce(o),a=0;for(let f of e){let i=Ce(f);a+=st(r,i)}t.push({ruler:o,uzaklik:a})}let l=Math.min(...t.map(o=>o.uzaklik));return t.filter(o=>o.uzaklik===l).map(o=>o.ruler)}function A(e,t=!0,n=!1){t||(e=D(e));let l=ye(e[0]),o={};for(let r of l){let a=0;for(let f of e)f.indexOf(r[0])<f.indexOf(r[1])?a++:a--;a<0&&(r=r.reverse()),o[r]=Math.abs(a)}return n?o:Object.getOwnPropertyNames(o).filter(r=>o[r]!==0).map(r=>r.split(","))}function Ye(e){e=D(e);let t=A(e).map(r=>`${r}`);const n=V(e[0]);let l=[];for(let r of n){let a=Ce(r),f=st(a,t);l.push({ruler:r,uzaklik:f})}let o=Math.min(...l.map(r=>r.uzaklik));return l.filter(r=>r.uzaklik===o).map(r=>r.ruler)}function Xe(e){e=D(e);let t=A(e,!0,!0),n=Object.getOwnPropertyNames(t),l=ye(n);console.log(t);let o=V(n),r=[];e:for(let s of o){for(let u of l){const d=s.indexOf(u[0]),b=s.indexOf(u[1]),p=t[u[0]],m=t[u[1]];if(d>b&&p>m||d<b&&p<m)continue e}r.push(s)}let a=[];for(let s of r){let u=[];for(let d of s)d=d.split(","),Ot(u,d)?u.push(d.reverse()):u.push(d);a.push(u)}let f=[];const i=V(e[0]);e:for(let s of i)for(let u of a)if(ye(s).sort().join(",")===u.sort().join(",")){f.push(s);continue e}return f}function Ge(e){let t=e.length;e=D(e);let n=A(e,!0,!0),l={};for(let i in n){let s=n[i],u=(t-s)/2,d=u+s;l[`${i.split(",")}`]=d,l[`${i.split(",").reverse()}`]=u}let o={};for(let i of e[0])for(let s of e[0])i!==s&&(l[`${i},${s}`]>l[`${s},${i}`]?o[`${i},${s}`]=l[`${i},${s}`]:o[`${i},${s}`]=0);for(let i of e[0])for(let s of e[0])if(i!==s)for(let u of e[0])i!==u&&s!==u&&(o[`${s},${u}`]=Math.max(o[`${s},${u}`],Math.min(o[`${s},${i}`],o[`${i},${u}`])));let r=[];for(let i in o)o[i]>o[`${i.split(",").reverse()}`]&&r.push(i);let a=[];const f=V(e[0]);e:for(let i of f){for(let s of r){let u=s.split(",");if(i.indexOf(u[0])>i.indexOf(u[1]))continue e}a.push(i)}return a}function he(e,t=!1){let n=0,l=[e],o=[],r={},a=[b(e)],f=e[0].length,i=e.length,s=t?1:f-1;e:for(;Object.keys(r).length<f;){if(l.length>1e3)return"This specific profile is too complex for Dodgson. Try other rules.";for(let p of l)if(u(p)&&(u(p)in r||(r[u(p)]=n)),Object.keys(r).length>=f)break e;if(n++,o=[],Object.keys(r).length===s){for(let p=0;p<f;p++)e[0][p]in r||(r[e[0][p]]=n);break e}for(let p of l){let m=d(p);for(let y of m){let c=y.map(w=>w.join(","));c=c.sort().toString(),a.includes(c)||(o.push(y),a.push(b(y)))}}l=o}for(let p in r)r[p]*=-1;return r;function u(p){let m=A(p).map(y=>y[0]).reduce(function(y,c){return y[c]?++y[c]:y[c]=1,y},{});return m=Object.entries(m).filter(y=>y[1]===p[0].length-1),m.length?m[0][0]:null}function d(p){let m=[];for(let y=0;y<i;y++)for(let c=0;c<f-1;c++){let w=structuredClone(p),h=structuredClone(p[y]);h[c]=p[y][c+1],h[c+1]=p[y][c],w[y]=h,m.push(w)}return m}function b(p){let m=p.map(y=>y.join(","));return m=m.sort().toString(),m}}function pe(e){let t=A(e).map(n=>n[0]).reduce(function(n,l){return n[l]?++n[l]:n[l]=1,n},{});for(let n of e[0])t.hasOwnProperty(n)||(t[n]=0);return t}function me(e){let t=e[0].length,n={};for(let l of e[0]){let o=0;for(let r of e)o+=t-r.indexOf(l);n[l]=o}return n}function ge(e){let t={};for(let n of e[0]){let l=0;for(let o of e[0]){let r=0;for(let a of e)a.indexOf(o)<a.indexOf(n)&&r++;r>l&&(l=r)}t[n]=-l}return t}function T(e,t){e=D(e);const n=t(e);if(typeof n=="string")return[n];let l=[];const o=V(e[0]),r=ye(e[0]);e:for(let a of o){for(let f of r){const i=a.indexOf(f[0]),s=a.indexOf(f[1]),u=n[f[0]],d=n[f[1]];if(i>s&&u>d||i<s&&u<d)continue e}l.push(a)}return l}function z(e,t){e=D(e);const n=t(e);if(typeof n=="string")return[n];let l=[],o=Object.values(n),r=Math.max(...o);return Object.keys(n).forEach(a=>{n[a]===r&&l.push(a)}),l}function Je(e,t,n){const l=e.slice();return l[4]=t[n],l}function Qe(e){let t,n=e[4].toString().replace(/,/g," > ")+"",l;return{c(){t=_("li"),l=q(n)},m(o,r){S(o,t,r),g(t,l)},p(o,r){r&1&&n!==(n=o[4].toString().replace(/,/g," > ")+"")&&Me(l,n)},d(o){o&&M(t)}}}function Ze(e){let t,n,l,o,r,a;return{c(){t=_("div"),n=_("p"),n.textContent="The result is irresolute. Shall we tie break randomly?",l=$(),o=_("button"),o.textContent="Yes",v(o,"class","btn-orange drop-shadow-md py-2 mt-4 w-1/2 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(t,"class","text-center mt-4")},m(f,i){S(f,t,i),g(t,n),g(t,l),g(t,o),r||(a=C(o,"click",e[2]),r=!0)},p:E,d(f){f&&M(t),r=!1,a()}}}function Pt(e){let t,n,l,o,r,a,f,i,s=e[0],u=[];for(let b=0;b<s.length;b+=1)u[b]=Qe(Je(e,s,b));let d=e[0].length>1&&Ze(e);return{c(){t=_("div"),n=_("div"),l=_("div"),o=$(),r=_("ul");for(let b=0;b<u.length;b+=1)u[b].c();a=$(),d&&d.c(),v(l,"class","close-button"),v(r,"class","w-1/2"),v(n,"class","modal-box [max-height: calc(100vh - 4rem)] flex flex-col md:flex-row"),v(t,"class","modal-background")},m(b,p){S(b,t,p),g(t,n),g(n,l),g(n,o),g(n,r);for(let m=0;m<u.length;m+=1)u[m].m(r,null);g(n,a),d&&d.m(n,null),f||(i=C(l,"click",e[1]),f=!0)},p(b,[p]){if(p&1){s=b[0];let m;for(m=0;m<s.length;m+=1){const y=Je(b,s,m);u[m]?u[m].p(y,p):(u[m]=Qe(y),u[m].c(),u[m].m(r,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=s.length}b[0].length>1?d?d.p(b,p):(d=Ze(b),d.c(),d.m(n,null)):d&&(d.d(1),d=null)},i:E,o:E,d(b){b&&M(t),rt(u,b),d&&d.d(),f=!1,i()}}}function Ct(e,t,n){let{message:l=["A,B,C,D"]}=t;const o=mt();function r(){o("close")}function a(){n(0,l=[l[Math.floor(Math.random()*l.length)]])}return e.$$set=f=>{"message"in f&&n(0,l=f.message)},[l,r,a]}class Mt extends ue{constructor(t){super(),fe(this,t,Ct,Pt,se,{message:0})}}function St(e){let t;return{c(){t=_("canvas"),v(t,"width","400"),v(t,"height","400"),v(t,"class","bg-orange-50 mb-4 border-2 border-blue-400 rounded w-11/12 md:w-96"),v(t,"id","canvas")},m(n,l){S(n,t,l)},p:E,i:E,o:E,d(n){n&&M(t)}}}let et=170,jt=200,Et=200,L=20;function It(e,t,n){let{tournamentData:l={"A,B":1,"B,C":1}}=t,o=[];function r(i){if(document.getElementById("canvas")){let u=2*Math.PI/i.length,d=[];for(let p=0;p<i.length;p++)d.push({name:i[p],loc_x:jt+et*Math.cos(p*u),loc_y:Et+et*Math.sin(p*u)});var s=document.getElementById("canvas").getContext("2d");s.clearRect(0,0,canvas.width,canvas.height),s.globalCompositeOperation="destination-over",a({locations:d,context:s,pointPercentage:0,pointPercentage2:0})}}function a(i){i.context.clearRect(0,0,canvas.width,canvas.height),i.context.font="40px sans-serif",i.context.textBaseline="middle",i.context.textAlign="center";for(let s=0;s<i.pointPercentage/20;s++)i.context.fillStyle=`rgba(37, 99, 235,${(i.pointPercentage-s*20)/(s+1)})`,i.context.fillText(i.locations[s].name,i.locations[s].loc_x,i.locations[s].loc_y,50);i.pointPercentage<i.locations.length*20?(requestAnimationFrame(function(){a(i)}),i.pointPercentage++):f(i)}function f(i){i.context.lineWidth=2,i.context.font="24px sans-serif";for(let s in l){let u=s.split(",")[0],d=s.split(",")[1],b=i.locations.filter(R=>R.name===u)[0],p=i.locations.filter(R=>R.name===d)[0],m=b.loc_x,y=b.loc_y,c=p.loc_x*i.pointPercentage2/100+m*(1-i.pointPercentage2/100),w=p.loc_y*i.pointPercentage2/100+y*(1-i.pointPercentage2/100),h=Math.atan2(w-y,c-m);i.context.fillStyle=`rgba(37, 99, 235,${l[s]/Math.max(...Object.values(l))})`,i.context.fillText(l[s],(3*m+2*c)/5,(2*y+3*w)/5),i.context.beginPath(),i.context.moveTo(m,y),i.context.lineTo(c,w),i.context.strokeStyle=`rgba(234, 88, 12,${l[s]/Math.max(...Object.values(l))})`,i.context.stroke(),i.context.moveTo(c,w),i.context.lineTo(c-L*Math.cos(h-Math.PI/7),w-L*Math.sin(h-Math.PI/7)),i.context.lineTo(c-L*Math.cos(h+Math.PI/7),w-L*Math.sin(h+Math.PI/7)),i.context.lineTo(c,w),i.context.lineTo(c-L*Math.cos(h-Math.PI/7),w-L*Math.sin(h-Math.PI/7)),i.context.closePath(),i.context.stroke(),i.context.fillStyle="#93c5fd",i.context.fill(),i.pointPercentage2<95&&(requestAnimationFrame(function(){a(i)}),i.pointPercentage2+=.5)}}return e.$$set=i=>{"tournamentData"in i&&n(0,l=i.tournamentData)},e.$$.update=()=>{e.$$.dirty&3&&(n(1,o=Array.from(new Set([...Object.getOwnPropertyNames(l).flatMap(i=>i.split(","))]))),r(o))},[l,o]}class Tt extends ue{constructor(t){super(),fe(this,t,It,St,se,{tournamentData:0})}}function tt(e,t,n){const l=e.slice();return l[13]=t[n],l}function nt(e){let t,n;return t=new Mt({props:{message:e[5]}}),t.$on("close",e[11]),{c(){_e(t.$$.fragment)},m(l,o){ie(t,l,o),n=!0},p(l,o){const r={};o&32&&(r.message=l[5]),t.$set(r)},i(l){n||(B(t.$$.fragment,l),n=!0)},o(l){F(t.$$.fragment,l),n=!1},d(l){ae(t,l)}}}function zt(e){let t;return{c(){t=q(e[2])},m(n,l){S(n,t,l)},p(n,l){l&4&&Me(t,n[2])},d(n){n&&M(t)}}}function Bt(e){let t,n=e[2],l=[];for(let o=0;o<n.length;o+=1)l[o]=lt(tt(e,n,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=ct()},m(o,r){for(let a=0;a<l.length;a+=1)l[a].m(o,r);S(o,t,r)},p(o,r){if(r&269){n=o[2];let a;for(a=0;a<n.length;a+=1){const f=tt(o,n,a);l[a]?l[a].p(f,r):(l[a]=lt(f),l[a].c(),l[a].m(t.parentNode,t))}for(;a<l.length;a+=1)l[a].d(1);l.length=n.length}},d(o){rt(l,o),o&&M(t)}}}function lt(e){let t,n=e[13]+"",l,o,r,a;return{c(){t=_("button"),l=q(n),v(t,"class","kucukDugme btn-orange px-1 py-1 disabled:invisible"),t.disabled=o=e[3].split(`
`)[e[3].split(`
`).length-1].split(",").includes(e[13])&&e[0][0].split(",").length!==e[3].split(`
`)[e[3].split(`
`).length-1].split(",").length},m(f,i){S(f,t,i),g(t,l),r||(a=C(t,"click",e[8]),r=!0)},p(f,i){i&4&&n!==(n=f[13]+"")&&Me(l,n),i&13&&o!==(o=f[3].split(`
`)[f[3].split(`
`).length-1].split(",").includes(f[13])&&f[0][0].split(",").length!==f[3].split(`
`)[f[3].split(`
`).length-1].split(",").length)&&(t.disabled=o)},d(f){f&&M(t),r=!1,a()}}}function Rt(e){let t,n,l,o,r,a,f,i,s,u,d,b,p,m,y,c,w,h,R,Se,H,je,K,Ee,U,Ie,Y,Te,X,ze,G,Be,J,Re,Q,xe,we,Ae,Z,De,ee,Ne,te,Le,ne,N,ke,Fe,O=e[4]&&nt(e);function Ve(k,P){return P&8&&(m=null),m==null&&(m=k[3].split(`
`).length>1),m?Bt:zt}let ce=Ve(e,-1),I=ce(e);return c=new Tt({props:{tournamentData:e[6]}}),{c(){O&&O.c(),t=$(),n=_("div"),l=_("p"),l.textContent="Please enter ranked votes for each alternative, separated by comma.",o=$(),r=_("p"),r.textContent="Each row must include the same alternatives.",a=$(),f=_("textarea"),s=$(),u=_("div"),d=_("p"),b=_("b"),b.textContent="Candidates",p=q(`: 
        `),I.c(),y=$(),_e(c.$$.fragment),w=$(),h=_("div"),R=_("h3"),R.textContent="Social Welfare Rules",Se=$(),H=_("button"),H.textContent="Kemeny",je=$(),K=_("button"),K.textContent="Borda",Ee=$(),U=_("button"),U.textContent="Minmax",Ie=$(),Y=_("button"),Y.textContent="Slater",Te=$(),X=_("button"),X.textContent="Copeland",ze=$(),G=_("button"),G.textContent="Tideman",Be=$(),J=_("button"),J.textContent="Schulze",Re=$(),Q=_("button"),Q.textContent="Dodgson",xe=$(),we=_("h3"),we.textContent="Social Choice Rules",Ae=$(),Z=_("button"),Z.textContent="Borda",De=$(),ee=_("button"),ee.textContent="Minmax",Ne=$(),te=_("button"),te.textContent="Copeland",Le=$(),ne=_("button"),ne.textContent="Dodgson",v(l,"class","text-center"),v(r,"class","text-center"),f.value=e[3],v(f,"id","votesInput"),v(f,"class",i=(e[1]?"border-8 border-blue-300":"border-8 border-red-500")+" resize-none justify-self-center w-11/12 overflow-auto box-content rounded-md shadow-none outline-none md:w-96"),v(n,"id","input"),v(n,"class","flex flex-col justify-center items-center px-4 gap-4"),v(u,"id","output"),v(u,"class","flex flex-col justify-center items-center px-4 gap-4"),v(H,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(K,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(U,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(Y,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(X,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(G,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(J,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(Q,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(Z,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(ee,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(te,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(ne,"class","btn-orange w-full drop-shadow-md py-4 hover:-translate-y-0.5 active:scale-100 hover:scale-110 hover:drop-shadow-lg md:w-48"),v(h,"id","sonuclar"),v(h,"class","grid-component md:col-start-2 self-start md:row-start-1")},m(k,P){O&&O.m(k,P),S(k,t,P),S(k,n,P),g(n,l),g(n,o),g(n,r),g(n,a),g(n,f),S(k,s,P),S(k,u,P),g(u,d),g(d,b),g(d,p),I.m(d,null),g(u,y),ie(c,u,null),S(k,w,P),S(k,h,P),g(h,R),g(h,Se),g(h,H),g(h,je),g(h,K),g(h,Ee),g(h,U),g(h,Ie),g(h,Y),g(h,Te),g(h,X),g(h,ze),g(h,G),g(h,Be),g(h,J),g(h,Re),g(h,Q),g(h,xe),g(h,we),g(h,Ae),g(h,Z),g(h,De),g(h,ee),g(h,Ne),g(h,te),g(h,Le),g(h,ne),N=!0,ke||(Fe=[C(f,"input",e[12]),C(H,"click",function(){j(e[1]?e[10](Ue(e[0])):!1)&&(e[1]?e[10](Ue(e[0])):!1).apply(this,arguments)}),C(K,"click",function(){j(e[1]?e[10](T(e[0],me)):!1)&&(e[1]?e[10](T(e[0],me)):!1).apply(this,arguments)}),C(U,"click",function(){j(e[1]?e[10](T(e[0],ge)):!1)&&(e[1]?e[10](T(e[0],ge)):!1).apply(this,arguments)}),C(Y,"click",function(){j(e[1]?e[10](Ye(e[0])):!1)&&(e[1]?e[10](Ye(e[0])):!1).apply(this,arguments)}),C(X,"click",function(){j(e[1]?e[10](T(e[0],pe)):!1)&&(e[1]?e[10](T(e[0],pe)):!1).apply(this,arguments)}),C(G,"click",function(){j(e[1]?e[10](Xe(e[0])):!1)&&(e[1]?e[10](Xe(e[0])):!1).apply(this,arguments)}),C(J,"click",function(){j(e[1]?e[10](Ge(e[0])):!1)&&(e[1]?e[10](Ge(e[0])):!1).apply(this,arguments)}),C(Q,"click",function(){j(e[1]?e[10](T(e[0],he)):!1)&&(e[1]?e[10](T(e[0],he)):!1).apply(this,arguments)}),C(Z,"click",function(){j(e[1]?e[10](z(e[0],me)):!1)&&(e[1]?e[10](z(e[0],me)):!1).apply(this,arguments)}),C(ee,"click",function(){j(e[1]?e[10](z(e[0],ge)):!1)&&(e[1]?e[10](z(e[0],ge)):!1).apply(this,arguments)}),C(te,"click",function(){j(e[1]?e[10](z(e[0],pe)):!1)&&(e[1]?e[10](z(e[0],pe)):!1).apply(this,arguments)}),C(ne,"click",function(){j(e[1]?e[10](z(e[0],he)):!1)&&(e[1]?e[10](z(e[0],he)):!1).apply(this,arguments)})],ke=!0)},p(k,[P]){e=k,e[4]?O?(O.p(e,P),P&16&&B(O,1)):(O=nt(e),O.c(),B(O,1),O.m(t.parentNode,t)):O&&(_t(),F(O,1,1,()=>{O=null}),yt()),(!N||P&8)&&(f.value=e[3]),(!N||P&2&&i!==(i=(e[1]?"border-8 border-blue-300":"border-8 border-red-500")+" resize-none justify-self-center w-11/12 overflow-auto box-content rounded-md shadow-none outline-none md:w-96"))&&v(f,"class",i),ce===(ce=Ve(e,P))&&I?I.p(e,P):(I.d(1),I=ce(e),I&&(I.c(),I.m(d,null)));const We={};P&64&&(We.tournamentData=e[6]),c.$set(We)},i(k){N||(B(O),B(c.$$.fragment,k),N=!0)},o(k){F(O),F(c.$$.fragment,k),N=!1},d(k){O&&O.d(k),k&&M(t),k&&M(n),k&&M(s),k&&M(u),I.d(),ae(c),k&&M(w),k&&M(h),ke=!1,W(Fe)}}}function xt(e,t,n){let l="",o=[""],r=!0,a="",f=!1,i="",s={};pt(()=>{n(0,o=["Alastair,Brian,Chris","Chris,Brian,Alastair","Chris,Brian,Alastair","Brian,Alastair,Chris"]),n(3,l=o.join(`
`)),u(document.getElementById("votesInput"));let c=A(o,!1,!0);n(6,s=Object.keys(c).filter(w=>c[w]>0).reduce((w,h)=>(w[h]=c[h],w),{}))});function u(c){c.value=l,c.focus(),c.style.height="5px",c.style.height=c.scrollHeight+10+"px",c.scrollTop=c.scrollHeight}function d(){l.split(`
`)[l.split(`
`).length-1].length<l.split(`
`)[l.split(`
`).length-2].length?l.split(`
`)[l.split(`
`).length-1].length===0?n(3,l+=event.target.textContent):n(3,l+=","+event.target.textContent):n(3,l+=`
`+event.target.textContent),u(document.getElementById("votesInput"));let c=o;n(0,o=l.replace(/  +/ig," ").replace(/(\t| )*,(\t| )*/ig,",").split(`
`).map(w=>w.trim())),b(o),r||n(0,o=c)}function b(c){n(1,r=$t(c))}function p(c){n(5,i=c),n(4,f=!0)}function m(c){n(4,f=!1)}const y=c=>{let w=o;n(3,l=c.target.value),n(0,o=c.target.value.replace(/  +/ig," ").replace(/(\t| )*,(\t| )*/ig,",").split(`
`).map(h=>h.trim())),b(o),r||n(0,o=w),u(document.getElementById("votesInput"))};return e.$$.update=()=>{if(e.$$.dirty&7&&(n(2,a=o[0].split(",").sort()),a[0]===""&&a.shift(),r)){let c=A(o,!1,!0);n(6,s=Object.keys(c).filter(w=>c[w]>0).reduce((w,h)=>(w[h]=c[h],w),{}))}},[o,r,a,l,f,i,s,u,d,b,p,m,y]}class At extends ue{constructor(t){super(),fe(this,t,xt,Rt,se,{})}}function Dt(e){let t;return{c(){t=_("footer"),t.innerHTML=`<span>Made with \u{1F9E0} by <a href="https://emrergin.github.io/personalpage/" target="_blank">Emre Ergin</a>, 
    using <a href="https://svelte.dev/" target="_blank">Svelte</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.</span>`},m(n,l){S(n,t,l)},p:E,i:E,o:E,d(n){n&&M(t)}}}class Nt extends ue{constructor(t){super(),fe(this,t,null,Dt,se,{})}}function Lt(e){let t,n,l,o,r,a;return l=new At({}),r=new Nt({}),{c(){t=_("div"),n=_("main"),_e(l.$$.fragment),o=$(),_e(r.$$.fragment),v(n,"class","grid-component font-sans"),v(t,"id","everything"),v(t,"class","min-h-screen min-w-screen bg-gradient-to-tr from-teal-50 to-zinc-200")},m(f,i){S(f,t,i),g(t,n),ie(l,n,null),g(n,o),ie(r,n,null),a=!0},p:E,i(f){a||(B(l.$$.fragment,f),B(r.$$.fragment,f),a=!0)},o(f){F(l.$$.fragment,f),F(r.$$.fragment,f),a=!1},d(f){f&&M(t),ae(l),ae(r)}}}class Ft extends ue{constructor(t){super(),fe(this,t,null,Lt,se,{})}}new Ft({target:document.getElementById("app")});
