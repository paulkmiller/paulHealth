import{S as W,i as X,s as Z,e as J,b as V,E as K,h as r,o as x,k as i,q as U,a as S,l as c,m as u,r as B,c as T,n as l,p as $,D as o,$ as Q,L as C,a0 as ee}from"../chunks/index.3e776b27.js";import{h as te}from"../chunks/singletons.11d00cf0.js";const se=te("goto");function R(f){let s,e,t,a,p,P,k,d,v,q,b,h,A,y,_,N,I,E,g,O,L;return{c(){s=i("div"),e=i("div"),t=i("div"),a=i("div"),p=i("h5"),P=U("Enter Password to Proceed"),k=S(),d=i("button"),v=i("span"),q=S(),b=i("div"),h=i("input"),A=S(),y=i("div"),_=i("button"),N=U("Submit"),I=S(),E=i("style"),g=U(`.navbar, .footer {
      display: none !important;
    }`),this.h()},l(n){s=c(n,"DIV",{class:!0,style:!0});var m=u(s);e=c(m,"DIV",{class:!0});var M=u(e);t=c(M,"DIV",{class:!0});var w=u(t);a=c(w,"DIV",{class:!0});var D=u(a);p=c(D,"H5",{class:!0});var H=u(p);P=B(H,"Enter Password to Proceed"),H.forEach(r),k=T(D),d=c(D,"BUTTON",{type:!0,class:!0,"aria-label":!0});var Y=u(d);v=c(Y,"SPAN",{"aria-hidden":!0}),u(v).forEach(r),Y.forEach(r),D.forEach(r),q=T(w),b=c(w,"DIV",{class:!0});var j=u(b);h=c(j,"INPUT",{type:!0,class:!0,placeholder:!0}),j.forEach(r),A=T(w),y=c(w,"DIV",{class:!0});var z=u(y);_=c(z,"BUTTON",{type:!0,class:!0});var F=u(_);N=B(F,"Submit"),F.forEach(r),z.forEach(r),w.forEach(r),M.forEach(r),m.forEach(r),I=T(n),E=c(n,"STYLE",{});var G=u(E);g=B(G,`.navbar, .footer {
      display: none !important;
    }`),G.forEach(r),this.h()},h(){l(p,"class","modal-title"),l(v,"aria-hidden","true"),l(d,"type","button"),l(d,"class","btn btn-close"),l(d,"aria-label","Close"),l(a,"class","modal-header"),l(h,"type","password"),l(h,"class","form-control"),l(h,"placeholder","Enter password"),l(b,"class","modal-body"),l(_,"type","button"),l(_,"class","btn btn-primary"),l(y,"class","modal-footer svelte-1qfvi74"),l(t,"class","modal-content svelte-1qfvi74"),l(e,"class","modal-dialog modal-dialog-centered"),l(s,"class","modal show svelte-1qfvi74"),$(s,"display","block")},m(n,m){V(n,s,m),o(s,e),o(e,t),o(t,a),o(a,p),o(p,P),o(a,k),o(a,d),o(d,v),o(t,q),o(t,b),o(b,h),Q(h,f[0]),o(t,A),o(t,y),o(y,_),o(_,N),V(n,I,m),V(n,E,m),o(E,g),O||(L=[C(d,"click",f[4]),C(h,"input",f[5]),C(_,"click",f[2])],O=!0)},p(n,m){m&1&&h.value!==n[0]&&Q(h,n[0])},d(n){n&&r(s),n&&r(I),n&&r(E),O=!1,ee(L)}}}function ae(f){let s,e=f[1]&&R(f);return{c(){e&&e.c(),s=J()},l(t){e&&e.l(t),s=J()},m(t,a){e&&e.m(t,a),V(t,s,a)},p(t,[a]){t[1]?e?e.p(t,a):(e=R(t),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i:K,o:K,d(t){e&&e.d(t),t&&r(s)}}}const le="password";function oe(f,s,e){let{isAuthenticated:t}=s,a="",p=!t;x(()=>{});async function P(){a===le?(e(1,p=!1),await fetch("/api/set-password-cookie",{method:"POST"}),se("/home")):(alert("Incorrect password, please try again."),e(0,a=""))}const k=()=>e(1,p=!1);function d(){a=this.value,e(0,a)}return f.$$set=v=>{"isAuthenticated"in v&&e(3,t=v.isAuthenticated)},[a,p,P,t,k,d]}class ie extends W{constructor(s){super(),X(this,s,oe,ae,Z,{isAuthenticated:3})}}export{ie as component};
