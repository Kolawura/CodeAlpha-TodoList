(()=>{"use strict";var e=function(){return e=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},e.apply(this,arguments)},t=document.querySelector("#Todo_text"),n=document.querySelector("#task"),c=document.querySelector("#addBtn"),o=document.querySelector("#errCont"),r=document.querySelector("#errMsg"),i=document.querySelector("#lg_footer"),l=document.querySelector("#sm_footer"),a=document.querySelector("#showAll"),u=document.querySelector("#ft_showAll"),s=document.querySelector("#showComp"),d=document.querySelector("#ft_showComp"),f=document.querySelector("#clearCompTask"),m=document.querySelector("#active"),p=document.querySelector("#ft_active"),v=document.querySelector("#noCompTask"),y=JSON.parse(localStorage.getItem("task")||"[]"),k=null,h=function(){var e=y.filter((function(e){return!0!==e.complete})).length;v.textContent="".concat(e," tasks left")};h();var S=function(){0!==y.length?(i.classList.remove("hidden"),i.classList.add("flex"),l.classList.remove("hidden"),l.classList.add("block")):(i.classList.add("hidden"),i.classList.remove("flex"),l.classList.add("hidden"),l.classList.remove("block"))};S(),addEventListener("keydown",(function(e){"Enter"===e.key&&(e.preventDefault(),g())}));var L=function(e){r.textContent=e,o.classList.remove("hidden"),o.classList.add("flex"),setTimeout((function(){o.classList.remove("flex"),o.classList.add("hidden")}),2e3)},g=function(){c.textContent="Add Task";var n=t.value.trim();if(""!==n){if(null===k){var o={id:Date.now(),text:n,complete:!1};y=function(e,t,n){if(n||2===arguments.length)for(var c,o=0,r=t.length;o<r;o++)!c&&o in t||(c||(c=Array.prototype.slice.call(t,0,o)),c[o]=t[o]);return e.concat(c||Array.prototype.slice.call(t))}([o],y,!0),localStorage.setItem("task",JSON.stringify(y)),S(),h()}k&&(y=y.map((function(t){return t.id===k?e(e({},t),{text:n}):t})),localStorage.setItem("task",JSON.stringify(y)),k=null,S(),h()),C(y),t.value=""}else L("Sorry, Input cannot be empty")},C=function(e){n.innerHTML="",e.forEach((function(e){var t=document.createElement("div"),c=document.createElement("ol");c.classList.add("taskList");var o=document.createElement("li");o.classList.add("taskText"),o.textContent=e.text,c.appendChild(o),e.complete&&o.classList.add("complete");var r=document.createElement("button");r.classList.add("compBtn"),r.innerHTML='<i class="fa-solid fa-check"></i>',r.onclick=function(){return q(e.id)},c.appendChild(r);var i=document.createElement("button");i.classList.add("delBtn"),i.innerHTML='<i class="fa-regular fa-trash-can"></i>',i.onclick=function(){return x(e.id)},c.appendChild(i);var l=document.createElement("button");l.classList.add("edtBtn"),l.innerHTML='<i class="fa-solid fa-pen-to-square"></i>',l.onclick=function(){return E(e.id)},c.appendChild(l);var a=document.createElement("hr");t.appendChild(c),a.classList.add("hr"),t.appendChild(a),n.appendChild(t)})),S(),h()},q=function(t){y=y.map((function(n){return n.id===t?e(e({},n),{complete:!n.complete}):n})),localStorage.setItem("task",JSON.stringify(y)),C(y)},x=function(e){y=y.filter((function(t){return t.id!==e})),localStorage.setItem("task",JSON.stringify(y)),C(y)},E=function(e){if(""!=t.value.trim())L("Please Submit or clear input text first");else{c.textContent="Edit Task";var n=y.find((function(t){return t.id===e}));k=e,n&&(t.value=n.text);var o=y.filter((function(t){return t.id!==e}));C(o)}};a.onclick=function(e){e.preventDefault(),D()},s.onclick=function(e){e.preventDefault(),T()},m.onclick=function(e){e.preventDefault(),O()},u.onclick=function(e){e.preventDefault(),D()},d.onclick=function(e){e.preventDefault(),T()},p.onclick=function(e){e.preventDefault(),O()},f.onclick=function(e){e.preventDefault(),b()};var D=function(){C(y)},T=function(){var e=y.filter((function(e){return!1!==e.complete}));C(e)},O=function(){var e=y.filter((function(e){return!0!==e.complete}));C(e)},b=function(){y=y.filter((function(e){return!0!==e.complete})),localStorage.setItem("task",JSON.stringify(y)),C(y)};document.addEventListener("DOMContentLoaded",(function(){C(y)})),c.onclick=function(e){e.preventDefault(),g()}})();