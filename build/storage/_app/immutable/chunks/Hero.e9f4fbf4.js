import{S as X,i as Y,s as Z,X as F,k as w,a as j,l as E,m as z,h as p,c as D,n as c,p as L,b as S,D as y,Y as J,Z as K,_ as Q,g as $,d as T,o as x,w as ee,e as O,v as V,f as A,y as H,z as q,U as R,O as C,A as B,B as N,q as te,r as ae,u as se}from"./index.3e776b27.js";import{B as le}from"./ButtonLink.5274dc1a.js";import{T as ne}from"./TextWithLineBreaks.f9a7a950.js";function ie(l){let t,a,e,s,i,r,v,u;const g=l[6].default,m=F(g,l,l[5],null);return{c(){t=w("div"),a=w("span"),e=w("span"),m&&m.c(),i=j(),r=w("div"),v=w("div"),this.h()},l(n){t=E(n,"DIV",{style:!0});var h=z(t);a=E(h,"SPAN",{id:!0,style:!0,class:!0});var b=z(a);e=E(b,"SPAN",{"data-aos":!0,"data-aos-easing":!0,"data-aos-delay":!0,"data-aos-offset":!0});var I=z(e);m&&m.l(I),I.forEach(p),b.forEach(p),i=D(h),r=E(h,"DIV",{class:!0});var f=z(r);v=E(f,"DIV",{id:!0,style:!0,class:!0}),z(v).forEach(p),f.forEach(p),h.forEach(p),this.h()},h(){c(e,"data-aos",l[2]),c(e,"data-aos-easing","ease-in-back"),c(e,"data-aos-delay",s=l[0]+l[1]),c(e,"data-aos-offset","0"),c(a,"id","text"),L(a,"animation-delay",l[0]+"ms"),c(a,"class","svelte-vd4nic"),c(v,"id","cover"),L(v,"animation-delay",l[0]+"ms"),c(v,"class","svelte-vd4nic"),c(r,"class","cover_container svelte-vd4nic"),L(t,"position","relative"),L(t,"display","inline-block")},m(n,h){S(n,t,h),y(t,a),y(a,e),m&&m.m(e,null),y(t,i),y(t,r),y(r,v),l[7](t),u=!0},p(n,[h]){m&&m.p&&(!u||h&32)&&J(m,g,n,n[5],u?Q(g,n[5],h,null):K(n[5]),null),(!u||h&4)&&c(e,"data-aos",n[2]),(!u||h&3&&s!==(s=n[0]+n[1]))&&c(e,"data-aos-delay",s),(!u||h&1)&&L(a,"animation-delay",n[0]+"ms"),(!u||h&1)&&L(v,"animation-delay",n[0]+"ms")},i(n){u||($(m,n),u=!0)},o(n){T(m,n),u=!1},d(n){n&&p(t),m&&m.d(n),l[7](null)}}}function re(l,t,a){let{$$slots:e={},$$scope:s}=t,{delay:i=200}=t,{aos_delay:r=200}=t,{aos_anim:v="fade-zoom-in"}=t,{once:u=!1}=t,g;x(()=>{new IntersectionObserver(h=>{h.forEach(b=>{u?b.isIntersecting&&b.target.classList.add("reveal"):b.target.classList.toggle("reveal",b.isIntersecting)})}).observe(g)});function m(n){ee[n?"unshift":"push"](()=>{g=n,a(3,g)})}return l.$$set=n=>{"delay"in n&&a(0,i=n.delay),"aos_delay"in n&&a(1,r=n.aos_delay),"aos_anim"in n&&a(2,v=n.aos_anim),"once"in n&&a(4,u=n.once),"$$scope"in n&&a(5,s=n.$$scope)},[i,r,v,g,u,s,e,m]}class M extends X{constructor(t){super(),Y(this,t,re,ie,Z,{delay:0,aos_delay:1,aos_anim:2,once:4})}}function G(l){let t,a,e,s,i,r,v,u,g,m,n,h,b,I,f=l[0].subline&&U(l);g=new M({props:{delay:600,aos_delay:200,text:l[0].headline,$$slots:{default:[fe]},$$scope:{ctx:l}}}),n=new M({props:{delay:900,aos_delay:300,text:l[0].headline,$$slots:{default:[ce]},$$scope:{ctx:l}}});let _=l[0].targetPage&&W(l);return{c(){t=w("section"),a=w("img"),i=j(),r=w("div"),f&&f.c(),v=j(),u=w("h1"),H(g.$$.fragment),m=j(),H(n.$$.fragment),h=j(),_&&_.c(),this.h()},l(o){t=E(o,"SECTION",{class:!0});var d=z(t);a=E(d,"IMG",{class:!0,src:!0,alt:!0}),i=D(d),r=E(d,"DIV",{class:!0});var k=z(r);f&&f.l(k),v=D(k),u=E(k,"H1",{class:!0});var P=z(u);q(g.$$.fragment,P),P.forEach(p),m=D(k),q(n.$$.fragment,k),h=D(k),_&&_.l(k),k.forEach(p),d.forEach(p),this.h()},h(){c(a,"class","heroImage svelte-1tclrzj"),R(a.src,e=l[0].image.url+"?fm=webp&q=80")||c(a,"src",e),c(a,"alt",s=l[0].image.description),c(u,"class","headline svelte-1tclrzj"),c(r,"class",b=C(l[0].contentStyle?"content-left":"content-right")+" svelte-1tclrzj"),c(t,"class","heroBanner svelte-1tclrzj")},m(o,d){S(o,t,d),y(t,a),y(t,i),y(t,r),f&&f.m(r,null),y(r,v),y(r,u),B(g,u,null),y(r,m),B(n,r,null),y(r,h),_&&_.m(r,null),I=!0},p(o,d){(!I||d&1&&!R(a.src,e=o[0].image.url+"?fm=webp&q=80"))&&c(a,"src",e),(!I||d&1&&s!==(s=o[0].image.description))&&c(a,"alt",s),o[0].subline?f?(f.p(o,d),d&1&&$(f,1)):(f=U(o),f.c(),$(f,1),f.m(r,v)):f&&(V(),T(f,1,1,()=>{f=null}),A());const k={};d&1&&(k.text=o[0].headline),d&3&&(k.$$scope={dirty:d,ctx:o}),g.$set(k);const P={};d&1&&(P.text=o[0].headline),d&3&&(P.$$scope={dirty:d,ctx:o}),n.$set(P),o[0].targetPage?_?(_.p(o,d),d&1&&$(_,1)):(_=W(o),_.c(),$(_,1),_.m(r,null)):_&&(V(),T(_,1,1,()=>{_=null}),A()),(!I||d&1&&b!==(b=C(o[0].contentStyle?"content-left":"content-right")+" svelte-1tclrzj"))&&c(r,"class",b)},i(o){I||($(f),$(g.$$.fragment,o),$(n.$$.fragment,o),$(_),I=!0)},o(o){T(f),T(g.$$.fragment,o),T(n.$$.fragment,o),T(_),I=!1},d(o){o&&p(t),f&&f.d(),N(g),N(n),_&&_.d()}}}function U(l){let t,a,e;return a=new M({props:{delay:300,aos_delay:100,text:l[0].headline,$$slots:{default:[oe]},$$scope:{ctx:l}}}),{c(){t=w("span"),H(a.$$.fragment),this.h()},l(s){t=E(s,"SPAN",{class:!0});var i=z(t);q(a.$$.fragment,i),i.forEach(p),this.h()},h(){c(t,"class","subline svelte-1tclrzj")},m(s,i){S(s,t,i),B(a,t,null),e=!0},p(s,i){const r={};i&1&&(r.text=s[0].headline),i&3&&(r.$$scope={dirty:i,ctx:s}),a.$set(r)},i(s){e||($(a.$$.fragment,s),e=!0)},o(s){T(a.$$.fragment,s),e=!1},d(s){s&&p(t),N(a)}}}function oe(l){let t=l[0].subline+"",a;return{c(){a=te(t)},l(e){a=ae(e,t)},m(e,s){S(e,a,s)},p(e,s){s&1&&t!==(t=e[0].subline+"")&&se(a,t)},d(e){e&&p(a)}}}function fe(l){let t,a;return t=new ne({props:{inputText:l[0].headline}}),{c(){H(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,s){B(t,e,s),a=!0},p(e,s){const i={};s&1&&(i.inputText=e[0].headline),t.$set(i)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){T(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function ce(l){let t,a=l[0].bodyText+"";return{c(){t=w("div"),this.h()},l(e){t=E(e,"DIV",{class:!0});var s=z(t);s.forEach(p),this.h()},h(){c(t,"class","content svelte-1tclrzj")},m(e,s){S(e,t,s),t.innerHTML=a},p(e,s){s&1&&a!==(a=e[0].bodyText+"")&&(t.innerHTML=a)},d(e){e&&p(t)}}}function W(l){let t,a;return t=new le({props:{path:l[0].targetPage,text:l[0].ctaText,background_color:"#fff",ariaText:l[0].ctaText,ariaLink:l[0].targetPage,aos_delay:1300,aos_anim:"fade-in"}}),{c(){H(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,s){B(t,e,s),a=!0},p(e,s){const i={};s&1&&(i.path=e[0].targetPage),s&1&&(i.text=e[0].ctaText),s&1&&(i.ariaText=e[0].ctaText),s&1&&(i.ariaLink=e[0].targetPage),t.$set(i)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){T(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function ue(l){let t,a,e=l[0]&&G(l);return{c(){e&&e.c(),t=O()},l(s){e&&e.l(s),t=O()},m(s,i){e&&e.m(s,i),S(s,t,i),a=!0},p(s,[i]){s[0]?e?(e.p(s,i),i&1&&$(e,1)):(e=G(s),e.c(),$(e,1),e.m(t.parentNode,t)):e&&(V(),T(e,1,1,()=>{e=null}),A())},i(s){a||($(e),a=!0)},o(s){T(e),a=!1},d(s){e&&e.d(s),s&&p(t)}}}function _e(l,t,a){let{data:e}=t;return l.$$set=s=>{"data"in s&&a(0,e=s.data)},[e]}class ge extends X{constructor(t){super(),Y(this,t,_e,ue,Z,{data:0})}}export{ge as H};
