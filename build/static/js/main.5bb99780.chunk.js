(this["webpackJsonpdw-app"]=this["webpackJsonpdw-app"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(8),i=n.n(s),r=(n(68),n(55)),o=n(42),l=(n(69),n(70),n(54)),d=(n(71),n(5)),u=function(e){var t=e.taskItem,n=e.removeFromTaskList;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card-container",categoryid:t.category,style:{backgroundColor:"DW"===t.category?"red":"white",color:"black"},children:[Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("div",{className:"card-title",children:Object(d.jsx)("h3",{children:t.task})}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{children:"In 1868, Jo March, a teacher in New York City, goes to Mr. Dashwood, an editor who agrees to publish a story she has written."})})]}),Object(d.jsxs)("div",{className:"btns",children:[Object(d.jsx)("div",{className:"btn",children:Object(d.jsx)("button",{children:Object(d.jsx)("a",{children:" View More "})})}),Object(d.jsx)("div",{className:"btn",taskid:t.task,children:Object(d.jsx)("button",{onClick:function(e){n(e.target.parentElement.getAttribute("taskid"))},children:"R"})})]})]})})},h=function(e){var t=e.taskList,n=e.removeFromTaskList;Object(l.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(d.jsx)("div",{className:"taskList",children:0===t.length?Object(d.jsx)("span",{className:"subTitle",children:"No tasks!"}):Object(d.jsx)("div",{className:"tasks",children:t.map((function(e){return Object(d.jsx)(u,{taskItem:e,removeFromTaskList:n})}))})})},j=n(107),b=n(116),v=n(112),f=n(115),m=n(114),k=(n(75),function(e){var t=e.task,n=e.category,a=e.setTask,c=e.setCategory,s=e.addToTaskList,i=Object(l.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("span",{className:"title",children:"DWork"}),Object(d.jsx)(j.a,{theme:i,children:Object(d.jsxs)("div",{className:"inputs",children:[Object(d.jsx)(b.a,{className:"taskName",id:"outlined-multiline-basic",value:t,onChange:function(e){a(e.target.value)}}),t&&Object(d.jsx)(v.a,{variant:"outlined",className:"",children:Object(d.jsxs)(m.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:n,onChange:function(e){c(e.target.value)},label:"Category",children:[Object(d.jsx)(f.a,{value:10,children:"Ten"}),Object(d.jsx)(f.a,{value:20,children:"Twenty"}),Object(d.jsx)(f.a,{value:30,children:"Thirty"})]})}),t&&Object(d.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),s()},children:"S"})]})})]})}),p=n(113);n(79);var O=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(),i=Object(o.a)(s,2),l=i[0],u=i[1],j=Object(a.useState)([]),b=Object(o.a)(j,2),v=b[0],f=b[1];return Object(d.jsx)("div",{className:"App",style:{height:"100vh",backgroundColor:"#404040",color:"white"},children:Object(d.jsxs)(p.a,{maxWidth:"md",style:{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-evenly"},children:[Object(d.jsx)(k,{task:n,setTask:c,setCategory:u,addToTaskList:function(){var e={};e.task=n,e.category=l;var t=v;t.push(e),f(t),c("")}}),Object(d.jsx)(h,{taskList:v,removeFromTaskList:function(e){var t=v.findIndex((function(t){return t.task===e})),n=Object(r.a)(v);-1!=t&&(n.splice(t,1),f(n))}})]})})},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(t,e)}))}}()}},[[78,1,2]]]);
//# sourceMappingURL=main.5bb99780.chunk.js.map