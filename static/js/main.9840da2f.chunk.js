(this.webpackJsonptinyforest=this.webpackJsonptinyforest||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),c=(n(75),n(15)),s=n(12),i=(n(40),n(41),n(129)),u=n(128),m=function(){return o.a.createElement("div",null,o.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},o.a.createElement(c.b,{className:"navbar-brand",to:"/"},"TinyForest"),o.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(u.a,{className:"mr-auto"},o.a.createElement(c.b,{className:"nav-link",to:"/"},"Home"),o.a.createElement(c.b,{className:"nav-link",to:"/system"},"System Information"),o.a.createElement(c.b,{className:"nav-link",to:"/plants"},"My Plants")))))},h=n(68),p=function(){return o.a.createElement("div",{className:"home-wrapper"},o.a.createElement("div",{className:"gridimages"},o.a.createElement(h.a,{images:["../Photos/kokous1.jpeg","../Photos/kolvaus1.jpeg","../Photos/kolvaus2.jpg","../Photos/kolvaus3.jpg","../Photos/kolvaus4.jpg","../Photos/konstaRpi.jpeg","../Photos/rpiMoist.jpeg","../Photos/rpiPek.jpeg","../Photos/rpiTemp.jpeg","../Photos/valkosipulivk1.jpeg","../Photos/valkosipulivk2.jpg","../Photos/valkosipulivk3.jpg","../Photos/jarjestelma07112019.jpg"]})),o.a.createElement("div",{className:"hometext"},o.a.createElement("h3",null,"Monialaprojekti TinyForest"),o.a.createElement("p",null,"Projektimme tarkoitus on tuottaa j\xe4rjestelm\xe4 joka automatisoi kasvien kasvatusta ja monitoroi l\xe4mp\xf6tilaa, kosteutta ja valoa."),o.a.createElement("p",null,"Projektin osalliset ovat Juska Forelius (Projektip\xe4\xe4llikk\xf6), Niko Hakala, Konstantin Gurin ja Pekka Helenius.")))},f=n(8),E=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),c=Object(f.a)(l,2),s=c[0],i=c[1];Object(a.useEffect)((function(){u(),m()}),[]);var u=function(){fetch("../plantinfo.json").then((function(e){return e.json()})).then((function(e){return r(e.plant)})).catch((function(e){return console.error(e)}))},m=function(){fetch("../tekstia.txt").then((function(e){return e.text()})).then((function(e){return i(e)})).catch((function(e){return console.error(e)}))};return console.log(s),o.a.createElement("div",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("h2",{style:{padding:10}},"Plant Information"),o.a.createElement("div",{className:"plants"},o.a.createElement("div",{className:"plant1"},o.a.createElement("h5",null,"ID: ",n.id),o.a.createElement("h5",null,"Nimi: ",n.nimi),o.a.createElement("h5",null,"Tyyppi: ",n.type),o.a.createElement("h5",null,"Istutusp\xe4iv\xe4: ",n.planting_day),o.a.createElement("img",{alt:"No_image",title:n.short_description,src:n.imagefile,width:"200"})),o.a.createElement("div",{className:"plant2"},o.a.createElement("h5",null,"ID: PL2ID"),o.a.createElement("h5",null,"Nimi: Kasvi2"),o.a.createElement("h5",null,"Tyyppi: Kasvi2Tyyppi"),o.a.createElement("h5",null,"Istutusp\xe4iv\xe4: kasvi2ispv"),o.a.createElement("img",{alt:"No_image",src:n.imagefile2,width:"200"})))))},j=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)([]),c=Object(f.a)(l,2),s=c[0],i=c[1],u=Object(a.useState)([]),m=Object(f.a)(u,2),h=m[0],p=m[1];Object(a.useEffect)((function(){E(),j(),v()}),[]);var E=function(){fetch("../tinyforest.log.json").then((function(e){return e.json()})).then((function(e){return r(e.sensor.msg)})).catch((function(e){return console.error(e)}))},j=function(){fetch("../tinyforest.log.json").then((function(e){return e.json()})).then((function(e){return i(e.system_file.msg)})).catch((function(e){return console.error(e)}))},v=function(){fetch("../tinyforest.log.json").then((function(e){return e.json()})).then((function(e){return p(e.json_check.msg)})).catch((function(e){return console.error(e)}))};return console.log(n),console.log(h),console.log(s),o.a.createElement("div",null,o.a.createElement("p",null,n.name,": ",n.description),o.a.createElement("p",null,h.description))},v=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)([]),c=Object(f.a)(l,2),s=c[0],i=c[1],u=Object(a.useState)([]),m=Object(f.a)(u,2),h=m[0],p=m[1],E=Object(a.useState)([]),v=Object(f.a)(E,2),g=v[0],d=v[1];Object(a.useEffect)((function(){k(),y(),b(),N()}),[]);var k=function(){fetch("../plantinfo.json").then((function(e){return e.json()})).then((function(e){return r(e.sensors.moisture)})).catch((function(e){return console.error(e)}))},y=function(){fetch("../plantinfo.json").then((function(e){return e.json()})).then((function(e){return i(e.sensors.light)})).catch((function(e){return console.error(e)}))},b=function(){fetch("../plantinfo.json").then((function(e){return e.json()})).then((function(e){return p(e.sensors.temperature)})).catch((function(e){return console.error(e)}))},N=function(){fetch("../tinyforest.log.json").then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return console.error(e)}))};return console.log(g),o.a.createElement("div",null,o.a.createElement("div",{className:"wrapperSys"},o.a.createElement("h2",{style:{padding:10}},"System Information"),o.a.createElement("div",{className:"sensors"},o.a.createElement("div",{className:"sys1"},o.a.createElement("h5",null,"Sensor name: ",n.sensor_friendly_name),o.a.createElement("h5",null,"Moisture: 202020"),o.a.createElement("h5",null,"Connected to pin: ",n.gpio_pin)),o.a.createElement("div",{className:"sys1"},o.a.createElement("h5",null,"Sensor name: ",s.sensor_friendly_name),o.a.createElement("h5",null,"Light value(dark or light): light"),o.a.createElement("h5",null,"Connected to pin: ",s.gpio_pin)),o.a.createElement("div",{className:"sys1"},o.a.createElement("h5",null,"Sensor name: ",h.sensor_friendly_name),o.a.createElement("h5",null,"Temperature: 123c"),o.a.createElement("h5",null,"Connected to pin: ",h.gpio_pin)),o.a.createElement("div",{className:"sys1"},o.a.createElement("h5",null,"Recent system logs"),o.a.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement((function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/system",component:v}),o.a.createElement(s.a,{path:"/plants",component:E}),o.a.createElement(s.a,{exact:!0,path:"/",component:p}),o.a.createElement(s.a,{render:function(){return o.a.createElement("h1",null,"Page not found")}}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,n){},70:function(e,t,n){e.exports=n(125)},75:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.9840da2f.chunk.js.map