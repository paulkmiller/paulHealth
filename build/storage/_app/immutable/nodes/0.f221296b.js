import{S as Z,i as $,s as x,k as g,q as S,a as B,l as m,m as p,r as M,h,c as O,n as i,C as A,p as H,b as P,D as u,E as K,y as U,z as q,A as W,g as z,d as R,B as G,F as Q,G as Ce,H as Te,I as _e,J as Ve,K as Be,v as Oe,f as Ae,L as De,M as Qe,u as Ze,N as yt,O as _t,P as Lt,Q as Dt,e as Le,R as Ct,T as Tt,U as ht,V as Xe,j as Vt,W as Bt,o as Ot,w as At,X as zt,Y as Rt,Z as Ft,_ as Nt}from"../chunks/index.5190b064.js";import{I as ze}from"../chunks/IconBase.b7ed1dc6.js";import{p as Et,n as St}from"../chunks/stores.171dc7ef.js";function Mt(s){let e,t,l,n,a,o,c,_,r,f,d,L,v,b,C,T,k,D;return{c(){e=g("div"),t=g("div"),l=g("div"),n=g("div"),a=g("div"),o=S(" "),c=B(),_=g("div"),r=g("div"),f=S(" "),d=B(),L=g("div"),v=g("div"),b=S(" "),C=B(),T=g("div"),k=g("div"),D=S(" "),this.h()},l(w){e=m(w,"DIV",{class:!0,style:!0});var E=p(e);t=m(E,"DIV",{class:!0});var j=p(t);l=m(j,"DIV",{class:!0});var V=p(l);n=m(V,"DIV",{class:!0});var F=p(n);a=m(F,"DIV",{class:!0});var y=p(a);o=M(y," "),y.forEach(h),F.forEach(h),c=O(V),_=m(V,"DIV",{class:!0});var I=p(_);r=m(I,"DIV",{class:!0});var N=p(r);f=M(N," "),N.forEach(h),I.forEach(h),d=O(V),L=m(V,"DIV",{class:!0});var Y=p(L);v=m(Y,"DIV",{class:!0});var re=p(v);b=M(re," "),re.forEach(h),Y.forEach(h),C=O(V),T=m(V,"DIV",{class:!0});var oe=p(T);k=m(oe,"DIV",{class:!0});var J=p(k);D=M(J," "),J.forEach(h),oe.forEach(h),V.forEach(h),j.forEach(h),E.forEach(h),this.h()},h(){i(a,"class","ball ball-top-left svelte-7wj78d"),A(a,"pause-animation",s[2]),i(n,"class","single-ball svelte-7wj78d"),i(r,"class","ball ball-top-right svelte-7wj78d"),A(r,"pause-animation",s[2]),i(_,"class","contener_mixte"),i(v,"class","ball ball-bottom-left svelte-7wj78d"),A(v,"pause-animation",s[2]),i(L,"class","contener_mixte"),i(k,"class","ball ball-bottom-right svelte-7wj78d"),A(k,"pause-animation",s[2]),i(T,"class","contener_mixte"),i(l,"class","ball-container svelte-7wj78d"),A(l,"pause-animation",s[2]),i(t,"class","inner svelte-7wj78d"),i(e,"class","wrapper svelte-7wj78d"),H(e,"--size",s[0]+s[1]),H(e,"--floatSize",s[0]),H(e,"--ballTopLeftColor",s[3]),H(e,"--ballTopRightColor",s[4]),H(e,"--ballBottomLeftColor",s[5]),H(e,"--ballBottomRightColor",s[6]),H(e,"--duration",s[7])},m(w,E){P(w,e,E),u(e,t),u(t,l),u(l,n),u(n,a),u(a,o),u(l,c),u(l,_),u(_,r),u(r,f),u(l,d),u(l,L),u(L,v),u(v,b),u(l,C),u(l,T),u(T,k),u(k,D)},p(w,[E]){E&4&&A(a,"pause-animation",w[2]),E&4&&A(r,"pause-animation",w[2]),E&4&&A(v,"pause-animation",w[2]),E&4&&A(k,"pause-animation",w[2]),E&4&&A(l,"pause-animation",w[2]),E&3&&H(e,"--size",w[0]+w[1]),E&1&&H(e,"--floatSize",w[0]),E&8&&H(e,"--ballTopLeftColor",w[3]),E&16&&H(e,"--ballTopRightColor",w[4]),E&32&&H(e,"--ballBottomLeftColor",w[5]),E&64&&H(e,"--ballBottomRightColor",w[6]),E&128&&H(e,"--duration",w[7])},i:K,o:K,d(w){w&&h(e)}}}function Pt(s,e,t){let{size:l="60"}=e,{unit:n="px"}=e,{pause:a=!1}=e,{ballTopLeft:o="#FF3E00"}=e,{ballTopRight:c="#F8B334"}=e,{ballBottomLeft:_="#40B3FF"}=e,{ballBottomRight:r="#676778"}=e,{duration:f="1.5s"}=e;return s.$$set=d=>{"size"in d&&t(0,l=d.size),"unit"in d&&t(1,n=d.unit),"pause"in d&&t(2,a=d.pause),"ballTopLeft"in d&&t(3,o=d.ballTopLeft),"ballTopRight"in d&&t(4,c=d.ballTopRight),"ballBottomLeft"in d&&t(5,_=d.ballBottomLeft),"ballBottomRight"in d&&t(6,r=d.ballBottomRight),"duration"in d&&t(7,f=d.duration)},[l,n,a,o,c,_,r,f]}class jt extends Z{constructor(e){super(),$(this,e,Pt,Mt,x,{size:0,unit:1,pause:2,ballTopLeft:3,ballTopRight:4,ballBottomLeft:5,ballBottomRight:6,duration:7})}}function Ht(s){let e,t,l,n;return l=new jt({props:{size:"180",ballTopLeft:"#ADEBEF",ballTopRight:"#DA2F5C",ballBottomLeft:"#FFC126",ballBottomRight:"#FBF6E2",unit:"px",duration:"4s"}}),{c(){e=g("div"),t=g("div"),U(l.$$.fragment),this.h()},l(a){e=m(a,"DIV",{class:!0});var o=p(e);t=m(o,"DIV",{class:!0});var c=p(t);q(l.$$.fragment,c),c.forEach(h),o.forEach(h),this.h()},h(){i(t,"class","svelte-ckei2y"),i(e,"class","backdrop svelte-ckei2y")},m(a,o){P(a,e,o),u(e,t),W(l,t,null),n=!0},p:K,i(a){n||(z(l.$$.fragment,a),n=!0)},o(a){R(l.$$.fragment,a),n=!1},d(a){a&&h(e),G(l)}}}class Ut extends Z{constructor(e){super(),$(this,e,null,Ht,x,{})}}function qt(s){let e;return{c(){e=Ve("path"),this.h()},l(t){e=Be(t,"path",{d:!0}),p(e).forEach(h),this.h()},h(){i(e,"d","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z")},m(t,l){P(t,e,l)},p:K,d(t){t&&h(e)}}}function Wt(s){let e,t;const l=[{viewBox:"0 0 448 512"},s[0]];let n={$$slots:{default:[qt]},$$scope:{ctx:s}};for(let a=0;a<l.length;a+=1)n=Q(n,l[a]);return e=new ze({props:n}),{c(){U(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,o){W(e,a,o),t=!0},p(a,[o]){const c=o&1?Ce(l,[l[0],Te(a[0])]):{};o&2&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){t||(z(e.$$.fragment,a),t=!0)},o(a){R(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}function Gt(s,e,t){return s.$$set=l=>{t(0,e=Q(Q({},e),_e(l)))},e=_e(e),[e]}class Jt extends Z{constructor(e){super(),$(this,e,Gt,Wt,x,{})}}function dt(s,e,t){const l=s.slice();return l[6]=e[t],l}function Yt(s){let e,t,l=s[0].internalName+"",n,a,o,c,_;return{c(){e=g("li"),t=g("a"),n=S(l),this.h()},l(r){e=m(r,"LI",{class:!0});var f=p(e);t=m(f,"A",{href:!0,"aria-label":!0,class:!0});var d=p(t);n=M(d,l),d.forEach(h),f.forEach(h),this.h()},h(){i(t,"href",a=s[0].path),i(t,"aria-label",o="Link to the "+s[0].internalName+" page."),i(t,"class","svelte-z3mwrh"),i(e,"class","svelte-z3mwrh")},m(r,f){P(r,e,f),u(e,t),u(t,n),c||(_=De(t,"click",function(){Qe(s[3])&&s[3].apply(this,arguments)}),c=!0)},p(r,f){s=r,f&1&&l!==(l=s[0].internalName+"")&&Ze(n,l),f&1&&a!==(a=s[0].path)&&i(t,"href",a),f&1&&o!==(o="Link to the "+s[0].internalName+" page.")&&i(t,"aria-label",o)},i:K,o:K,d(r){r&&h(e),c=!1,_()}}}function Xt(s){let e,t,l,n=s[0].internalName+"",a,o,c,_,r,f,d,L,v,b,C;_=new Jt({});let T=s[0].childItemsCollection.items,k=[];for(let D=0;D<T.length;D+=1)k[D]=vt(dt(s,T,D));return{c(){e=g("li"),t=g("div"),l=g("a"),a=S(n),o=B(),c=g("div"),U(_.$$.fragment),d=B(),L=g("div");for(let D=0;D<k.length;D+=1)k[D].c();this.h()},l(D){e=m(D,"LI",{class:!0});var w=p(e);t=m(w,"DIV",{class:!0});var E=p(t);l=m(E,"A",{href:!0,class:!0,"aria-label":!0});var j=p(l);a=M(j,n),o=O(j),c=m(j,"DIV",{class:!0});var V=p(c);q(_.$$.fragment,V),V.forEach(h),j.forEach(h),E.forEach(h),d=O(w),L=m(w,"DIV",{class:!0});var F=p(L);for(let y=0;y<k.length;y+=1)k[y].l(F);F.forEach(h),w.forEach(h),this.h()},h(){i(c,"class","icon svelte-z3mwrh"),A(c,"rotated",s[1][s[4]]),i(l,"href",r=s[0].path),i(l,"class","dropdownlink svelte-z3mwrh"),i(l,"aria-label",f="Link to the "+s[0].internalName+" page."),A(l,"bgwhite",s[1][s[4]]),i(t,"class","dropbtn svelte-z3mwrh"),i(L,"class","dropdown-content svelte-z3mwrh"),H(L,"display",s[1][s[4]]?"block":"none"),i(e,"class","dropdown dropbtnWrapper svelte-z3mwrh")},m(D,w){P(D,e,w),u(e,t),u(t,l),u(l,a),u(l,o),u(l,c),W(_,c,null),u(e,d),u(e,L);for(let E=0;E<k.length;E+=1)k[E]&&k[E].m(L,null);v=!0,b||(C=De(l,"click",s[5]),b=!0)},p(D,w){if((!v||w&1)&&n!==(n=D[0].internalName+"")&&Ze(a,n),(!v||w&18)&&A(c,"rotated",D[1][D[4]]),(!v||w&1&&r!==(r=D[0].path))&&i(l,"href",r),(!v||w&1&&f!==(f="Link to the "+D[0].internalName+" page."))&&i(l,"aria-label",f),(!v||w&18)&&A(l,"bgwhite",D[1][D[4]]),w&9){T=D[0].childItemsCollection.items;let E;for(E=0;E<T.length;E+=1){const j=dt(D,T,E);k[E]?k[E].p(j,w):(k[E]=vt(j),k[E].c(),k[E].m(L,null))}for(;E<k.length;E+=1)k[E].d(1);k.length=T.length}w&18&&H(L,"display",D[1][D[4]]?"block":"none")},i(D){v||(z(_.$$.fragment,D),v=!0)},o(D){R(_.$$.fragment,D),v=!1},d(D){D&&h(e),G(_),yt(k,D),b=!1,C()}}}function vt(s){let e,t=s[6].internalName+"",l,n,a,o,c;return{c(){e=g("a"),l=S(t),this.h()},l(_){e=m(_,"A",{href:!0,class:!0,"aria-label":!0});var r=p(e);l=M(r,t),r.forEach(h),this.h()},h(){i(e,"href",n=s[6].path),i(e,"class","submenu-link svelte-z3mwrh"),i(e,"aria-label",a="Link to the "+s[6].internalName+" page.")},m(_,r){P(_,e,r),u(e,l),o||(c=De(e,"click",function(){Qe(s[3])&&s[3].apply(this,arguments)}),o=!0)},p(_,r){s=_,r&1&&t!==(t=s[6].internalName+"")&&Ze(l,t),r&1&&n!==(n=s[6].path)&&i(e,"href",n),r&1&&a!==(a="Link to the "+s[6].internalName+" page.")&&i(e,"aria-label",a)},d(_){_&&h(e),o=!1,c()}}}function Kt(s){let e,t,l,n,a;const o=[Xt,Yt],c=[];function _(r,f){return r[0].childItemsCollection.items.length>=1?0:1}return l=_(s),n=c[l]=o[l](s),{c(){e=g("li"),t=g("ul"),n.c(),this.h()},l(r){e=m(r,"LI",{class:!0,id:!0});var f=p(e);t=m(f,"UL",{class:!0});var d=p(t);n.l(d),d.forEach(h),f.forEach(h),this.h()},h(){i(t,"class","svelte-z3mwrh"),i(e,"class","linkItem svelte-z3mwrh"),i(e,"id",s[4])},m(r,f){P(r,e,f),u(e,t),c[l].m(t,null),a=!0},p(r,[f]){let d=l;l=_(r),l===d?c[l].p(r,f):(Oe(),R(c[d],1,1,()=>{c[d]=null}),Ae(),n=c[l],n?n.p(r,f):(n=c[l]=o[l](r),n.c()),z(n,1),n.m(t,null)),(!a||f&16)&&i(e,"id",r[4])},i(r){a||(z(n),a=!0)},o(r){R(n),a=!1},d(r){r&&h(e),c[l].d()}}}function Qt(s,e,t){let{nav_item:l}=e,{isDropdownOpen:n}=e,{dropdownClick:a}=e,{drawerToggle:o}=e,{id:c}=e;const _=r=>a(c,l,r);return s.$$set=r=>{"nav_item"in r&&t(0,l=r.nav_item),"isDropdownOpen"in r&&t(1,n=r.isDropdownOpen),"dropdownClick"in r&&t(2,a=r.dropdownClick),"drawerToggle"in r&&t(3,o=r.drawerToggle),"id"in r&&t(4,c=r.id)},[l,n,a,o,c,_]}class It extends Z{constructor(e){super(),$(this,e,Qt,Kt,x,{nav_item:0,isDropdownOpen:1,dropdownClick:2,drawerToggle:3,id:4})}}function gt(s,e,t){const l=s.slice();return l[5]=e[t],l[7]=t,l}function mt(s,e){let t,l,n;return l=new It({props:{nav_item:e[5],isDropdownOpen:e[2],drawerToggle:e[4],dropdownClick:e[3],id:e[7]}}),{key:s,first:null,c(){t=Le(),U(l.$$.fragment),this.h()},l(a){t=Le(),q(l.$$.fragment,a),this.h()},h(){this.first=t},m(a,o){P(a,t,o),W(l,a,o),n=!0},p(a,o){e=a;const c={};o&2&&(c.nav_item=e[5]),o&4&&(c.isDropdownOpen=e[2]),o&16&&(c.drawerToggle=e[4]),o&8&&(c.dropdownClick=e[3]),o&2&&(c.id=e[7]),l.$set(c)},i(a){n||(z(l.$$.fragment,a),n=!0)},o(a){R(l.$$.fragment,a),n=!1},d(a){a&&h(t),G(l,a)}}}function Zt(s){let e,t,l=[],n=new Map,a,o,c=s[1].nav_items;const _=r=>r[7];for(let r=0;r<c.length;r+=1){let f=gt(s,c,r),d=_(f);n.set(d,l[r]=mt(d,f))}return{c(){e=g("nav"),t=g("ul");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=m(r,"NAV",{class:!0});var f=p(e);t=m(f,"UL",{class:!0});var d=p(t);for(let L=0;L<l.length;L+=1)l[L].l(d);d.forEach(h),f.forEach(h),this.h()},h(){i(t,"class","svelte-9glfll"),i(e,"class",a=_t(s[0])+" svelte-9glfll")},m(r,f){P(r,e,f),u(e,t);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(t,null);o=!0},p(r,[f]){f&30&&(c=r[1].nav_items,Oe(),l=Lt(l,f,_,1,r,c,n,t,Dt,mt,null,gt),Ae()),(!o||f&1&&a!==(a=_t(r[0])+" svelte-9glfll"))&&i(e,"class",a)},i(r){if(!o){for(let f=0;f<c.length;f+=1)z(l[f]);o=!0}},o(r){for(let f=0;f<l.length;f+=1)R(l[f]);o=!1},d(r){r&&h(e);for(let f=0;f<l.length;f+=1)l[f].d()}}}function $t(s,e,t){let{show:l}=e,{data:n}=e,{isDropdownOpen:a}=e,{dropdownClick:o}=e,{drawerToggle:c}=e;return s.$$set=_=>{"show"in _&&t(0,l=_.show),"data"in _&&t(1,n=_.data),"isDropdownOpen"in _&&t(2,a=_.isDropdownOpen),"dropdownClick"in _&&t(3,o=_.dropdownClick),"drawerToggle"in _&&t(4,c=_.drawerToggle)},[l,n,a,o,c]}class xt extends Z{constructor(e){super(),$(this,e,$t,Zt,x,{show:0,data:1,isDropdownOpen:2,dropdownClick:3,drawerToggle:4})}}function el(s){let e,t,l,n,a,o,c,_;return{c(){e=g("button"),t=g("div"),l=B(),n=g("div"),a=B(),o=g("div"),this.h()},l(r){e=m(r,"BUTTON",{class:!0,"aria-label":!0});var f=p(e);t=m(f,"DIV",{class:!0}),p(t).forEach(h),l=O(f),n=m(f,"DIV",{class:!0}),p(n).forEach(h),a=O(f),o=m(f,"DIV",{class:!0}),p(o).forEach(h),f.forEach(h),this.h()},h(){i(t,"class","toggle-button-line svelte-dcltgg"),i(n,"class","toggle-button-line svelte-dcltgg"),i(o,"class","toggle-button-line svelte-dcltgg"),i(e,"class","toggle-button svelte-dcltgg"),i(e,"aria-label","Button to Open and Close the mobile menu"),A(e,"open",s[0])},m(r,f){P(r,e,f),u(e,t),u(e,l),u(e,n),u(e,a),u(e,o),c||(_=De(e,"click",s[1]),c=!0)},p(r,[f]){f&1&&A(e,"open",r[0])},i:K,o:K,d(r){r&&h(e),c=!1,_()}}}function tl(s,e,t){let{isOpen:l}=e;function n(a){Ct.call(this,s,a)}return s.$$set=a=>{"isOpen"in a&&t(0,l=a.isOpen)},[l,n]}class ll extends Z{constructor(e){super(),$(this,e,tl,el,x,{isOpen:0})}}const{window:Ke}=Bt;function pt(s,e,t){const l=s.slice();return l[11]=e[t],l[13]=t,l}function bt(s,e){let t,l,n;return l=new It({props:{nav_item:e[11],isDropdownOpen:e[1],drawerToggle:e[2],dropdownClick:e[3],id:e[13]}}),{key:s,first:null,c(){t=Le(),U(l.$$.fragment),this.h()},l(a){t=Le(),q(l.$$.fragment,a),this.h()},h(){this.first=t},m(a,o){P(a,t,o),W(l,a,o),n=!0},p(a,o){e=a;const c={};o&1&&(c.nav_item=e[11]),o&2&&(c.isDropdownOpen=e[1]),o&4&&(c.drawerToggle=e[2]),o&8&&(c.dropdownClick=e[3]),o&1&&(c.id=e[13]),l.$set(c)},i(a){n||(z(l.$$.fragment,a),n=!0)},o(a){R(l.$$.fragment,a),n=!1},d(a){a&&h(t),G(l,a)}}}function al(s){let e=!1,t=()=>{e=!1},l,n,a,o,c,_,r,f,d,L,v,b,C=[],T=new Map,k,D,w,E,j;Tt(s[9]);let V=s[0].nav_items;const F=y=>y[13];for(let y=0;y<V.length;y+=1){let I=pt(s,V,y),N=F(I);T.set(N,C[y]=bt(N,I))}return D=new ll({props:{isOpen:s[1]}}),D.$on("click",function(){Qe(s[2])&&s[2].apply(this,arguments)}),{c(){n=g("nav"),a=g("div"),o=g("a"),c=g("img"),f=B(),d=g("div"),L=B(),v=g("div"),b=g("ul");for(let y=0;y<C.length;y+=1)C[y].c();k=B(),U(D.$$.fragment),this.h()},l(y){n=m(y,"NAV",{class:!0,id:!0});var I=p(n);a=m(I,"DIV",{class:!0});var N=p(a);o=m(N,"A",{href:!0,"aria-label":!0});var Y=p(o);c=m(Y,"IMG",{class:!0,src:!0,alt:!0}),Y.forEach(h),N.forEach(h),f=O(I),d=m(I,"DIV",{class:!0}),p(d).forEach(h),L=O(I),v=m(I,"DIV",{});var re=p(v);b=m(re,"UL",{class:!0});var oe=p(b);for(let J=0;J<C.length;J+=1)C[J].l(oe);oe.forEach(h),re.forEach(h),k=O(I),q(D.$$.fragment,I),I.forEach(h),this.h()},h(){i(c,"class",_=(s[7]?"logoDark":"logoLight")+" logo svelte-p9s28g"),ht(c.src,r=s[7]?kt:wt)||i(c,"src",r),i(c,"alt","The Paul Health logo."),i(o,"href","/"),i(o,"aria-label","A link back to the home page"),i(a,"class","logo_wrapper svelte-p9s28g"),i(d,"class","spacer svelte-p9s28g"),i(b,"class","navbar_nav_right svelte-p9s28g"),i(n,"class","navbar svelte-p9s28g"),i(n,"id","navbar_nav"),A(n,"scrolled",s[6]),A(n,"white",s[7]),A(n,"open",s[4])},m(y,I){P(y,n,I),u(n,a),u(a,o),u(o,c),u(n,f),u(n,d),u(n,L),u(n,v),u(v,b);for(let N=0;N<C.length;N+=1)C[N]&&C[N].m(b,null);u(n,k),W(D,n,null),w=!0,E||(j=De(Ke,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(t,100),s[9]()}),E=!0)},p(y,[I]){s=y,I&32&&!e&&(e=!0,clearTimeout(l),scrollTo(Ke.pageXOffset,s[5]),l=setTimeout(t,100)),(!w||I&128&&_!==(_=(s[7]?"logoDark":"logoLight")+" logo svelte-p9s28g"))&&i(c,"class",_),(!w||I&128&&!ht(c.src,r=s[7]?kt:wt))&&i(c,"src",r),I&15&&(V=s[0].nav_items,Oe(),C=Lt(C,I,F,1,s,V,T,b,Dt,bt,null,pt),Ae());const N={};I&2&&(N.isOpen=s[1]),D.$set(N),(!w||I&64)&&A(n,"scrolled",s[6]),(!w||I&128)&&A(n,"white",s[7]),(!w||I&16)&&A(n,"open",s[4])},i(y){if(!w){for(let I=0;I<V.length;I+=1)z(C[I]);z(D.$$.fragment,y),w=!0}},o(y){for(let I=0;I<C.length;I+=1)R(C[I]);R(D.$$.fragment,y),w=!1},d(y){y&&h(n);for(let I=0;I<C.length;I+=1)C[I].d();G(D),E=!1,j()}}}let wt="/pluto_logo.svg",kt="/pluto_logoDark.svg";const sl=60;function nl(s,e,t){let l;Xe(s,Et,b=>t(8,l=b));let{data:n}=e,{isDropdownOpen:a}=e,{drawerToggle:o}=e,{dropdownClick:c}=e,{show:_}=e,r,f=!1,d;Vt(()=>{d?window.onscroll=null:window.onscroll=()=>{L()}});function L(){window.scrollY>sl?t(6,f=!0):t(6,f=!1)}function v(){t(5,r=Ke.pageYOffset)}return s.$$set=b=>{"data"in b&&t(0,n=b.data),"isDropdownOpen"in b&&t(1,a=b.isDropdownOpen),"drawerToggle"in b&&t(2,o=b.drawerToggle),"dropdownClick"in b&&t(3,c=b.dropdownClick),"show"in b&&t(4,_=b.show)},s.$$.update=()=>{s.$$.dirty&256&&t(7,d=l.url.pathname.startsWith("/news"))},[n,a,o,c,_,r,f,d,l,v]}class rl extends Z{constructor(e){super(),$(this,e,nl,al,x,{data:0,isDropdownOpen:1,drawerToggle:2,dropdownClick:3,show:4})}}function ol(s){let e;return{c(){e=Ve("path"),this.h()},l(t){e=Be(t,"path",{d:!0}),p(e).forEach(h),this.h()},h(){i(e,"d","M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z")},m(t,l){P(t,e,l)},p:K,d(t){t&&h(e)}}}function il(s){let e,t;const l=[{viewBox:"0 0 320 512"},s[0]];let n={$$slots:{default:[ol]},$$scope:{ctx:s}};for(let a=0;a<l.length;a+=1)n=Q(n,l[a]);return e=new ze({props:n}),{c(){U(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,o){W(e,a,o),t=!0},p(a,[o]){const c=o&1?Ce(l,[l[0],Te(a[0])]):{};o&2&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){t||(z(e.$$.fragment,a),t=!0)},o(a){R(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}function cl(s,e,t){return s.$$set=l=>{t(0,e=Q(Q({},e),_e(l)))},e=_e(e),[e]}class fl extends Z{constructor(e){super(),$(this,e,cl,il,x,{})}}function ul(s){let e;return{c(){e=Ve("path"),this.h()},l(t){e=Be(t,"path",{d:!0}),p(e).forEach(h),this.h()},h(){i(e,"d","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z")},m(t,l){P(t,e,l)},p:K,d(t){t&&h(e)}}}function _l(s){let e,t;const l=[{viewBox:"0 0 512 512"},s[0]];let n={$$slots:{default:[ul]},$$scope:{ctx:s}};for(let a=0;a<l.length;a+=1)n=Q(n,l[a]);return e=new ze({props:n}),{c(){U(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,o){W(e,a,o),t=!0},p(a,[o]){const c=o&1?Ce(l,[l[0],Te(a[0])]):{};o&2&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){t||(z(e.$$.fragment,a),t=!0)},o(a){R(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}function hl(s,e,t){return s.$$set=l=>{t(0,e=Q(Q({},e),_e(l)))},e=_e(e),[e]}class dl extends Z{constructor(e){super(),$(this,e,hl,_l,x,{})}}function vl(s){let e;return{c(){e=Ve("path"),this.h()},l(t){e=Be(t,"path",{d:!0}),p(e).forEach(h),this.h()},h(){i(e,"d","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z")},m(t,l){P(t,e,l)},p:K,d(t){t&&h(e)}}}function gl(s){let e,t;const l=[{viewBox:"0 0 448 512"},s[0]];let n={$$slots:{default:[vl]},$$scope:{ctx:s}};for(let a=0;a<l.length;a+=1)n=Q(n,l[a]);return e=new ze({props:n}),{c(){U(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,o){W(e,a,o),t=!0},p(a,[o]){const c=o&1?Ce(l,[l[0],Te(a[0])]):{};o&2&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){t||(z(e.$$.fragment,a),t=!0)},o(a){R(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}function ml(s,e,t){return s.$$set=l=>{t(0,e=Q(Q({},e),_e(l)))},e=_e(e),[e]}class pl extends Z{constructor(e){super(),$(this,e,ml,gl,x,{})}}function bl(s){let e,t,l,n,a,o,c,_,r,f,d,L,v,b,C,T,k,D,w,E,j,V,F,y,I,N,Y,re,oe,J,Re,Fe,ie,Ne,Se,ee,ce,Me,Pe,fe,je,He,te,Ue,qe,We,Ge,le,ae,he,Je,se,de,Ye,ne,ve,Ee;return he=new dl({}),de=new fl({}),ve=new pl({}),{c(){e=g("footer"),t=g("div"),l=g("div"),n=g("div"),a=g("a"),o=g("div"),c=B(),_=g("p"),r=S("Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),f=g("br"),d=S(`
       Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.​`),L=B(),v=g("small"),b=g("span"),C=S("1234 Lorem Ipsum Street, Suite 5678, Lorem City, LR 90001"),T=B(),k=g("br"),D=B(),w=g("span"),E=S("© 2024 Lorem Ipsum Inc. All rights reserved."),j=B(),V=g("div"),F=g("div"),y=g("a"),I=S("How it works"),N=B(),Y=g("a"),re=S("Patients"),oe=B(),J=g("a"),Re=S("Clinicians"),Fe=B(),ie=g("a"),Ne=S("Researchers"),Se=B(),ee=g("div"),ce=g("a"),Me=S("Contact"),Pe=B(),fe=g("a"),je=S("Help Center"),He=B(),te=g("a"),Ue=S("Privacy & "),qe=g("br"),We=S(" Terms of Use"),Ge=B(),le=g("div"),ae=g("a"),U(he.$$.fragment),Je=B(),se=g("a"),U(de.$$.fragment),Ye=B(),ne=g("a"),U(ve.$$.fragment),this.h()},l(X){e=m(X,"FOOTER",{class:!0});var ge=p(e);t=m(ge,"DIV",{class:!0});var $e=p(t);l=m($e,"DIV",{class:!0});var me=p(l);n=m(me,"DIV",{class:!0});var xe=p(n);a=m(xe,"A",{href:!0,"aria-label":!0,class:!0});var et=p(a);o=m(et,"DIV",{class:!0,style:!0}),p(o).forEach(h),et.forEach(h),xe.forEach(h),c=O(me),_=m(me,"P",{class:!0});var Ie=p(_);r=M(Ie,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),f=m(Ie,"BR",{}),d=M(Ie,`
       Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.​`),Ie.forEach(h),L=O(me),v=m(me,"SMALL",{class:!0});var pe=p(v);b=m(pe,"SPAN",{});var tt=p(b);C=M(tt,"1234 Lorem Ipsum Street, Suite 5678, Lorem City, LR 90001"),tt.forEach(h),T=O(pe),k=m(pe,"BR",{}),D=O(pe),w=m(pe,"SPAN",{});var lt=p(w);E=M(lt,"© 2024 Lorem Ipsum Inc. All rights reserved."),lt.forEach(h),pe.forEach(h),me.forEach(h),$e.forEach(h),j=O(ge),V=m(ge,"DIV",{class:!0});var be=p(V);F=m(be,"DIV",{class:!0});var ue=p(F);y=m(ue,"A",{href:!0,"aria-label":!0,class:!0});var at=p(y);I=M(at,"How it works"),at.forEach(h),N=O(ue),Y=m(ue,"A",{href:!0,"aria-label":!0,class:!0});var st=p(Y);re=M(st,"Patients"),st.forEach(h),oe=O(ue),J=m(ue,"A",{href:!0,"aria-label":!0,class:!0});var nt=p(J);Re=M(nt,"Clinicians"),nt.forEach(h),Fe=O(ue),ie=m(ue,"A",{href:!0,"aria-label":!0,class:!0});var rt=p(ie);Ne=M(rt,"Researchers"),rt.forEach(h),ue.forEach(h),Se=O(be),ee=m(be,"DIV",{class:!0});var we=p(ee);ce=m(we,"A",{href:!0,"aria-label":!0,class:!0});var ot=p(ce);Me=M(ot,"Contact"),ot.forEach(h),Pe=O(we),fe=m(we,"A",{href:!0,"aria-label":!0,class:!0});var it=p(fe);je=M(it,"Help Center"),it.forEach(h),He=O(we),te=m(we,"A",{href:!0,"aria-label":!0,class:!0});var ye=p(te);Ue=M(ye,"Privacy & "),qe=m(ye,"BR",{}),We=M(ye," Terms of Use"),ye.forEach(h),we.forEach(h),Ge=O(be),le=m(be,"DIV",{class:!0});var ke=p(le);ae=m(ke,"A",{href:!0,class:!0,target:!0,rel:!0,"aria-label":!0});var ct=p(ae);q(he.$$.fragment,ct),ct.forEach(h),Je=O(ke),se=m(ke,"A",{href:!0,class:!0,target:!0,rel:!0,"aria-label":!0});var ft=p(se);q(de.$$.fragment,ft),ft.forEach(h),Ye=O(ke),ne=m(ke,"A",{href:!0,class:!0,target:!0,rel:!0,"aria-label":!0});var ut=p(ne);q(ve.$$.fragment,ut),ut.forEach(h),ke.forEach(h),be.forEach(h),ge.forEach(h),this.h()},h(){i(o,"class","logo svelte-15o1vvh"),H(o,"background-image","url("+wl+")"),i(a,"href","/"),i(a,"aria-label","Lorem ipsum logo that works as a link back to the home page."),i(a,"class","svelte-15o1vvh"),i(n,"class","logo_wrapper"),i(_,"class","svelte-15o1vvh"),i(v,"class","svelte-15o1vvh"),i(l,"class","column svelte-15o1vvh"),i(t,"class","left-section svelte-15o1vvh"),i(y,"href","/how-it-works"),i(y,"aria-label","Link to Lorem Ipsum's how it works page."),i(y,"class","svelte-15o1vvh"),i(Y,"href","/services/patients"),i(Y,"aria-label","Link to Lorem Ipsum's patients page."),i(Y,"class","svelte-15o1vvh"),i(J,"href","/services/clinicians"),i(J,"aria-label","Link to Lorem Ipsum's clinicians page."),i(J,"class","svelte-15o1vvh"),i(ie,"href","/services/researchers"),i(ie,"aria-label","Link to Lorem Ipsum's researchers page."),i(ie,"class","svelte-15o1vvh"),i(F,"class","column svelte-15o1vvh"),i(ce,"href","/contact"),i(ce,"aria-label","Link to Lorem Ipsum's contact page."),i(ce,"class","svelte-15o1vvh"),i(fe,"href","https://loremipsum.zendesk.com/hc/en-us"),i(fe,"aria-label","Link to Lorem Ipsum's help center."),i(fe,"class","svelte-15o1vvh"),i(te,"href","/legal"),i(te,"aria-label","Link to Lorem Ipsum's privacy and terms of use page."),i(te,"class","svelte-15o1vvh"),i(ee,"class","column svelte-15o1vvh"),i(ae,"href","https://twitter.com"),i(ae,"class","social-icon svelte-15o1vvh"),i(ae,"target","_blank"),i(ae,"rel","noopener noreferrer"),i(ae,"aria-label","Link to Lorem Ipsum's Twitter"),i(se,"href","https://facebook.com"),i(se,"class","social-icon svelte-15o1vvh"),i(se,"target","_blank"),i(se,"rel","noopener noreferrer"),i(se,"aria-label","Link to Lorem Ipsum's Facebook"),i(ne,"href","https://linkedin.com"),i(ne,"class","social-icon svelte-15o1vvh"),i(ne,"target","_blank"),i(ne,"rel","noopener noreferrer"),i(ne,"aria-label","Link to Lorem Ipsum's LinkedIn"),i(le,"class","social-media-container svelte-15o1vvh"),i(V,"class","right-section svelte-15o1vvh"),i(e,"class","footer svelte-15o1vvh")},m(X,ge){P(X,e,ge),u(e,t),u(t,l),u(l,n),u(n,a),u(a,o),u(l,c),u(l,_),u(_,r),u(_,f),u(_,d),u(l,L),u(l,v),u(v,b),u(b,C),u(v,T),u(v,k),u(v,D),u(v,w),u(w,E),u(e,j),u(e,V),u(V,F),u(F,y),u(y,I),u(F,N),u(F,Y),u(Y,re),u(F,oe),u(F,J),u(J,Re),u(F,Fe),u(F,ie),u(ie,Ne),u(V,Se),u(V,ee),u(ee,ce),u(ce,Me),u(ee,Pe),u(ee,fe),u(fe,je),u(ee,He),u(ee,te),u(te,Ue),u(te,qe),u(te,We),u(V,Ge),u(V,le),u(le,ae),W(he,ae,null),u(le,Je),u(le,se),W(de,se,null),u(le,Ye),u(le,ne),W(ve,ne,null),Ee=!0},p:K,i(X){Ee||(z(he.$$.fragment,X),z(de.$$.fragment,X),z(ve.$$.fragment,X),Ee=!0)},o(X){R(he.$$.fragment,X),R(de.$$.fragment,X),R(ve.$$.fragment,X),Ee=!1},d(X){X&&h(e),G(he),G(de),G(ve)}}}let wl="/pluto_logo.svg";class kl extends Z{constructor(e){super(),$(this,e,null,bl,x,{})}}function Ll(s){let e,t,l,n,a,o,c,_,r,f;l=new rl({props:{data:s[0],drawerToggle:s[7],dropdownClick:s[8],isDropdownOpen:s[5],show:s[2]}}),a=new xt({props:{data:s[0],show:s[4],drawerToggle:s[7],dropdownClick:s[8],isDropdownOpen:s[5]}});const d=s[12].default,L=zt(d,s,s[11],null);return r=new kl({}),{c(){e=g("div"),t=g("div"),U(l.$$.fragment),n=B(),U(a.$$.fragment),o=B(),c=g("main"),L&&L.c(),_=B(),U(r.$$.fragment),this.h()},l(v){e=m(v,"DIV",{});var b=p(e);t=m(b,"DIV",{});var C=p(t);q(l.$$.fragment,C),C.forEach(h),n=O(b),q(a.$$.fragment,b),o=O(b),c=m(b,"MAIN",{});var T=p(c);L&&L.l(T),_=O(T),q(r.$$.fragment,T),T.forEach(h),b.forEach(h),this.h()},h(){A(t,"open",s[2])},m(v,b){P(v,e,b),u(e,t),W(l,t,null),u(e,n),W(a,e,null),u(e,o),u(e,c),L&&L.m(c,null),u(c,_),W(r,c,null),s[13](e),f=!0},p(v,b){const C={};b&1&&(C.data=v[0]),b&32&&(C.isDropdownOpen=v[5]),b&4&&(C.show=v[2]),l.$set(C),(!f||b&4)&&A(t,"open",v[2]);const T={};b&1&&(T.data=v[0]),b&16&&(T.show=v[4]),b&32&&(T.isDropdownOpen=v[5]),a.$set(T),L&&L.p&&(!f||b&2048)&&Rt(L,d,v,v[11],f?Nt(d,v[11],b,null):Ft(v[11]),null)},i(v){f||(z(l.$$.fragment,v),z(a.$$.fragment,v),z(L,v),z(r.$$.fragment,v),f=!0)},o(v){R(l.$$.fragment,v),R(a.$$.fragment,v),R(L,v),R(r.$$.fragment,v),f=!1},d(v){v&&h(e),G(l),G(a),L&&L.d(v),G(r),s[13](null)}}}function Dl(s){let e,t;return e=new Ut({}),{c(){U(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,n){W(e,l,n),t=!0},p:K,i(l){t||(z(e.$$.fragment,l),t=!0)},o(l){R(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function El(s){let e,t,l,n,a,o;const c=[Dl,Ll],_=[];function r(f,d){return f[6]||f[3]?0:1}return e=r(s),t=_[e]=c[e](s),{c(){t.c(),l=Le()},l(f){t.l(f),l=Le()},m(f,d){_[e].m(f,d),P(f,l,d),n=!0,a||(o=De(window,"click",s[9]),a=!0)},p(f,[d]){let L=e;e=r(f),e===L?_[e].p(f,d):(Oe(),R(_[L],1,1,()=>{_[L]=null}),Ae(),t=_[e],t?t.p(f,d):(t=_[e]=c[e](f),t.c()),z(t,1),t.m(l.parentNode,l))},i(f){n||(z(t),n=!0)},o(f){R(t),n=!1},d(f){_[e].d(f),f&&h(l),a=!1,o()}}}function Il(s,e,t){let l,n;Xe(s,Et,k=>t(10,l=k)),Xe(s,St,k=>t(6,n=k));let{$$slots:a={},$$scope:o}=e,{data:c}=e,_,r=!1,f=!0,d="sideDrawer";function L(){t(2,r=!r),r?t(4,d="sideDrawer open"):t(4,d="sideDrawer")}let v={};const b=(k,D,w)=>{w.preventDefault(),D.childItemsCollection.items.length>=1?t(5,v[k]=!v[k],v):L()};function C(k){!k.target.classList.contains("dropdownlink")&&!k.target.classList.contains("submenu-link")&&t(5,v={})}Ot(async()=>{t(3,f=!1)});function T(k){At[k?"unshift":"push"](()=>{_=k,t(1,_)})}return s.$$set=k=>{"data"in k&&t(0,c=k.data),"$$scope"in k&&t(11,o=k.$$scope)},s.$$.update=()=>{s.$$.dirty&1024&&t(2,r=!1)},[c,_,r,f,d,v,n,L,b,C,l,o,a,T]}class Vl extends Z{constructor(e){super(),$(this,e,Il,El,x,{data:0})}}export{Vl as component};
