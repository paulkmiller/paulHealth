import{S as k,i as m,s as y,k as L,q as T,l as v,m as A,r as B,h as g,n as o,p as u,b as q,D as C,u as E,E as b}from"./index.5d5a95b7.js";function S(n){let a,i,s,r;return{c(){a=L("a"),i=T(n[5]),this.h()},l(e){a=v(e,"A",{href:!0,style:!0,"aria-label":!0,"data-aos":!0,"data-aos-easing":!0,"data-aos-delay":!0,"data-aos-offset":!0,class:!0});var l=A(a);i=B(l,n[5]),l.forEach(g),this.h()},h(){o(a,"href",n[4]),u(a,"--link-color",n[1]),u(a,"--background-color",n[0]),o(a,"aria-label",s="A call to action button inviting the user to "+n[2]+" by visiting the "+n[3]+" page."),o(a,"data-aos",n[8]),o(a,"data-aos-easing","ease-in-back"),o(a,"data-aos-delay",r=n[6]+n[7]),o(a,"data-aos-offset","0"),o(a,"class","svelte-5r4rcn")},m(e,l){q(e,a,l),C(a,i)},p(e,[l]){l&32&&E(i,e[5]),l&16&&o(a,"href",e[4]),l&2&&u(a,"--link-color",e[1]),l&1&&u(a,"--background-color",e[0]),l&12&&s!==(s="A call to action button inviting the user to "+e[2]+" by visiting the "+e[3]+" page.")&&o(a,"aria-label",s),l&256&&o(a,"data-aos",e[8]),l&192&&r!==(r=e[6]+e[7])&&o(a,"data-aos-delay",r)},i:b,o:b,d(e){e&&g(a)}}}function w(n,a,i){let{path:s}=a,{text:r}=a,{background_color:e}=a,{color:l=""}=a,{ariaText:f}=a,{ariaLink:_}=a,{delay:c=0}=a,{aos_delay:d=200}=a,{aos_anim:h=""}=a;return e===""&&(e="#fff"),l===""&&(l="#29397a"),f=f.toLowerCase(),_=_.replace(/\//g," ").replace(/-/g," ").trim(),n.$$set=t=>{"path"in t&&i(4,s=t.path),"text"in t&&i(5,r=t.text),"background_color"in t&&i(0,e=t.background_color),"color"in t&&i(1,l=t.color),"ariaText"in t&&i(2,f=t.ariaText),"ariaLink"in t&&i(3,_=t.ariaLink),"delay"in t&&i(6,c=t.delay),"aos_delay"in t&&i(7,d=t.aos_delay),"aos_anim"in t&&i(8,h=t.aos_anim)},[e,l,f,_,s,r,c,d,h]}class j extends k{constructor(a){super(),m(this,a,w,S,y,{path:4,text:5,background_color:0,color:1,ariaText:2,ariaLink:3,delay:6,aos_delay:7,aos_anim:8})}}export{j as B};