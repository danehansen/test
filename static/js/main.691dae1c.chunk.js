(this.webpackJsonpendpoint=this.webpackJsonpendpoint||[]).push([[0],{1:function(e,a,t){e.exports={cardGap:"32px",cardImgHeight:"112px",cardWidth:"280px",root:"Card_root__3S1zR",img:"Card_img__lHeF0",darkmode:"Card_darkmode__2T9pe",link:"Card_link__1VKcr",top:"Card_top__2vn2f",bottom:"Card_bottom__1KZwV",title:"Card_title__V_isj",subtitle:"Card_subtitle__3oAzI",attributes:"Card_attributes__1lMn3",key:"Card_key__t12l3"}},11:function(e,a,t){e.exports={cardGap:"32px",cardImgHeight:"112px",cardWidth:"280px",root:"CardHolder_root__Jmra5"}},19:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t(2),d=t.n(c),o=t(10),n=t.n(o),s=t(5),i=t(12),l=t(3),m=t.n(l),j=t(1),p=t.n(j);function h(e){var a=e.author,t=e.darkmode,c=e.id,d=e.src,o=e.subtitle,n=e.title,s=e.url;return Object(r.jsxs)("div",{className:m()(p.a.root,t&&p.a.darkmode),children:[Object(r.jsx)("div",{className:p.a.top,children:Object(r.jsx)("img",{className:p.a.img,src:d,alt:n})}),Object(r.jsxs)("div",{className:p.a.bottom,children:[Object(r.jsx)("h3",{className:p.a.title,children:n}),Object(r.jsx)("p",{className:p.a.subtitle,children:o}),Object(r.jsxs)("dl",{className:p.a.attributes,children:[Object(r.jsx)("dt",{className:p.a.key,children:"Author"}),Object(r.jsx)("dd",{className:p.a.value,children:a}),Object(r.jsx)("dt",{className:p.a.key,children:"ID"}),Object(r.jsx)("dd",{className:p.a.value,children:c}),Object(r.jsx)("dt",{className:p.a.key,children:"URL"}),Object(r.jsx)("dd",{className:p.a.value,children:Object(r.jsx)("a",{className:p.a.link,href:s,children:s})})]})]})]})}var u=t(11),b=t.n(u);function _(e){var a=e.children;return Object(r.jsx)("div",{className:b.a.root,children:a})}var x=t(4),O=t(7),k=t.n(O),v=parseInt(k.a.cardImgHeight),f=2*parseInt(k.a.cardWidth)+parseInt(k.a.cardGap)-1;function g(e){for(var a=[],t=0;t<e;t++)a.push(N());return a.join(" ")}function N(){for(var e="",a=Object(x.random)(1,10,!0,2),t=Math.round(Math.random()),r=0;r<a;r++)e+=(r+t)%2?Object(x.randomItem)("aeiou"):Object(x.randomItem)("bcdfghjklmnpqrstvwxz"),0===r&&(e=e.toUpperCase());return e}function C(){var e=Math.round(899999999*Math.random())+1e8;return{author:g(2),id:e,src:"https://picsum.photos/".concat(f,"/").concat(v,"?random=").concat(e),subtitle:g(Object(x.random)(4,6,!0)),title:g(Object(x.random)(2,4,!0)),url:"https://".concat(N().toLowerCase(),".com")}}var I=t(6),M=t.n(I),y=t(13),H=t(9),w=t.n(H);function A(e){var a=e.darkmode,t=Object(y.a)(e,["darkmode"]);return Object(r.jsx)("input",Object(s.a)({className:m()(w.a.root,a&&w.a.darkmode),type:"checkbox"},t))}var G=function(e){for(var a=[],t=function(e){var t=void 0;do{t=C()}while(a.find((function(e){return e.id===t.id})));a.push(t)},r=0;r<e;r++)t();return a}(10);function W(){var e=Object(c.useState)(!1),a=Object(i.a)(e,2),t=a[0],d=a[1];return Object(r.jsxs)("div",{className:m()(M.a.root,t&&M.a.darkmode),children:[Object(r.jsx)("div",{className:M.a.header,children:Object(r.jsxs)("label",{className:M.a.label,children:["darkmode",Object(r.jsx)(A,{checked:t,darkmode:t,onChange:function(e){var a=e.target.checked;d(a)}})]})}),Object(r.jsx)(_,{children:G.map((function(e){return Object(c.createElement)(h,Object(s.a)(Object(s.a)({},e),{},{darkmode:t,key:e.id}))}))})]})}n.a.render(Object(r.jsx)(d.a.StrictMode,{children:Object(r.jsx)(W,{})}),document.getElementById("root"))},6:function(e,a,t){e.exports={cardGap:"32px",cardImgHeight:"112px",cardWidth:"280px",root:"App_root__nWMuC",darkmode:"App_darkmode__1Y2E8",header:"App_header__1Xt5M",label:"App_label__1QbUI"}},7:function(e,a,t){e.exports={cardGap:"32px",cardImgHeight:"112px",cardWidth:"280px"}},9:function(e,a,t){e.exports={root:"Toggle_root__jncxl",darkmode:"Toggle_darkmode__MBG8i"}}},[[19,1,2]]]);
//# sourceMappingURL=main.691dae1c.chunk.js.map