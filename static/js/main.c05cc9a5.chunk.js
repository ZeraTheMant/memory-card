(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(1),r=c.n(n),s=c(4),o=c.n(s),a=c(2),j=(c(10),function(e){return Object(i.jsx)("header",{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:["Memory Card ",Object(i.jsxs)("span",{children:["(click on images you haven't selected yet...score ",e.maxScoreToWin," points to win!)"]})]}),Object(i.jsxs)("div",{id:"score-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Score"}),Object(i.jsx)("h2",{children:e.score})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Top Score"}),Object(i.jsx)("h2",{children:e.highScore})]})]})]})})}),p=function(e){var t=Object(n.useState)("#"),c=Object(a.a)(t,2),r=(c[0],c[1],Object(n.useState)(e.text)),s=Object(a.a)(r,2);s[0],s[1];return Object(i.jsx)("div",{className:"card",onClick:e.onClick,children:Object(i.jsx)("img",{src:e.imgSrc})})},u=function(e){return Object(i.jsx)("main",{children:e.cards.map((function(t,c){return function(t,c){return Object(i.jsx)(p,{imgSrc:t,onClick:function(){return e.onClick(t)}},c)}(t,c)}))})};function x(e){return e.sort((function(){return Math.random()-.5}))}var m=function(){var e=Object(n.useState)(!0),t=Object(a.a)(e,2),c=(t[0],t[1]),r=Object(n.useState)(0),s=Object(a.a)(r,2),o=s[0],p=s[1],m=Object(n.useState)(0),h=Object(a.a)(m,2),d=h[0],b=h[1],g=Object(n.useState)([]),l=Object(a.a)(g,2),O=l[0],f=l[1],S=Object(n.useState)(x(["https://pixnio.com/free-images/2020/07/24/2020-07-24-08-42-56-1200x800.jpg","https://pixnio.com/free-images/2017/06/08/2017-06-08-14-10-56-900x616.jpg","https://pixnio.com/free-images/2019/08/30/2019-08-30-09-48-35-1200x800.jpg","https://pixnio.com/free-images/2020/11/07/2020-11-07-11-56-49-1200x800.jpg","https://pixnio.com/free-images/2019/07/23/2019-07-23-04-12-56-e1563867744800-1200x900.jpg","https://pixnio.com/free-images/2019/08/30/2019-08-30-10-12-28-1200x800.jpg","https://pixnio.com/free-images/2018/12/05/2018-12-05-11-33-36-1200x900.jpg","https://pixnio.com/free-images/2020/02/07/2020-02-07-09-23-06-1200x800.jpg","https://pixnio.com/free-images/2018/11/11/2018-11-11-15-55-55-1200x803.jpg","https://pixnio.com/free-images/2018/07/27/2018-07-27-14-38-13-1200x800.jpg","https://pixnio.com/free-images/2019/09/07/2019-09-07-12-07-23-1200x800.jpg","https://pixnio.com/free-images/2020/09/09/2020-09-09-11-04-30-1200x800.jpg"])),v=Object(a.a)(S,2),k=v[0],y=v[1],C=k.length,w=function(){p(0),c(!0),f([])},M=function(e){if(O.find((function(t){return t==e})))return alert("You already clicked that! Back to zero!"),void w();p(o+1),f(O.concat(e))};return Object(n.useEffect)((function(){o>d&&b(o),o==C&&(alert("Congratulations, you win! You managed to remember all previously selected images. You're a genius!"),w()),y(x(k))}),[o]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{score:o,highScore:d,maxScoreToWin:C}),Object(i.jsx)(u,{cards:k,onClick:function(e){return M(e)}})]})};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c05cc9a5.chunk.js.map