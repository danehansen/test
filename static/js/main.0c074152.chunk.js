(this.webpackJsonpendpoint=this.webpackJsonpendpoint||[]).push([[0],[,function(a,e,t){a.exports={black000:"#000",gray097:"#f4f5f7",cardGap:"32px",cardImgHeight:"112px",cardWidth:"280px",root:"Card_root__3S1zR",img:"Card_img__lHeF0",darkmode:"Card_darkmode__2T9pe",link:"Card_link__1VKcr",top:"Card_top__2vn2f",bottom:"Card_bottom__1KZwV",title:"Card_title__V_isj",subtitle:"Card_subtitle__3oAzI",attributes:"Card_attributes__1lMn3",key:"Card_key__t12l3"}},,,,,function(a,e,t){a.exports={black000:"#000",gray097:"#f4f5f7",cardGap:"32px",cardImgHeight:"112px",cardWidth:"280px",root:"App_root__nWMuC",darkmode:"App_darkmode__1Y2E8",header:"App_header__1Xt5M",label:"App_label__1QbUI"}},function(a,e,t){a.exports={cardGap:"32px",cardImgHeight:"112px",cardWidth:"280px"}},,function(a,e,t){a.exports={black000:"#000",gray097:"#f4f5f7",root:"Toggle_root__jncxl",darkmode:"Toggle_darkmode__MBG8i"}},function(a,e,t){a.exports={black000:"#000",gray097:"#f4f5f7"}},,function(a,e,t){a.exports={cardGap:"32px",cardImgHeight:"112px",cardWidth:"280px",root:"CardHolder_root__Jmra5"}},,,,,,,,function(a,e,t){"use strict";t.r(e);var r=t(0),c=t(2),d=t.n(c),o=t(11),n=t.n(o),s=t(5),i=t(13),l=t(3),m=t.n(l),b=t(1),j=t.n(b);function u(a){var e=a.author,t=a.darkmode,c=a.id,d=a.src,o=a.subtitle,n=a.title,s=a.url;return Object(r.jsxs)("div",{className:m()(j.a.root,t&&j.a.darkmode),children:[Object(r.jsx)("div",{className:j.a.top,children:Object(r.jsx)("img",{className:j.a.img,src:d,alt:n})}),Object(r.jsxs)("div",{className:j.a.bottom,children:[Object(r.jsx)("h3",{className:j.a.title,children:n}),Object(r.jsx)("p",{className:j.a.subtitle,children:o}),Object(r.jsxs)("dl",{className:j.a.attributes,children:[Object(r.jsx)("dt",{className:j.a.key,children:"Author"}),Object(r.jsx)("dd",{className:j.a.value,children:e}),Object(r.jsx)("dt",{className:j.a.key,children:"ID"}),Object(r.jsx)("dd",{className:j.a.value,children:c}),Object(r.jsx)("dt",{className:j.a.key,children:"URL"}),Object(r.jsx)("dd",{className:j.a.value,children:Object(r.jsx)("a",{className:j.a.link,href:s,children:s})})]})]})]})}var p=t(12),h=t.n(p);function _(a){var e=a.children;return Object(r.jsx)("div",{className:h.a.root,children:e})}var x=t(4),f=t(7),k=t.n(f),O=parseInt(k.a.cardImgHeight),g=2*parseInt(k.a.cardWidth)+parseInt(k.a.cardGap)-1;function v(a){for(var e=[],t=0;t<a;t++)e.push(N());return e.join(" ")}function N(){for(var a="",e=Object(x.random)(1,10,!0,2),t=Math.round(Math.random()),r=0;r<e;r++)a+=(r+t)%2?Object(x.randomItem)("aeiou"):Object(x.randomItem)("bcdfghjklmnpqrstvwxz"),0===r&&(a=a.toUpperCase());return a}function y(){var a=Math.round(899999999*Math.random())+1e8;return{author:v(2),id:a,src:"https://picsum.photos/".concat(g,"/").concat(O,"?random=").concat(a),subtitle:v(Object(x.random)(4,6,!0)),title:v(Object(x.random)(2,4,!0)),url:"https://".concat(N().toLowerCase(),".com")}}var C=t(6),I=t.n(C),M=t(14),H=t(9),w=t.n(H);function A(a){var e=a.darkmode,t=Object(M.a)(a,["darkmode"]);return Object(r.jsx)("input",Object(s.a)({className:m()(w.a.root,e&&w.a.darkmode),type:"checkbox"},t))}var G=t(10),W=t.n(G),z=W.a.black000,E=W.a.gray097,J=function(a){for(var e=[],t=function(a){var t=void 0;do{t=y()}while(e.find((function(a){return a.id===t.id})));e.push(t)},r=0;r<a;r++)t();return e}(10);function S(){var a=Object(c.useState)(!1),e=Object(i.a)(a,2),t=e[0],d=e[1];return Object(r.jsxs)("div",{className:m()(I.a.root,t&&I.a.darkmode),children:[Object(r.jsx)("div",{className:I.a.header,children:Object(r.jsxs)("label",{className:I.a.label,children:["darkmode",Object(r.jsx)(A,{checked:t,darkmode:t,onChange:function(a){var e=a.target.checked;document.body.style.background=e?z:E,d(e)}})]})}),Object(r.jsx)(_,{children:J.map((function(a){return Object(c.createElement)(u,Object(s.a)(Object(s.a)({},a),{},{darkmode:t,key:a.id}))}))})]})}n.a.render(Object(r.jsx)(d.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.0c074152.chunk.js.map