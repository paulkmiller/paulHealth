function k(){}const rt=t=>t;function Et(t,e){for(const n in e)t[n]=e[n];return t}function ot(t){return t()}function et(){return Object.create(null)}function T(t){t.forEach(ot)}function R(t){return typeof t=="function"}function Xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function Yt(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function kt(t){return Object.keys(t).length===0}function Tt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Zt(t,e,n){t.$$.on_destroy.push(Tt(e,n))}function te(t,e,n,i){if(t){const s=ct(t,e,n,i);return t[0](s)}}function ct(t,e,n,i){return t[1]&&i?Et(n.ctx.slice(),t[1](i(e))):n.ctx}function ee(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function ne(t,e,n,i,s,l){if(s){const r=ct(e,n,i,l);t.p(r,s)}}function ie(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function se(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function re(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function oe(t){const e={};for(const n in t)e[n]=!0;return e}function ce(t){return t??""}function le(t){return t&&R(t.destroy)?t.destroy:k}const lt=typeof window<"u";let at=lt?()=>window.performance.now():()=>Date.now(),Y=lt?t=>requestAnimationFrame(t):k;const M=new Set;function ut(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&Y(ut)}function ft(t){let e;return M.size===0&&Y(ut),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}const ae=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let W=!1;function Nt(){W=!0}function At(){W=!1}function Mt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function St(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:Mt(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(r[c],_)}}function Ct(t,e){t.appendChild(e)}function _t(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function jt(t){const e=Z("style");return Dt(_t(t),e),e.sheet}function Dt(t,e){return Ct(t.head||t,e),e.sheet}function Lt(t,e){if(W){for(St(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Pt(t,e,n){t.insertBefore(e,n||null)}function Ht(t,e,n){W&&!n?Lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function P(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function fe(){return tt(" ")}function _e(){return tt("")}function de(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function he(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Rt=["width","height"];function me(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Rt.indexOf(i)===-1?t[i]=e[i]:Ot(t,i,e[i])}function qt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function mt(t,e,n,i,s=!1){ht(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function pt(t,e,n,i){return mt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function pe(t,e,n){return pt(t,e,n,Z)}function ye(t,e,n){return pt(t,e,n,dt)}function Bt(t,e){return mt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>tt(e),!0)}function ge(t){return Bt(t," ")}function nt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function $e(t,e){const n=nt(t,"HTML_TAG_START",0),i=nt(t,"HTML_TAG_END",n);if(n===i)return new it(void 0,e);ht(t);const s=t.splice(n,i-n+1);P(s[0]),P(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new it(l,e)}function be(t,e){e=""+e,t.data!==e&&(t.data=e)}function xe(t,e){t.value=e??""}function we(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ve(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ee(t){const e=t.querySelector(":checked");return e&&e.__value}function ke(t,e,n){t.classList[n?"add":"remove"](e)}function yt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Te(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class zt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=dt(n.nodeName):this.e=Z(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Pt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(P)}}class it extends zt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}}function Ne(t,e){return new t(e)}const G=new Map;let I=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gt(t,e){const n={stylesheet:jt(e),rules:{}};return G.set(t,n),n}function Q(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);a+=y*100+`%{${r(g,1-g)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ft(_)}_${o}`,h=_t(t),{stylesheet:u,rules:d}=G.get(h)||Gt(h,t);d[f]||(d[f]=!0,u.insertRule(`@keyframes ${f} ${_}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,I+=1,f}function U(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),I-=s,I||It())}function It(){Y(()=>{I||(G.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&P(e)}),G.clear())})}let H;function D(t){H=t}function C(){if(!H)throw new Error("Function called outside component initialization");return H}function Ae(t){C().$$.on_mount.push(t)}function Me(t){C().$$.after_update.push(t)}function Se(t){C().$$.on_destroy.push(t)}function Ce(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=yt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function je(t,e){return C().$$.context.set(t,e),e}function De(t){return C().$$.context.get(t)}function Le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const A=[],st=[];let S=[];const V=[],gt=Promise.resolve();let X=!1;function $t(){X||(X=!0,gt.then(bt))}function Pe(){return $t(),gt}function O(t){S.push(t)}function He(t){V.push(t)}const K=new Set;let N=0;function bt(){if(N!==0)return;const t=H;do{try{for(;N<A.length;){const e=A[N];N++,D(e),Wt(e.$$)}}catch(e){throw A.length=0,N=0,e}for(D(null),A.length=0,N=0;st.length;)st.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];K.has(n)||(K.add(n),n())}S.length=0}while(A.length);for(;V.length;)V.pop()();X=!1,K.clear(),D(t)}function Wt(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Jt(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let j;function xt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function L(t,e,n){t.dispatchEvent(yt(`${e?"intro":"outro"}${n}`))}const F=new Set;let E;function Oe(){E={r:0,c:[],p:E}}function Re(){E.r||T(E.c),E=E.p}function wt(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Kt(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),E.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const vt={duration:0};function qe(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,o,c=0;function a(){r&&U(t,r)}function _(){const{delay:h=0,duration:u=300,easing:d=rt,tick:p=k,css:y}=s||vt;y&&(r=Q(t,0,1,u,h,d,y,c++)),p(0,1);const g=at()+h,v=g+u;o&&o.abort(),l=!0,O(()=>L(t,!0,"start")),o=ft($=>{if(l){if($>=v)return p(1,0),L(t,!0,"end"),a(),l=!1;if($>=g){const b=d(($-g)/u);p(b,1-b)}}return l})}let f=!1;return{start(){f||(f=!0,U(t),R(s)?(s=s(i),xt().then(_)):_())},invalidate(){f=!1},end(){l&&(a(),l=!1)}}}function Be(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function _(){a&&U(t,a)}function f(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:y=rt,tick:g=k,css:v}=l||vt,$={start:at()+d,b:u};u||($.group=E,E.r+=1),o||c?c=$:(v&&(_(),a=Q(t,r,u,p,d,y,v)),u&&g(0,1),o=f($,p),O(()=>L(t,u,"start")),ft(b=>{if(c&&b>c.start&&(o=f(c,p),c=null,L(t,o.b,"start"),v&&(_(),a=Q(t,r,o.b,o.duration,0,y,l.css))),o){if(b>=o.end)g(r=o.b,1-r),L(t,o.b,"end"),c||(o.b?_():--o.group.r||T(o.group.c)),o=null;else if(b>=o.start){const q=b-o.start;r=o.a+o.d*y(q/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){R(l)?xt().then(()=>{l=l(s),h(u)}):h(u)},end(){_(),o=c=null}}}function ze(t,e){t.d(1),e.delete(t.key)}function Fe(t,e){Kt(t,1,1,()=>{e.delete(t.key)})}function Ge(t,e,n,i,s,l,r,o,c,a,_,f){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,v=new Map,$=[];for(d=u;d--;){const m=f(s,l,d),x=n(m);let w=r.get(x);w?i&&$.push(()=>w.p(m,e)):(w=a(x,m),w.c()),g.set(x,y[d]=w),x in p&&v.set(x,Math.abs(d-p[x]))}const b=new Set,q=new Set;function J(m){wt(m,1),m.m(o,_),r.set(m.key,m),_=m.first,u--}for(;h&&u;){const m=y[u-1],x=t[h-1],w=m.key,B=x.key;m===x?(_=m.first,h--,u--):g.has(B)?!r.has(w)||b.has(w)?J(m):q.has(B)?h--:v.get(w)>v.get(B)?(q.add(w),J(m)):(b.add(B),h--):(c(x,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;u;)J(y[u-1]);return T($),y}function Ie(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function We(t){return typeof t=="object"&&t!==null?t:{}}function Je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ke(t){t&&t.c()}function Qe(t,e){t&&t.l(e)}function Qt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(ot).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),l.forEach(O)}function Ut(t,e){const n=t.$$;n.fragment!==null&&(Jt(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Vt(t,e){t.$$.dirty[0]===-1&&(A.push(t),$t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ue(t,e,n,i,s,l,r,o=[-1]){const c=H;D(t);const a=t.$$={fragment:null,ctx:[],props:l,update:k,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:et(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&s(a.ctx[f],a.ctx[f]=d)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](d),_&&Vt(t,f)),h}):[],a.update(),_=!0,T(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Nt();const f=qt(e.target);a.fragment&&a.fragment.l(f),f.forEach(P)}else a.fragment&&a.fragment.c();e.intro&&wt(t.$$.fragment),Qt(t,e.target,e.anchor,e.customElement),At(),bt()}D(c)}class Ve{$destroy(){Ut(this,1),this.$destroy=k}$on(e,n){if(!R(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!kt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ze as $,Qt as A,Ut as B,ke as C,Lt as D,k as E,Et as F,Ie as G,We as H,se as I,dt as J,ye as K,de as L,R as M,ue as N,ce as O,Ge as P,Fe as Q,Le as R,Ve as S,O as T,Yt as U,Zt as V,ae as W,te as X,ne as Y,ie as Z,ee as _,fe as a,Ee as a0,xe as a1,ve as a2,he as a3,T as a4,it as a5,$e as a6,Ce as a7,je as a8,Se as a9,le as aa,De as ab,Je as ac,He as ad,qe as ae,oe as af,Te as ag,me as ah,re as ai,Be as aj,Ht as b,ge as c,Kt as d,_e as e,Re as f,wt as g,P as h,Ue as i,Me as j,Z as k,pe as l,qt as m,Ot as n,Ae as o,we as p,tt as q,Bt as r,Xt as s,Pe as t,be as u,Oe as v,st as w,Ne as x,Ke as y,Qe as z};
