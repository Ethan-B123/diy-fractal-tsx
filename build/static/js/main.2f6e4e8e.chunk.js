(window.webpackJsonpfractals=window.webpackJsonpfractals||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),o=n.n(i),u=(n(25),n(26),n(5)),c="UC_ADD_SOURCE_POINT",s="UC_EDIT_SOURCE_POINT",l="REMOVE_SOURCE_POINT";var p=n(1),d=function(e,t,n){return function(a){var r=a.currentTarget.value,i=JSON.parse(JSON.stringify(e.point));""===r?t(r):isNaN(parseInt(r))||(t(r),i[n]=parseInt(r),e.editPoint(i))}},f=function(e){return function(t){var n=t.currentTarget.value,a=JSON.parse(JSON.stringify(e.point));a.color=n,e.editPoint(a)}},m=function(e){return function(t){var n=t.currentTarget.value,a=JSON.parse(JSON.stringify(e.point));a.type=n,e.editPoint(a)}},v=function(e){return function(){e.removePoint(e.point)}},h=function(e){var t=Object(a.useState)(e.point.x.toString()),n=Object(p.a)(t,2),i=n[0],o=n[1],u=Object(a.useState)(e.point.y.toString()),c=Object(p.a)(u,2),s=c[0],l=c[1],h=Object(a.useState)(e.point.w.toString()),g=Object(p.a)(h,2),y=g[0],O=g[1],S=Object(a.useState)(e.point.h.toString()),E=Object(p.a)(S,2),b=E[0],C=E[1];return r.a.createElement("div",{className:"point-index-item"},r.a.createElement("p",null,"shape:"),r.a.createElement("select",{onChange:m(e),value:e.point.type},r.a.createElement("option",{value:"Circle"},"Circle"),r.a.createElement("option",{value:"Box"},"Box")),r.a.createElement("p",null,"color:"),r.a.createElement("input",{type:"color",onChange:f(e),value:e.point.color}),r.a.createElement("p",null,"remove:"),r.a.createElement("button",{onClick:v(e)},"Click to remove"),r.a.createElement("p",null,"x:"),r.a.createElement("input",{type:"number",onChange:d(e,o,"x"),value:i}),r.a.createElement("p",null,"y:"),r.a.createElement("input",{type:"number",onChange:d(e,l,"y"),value:s}),r.a.createElement("p",null,"w:"),r.a.createElement("input",{type:"number",onChange:d(e,O,"w"),value:y}),r.a.createElement("p",null,"h:"),r.a.createElement("input",{type:"number",onChange:d(e,C,"h"),value:b}))},g=(n(13),n(14),Object(u.b)(function(e){return{sourcePoints:e.sourcePoints}},function(e){var t={type:"Box",color:"#ffffff",x:350,y:350,w:30,h:30,id:-1};return{addSourcePoint:function(){return e({type:c,point:t})},editSourcePoint:function(t){return e(function(e){return{type:s,point:e}}(t))},removeSourcePoint:function(t){return e(function(e){return{type:l,point:e}}(t))}}})(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"index-nav"},r.a.createElement("p",null,"source points"),r.a.createElement("button",{onClick:e.addSourcePoint},"Add"),r.a.createElement("button",{onClick:function(){return alert("not working yet")}},"Randomize")),e.sourcePoints.points.map(function(t){return r.a.createElement(h,{key:t.id,point:t,editPoint:e.editSourcePoint,removePoint:e.removeSourcePoint})}))})),y="UC_ADD_FRACTAL_POINT",O="UC_EDIT_FRACTAL_POINT",S="SET_GCO",E="REMOVE_FRACTAL_POINT",b="SET_ITER_DELAY",C="SET_FORCE_FULL_PLAY";var N=function(e,t,n){return function(a){var r=a.currentTarget.value,i=JSON.parse(JSON.stringify(e.point));""===r?t(r):isNaN(parseInt(r))||(t(r),i[n]=parseInt(r),e.editPoint(i))}},P=function(e){return function(){e.removePoint(e.point)}},w=function(e){var t=Object(a.useState)(e.point.x.toString()),n=Object(p.a)(t,2),i=n[0],o=n[1],u=Object(a.useState)(e.point.y.toString()),c=Object(p.a)(u,2),s=c[0],l=c[1],d=Object(a.useState)(e.point.w.toString()),f=Object(p.a)(d,2),m=f[0],v=f[1],h=Object(a.useState)(e.point.h.toString()),g=Object(p.a)(h,2),y=g[0],O=g[1],S=Object(a.useState)(e.point.iters.toString()),E=Object(p.a)(S,2),b=E[0],C=E[1];return r.a.createElement("div",{className:"point-index-item"},r.a.createElement("p",null,"x:"),r.a.createElement("input",{type:"number",onChange:N(e,o,"x"),value:i}),r.a.createElement("p",null,"y:"),r.a.createElement("input",{type:"number",onChange:N(e,l,"y"),value:s}),r.a.createElement("p",null,"w:"),r.a.createElement("input",{type:"number",onChange:N(e,v,"w"),value:m}),r.a.createElement("p",null,"h:"),r.a.createElement("input",{type:"number",onChange:N(e,O,"h"),value:y}),r.a.createElement("p",null,"iters:"),r.a.createElement("input",{type:"number",onChange:N(e,C,"iters"),value:b}),r.a.createElement("p",null,"remove:"),r.a.createElement("button",{onClick:P(e)},"Click to remove"))},I=function(e){return function(t){var n=t.currentTarget.value;e.setGCO(n)}},J=Object(u.b)(function(e){return{fractalPoints:e.fractalPoints}},function(e){var t={x:175,y:175,w:350,h:350,id:-1,iters:5};return{addFractalPoint:function(){return e({type:y,point:t})},editFractalPoint:function(t){return e(function(e){return{type:O,point:e}}(t))},removeFractalPoint:function(t){return e(function(e){return{type:E,point:e}}(t))},setGCO:function(t){return e(function(e){return{type:S,newGCO:e}}(t))},setForceFullPlay:function(t){return e(function(e){return{type:C,forceFullPlay:e}}(t))},setIterDelay:function(t){return e(function(e){return{type:b,newDelay:e}}(t))}}})(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"index-nav"},r.a.createElement("p",null,"FractalPoints"),r.a.createElement("button",{onClick:e.addFractalPoint},"Add"),r.a.createElement("button",{onClick:function(){return alert("not working yet")}},"Randomize"),r.a.createElement("select",{onChange:I(e),value:e.fractalPoints.globalCompositeOperation},r.a.createElement("option",{value:"source-over"},"new over"),r.a.createElement("option",{value:"destination-over"},"new under"))),e.fractalPoints.points.map(function(t){return r.a.createElement(w,{key:t.id,point:t,editPoint:e.editFractalPoint,removePoint:e.removeFractalPoint})}))}),x=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("div",{className:"app-nav-header"},r.a.createElement("h1",null,"Fractal Canvas"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement(J,null),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(10),j=n.n(k),F=n(16),_=n(17),T=n(18);function D(e,t){return new Promise(function(n){e.src=t,e.addEventListener("load",function(){n(e)})})}var R=function(){function e(t,n){Object(_.a)(this,e),this.fCanvas=t,this.sCanvas=n,this.fractalPoints=[],this.myImg=new Image,this.updateId=-1,this.pendingUpdate=null,this.globalCompositeOperation="source-over"}return Object(T.a)(e,[{key:"receiveUpdates",value:function(e){var t=this,n=this.sCanvas.getContext("2d");n&&(this.globalCompositeOperation=e.fractalPoints.globalCompositeOperation,n.clearRect(0,0,this.sCanvas.width,this.sCanvas.height),e.sourcePoints.points.forEach(function(e){t.drawSourcePoint(n,e)}),this.updateId!==e.fractalPoints.updateId&&(this.fractalPoints=e.fractalPoints.points,this.printFractal(e.fractalPoints.updateId)))}},{key:"drawSourcePoint",value:function(e,t){e.save(),e.translate(t.x,t.y),e.fillStyle=t.color,"Circle"===t.type?(e.beginPath(),e.ellipse(0,0,t.w/2,t.h/2,0,0,2*Math.PI),e.closePath(),e.fill()):e.fillRect(-t.w/2,-t.h/2,t.w,t.h),e.restore()}},{key:"printFractal",value:function(){var e=Object(F.a)(j.a.mark(function e(t){var n,a,r,i,o,u;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.updateId=t,this.sCanvas.width===this.fCanvas.width&&this.sCanvas.height===this.fCanvas.height){e.next=3;break}return e.abrupt("return",!1);case 3:if(null!==(n=this.fCanvas.getContext("2d"))){e.next=6;break}return e.abrupt("return",!1);case 6:return n.clearRect(0,0,this.fCanvas.width,this.fCanvas.height),a=JSON.parse(JSON.stringify(this.fractalPoints)),e.next=10,new Promise(function(e){return setTimeout(e,500)});case 10:return e.next=12,D(this.myImg,this.sCanvas.toDataURL());case 12:if(this.myImg=e.sent,this.updateId===t){e.next=15;break}return e.abrupt("return",!1);case 15:n.globalCompositeOperation=this.globalCompositeOperation,n.drawImage(this.myImg,0,0,this.fCanvas.width,this.fCanvas.height);case 17:if(!a.length){e.next=27;break}return e.next=20,D(this.myImg,this.fCanvas.toDataURL());case 20:if(this.myImg=e.sent,this.updateId===t){e.next=23;break}return e.abrupt("return",!1);case 23:for(a=a.filter(function(e){return e.iters>0}),r=0;r<a.length;r++)i=a[r],o=i.x-i.w/2,u=i.y-i.h/2,n.drawImage(this.myImg,o,u,i.w,i.h),i.iters--;e.next=17;break;case 27:return e.abrupt("return",!0);case 28:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),U=n(3),A=n(19),L={points:[],maxId:0,updateId:0,globalCompositeOperation:"source-over",forceFullPlay:!0,iterationDelay:0};var B={points:[],maxId:0};var q=Object(U.c)({fractalPoints:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var n=JSON.parse(JSON.stringify(t.point)),a=JSON.parse(JSON.stringify(e));return a.updateId++,n.id=++a.maxId,a.points.push(n),a;case O:var r=JSON.parse(JSON.stringify(t.point)),i=JSON.parse(JSON.stringify(e));i.updateId++;for(var o=0;o<i.points.length;o++)if(i.points[o].id===r.id){i.points[o]=r;break}return i;case E:for(var u=JSON.parse(JSON.stringify(t.point)),p=JSON.parse(JSON.stringify(e)),d=0;d<p.points.length;d++)if(p.points[d].id===u.id){p.points.splice(d,1);break}return p.updateId++,p;case c:var f=JSON.parse(JSON.stringify(e));return f.updateId++,f;case s:var m=JSON.parse(JSON.stringify(e));return m.updateId++,m;case l:var v=JSON.parse(JSON.stringify(e));return v.updateId++,v;case S:var h=JSON.parse(JSON.stringify(e));return h.globalCompositeOperation=t.newGCO,h.updateId++,h;case b:var g=JSON.parse(JSON.stringify(e));return g.iterationDelay=t.newDelay,g;case C:var N=JSON.parse(JSON.stringify(e));return N.forceFullPlay=t.forceFullPlay,N;default:return e}},sourcePoints:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=JSON.parse(JSON.stringify(t.point)),a=JSON.parse(JSON.stringify(e));return n.id=++a.maxId,a.points.push(n),a;case s:for(var r=JSON.parse(JSON.stringify(t.point)),i=JSON.parse(JSON.stringify(e)),o=0;o<i.points.length;o++)if(i.points[o].id===r.id){i.points[o]=r;break}return i;case l:for(var u=JSON.parse(JSON.stringify(t.point)),p=JSON.parse(JSON.stringify(e)),d=0;d<p.points.length;d++)if(p.points[d].id===u.id){p.points.splice(d,1);break}return p;default:return e}}}),G=function(){return{fractalPoints:{forceFullPlay:!0,globalCompositeOperation:"source-over",iterationDelay:0,maxId:3,updateId:0,points:[{h:300,id:0,iters:4,w:300,x:250,y:350},{h:300,id:1,iters:1,w:300,x:350,y:200},{h:300,id:2,iters:4,w:300,x:450,y:350},{h:300,id:3,iters:4,w:300,x:350,y:500}]},sourcePoints:{maxId:7,points:[{color:"#285288",h:210,id:4,type:"Circle",w:210,x:350,y:150},{color:"#f4d297",h:150,id:6,type:"Circle",w:150,x:350,y:125},{color:"#fffffe",h:60,id:7,type:"Circle",w:60,x:350,y:350}]}}};document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("fractal-canvas"),t=document.getElementById("input-canvas"),n=Object(U.d)(q,G(),Object(U.a)(A.logger)),a=new R(e,t);window.store=n,a.receiveUpdates(n.getState()),n.subscribe(function(){a.receiveUpdates(n.getState())}),o.a.render(r.a.createElement(u.a,{store:n},r.a.createElement(x,null)),document.getElementById("react-root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.2f6e4e8e.chunk.js.map