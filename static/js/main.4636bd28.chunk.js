(this.webpackJsonptinyforest=this.webpackJsonptinyforest||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),o=a.n(r),s=(a(75),a(14)),c=a(11),i=(a(39),a(40),a(129)),m=a(128),u=function(){return l.a.createElement("div",null,l.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(s.b,{className:"navbar-brand",to:"/"},"TinyForest"),l.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(m.a,{className:"mr-auto"},l.a.createElement(s.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(s.b,{className:"nav-link",to:"/system"},"System Information"),l.a.createElement(s.b,{className:"nav-link",to:"/plants"},"My Plants")))))},p=a(67),v=function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{width:"60%"}},l.a.createElement(p.a,{images:["../Photos/kokous1.jpeg","../Photos/kolvaus1.jpeg","../Photos/kolvaus2.jpg","../Photos/kolvaus3.jpg","../Photos/kolvaus4.jpg","../Photos/konstaRpi.jpeg","../Photos/rpiMoist.jpeg","../Photos/rpiPek.jpeg","../Photos/rpiTemp.jpeg","../Photos/valkosipulivk1.jpeg","../Photos/valkosipulivk2.jpg","../Photos/valkosipulivk3.jpg"]})))},E=a(68),h=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){fetch("../plantinfo.json").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.error(e)}))};return l.a.createElement("div",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",{style:{padding:10}},"Plant Information"),l.a.createElement("div",{className:"plants"},l.a.createElement("div",{className:"plant1"},l.a.createElement("h6",null,"Nimi: ",a.id),l.a.createElement("h6",null,"Tyyppi: ",a.type),l.a.createElement("h6",null,"Istutusp\xe4iv\xe4: ",a.istutuspv),l.a.createElement("img",{alt:"Broken",src:a.imagefile,width:"200"})),l.a.createElement("div",{className:"plant2"},l.a.createElement("h6",null,"Nimi: Kasvi2"),l.a.createElement("h6",null,"Tyyppi: Kasvi2Tyyppi"),l.a.createElement("h6",null,"Istutusp\xe4iv\xe4: Istutuspv2"),l.a.createElement("img",{alt:"Broken",src:a.imagefile2,width:"200"})))))},d=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",{style:{padding:10}},"System Information"),l.a.createElement("div",{className:"sys1"},l.a.createElement("h5",null,"System Information"),l.a.createElement("h6",null,"Temperature: Pull system temp"),l.a.createElement("h6",null,"Kernel: Pull kernel info"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement((function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/system",component:d}),l.a.createElement(c.a,{path:"/plants",component:h}),l.a.createElement(c.a,{exact:!0,path:"/",component:v}),l.a.createElement(c.a,{render:function(){return l.a.createElement("h1",null,"Page not found")}}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,t,a){},70:function(e,t,a){e.exports=a(125)},75:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.4636bd28.chunk.js.map