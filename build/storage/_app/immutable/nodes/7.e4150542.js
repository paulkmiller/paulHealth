import{S as D,i as F,s as H,e as _,b as u,P as I,f as b,g as m,d as h,h as d,x as k,y as $,z as L,A as C,G as R,H as x,v as q,B as y,Q as N,F as P}from"../chunks/index.5190b064.js";import{H as S}from"../chunks/Hero.1fb25a1f.js";import{I as j,L as z,F as A}from"../chunks/Faq.59e90c22.js";import{D as G}from"../chunks/Duplex.a6bac538.js";function v(s,n,r){const e=s.slice();return e[2]=n[r],e[4]=r,e}function w(s,n){let r,e,l,c;const f=[B(n[2])];var t=n[1][n[2].type];function o(a){let i={};for(let p=0;p<f.length;p+=1)i=P(i,f[p]);return{props:i}}return t&&(e=k(t,o())),{key:s,first:null,c(){r=_(),e&&$(e.$$.fragment),l=_(),this.h()},l(a){r=_(),e&&L(e.$$.fragment,a),l=_(),this.h()},h(){this.first=r},m(a,i){u(a,r,i),e&&C(e,a,i),u(a,l,i),c=!0},p(a,i){n=a;const p=i&1?R(f,[x(B(n[2]))]):{};if(i&1&&t!==(t=n[1][n[2].type])){if(e){q();const g=e;h(g.$$.fragment,1,0,()=>{y(g,1)}),b()}t?(e=k(t,o()),$(e.$$.fragment),m(e.$$.fragment,1),C(e,l.parentNode,l)):e=null}else t&&e.$set(p)},i(a){c||(e&&m(e.$$.fragment,a),c=!0)},o(a){e&&h(e.$$.fragment,a),c=!1},d(a){a&&d(r),a&&d(l),e&&y(e,a)}}}function M(s){let n=[],r=new Map,e,l,c=s[0].pageContent;const f=t=>t[4];for(let t=0;t<c.length;t+=1){let o=v(s,c,t),a=f(o);r.set(a,n[t]=w(a,o))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=_()},l(t){for(let o=0;o<n.length;o+=1)n[o].l(t);e=_()},m(t,o){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,o);u(t,e,o),l=!0},p(t,[o]){o&3&&(c=t[0].pageContent,q(),n=I(n,o,f,1,t,c,r,e.parentNode,N,w,e,v),b())},i(t){if(!l){for(let o=0;o<c.length;o+=1)m(n[o]);l=!0}},o(t){for(let o=0;o<n.length;o+=1)h(n[o]);l=!1},d(t){for(let o=0;o<n.length;o+=1)n[o].d(t);t&&d(e)}}}function B(s){switch(s.type){case"ComponentHeroBanner":return{data:s.data.heroBanners[0]};case"ComponentDuplex":return{data:s.data.duplexes[0]};case"ComponentInfoBlock":return{data:s.data.infoBlocks[0]};case"ComponentLogoRack":return{data:s.data.logoRacks[0]};case"ComponentFaq":return{data:s.data.faqs};default:return{}}}function Q(s,n,r){let{data:e}=n;const l={ComponentHeroBanner:S,ComponentDuplex:G,ComponentInfoBlock:j,ComponentLogoRack:z,ComponentFaq:A};return s.$$set=c=>{"data"in c&&r(0,e=c.data)},[e,l]}class T extends D{constructor(n){super(),F(this,n,Q,M,H,{data:0})}}export{T as component};
