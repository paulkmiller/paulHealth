import{S as D,i as F,s as H,e as p,b as u,P as I,f as b,g as m,d as h,h as d,x as k,y as $,z as L,A as C,G as R,H as x,v as q,B as y,Q as N,F as P}from"../chunks/index.d3addbcb.js";import{D as S}from"../chunks/Duplex.9e79eae8.js";import{I as j,L as z,F as A}from"../chunks/Faq.20b33d53.js";import{H as G}from"../chunks/Hero.2e271502.js";function w(s,n,r){const e=s.slice();return e[2]=n[r],e[4]=r,e}function B(s,n){let r,e,c,l;const f=[v(n[2])];var t=n[1][n[2].type];function o(a){let i={};for(let _=0;_<f.length;_+=1)i=P(i,f[_]);return{props:i}}return t&&(e=k(t,o())),{key:s,first:null,c(){r=p(),e&&$(e.$$.fragment),c=p(),this.h()},l(a){r=p(),e&&L(e.$$.fragment,a),c=p(),this.h()},h(){this.first=r},m(a,i){u(a,r,i),e&&C(e,a,i),u(a,c,i),l=!0},p(a,i){n=a;const _=i&1?R(f,[x(v(n[2]))]):{};if(i&1&&t!==(t=n[1][n[2].type])){if(e){q();const g=e;h(g.$$.fragment,1,0,()=>{y(g,1)}),b()}t?(e=k(t,o()),$(e.$$.fragment),m(e.$$.fragment,1),C(e,c.parentNode,c)):e=null}else t&&e.$set(_)},i(a){l||(e&&m(e.$$.fragment,a),l=!0)},o(a){e&&h(e.$$.fragment,a),l=!1},d(a){a&&d(r),a&&d(c),e&&y(e,a)}}}function M(s){let n=[],r=new Map,e,c,l=s[0].pageContent;const f=t=>t[4];for(let t=0;t<l.length;t+=1){let o=w(s,l,t),a=f(o);r.set(a,n[t]=B(a,o))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=p()},l(t){for(let o=0;o<n.length;o+=1)n[o].l(t);e=p()},m(t,o){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,o);u(t,e,o),c=!0},p(t,[o]){o&3&&(l=t[0].pageContent,q(),n=I(n,o,f,1,t,l,r,e.parentNode,N,B,e,w),b())},i(t){if(!c){for(let o=0;o<l.length;o+=1)m(n[o]);c=!0}},o(t){for(let o=0;o<n.length;o+=1)h(n[o]);c=!1},d(t){for(let o=0;o<n.length;o+=1)n[o].d(t);t&&d(e)}}}function v(s){switch(s.type){case"ComponentHeroBanner":return{data:s.data.heroBanners[0]};case"ComponentDuplex":return{data:s.data.duplexes[0]};case"ComponentInfoBlock":return{data:s.data.infoBlocks[0]};case"ComponentLogoRack":return{data:s.data.logoRacks[0]};case"ComponentFaq":return{data:s.data.faqs};default:return{}}}function Q(s,n,r){let{data:e}=n;const c={ComponentHeroBanner:G,ComponentDuplex:S,ComponentInfoBlock:j,ComponentLogoRack:z,ComponentFaq:A};return s.$$set=l=>{"data"in l&&r(0,e=l.data)},[e,c]}class T extends D{constructor(n){super(),F(this,n,Q,M,H,{data:0})}}export{T as component};