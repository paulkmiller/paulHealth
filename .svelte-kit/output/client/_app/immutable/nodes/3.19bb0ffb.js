import{S as Z,i as J,s as K,k as w,a as F,q as z,l as C,m as D,h as m,c as M,r as Q,n as b,p as V,O as te,b as H,D as v,u as he,E as R,X as de,Y as me,Z as pe,_ as ge,g as T,v as G,d as P,f as O,P as W,Q as x,U as ve,e as L,y as N,z as X,A,B as U,x as le,G as ke,H as be,F as ye}from"../chunks/index.5190b064.js";import{H as we}from"../chunks/Hero.1fb25a1f.js";import{I as Ce,L as $e,F as De}from"../chunks/Faq.b60e3533.js";import{D as Ie}from"../chunks/DynamicDuplex.6dcaa4b7.js";import{D as Ee}from"../chunks/Duplex.a6bac538.js";import{S as Be}from"../chunks/SEOMetaData.b746ec36.js";function ae(a){let e,l=a[0].jobTitle+"",t;return{c(){e=w("h6"),t=z(l),this.h()},l(n){e=C(n,"H6",{class:!0});var s=D(e);t=Q(s,l),s.forEach(m),this.h()},h(){b(e,"class","svelte-1kkd1wl")},m(n,s){H(n,e,s),v(e,t)},p(n,s){s&1&&l!==(l=n[0].jobTitle+"")&&he(t,l)},d(n){n&&m(e)}}}function qe(a){let e,l,t,n,s,h,i,o,r,f=(a[0].name||"Paulonaut")+"",I,B,E,q,k=a[0].bio+"",y,_=a[0].jobTitle&&ae(a);return{c(){e=w("figure"),l=w("div"),t=w("div"),n=F(),s=w("div"),h=F(),i=w("figcaption"),o=w("h4"),r=w("strong"),I=z(f),B=F(),_&&_.c(),E=F(),q=w("p"),this.h()},l(d){e=C(d,"FIGURE",{class:!0,style:!0});var g=D(e);l=C(g,"DIV",{class:!0});var p=D(l);t=C(p,"DIV",{class:!0,style:!0}),D(t).forEach(m),n=M(p),s=C(p,"DIV",{class:!0}),D(s).forEach(m),p.forEach(m),h=M(g),i=C(g,"FIGCAPTION",{class:!0});var S=D(i);o=C(S,"H4",{class:!0});var j=D(o);r=C(j,"STRONG",{});var c=D(r);I=Q(c,f),c.forEach(m),j.forEach(m),B=M(S),_&&_.l(S),E=M(S),q=C(S,"P",{class:!0});var u=D(q);u.forEach(m),S.forEach(m),g.forEach(m),this.h()},h(){var d;b(t,"class","avatar svelte-1kkd1wl"),V(t,"background-image","url("+((d=a[0].avatar)==null?void 0:d.url)+"?fm=webp&q=80)"),b(s,"class","circle svelte-1kkd1wl"),b(l,"class","avatar-wrapper"),b(o,"class","svelte-1kkd1wl"),b(q,"class","bio-text svelte-1kkd1wl"),b(i,"class","svelte-1kkd1wl"),b(e,"class",y=te(a[1])+" svelte-1kkd1wl"),V(e,"background-color",a[2]),V(e,"color",a[3])},m(d,g){H(d,e,g),v(e,l),v(l,t),v(l,n),v(l,s),v(e,h),v(e,i),v(i,o),v(o,r),v(r,I),v(i,B),_&&_.m(i,null),v(i,E),v(i,q),q.innerHTML=k},p(d,[g]){var p;g&1&&V(t,"background-image","url("+((p=d[0].avatar)==null?void 0:p.url)+"?fm=webp&q=80)"),g&1&&f!==(f=(d[0].name||"Paulonaut")+"")&&he(I,f),d[0].jobTitle?_?_.p(d,g):(_=ae(d),_.c(),_.m(i,E)):_&&(_.d(1),_=null),g&1&&k!==(k=d[0].bio+"")&&(q.innerHTML=k),g&2&&y!==(y=te(d[1])+" svelte-1kkd1wl")&&b(e,"class",y),g&4&&V(e,"background-color",d[2]),g&8&&V(e,"color",d[3])},i:R,o:R,d(d){d&&m(e),_&&_.d()}}}function He(a,e,l){let{entry:t}=e,n,s,h;return a.$$set=i=>{"entry"in i&&l(0,t=i.entry)},a.$$.update=()=>{a.$$.dirty&3&&(l(1,n=t.cardStyle==!0?"leadership":"employee"),l(2,s=n==="leadership"?"#29397a":"#fff"),l(3,h=n==="leadership"?"#fff":"#000"))},[t,n,s,h]}class _e extends Z{constructor(e){super(),J(this,e,He,qe,K,{entry:0})}}function se(a,e,l){const t=a.slice();return t[12]=e[l],t[0]=l,t}function ne(a,e,l){const t=a.slice();return t[12]=e[l],t[0]=l,t}function Se(a){let e,l;return{c(){e=w("img"),this.h()},l(t){e=C(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){b(e,"class","header-image svelte-1m5gwyp"),ve(e.src,l=a[4]+"?fm=webp&q=80")||b(e,"src",l),b(e,"alt",a[5])},m(t,n){H(t,e,n)},p:R,d(t){t&&m(e)}}}function Te(a){let e,l;return{c(){e=w("h2"),l=z(a[6]),this.h()},l(t){e=C(t,"H2",{class:!0});var n=D(e);l=Q(n,a[6]),n.forEach(m),this.h()},h(){b(e,"class","headline svelte-1m5gwyp")},m(t,n){H(t,e,n),v(e,l)},p:R,d(t){t&&m(e)}}}function Fe(a){let e,l;return{c(){e=w("p"),l=z(a[7]),this.h()},l(t){e=C(t,"P",{class:!0});var n=D(e);l=Q(n,a[7]),n.forEach(m),this.h()},h(){b(e,"class","headlineCopy svelte-1m5gwyp")},m(t,n){H(t,e,n),v(e,l)},p:R,d(t){t&&m(e)}}}function Me(a){let e,l;return{c(){e=w("h5"),l=z(a[8]),this.h()},l(t){e=C(t,"H5",{class:!0});var n=D(e);l=Q(n,a[8]),n.forEach(m),this.h()},h(){b(e,"class","subline svelte-1m5gwyp")},m(t,n){H(t,e,n),v(e,l)},p:R,d(t){t&&m(e)}}}function re(a){let e,l=[],t=new Map,n,s=a[1];const h=i=>i[12].name;for(let i=0;i<s.length;i+=1){let o=ne(a,s,i),r=h(o);t.set(r,l[i]=oe(r,o))}return{c(){e=w("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=C(i,"DIV",{class:!0});var o=D(e);for(let r=0;r<l.length;r+=1)l[r].l(o);o.forEach(m),this.h()},h(){b(e,"class","leadership svelte-1m5gwyp")},m(i,o){H(i,e,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null);n=!0},p(i,o){o&2&&(s=i[1],G(),l=W(l,o,h,1,i,s,t,e,x,oe,null,ne),O())},i(i){if(!n){for(let o=0;o<s.length;o+=1)T(l[o]);n=!0}},o(i){for(let o=0;o<l.length;o+=1)P(l[o]);n=!1},d(i){i&&m(e);for(let o=0;o<l.length;o+=1)l[o].d()}}}function oe(a,e){let l,t,n;return t=new _e({props:{entry:e[12],index:e[0]}}),{key:a,first:null,c(){l=L(),N(t.$$.fragment),this.h()},l(s){l=L(),X(t.$$.fragment,s),this.h()},h(){this.first=l},m(s,h){H(s,l,h),A(t,s,h),n=!0},p(s,h){e=s;const i={};h&2&&(i.entry=e[12]),h&2&&(i.index=e[0]),t.$set(i)},i(s){n||(T(t.$$.fragment,s),n=!0)},o(s){P(t.$$.fragment,s),n=!1},d(s){s&&m(l),U(t,s)}}}function ie(a,e){let l,t,n;return t=new _e({props:{entry:e[12],index:e[0]}}),{key:a,first:null,c(){l=L(),N(t.$$.fragment),this.h()},l(s){l=L(),X(t.$$.fragment,s),this.h()},h(){this.first=l},m(s,h){H(s,l,h),A(t,s,h),n=!0},p(s,h){e=s;const i={};h&4&&(i.entry=e[12]),h&4&&(i.index=e[0]),t.$set(i)},i(s){n||(T(t.$$.fragment,s),n=!0)},o(s){P(t.$$.fragment,s),n=!1},d(s){s&&m(l),U(t,s)}}}function Pe(a){let e,l,t,n,s,h,i,o,r,f=[],I=new Map,B,E;const q=a[11].default,k=de(q,a,a[10],null);let y=a[4]&&Se(a),_=a[6]&&Te(a),d=a[7]&&Fe(a),g=a[8]&&Me(a),p=a[1]&&re(a),S=a[2];const j=c=>c[12].name;for(let c=0;c<S.length;c+=1){let u=se(a,S,c),$=j(u);I.set($,f[c]=ie($,u))}return{c(){e=w("div"),k&&k.c(),l=F(),t=w("div"),y&&y.c(),n=F(),_&&_.c(),s=F(),d&&d.c(),h=F(),g&&g.c(),i=F(),p&&p.c(),o=F(),r=w("div");for(let c=0;c<f.length;c+=1)f[c].c();this.h()},l(c){e=C(c,"DIV",{class:!0,style:!0});var u=D(e);k&&k.l(u),l=M(u),t=C(u,"DIV",{class:!0});var $=D(t);y&&y.l($),n=M($),_&&_.l($),s=M($),d&&d.l($),h=M($),g&&g.l($),$.forEach(m),i=M(u),p&&p.l(u),o=M(u),r=C(u,"DIV",{class:!0});var ee=D(r);for(let Y=0;Y<f.length;Y+=1)f[Y].l(ee);ee.forEach(m),u.forEach(m),this.h()},h(){b(t,"class","header-container svelte-1m5gwyp"),b(r,"class","employees svelte-1m5gwyp"),b(e,"class",B="bio-cards-section bioCard-"+a[0]+" divider "+(a[3]>=3?"more-than-three":"")+" svelte-1m5gwyp"),V(e,"--columns",a[3])},m(c,u){H(c,e,u),k&&k.m(e,null),v(e,l),v(e,t),y&&y.m(t,null),v(t,n),_&&_.m(t,null),v(t,s),d&&d.m(t,null),v(t,h),g&&g.m(t,null),v(e,i),p&&p.m(e,null),v(e,o),v(e,r);for(let $=0;$<f.length;$+=1)f[$]&&f[$].m(r,null);E=!0},p(c,[u]){k&&k.p&&(!E||u&1024)&&me(k,q,c,c[10],E?ge(q,c[10],u,null):pe(c[10]),null),c[4]&&y.p(c,u),c[6]&&_.p(c,u),c[7]&&d.p(c,u),c[8]&&g.p(c,u),c[1]?p?(p.p(c,u),u&2&&T(p,1)):(p=re(c),p.c(),T(p,1),p.m(e,o)):p&&(G(),P(p,1,1,()=>{p=null}),O()),u&4&&(S=c[2],G(),f=W(f,u,j,1,c,S,I,r,x,ie,null,se),O()),(!E||u&9&&B!==(B="bio-cards-section bioCard-"+c[0]+" divider "+(c[3]>=3?"more-than-three":"")+" svelte-1m5gwyp"))&&b(e,"class",B),(!E||u&8)&&V(e,"--columns",c[3])},i(c){if(!E){T(k,c),T(p);for(let u=0;u<S.length;u+=1)T(f[u]);E=!0}},o(c){P(k,c),P(p);for(let u=0;u<f.length;u+=1)P(f[u]);E=!1},d(c){c&&m(e),k&&k.d(c),y&&y.d(),_&&_.d(),d&&d.d(),g&&g.d(),p&&p.d();for(let u=0;u<f.length;u+=1)f[u].d()}}}function Ve(a,e,l){var k,y;let{$$slots:t={},$$scope:n}=e,{data:s}=e,{index:h=0}=e,i=[],o=[],r=0,f=(k=s.headerImage)==null?void 0:k.url,I=(y=s.headerImage)==null?void 0:y.description,B=s.headline||"",E=s.headlineCopy||"",q=s.subline||"";return a.$$set=_=>{"data"in _&&l(9,s=_.data),"index"in _&&l(0,h=_.index),"$$scope"in _&&l(10,n=_.$$scope)},a.$$.update=()=>{if(a.$$.dirty&514){let _=s.bioCardsDataCollection.items;l(1,i=_.filter(d=>d.cardStyle==!0)),l(2,o=_.filter(d=>d.cardStyle==!1)),l(3,r=i.length)}},[h,i,o,r,f,I,B,E,q,s,n,t]}class Le extends Z{constructor(e){super(),J(this,e,Ve,Pe,K,{data:9,index:0})}}function fe(a,e,l){const t=a.slice();return t[2]=e[l],t[4]=l,t}function ce(a,e){let l,t,n,s;const h=[ue(e[2])];var i=e[1][e[2].type];function o(r){let f={};for(let I=0;I<h.length;I+=1)f=ye(f,h[I]);return{props:f}}return i&&(t=le(i,o())),{key:a,first:null,c(){l=L(),t&&N(t.$$.fragment),n=L(),this.h()},l(r){l=L(),t&&X(t.$$.fragment,r),n=L(),this.h()},h(){this.first=l},m(r,f){H(r,l,f),t&&A(t,r,f),H(r,n,f),s=!0},p(r,f){e=r;const I=f&1?ke(h,[be(ue(e[2]))]):{};if(f&1&&i!==(i=e[1][e[2].type])){if(t){G();const B=t;P(B.$$.fragment,1,0,()=>{U(B,1)}),O()}i?(t=le(i,o()),N(t.$$.fragment),T(t.$$.fragment,1),A(t,n.parentNode,n)):t=null}else i&&t.$set(I)},i(r){s||(t&&T(t.$$.fragment,r),s=!0)},o(r){t&&P(t.$$.fragment,r),s=!1},d(r){r&&m(l),r&&m(n),t&&U(t,r)}}}function Re(a){let e=[],l=new Map,t,n,s,h=a[0].pageContent;const i=o=>o[4];for(let o=0;o<h.length;o+=1){let r=fe(a,h,o),f=i(r);l.set(f,e[o]=ce(f,r))}return n=new Be({props:{data:a[0]}}),{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=F(),N(n.$$.fragment)},l(o){for(let r=0;r<e.length;r+=1)e[r].l(o);t=M(o),X(n.$$.fragment,o)},m(o,r){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(o,r);H(o,t,r),A(n,o,r),s=!0},p(o,[r]){r&3&&(h=o[0].pageContent,G(),e=W(e,r,i,1,o,h,l,t.parentNode,x,ce,t,fe),O());const f={};r&1&&(f.data=o[0]),n.$set(f)},i(o){if(!s){for(let r=0;r<h.length;r+=1)T(e[r]);T(n.$$.fragment,o),s=!0}},o(o){for(let r=0;r<e.length;r+=1)P(e[r]);P(n.$$.fragment,o),s=!1},d(o){for(let r=0;r<e.length;r+=1)e[r].d(o);o&&m(t),U(n,o)}}}function ue(a){switch(a.type){case"ComponentHeroBanner":return{data:a.data.heroBanners[0]};case"BioCards":return{data:a.data.bioCards[0]};case"ComponentDuplex":return{data:a.data.duplexes[0]};case"ComponentDynamicDuplex":return{data:a.data.dynamicDuplexes[0]};case"ComponentCarousel":return{data:a.data.quotes[0]};case"ComponentInfoBlock":return{data:a.data.infoBlocks[0]};case"ComponentLogoRack":return{data:a.data.logoRacks[0]};case"ComponentFaq":return{data:a.data.faqs};default:return{}}}function je(a,e,l){let{data:t}=e;const n={ComponentHeroBanner:we,BioCards:Le,ComponentDuplex:Ee,ComponentDynamicDuplex:Ie,ComponentInfoBlock:Ce,ComponentLogoRack:$e,ComponentFaq:De};return a.$$set=s=>{"data"in s&&l(0,t=s.data)},[t,n]}class Qe extends Z{constructor(e){super(),J(this,e,je,Re,K,{data:0})}}export{Qe as component};