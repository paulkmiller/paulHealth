import{S as ge,i as de,s as ve,k as P,q as J,a as q,l as I,m as M,r as R,h as v,c as H,n as p,b as N,D as w,$ as Z,L as x,a4 as be,E as ee,a0 as $e,e as te,v as B,d as E,f as O,g as b,U as C,u as K,y as z,z as G,A as U,B as j}from"./index.3e776b27.js";import{B as Q}from"./ButtonLink.212aa9c5.js";import{T as W}from"./TextWithLineBreaks.f9a7a950.js";function ke(n){let e,a,t,l,i,g,d,s,$,L;return{c(){e=P("form"),a=P("label"),t=J("Email address:"),l=q(),i=P("input"),g=q(),d=P("button"),s=J("Subscribe"),this.h()},l(F){e=I(F,"FORM",{});var D=M(e);a=I(D,"LABEL",{for:!0});var V=M(a);t=R(V,"Email address:"),V.forEach(v),l=H(D),i=I(D,"INPUT",{type:!0,class:!0}),g=H(D),d=I(D,"BUTTON",{type:!0,class:!0});var S=M(d);s=R(S,"Subscribe"),S.forEach(v),D.forEach(v),this.h()},h(){p(a,"for","exampleInputEmail1"),p(i,"type","email"),p(i,"class","form-control svelte-10mahkx"),i.required=!0,p(d,"type","submit"),p(d,"class","svelte-10mahkx")},m(F,D){N(F,e,D),w(e,a),w(a,t),w(e,l),w(e,i),Z(i,n[0]),w(e,g),w(e,d),w(d,s),$||(L=[x(i,"input",n[2]),x(e,"submit",be(n[1]))],$=!0)},p(F,[D]){D&1&&i.value!==F[0]&&Z(i,F[0])},i:ee,o:ee,d(F){F&&v(e),$=!1,$e(L)}}}function Te(n,e,a){let t="";async function l(g){g.preventDefault(),(await fetch("/api/subscribe",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({email:t})})).ok?(a(0,t=""),alert("Thanks for subscribing!")):alert("Oops! Something went wrong. Please try again later.")}function i(){t=this.value,a(0,t)}return[t,l,i]}class X extends ge{constructor(e){super(),de(this,e,Te,ke,ve,{})}}function we(n){let e,a,t,l,i,g,d,s,$,L,F,D,V,S,h,f=n[0].tagline&&le(n);const k=[Ie,Pe],u=[];function c(m,_){return m[0].headline&&!m[0].bodyText?0:m[0].headline?1:-1}~($=c(n))&&(L=u[$]=k[$](n));let r=n[0].bodyText&&ae(n),o=n[0].newsletterInput&&ie(),T=n[0].ctaText!=null&&ne(n);return{c(){e=P("div"),a=P("div"),t=P("img"),g=q(),d=P("div"),f&&f.c(),s=q(),L&&L.c(),F=q(),r&&r.c(),D=q(),o&&o.c(),V=q(),T&&T.c(),this.h()},l(m){e=I(m,"DIV",{class:!0});var _=M(e);a=I(_,"DIV",{class:!0});var A=M(a);t=I(A,"IMG",{src:!0,alt:!0,class:!0}),A.forEach(v),g=H(_),d=I(_,"DIV",{class:!0});var y=M(d);f&&f.l(y),s=H(y),L&&L.l(y),F=H(y),r&&r.l(y),D=H(y),o&&o.l(y),V=H(y),T&&T.l(y),y.forEach(v),_.forEach(v),this.h()},h(){var m,_;C(t.src,l=((m=n[0].image)==null?void 0:m.url)+"?fm=webp&q=80")||p(t,"src",l),p(t,"alt",i=(_=n[0].image)==null?void 0:_.description),p(t,"class","svelte-16mh5ps"),p(a,"class","left-container svelte-16mh5ps"),p(d,"class","right-container svelte-16mh5ps"),p(e,"class",S="duplex-container large-image "+(n[0].containerLayout?"":"row-reverse")+" svelte-16mh5ps")},m(m,_){N(m,e,_),w(e,a),w(a,t),w(e,g),w(e,d),f&&f.m(d,null),w(d,s),~$&&u[$].m(d,null),w(d,F),r&&r.m(d,null),w(d,D),o&&o.m(d,null),w(d,V),T&&T.m(d,null),h=!0},p(m,_){var y,Y;(!h||_&1&&!C(t.src,l=((y=m[0].image)==null?void 0:y.url)+"?fm=webp&q=80"))&&p(t,"src",l),(!h||_&1&&i!==(i=(Y=m[0].image)==null?void 0:Y.description))&&p(t,"alt",i),m[0].tagline?f?f.p(m,_):(f=le(m),f.c(),f.m(d,s)):f&&(f.d(1),f=null);let A=$;$=c(m),$===A?~$&&u[$].p(m,_):(L&&(B(),E(u[A],1,1,()=>{u[A]=null}),O()),~$?(L=u[$],L?L.p(m,_):(L=u[$]=k[$](m),L.c()),b(L,1),L.m(d,F)):L=null),m[0].bodyText?r?r.p(m,_):(r=ae(m),r.c(),r.m(d,D)):r&&(r.d(1),r=null),m[0].newsletterInput?o?_&1&&b(o,1):(o=ie(),o.c(),b(o,1),o.m(d,V)):o&&(B(),E(o,1,1,()=>{o=null}),O()),m[0].ctaText!=null?T?(T.p(m,_),_&1&&b(T,1)):(T=ne(m),T.c(),b(T,1),T.m(d,null)):T&&(B(),E(T,1,1,()=>{T=null}),O()),(!h||_&1&&S!==(S="duplex-container large-image "+(m[0].containerLayout?"":"row-reverse")+" svelte-16mh5ps"))&&p(e,"class",S)},i(m){h||(b(L),b(o),b(T),h=!0)},o(m){E(L),E(o),E(T),h=!1},d(m){m&&v(e),f&&f.d(),~$&&u[$].d(),r&&r.d(),o&&o.d(),T&&T.d()}}}function Le(n){let e,a,t,l,i,g,d,s,$,L,F,D,V,S,h=n[0].tagline&&re(n),f=n[0].headline&&se(n),k=n[0].bodyText&&fe(n),u=n[0].newsletterInput&&oe(),c=n[0].ctaText!=null&&ue(n);return{c(){e=P("div"),a=P("div"),t=P("div"),l=P("img"),d=q(),s=P("div"),h&&h.c(),$=q(),f&&f.c(),L=q(),k&&k.c(),F=q(),u&&u.c(),D=q(),c&&c.c(),this.h()},l(r){e=I(r,"DIV",{class:!0});var o=M(e);a=I(o,"DIV",{class:!0});var T=M(a);t=I(T,"DIV",{class:!0});var m=M(t);l=I(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(v),d=H(T),s=I(T,"DIV",{class:!0});var _=M(s);h&&h.l(_),$=H(_),f&&f.l(_),L=H(_),k&&k.l(_),F=H(_),u&&u.l(_),D=H(_),c&&c.l(_),_.forEach(v),T.forEach(v),o.forEach(v),this.h()},h(){var r,o;C(l.src,i=((r=n[0].image)==null?void 0:r.url)+"?fm=webp&q=80")||p(l,"src",i),p(l,"alt",g=(o=n[0].image)==null?void 0:o.description),p(l,"class","svelte-16mh5ps"),p(t,"class","left-container svelte-16mh5ps"),p(s,"class","right-container svelte-16mh5ps"),p(a,"class",V="duplex-container normal-image "+(n[0].containerLayout?"":"row-reverse")+" svelte-16mh5ps"),p(e,"class","normal-container container svelte-16mh5ps")},m(r,o){N(r,e,o),w(e,a),w(a,t),w(t,l),w(a,d),w(a,s),h&&h.m(s,null),w(s,$),f&&f.m(s,null),w(s,L),k&&k.m(s,null),w(s,F),u&&u.m(s,null),w(s,D),c&&c.m(s,null),S=!0},p(r,o){var T,m;(!S||o&1&&!C(l.src,i=((T=r[0].image)==null?void 0:T.url)+"?fm=webp&q=80"))&&p(l,"src",i),(!S||o&1&&g!==(g=(m=r[0].image)==null?void 0:m.description))&&p(l,"alt",g),r[0].tagline?h?h.p(r,o):(h=re(r),h.c(),h.m(s,$)):h&&(h.d(1),h=null),r[0].headline?f?(f.p(r,o),o&1&&b(f,1)):(f=se(r),f.c(),b(f,1),f.m(s,L)):f&&(B(),E(f,1,1,()=>{f=null}),O()),r[0].bodyText?k?k.p(r,o):(k=fe(r),k.c(),k.m(s,F)):k&&(k.d(1),k=null),r[0].newsletterInput?u?o&1&&b(u,1):(u=oe(),u.c(),b(u,1),u.m(s,D)):u&&(B(),E(u,1,1,()=>{u=null}),O()),r[0].ctaText!=null?c?(c.p(r,o),o&1&&b(c,1)):(c=ue(r),c.c(),b(c,1),c.m(s,null)):c&&(B(),E(c,1,1,()=>{c=null}),O()),(!S||o&1&&V!==(V="duplex-container normal-image "+(r[0].containerLayout?"":"row-reverse")+" svelte-16mh5ps"))&&p(a,"class",V)},i(r){S||(b(f),b(u),b(c),S=!0)},o(r){E(f),E(u),E(c),S=!1},d(r){r&&v(e),h&&h.d(),f&&f.d(),k&&k.d(),u&&u.d(),c&&c.d()}}}function Ee(n){let e,a,t,l,i,g,d,s,$,L,F,D,V,S,h=n[0].tagline&&ce(n),f=n[0].headline&&me(n),k=n[0].bodyText&&pe(n),u=n[0].newsletterInput&&_e(),c=n[0].ctaText!=null&&he(n);return{c(){e=P("div"),a=P("div"),t=P("div"),l=P("img"),d=q(),s=P("div"),h&&h.c(),$=q(),f&&f.c(),L=q(),k&&k.c(),F=q(),u&&u.c(),D=q(),c&&c.c(),this.h()},l(r){e=I(r,"DIV",{class:!0});var o=M(e);a=I(o,"DIV",{class:!0});var T=M(a);t=I(T,"DIV",{class:!0});var m=M(t);l=I(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(v),d=H(T),s=I(T,"DIV",{class:!0});var _=M(s);h&&h.l(_),$=H(_),f&&f.l(_),L=H(_),k&&k.l(_),F=H(_),u&&u.l(_),D=H(_),c&&c.l(_),_.forEach(v),T.forEach(v),o.forEach(v),this.h()},h(){var r,o;C(l.src,i=((r=n[0].image)==null?void 0:r.url)+"?fm=webp&q=80")||p(l,"src",i),p(l,"alt",g=(o=n[0].image)==null?void 0:o.description),p(l,"class","svelte-16mh5ps"),p(t,"class","left-container svelte-16mh5ps"),p(s,"class","right-container svelte-16mh5ps"),p(a,"class",V="duplex-container small-image "+(n[0].containerLayout?"":"row-reverse")+" svelte-16mh5ps"),p(e,"class","small-container container svelte-16mh5ps")},m(r,o){N(r,e,o),w(e,a),w(a,t),w(t,l),w(a,d),w(a,s),h&&h.m(s,null),w(s,$),f&&f.m(s,null),w(s,L),k&&k.m(s,null),w(s,F),u&&u.m(s,null),w(s,D),c&&c.m(s,null),S=!0},p(r,o){var T,m;(!S||o&1&&!C(l.src,i=((T=r[0].image)==null?void 0:T.url)+"?fm=webp&q=80"))&&p(l,"src",i),(!S||o&1&&g!==(g=(m=r[0].image)==null?void 0:m.description))&&p(l,"alt",g),r[0].tagline?h?h.p(r,o):(h=ce(r),h.c(),h.m(s,$)):h&&(h.d(1),h=null),r[0].headline?f?(f.p(r,o),o&1&&b(f,1)):(f=me(r),f.c(),b(f,1),f.m(s,L)):f&&(B(),E(f,1,1,()=>{f=null}),O()),r[0].bodyText?k?k.p(r,o):(k=pe(r),k.c(),k.m(s,F)):k&&(k.d(1),k=null),r[0].newsletterInput?u?o&1&&b(u,1):(u=_e(),u.c(),b(u,1),u.m(s,D)):u&&(B(),E(u,1,1,()=>{u=null}),O()),r[0].ctaText!=null?c?(c.p(r,o),o&1&&b(c,1)):(c=he(r),c.c(),b(c,1),c.m(s,null)):c&&(B(),E(c,1,1,()=>{c=null}),O()),(!S||o&1&&V!==(V="duplex-container small-image "+(r[0].containerLayout?"":"row-reverse")+" svelte-16mh5ps"))&&p(a,"class",V)},i(r){S||(b(f),b(u),b(c),S=!0)},o(r){E(f),E(u),E(c),S=!1},d(r){r&&v(e),h&&h.d(),f&&f.d(),k&&k.d(),u&&u.d(),c&&c.d()}}}function le(n){let e,a=n[0].tagline+"",t;return{c(){e=P("p"),t=J(a),this.h()},l(l){e=I(l,"P",{class:!0});var i=M(e);t=R(i,a),i.forEach(v),this.h()},h(){p(e,"class","tagline svelte-16mh5ps")},m(l,i){N(l,e,i),w(e,t)},p(l,i){i&1&&a!==(a=l[0].tagline+"")&&K(t,a)},d(l){l&&v(e)}}}function Pe(n){let e,a,t;return a=new W({props:{inputText:n[0].headline}}),{c(){e=P("h3"),z(a.$$.fragment),this.h()},l(l){e=I(l,"H3",{class:!0});var i=M(e);G(a.$$.fragment,i),i.forEach(v),this.h()},h(){p(e,"class","svelte-16mh5ps")},m(l,i){N(l,e,i),U(a,e,null),t=!0},p(l,i){const g={};i&1&&(g.inputText=l[0].headline),a.$set(g)},i(l){t||(b(a.$$.fragment,l),t=!0)},o(l){E(a.$$.fragment,l),t=!1},d(l){l&&v(e),j(a)}}}function Ie(n){let e,a,t;return a=new W({props:{inputText:n[0].headline}}),{c(){e=P("h3"),z(a.$$.fragment),this.h()},l(l){e=I(l,"H3",{class:!0});var i=M(e);G(a.$$.fragment,i),i.forEach(v),this.h()},h(){p(e,"class","big svelte-16mh5ps")},m(l,i){N(l,e,i),U(a,e,null),t=!0},p(l,i){const g={};i&1&&(g.inputText=l[0].headline),a.$set(g)},i(l){t||(b(a.$$.fragment,l),t=!0)},o(l){E(a.$$.fragment,l),t=!1},d(l){l&&v(e),j(a)}}}function ae(n){let e,a=n[0].bodyText+"";return{c(){e=P("p"),this.h()},l(t){e=I(t,"P",{class:!0});var l=M(e);l.forEach(v),this.h()},h(){p(e,"class","svelte-16mh5ps")},m(t,l){N(t,e,l),e.innerHTML=a},p(t,l){l&1&&a!==(a=t[0].bodyText+"")&&(e.innerHTML=a)},d(t){t&&v(e)}}}function ie(n){let e,a;return e=new X({}),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,l){U(e,t,l),a=!0},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function ne(n){let e,a;return e=new Q({props:{text:n[0].ctaText||"Learn More",path:n[0].targetPage?`${n[0].targetPage}`:"/contact",color:"#FFF",background_color:"#D93561",ariaText:n[0].ctaText,ariaLink:n[0].targetPage}}),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,l){U(e,t,l),a=!0},p(t,l){const i={};l&1&&(i.text=t[0].ctaText||"Learn More"),l&1&&(i.path=t[0].targetPage?`${t[0].targetPage}`:"/contact"),l&1&&(i.ariaText=t[0].ctaText),l&1&&(i.ariaLink=t[0].targetPage),e.$set(i)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function re(n){let e,a=n[0].tagline+"",t;return{c(){e=P("p"),t=J(a),this.h()},l(l){e=I(l,"P",{class:!0});var i=M(e);t=R(i,a),i.forEach(v),this.h()},h(){p(e,"class","tagline svelte-16mh5ps")},m(l,i){N(l,e,i),w(e,t)},p(l,i){i&1&&a!==(a=l[0].tagline+"")&&K(t,a)},d(l){l&&v(e)}}}function se(n){let e,a,t;return a=new W({props:{inputText:n[0].headline}}),{c(){e=P("h3"),z(a.$$.fragment),this.h()},l(l){e=I(l,"H3",{class:!0});var i=M(e);G(a.$$.fragment,i),i.forEach(v),this.h()},h(){p(e,"class","svelte-16mh5ps")},m(l,i){N(l,e,i),U(a,e,null),t=!0},p(l,i){const g={};i&1&&(g.inputText=l[0].headline),a.$set(g)},i(l){t||(b(a.$$.fragment,l),t=!0)},o(l){E(a.$$.fragment,l),t=!1},d(l){l&&v(e),j(a)}}}function fe(n){let e,a=n[0].bodyText+"";return{c(){e=P("p"),this.h()},l(t){e=I(t,"P",{class:!0});var l=M(e);l.forEach(v),this.h()},h(){p(e,"class","svelte-16mh5ps")},m(t,l){N(t,e,l),e.innerHTML=a},p(t,l){l&1&&a!==(a=t[0].bodyText+"")&&(e.innerHTML=a)},d(t){t&&v(e)}}}function oe(n){let e,a;return e=new X({}),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,l){U(e,t,l),a=!0},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function ue(n){let e,a;return e=new Q({props:{text:n[0].ctaText||"Learn More",path:n[0].targetPage?`${n[0].targetPage}`:"/contact",color:"#FFF",background_color:"#D93561",ariaText:n[0].ctaText,ariaLink:n[0].targetPage}}),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,l){U(e,t,l),a=!0},p(t,l){const i={};l&1&&(i.text=t[0].ctaText||"Learn More"),l&1&&(i.path=t[0].targetPage?`${t[0].targetPage}`:"/contact"),l&1&&(i.ariaText=t[0].ctaText),l&1&&(i.ariaLink=t[0].targetPage),e.$set(i)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function ce(n){let e,a=n[0].tagline+"",t;return{c(){e=P("p"),t=J(a),this.h()},l(l){e=I(l,"P",{class:!0});var i=M(e);t=R(i,a),i.forEach(v),this.h()},h(){p(e,"class","tagline svelte-16mh5ps")},m(l,i){N(l,e,i),w(e,t)},p(l,i){i&1&&a!==(a=l[0].tagline+"")&&K(t,a)},d(l){l&&v(e)}}}function me(n){let e,a,t;return a=new W({props:{inputText:n[0].headline}}),{c(){e=P("h3"),z(a.$$.fragment),this.h()},l(l){e=I(l,"H3",{class:!0});var i=M(e);G(a.$$.fragment,i),i.forEach(v),this.h()},h(){p(e,"class","small svelte-16mh5ps")},m(l,i){N(l,e,i),U(a,e,null),t=!0},p(l,i){const g={};i&1&&(g.inputText=l[0].headline),a.$set(g)},i(l){t||(b(a.$$.fragment,l),t=!0)},o(l){E(a.$$.fragment,l),t=!1},d(l){l&&v(e),j(a)}}}function pe(n){let e,a=n[0].bodyText+"";return{c(){e=P("p"),this.h()},l(t){e=I(t,"P",{class:!0});var l=M(e);l.forEach(v),this.h()},h(){p(e,"class","svelte-16mh5ps")},m(t,l){N(t,e,l),e.innerHTML=a},p(t,l){l&1&&a!==(a=t[0].bodyText+"")&&(e.innerHTML=a)},d(t){t&&v(e)}}}function _e(n){let e,a;return e=new X({}),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,l){U(e,t,l),a=!0},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function he(n){let e,a;return e=new Q({props:{text:n[0].ctaText||"Learn More",path:n[0].targetPage?`${n[0].targetPage}`:"/contact",color:"#FFF",background_color:"#D93561",ariaText:n[0].ctaText,ariaLink:n[0].targetPage}}),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,l){U(e,t,l),a=!0},p(t,l){const i={};l&1&&(i.text=t[0].ctaText||"Learn More"),l&1&&(i.path=t[0].targetPage?`${t[0].targetPage}`:"/contact"),l&1&&(i.ariaText=t[0].ctaText),l&1&&(i.ariaLink=t[0].targetPage),e.$set(i)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function De(n){let e,a,t,l;const i=[Ee,Le,we],g=[];function d(s,$){return s[0].containerSize==="Small"?0:s[0].containerSize==="Normal"?1:s[0].containerSize=="Large"?2:-1}return~(e=d(n))&&(a=g[e]=i[e](n)),{c(){a&&a.c(),t=te()},l(s){a&&a.l(s),t=te()},m(s,$){~e&&g[e].m(s,$),N(s,t,$),l=!0},p(s,[$]){let L=e;e=d(s),e===L?~e&&g[e].p(s,$):(a&&(B(),E(g[L],1,1,()=>{g[L]=null}),O()),~e?(a=g[e],a?a.p(s,$):(a=g[e]=i[e](s),a.c()),b(a,1),a.m(t.parentNode,t)):a=null)},i(s){l||(b(a),l=!0)},o(s){E(a),l=!1},d(s){~e&&g[e].d(s),s&&v(t)}}}function Me(n,e,a){let{data:t}=e;return n.$$set=l=>{"data"in l&&a(0,t=l.data)},[t]}class qe extends ge{constructor(e){super(),de(this,e,Me,De,ve,{data:0})}}export{qe as D};
