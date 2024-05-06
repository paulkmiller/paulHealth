import{S as et,i as tt,s as at,k as p,q as O,l as d,m as _,r as L,h as c,n as s,p as F,b as U,D as r,u as lt,E as ze,y as X,a as y,z as J,c as k,U as st,A as K,g as B,d as R,f as xe,B as Z,v as je,a1 as rt,T as nt,$ as Q,a2 as Ge,L as ie,a3 as it,a0 as ut}from"../chunks/index.5d5a95b7.js";import{H as ct}from"../chunks/Hero.1488c8bb.js";import{C as ft,R as pt}from"../chunks/Row.f1baf3b3.js";import{C as Qe}from"../chunks/Col.5130ac02.js";import{B as dt}from"../chunks/ButtonLink.0f14ce15.js";import{T as mt}from"../chunks/TextWithLineBreaks.8eb785f4.js";import"../chunks/Carousel.svelte_svelte_type_style_lang.4ce1efe3.js";function _t(n){let e,a;return{c(){e=p("button"),a=O(n[3]),this.h()},l(t){e=d(t,"BUTTON",{type:!0,style:!0,class:!0});var l=_(e);a=L(l,n[3]),l.forEach(c),this.h()},h(){s(e,"type",n[2]),F(e,"--link-color",n[1]),F(e,"--background-color",n[0]),s(e,"class","svelte-zc8ai1")},m(t,l){U(t,e,l),r(e,a)},p(t,[l]){l&8&&lt(a,t[3]),l&4&&s(e,"type",t[2]),l&2&&F(e,"--link-color",t[1]),l&1&&F(e,"--background-color",t[0])},i:ze,o:ze,d(t){t&&c(e)}}}function ht(n,e,a){let{type:t}=e,{text:l}=e,{background_color:o}=e,{color:i=""}=e;return o===""&&(o="#fff"),i===""&&(i="#29397a"),n.$$set=m=>{"type"in m&&a(2,t=m.type),"text"in m&&a(3,l=m.text),"background_color"in m&&a(0,o=m.background_color),"color"in m&&a(1,i=m.color)},[o,i,t,l]}class vt extends et{constructor(e){super(),tt(this,e,ht,_t,at,{type:2,text:3,background_color:0,color:1})}}function gt(n){let e,a,t,l,o,i;return{c(){e=p("h1"),a=O("Feel free to say hi. "),t=p("span"),l=O("Hi! "),o=p("span"),i=O("👋"),this.h()},l(m){e=d(m,"H1",{style:!0,class:!0});var g=_(e);a=L(g,"Feel free to say hi. "),t=d(g,"SPAN",{style:!0,"data-aos":!0,"data-aos-delay":!0});var z=_(t);l=L(z,"Hi! "),o=d(z,"SPAN",{class:!0});var H=_(o);i=L(H,"👋"),H.forEach(c),z.forEach(c),g.forEach(c),this.h()},h(){s(o,"class","wave svelte-1oataez"),F(t,"position","absolute"),F(t,"width","fit-content"),F(t,"display","inline-block"),F(t,"color","red"),F(t,"transform","rotate(15deg)"),F(t,"font-size","1.25rem"),s(t,"data-aos","fade-in"),s(t,"data-aos-delay","500"),F(e,"width","fit-content"),F(e,"display","inline-block"),s(e,"class","svelte-1oataez")},m(m,g){U(m,e,g),r(e,a),r(e,t),r(t,l),r(t,o),r(o,i)},p:ze,d(m){m&&c(e)}}}function bt(n){let e,a,t,l,o,i,m,g,z,H,E,I,V,A,P,M,$,f,h,v,u,b,N,q,w,_e,W,he,x,ve,ge,j,ee,be,Ee,D,$e,G,te,Te,Ie,C,ye,Y,ae,ke,le,Pe,we,re,Se,Oe,oe,ue,Le,Ne;return oe=new vt({props:{type:"submit",text:"Submit",color:"#FFF",background_color:"#29397a"}}),{c(){e=p("form"),a=p("div"),t=p("label"),l=O("Name"),o=y(),i=p("input"),m=y(),g=p("div"),z=p("label"),H=O("Email address"),E=y(),I=p("input"),V=y(),A=p("div"),P=p("label"),M=O("Who are you?"),$=y(),f=p("select"),h=p("option"),v=O("Select..."),u=p("option"),b=O("Clinician"),N=p("option"),q=O("Patient in need of help"),w=p("option"),_e=O("Research Stakeholder"),W=p("option"),he=O("Health Innovator"),x=p("option"),ve=O("I need Access to Patient App"),ge=y(),j=p("div"),ee=p("label"),be=O("Your Company"),Ee=y(),D=p("input"),$e=y(),G=p("div"),te=p("label"),Te=O("How can we help?"),Ie=y(),C=p("textarea"),ye=y(),Y=p("div"),ae=p("input"),ke=y(),le=p("label"),Pe=O("I ALLOW THIS WEBSITE TO STORE MY SUBMISSION SO THEY CAN RESPOND TO MY INQUIRY."),we=y(),re=p("div"),Se=O("You must agree before submitting."),Oe=y(),X(oe.$$.fragment),this.h()},l(S){e=d(S,"FORM",{action:!0,method:!0,id:!0});var T=_(e);a=d(T,"DIV",{class:!0});var ce=_(a);t=d(ce,"LABEL",{for:!0,class:!0});var Ae=_(t);l=L(Ae,"Name"),Ae.forEach(c),o=k(ce),i=d(ce,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,name:!0}),ce.forEach(c),m=k(T),g=d(T,"DIV",{class:!0});var fe=_(g);z=d(fe,"LABEL",{for:!0,class:!0});var Be=_(z);H=L(Be,"Email address"),Be.forEach(c),E=k(fe),I=d(fe,"INPUT",{type:!0,class:!0,id:!0,"aria-describedby":!0,placeholder:!0,name:!0}),fe.forEach(c),V=k(T),A=d(T,"DIV",{class:!0});var pe=_(A);P=d(pe,"LABEL",{for:!0,class:!0});var Ce=_(P);M=L(Ce,"Who are you?"),Ce.forEach(c),$=k(pe),f=d(pe,"SELECT",{class:!0,id:!0,name:!0});var se=_(f);h=d(se,"OPTION",{"data-component-field":!0});var He=_(h);v=L(He,"Select..."),He.forEach(c),u=d(se,"OPTION",{"data-component-field":!0});var De=_(u);b=L(De,"Clinician"),De.forEach(c),N=d(se,"OPTION",{"data-component-field":!0});var Fe=_(N);q=L(Fe,"Patient in need of help"),Fe.forEach(c),w=d(se,"OPTION",{"data-component-field":!0});var Re=_(w);_e=L(Re,"Research Stakeholder"),Re.forEach(c),W=d(se,"OPTION",{"data-component-field":!0});var Me=_(W);he=L(Me,"Health Innovator"),Me.forEach(c),x=d(se,"OPTION",{"data-component-field":!0});var Ve=_(x);ve=L(Ve,"I need Access to Patient App"),Ve.forEach(c),se.forEach(c),pe.forEach(c),ge=k(T),j=d(T,"DIV",{class:!0});var de=_(j);ee=d(de,"LABEL",{for:!0,class:!0});var Ye=_(ee);be=L(Ye,"Your Company"),Ye.forEach(c),Ee=k(de),D=d(de,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,name:!0}),de.forEach(c),$e=k(T),G=d(T,"DIV",{class:!0});var me=_(G);te=d(me,"LABEL",{for:!0,class:!0});var Ue=_(te);Te=L(Ue,"How can we help?"),Ue.forEach(c),Ie=k(me),C=d(me,"TEXTAREA",{class:!0,id:!0,rows:!0,placeholder:!0,name:!0}),_(C).forEach(c),me.forEach(c),ye=k(T),Y=d(T,"DIV",{class:!0});var ne=_(Y);ae=d(ne,"INPUT",{type:!0,class:!0,id:!0}),ke=k(ne),le=d(ne,"LABEL",{class:!0,for:!0});var qe=_(le);Pe=L(qe,"I ALLOW THIS WEBSITE TO STORE MY SUBMISSION SO THEY CAN RESPOND TO MY INQUIRY."),qe.forEach(c),we=k(ne),re=d(ne,"DIV",{class:!0});var We=_(re);Se=L(We,"You must agree before submitting."),We.forEach(c),ne.forEach(c),Oe=k(T),J(oe.$$.fragment,T),T.forEach(c),this.h()},h(){s(t,"for","paulInputPassword1"),s(t,"class","svelte-1oataez"),s(i,"type","text"),s(i,"class","form-control svelte-1oataez"),s(i,"id","paulInputPassword1"),s(i,"placeholder","Enter your name..."),s(i,"name","name"),i.required=!0,s(a,"class","form-group svelte-1oataez"),s(z,"for","paulInputEmail1"),s(z,"class","svelte-1oataez"),s(I,"type","email"),s(I,"class","form-control svelte-1oataez"),s(I,"id","paulInputEmail1"),s(I,"aria-describedby","emailHelp"),s(I,"placeholder","Enter your email address..."),s(I,"name","email"),I.required=!0,s(g,"class","form-group svelte-1oataez"),s(P,"for","paulFormControlSelect1"),s(P,"class","svelte-1oataez"),h.disabled="",h.selected="",s(h,"data-component-field","field"),h.__value="",h.value=h.__value,s(u,"data-component-field","option"),u.__value="Clinician",u.value=u.__value,s(N,"data-component-field","option"),N.__value=`Patient in need of 
            
            `,N.value=N.__value,s(w,"data-component-field","option"),w.__value="Research Stakeholder",w.value=w.__value,s(W,"data-component-field","option"),W.__value="Health Innovator",W.value=W.__value,s(x,"data-component-field","option"),x.__value="I need Access to Patient App",x.value=x.__value,s(f,"class","form-control svelte-1oataez"),s(f,"id","paulFormControlSelect1"),s(f,"name","who"),f.required=!0,n[3]===void 0&&nt(()=>n[10].call(f)),s(A,"class","form-group svelte-1oataez"),s(ee,"for","paulInputPassword1"),s(ee,"class","svelte-1oataez"),s(D,"type","text"),s(D,"class","form-control svelte-1oataez"),s(D,"id","paulInputPassword1"),s(D,"placeholder","Enter your company name..."),s(D,"name","company"),s(j,"class","form-group svelte-1oataez"),s(te,"for","paulFormControlTextarea1"),s(te,"class","svelte-1oataez"),s(C,"class","form-control svelte-1oataez"),s(C,"id","paulFormControlTextarea1"),s(C,"rows","3"),s(C,"placeholder","Enter your message..."),s(C,"name","message"),C.required=!0,s(G,"class","form-group svelte-1oataez"),s(ae,"type","checkbox"),s(ae,"class","form-check-input"),s(ae,"id","paulCheck1"),ae.required=!0,s(le,"class","form-check-label"),s(le,"for","paulCheck1"),s(re,"class","invalid-feedback"),s(Y,"class","form-check"),s(e,"action","/contact"),s(e,"method","POST"),s(e,"id","contactForm")},m(S,T){U(S,e,T),r(e,a),r(a,t),r(t,l),r(a,o),r(a,i),Q(i,n[1]),r(e,m),r(e,g),r(g,z),r(z,H),r(g,E),r(g,I),Q(I,n[2]),r(e,V),r(e,A),r(A,P),r(P,M),r(A,$),r(A,f),r(f,h),r(h,v),r(f,u),r(u,b),r(f,N),r(N,q),r(f,w),r(w,_e),r(f,W),r(W,he),r(f,x),r(x,ve),Ge(f,n[3],!0),r(e,ge),r(e,j),r(j,ee),r(ee,be),r(j,Ee),r(j,D),Q(D,n[4]),r(e,$e),r(e,G),r(G,te),r(te,Te),r(G,Ie),r(G,C),Q(C,n[5]),r(e,ye),r(e,Y),r(Y,ae),r(Y,ke),r(Y,le),r(le,Pe),r(Y,we),r(Y,re),r(re,Se),r(e,Oe),K(oe,e,null),ue=!0,Le||(Ne=[ie(i,"input",n[8]),ie(I,"input",n[9]),ie(f,"change",n[10]),ie(D,"input",n[11]),ie(C,"input",n[12]),ie(e,"submit",it(n[6]))],Le=!0)},p(S,T){T&2&&i.value!==S[1]&&Q(i,S[1]),T&4&&I.value!==S[2]&&Q(I,S[2]),T&8&&Ge(f,S[3]),T&16&&D.value!==S[4]&&Q(D,S[4]),T&32&&Q(C,S[5])},i(S){ue||(B(oe.$$.fragment,S),ue=!0)},o(S){R(oe.$$.fragment,S),ue=!1},d(S){S&&c(e),Z(oe),Le=!1,ut(Ne)}}}function Et(n){let e,a,t,l;return e=new Qe({props:{csm:12,md:6,$$slots:{default:[gt]},$$scope:{ctx:n}}}),t=new Qe({props:{csm:12,md:6,$$slots:{default:[bt]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment),a=y(),X(t.$$.fragment)},l(o){J(e.$$.fragment,o),a=k(o),J(t.$$.fragment,o)},m(o,i){K(e,o,i),U(o,a,i),K(t,o,i),l=!0},p(o,i){const m={};i&32768&&(m.$$scope={dirty:i,ctx:o}),e.$set(m);const g={};i&32830&&(g.$$scope={dirty:i,ctx:o}),t.$set(g)},i(o){l||(B(e.$$.fragment,o),B(t.$$.fragment,o),l=!0)},o(o){R(e.$$.fragment,o),R(t.$$.fragment,o),l=!1},d(o){Z(e,o),o&&c(a),Z(t,o)}}}function $t(n){let e,a;return e=new pt({props:{class:"justify-content-center align-items-center justify-items-center pt-5 pb-5",$$slots:{default:[Et]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){K(e,t,l),a=!0},p(t,l){const o={};l&32830&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){a||(B(e.$$.fragment,t),a=!0)},o(t){R(e.$$.fragment,t),a=!1},d(t){Z(e,t)}}}function Xe(n){let e,a=n[0].duplexes[0].tagline+"",t;return{c(){e=p("p"),t=O(a),this.h()},l(l){e=d(l,"P",{class:!0});var o=_(e);t=L(o,a),o.forEach(c),this.h()},h(){s(e,"class","tagline svelte-1oataez")},m(l,o){U(l,e,o),r(e,t)},p(l,o){o&1&&a!==(a=l[0].duplexes[0].tagline+"")&&lt(t,a)},d(l){l&&c(e)}}}function Je(n){let e,a,t;return a=new mt({props:{inputText:n[0].duplexes[0].headline}}),{c(){e=p("h3"),X(a.$$.fragment),this.h()},l(l){e=d(l,"H3",{class:!0});var o=_(e);J(a.$$.fragment,o),o.forEach(c),this.h()},h(){s(e,"class","svelte-1oataez")},m(l,o){U(l,e,o),K(a,e,null),t=!0},p(l,o){const i={};o&1&&(i.inputText=l[0].duplexes[0].headline),a.$set(i)},i(l){t||(B(a.$$.fragment,l),t=!0)},o(l){R(a.$$.fragment,l),t=!1},d(l){l&&c(e),Z(a)}}}function Ke(n){let e,a=n[0].duplexes[0].bodyText+"";return{c(){e=p("p"),this.h()},l(t){e=d(t,"P",{class:!0});var l=_(e);l.forEach(c),this.h()},h(){s(e,"class","svelte-1oataez")},m(t,l){U(t,e,l),e.innerHTML=a},p(t,l){l&1&&a!==(a=t[0].duplexes[0].bodyText+"")&&(e.innerHTML=a)},d(t){t&&c(e)}}}function Ze(n){let e,a;return e=new dt({props:{text:n[0].duplexes[0].ctaText||"Learn More",path:n[0].duplexes[0].targetPage?`${n[0].duplexes[0].targetPage}`:"/contact",color:"#FFF",background_color:"#D93561",ariaText:n[0].duplexes[0].ctaText,ariaLink:n[0].duplexes[0].targetPage}}),{c(){X(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,l){K(e,t,l),a=!0},p(t,l){const o={};l&1&&(o.text=t[0].duplexes[0].ctaText||"Learn More"),l&1&&(o.path=t[0].duplexes[0].targetPage?`${t[0].duplexes[0].targetPage}`:"/contact"),l&1&&(o.ariaText=t[0].duplexes[0].ctaText),l&1&&(o.ariaLink=t[0].duplexes[0].targetPage),e.$set(o)},i(t){a||(B(e.$$.fragment,t),a=!0)},o(t){R(e.$$.fragment,t),a=!1},d(t){Z(e,t)}}}function Tt(n){let e,a,t,l,o,i,m,g,z,H,E,I,V,A,P,M;e=new ct({props:{data:n[0].heroBanners[0]}}),t=new ft({props:{$$slots:{default:[$t]},$$scope:{ctx:n}}});let $=n[0].duplexes[0].tagline&&Xe(n),f=n[0].duplexes[0].headline&&Je(n),h=n[0].duplexes[0].bodyText&&Ke(n),v=n[0].duplexes[0].ctaText!=null&&Ze(n);return{c(){X(e.$$.fragment),a=y(),X(t.$$.fragment),l=y(),o=p("div"),i=p("div"),m=p("div"),g=p("img"),H=y(),E=p("div"),$&&$.c(),I=y(),f&&f.c(),V=y(),h&&h.c(),A=y(),v&&v.c(),this.h()},l(u){J(e.$$.fragment,u),a=k(u),J(t.$$.fragment,u),l=k(u),o=d(u,"DIV",{class:!0});var b=_(o);i=d(b,"DIV",{class:!0});var N=_(i);m=d(N,"DIV",{class:!0});var q=_(m);g=d(q,"IMG",{src:!0,alt:!0}),q.forEach(c),H=k(N),E=d(N,"DIV",{class:!0});var w=_(E);$&&$.l(w),I=k(w),f&&f.l(w),V=k(w),h&&h.l(w),A=k(w),v&&v.l(w),w.forEach(c),N.forEach(c),b.forEach(c),this.h()},h(){st(g.src,z="https://images.ctfassets.net/edlwcd8ay884/2BvKT5oEH7IXor9AofvNSs/1f76cba456f15d61751dc779b10d71ea/IMG_20230309_194249_818.jpg")||s(g,"src",z),s(g,"alt",""),s(m,"class","left-container svelte-1oataez"),s(E,"class","right-container svelte-1oataez"),s(i,"class",P="duplex-container normal-image "+(n[0].duplexes[0].containerLayout?"":"row-reverse")+" svelte-1oataez"),s(o,"class","duplex normal-container container svelte-1oataez")},m(u,b){K(e,u,b),U(u,a,b),K(t,u,b),U(u,l,b),U(u,o,b),r(o,i),r(i,m),r(m,g),r(i,H),r(i,E),$&&$.m(E,null),r(E,I),f&&f.m(E,null),r(E,V),h&&h.m(E,null),r(E,A),v&&v.m(E,null),M=!0},p(u,[b]){const N={};b&1&&(N.data=u[0].heroBanners[0]),e.$set(N);const q={};b&32830&&(q.$$scope={dirty:b,ctx:u}),t.$set(q),u[0].duplexes[0].tagline?$?$.p(u,b):($=Xe(u),$.c(),$.m(E,I)):$&&($.d(1),$=null),u[0].duplexes[0].headline?f?(f.p(u,b),b&1&&B(f,1)):(f=Je(u),f.c(),B(f,1),f.m(E,V)):f&&(je(),R(f,1,1,()=>{f=null}),xe()),u[0].duplexes[0].bodyText?h?h.p(u,b):(h=Ke(u),h.c(),h.m(E,A)):h&&(h.d(1),h=null),u[0].duplexes[0].ctaText!=null?v?(v.p(u,b),b&1&&B(v,1)):(v=Ze(u),v.c(),B(v,1),v.m(E,null)):v&&(je(),R(v,1,1,()=>{v=null}),xe()),(!M||b&1&&P!==(P="duplex-container normal-image "+(u[0].duplexes[0].containerLayout?"":"row-reverse")+" svelte-1oataez"))&&s(i,"class",P)},i(u){M||(B(e.$$.fragment,u),B(t.$$.fragment,u),B(f),B(v),M=!0)},o(u){R(e.$$.fragment,u),R(t.$$.fragment,u),R(f),R(v),M=!1},d(u){Z(e,u),u&&c(a),Z(t,u),u&&c(l),u&&c(o),$&&$.d(),f&&f.d(),h&&h.d(),v&&v.d()}}}async function ot(){return new Response(null,{status:200})}function It(n,e,a){let t="",l="",o="",i="",m="";async function g(P){P.preventDefault();var M=document.getElementsByClassName("needs-validation");Array.prototype.filter.call(M,function(h){h.addEventListener("submit",function(v){h.checkValidity()===!1&&(v.preventDefault(),v.stopPropagation()),h.classList.add("was-validated")},!1)});let $={name:t,email:l,who:o,company:i,message:m};(await fetch(P.target.action,{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify($)})).ok&&(a(1,t=""),a(2,l=""),a(3,o=""),a(4,i=""),a(5,m=""),alert("Thanks! We love hearing from you!"))}let{data:z}=e;function H(){t=this.value,a(1,t)}function E(){l=this.value,a(2,l)}function I(){o=rt(this),a(3,o)}function V(){i=this.value,a(4,i)}function A(){m=this.value,a(5,m)}return n.$$set=P=>{"data"in P&&a(0,z=P.data)},[z,t,l,o,i,m,g,ot,H,E,I,V,A]}class zt extends et{constructor(e){super(),tt(this,e,It,Tt,at,{GET:7,data:0})}get GET(){return ot}}export{zt as component};
