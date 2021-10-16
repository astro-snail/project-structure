!function(e){function t(t){for(var n,s,r=t[0],o=t[1],a=0,c=[];a<r.length;a++)s=r[a],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&c.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()()}var n={},i={0:0};function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,s){n=i[e]=[t,s]}));t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+""+({1:"base-page-index-js",2:"categories-index-js",3:"dashboard-index-js",4:"error404-index-js",5:"products-edit-index-js",6:"products-list-index-js",7:"sales-index-js"}[e]||e)+"-"+e+".js"}(e);var d=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=i[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,n[1](d)}i[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var r=window.webpackJsonp=window.webpackJsonp||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var d=o;s(s.s=2)}([function(e,t,n){var i={"./base-page/index.js":[3,1],"./categories/index.js":[7,2],"./dashboard/index.js":[5,3],"./error404/index.js":[4,4],"./products/edit/index.js":[8,5],"./products/list/index.js":[6,6],"./sales/index.js":[9,7]};function s(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],s=t[0];return n.e(t[1]).then((function(){return n(s)}))}s.keys=function(){return Object.keys(i)},s.id=0,e.exports=s},,function(e,t,n){"use strict";n.r(t);class i{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("click",e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href");n&&n.startsWith("/")&&(e.preventDefault(),this.navigate(n))})}static instance(){return this._instance||(this._instance=new i),this._instance}async route(){let e,t=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");for(let n of this.routes)if(e=t.match(n.pattern),e){this.page=await this.changePage(n.path,e);break}e||(this.page=await this.changePage(this.notFoundPagePath)),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page}}))}async changePage(e,t){return this.page&&this.page.destroy&&this.page.destroy(),await async function(e,t){const i=document.querySelector("main");i.classList.add("is-loading");const{default:s}=await n(0)(`./${e}/index.js`),r=new s(t),o=await r.render();i.classList.remove("is-loading");const a=document.querySelector("#content");return a.innerHTML="",a.append(o),r}(e,t)}navigate(e){history.pushState(null,null,e),this.route()}addRoute(e,t){return this.routes.push({pattern:e,path:t}),this}setNotFoundPagePath(e){return this.notFoundPagePath=e,this}listen(){window.addEventListener("popstate",()=>this.route()),this.route()}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class r{constructor(){if(s(this,"element",void 0),s(this,"onPointerOver",e=>{const t=e.target.closest("[data-tooltip]");t&&(this.render(t.dataset.tooltip),this.move(e.clientX,e.clientY),document.addEventListener("pointermove",this.onPointerMove))}),s(this,"onPointerOut",()=>{this.remove()}),s(this,"onPointerMove",e=>{this.move(e.clientX,e.clientY)}),r.instance)return r.instance;r.instance=this}render(e=""){this.element=document.createElement("div"),this.element.classList.add("tooltip"),this.element.innerHTML=e,document.body.append(this.element)}initEventListeners(){document.addEventListener("pointerover",this.onPointerOver),document.addEventListener("pointerout",this.onPointerOut)}initialize(){this.initEventListeners()}move(e,t){this.element.style.left=e+5+"px",this.element.style.top=t+5+"px"}remove(){this.element&&(this.element.remove(),this.element=null,document.removeEventListener("pointermove",this.onPointerMove))}destroy(){document.removeEventListener("pointerover",this.onPointerOver),document.removeEventListener("pointerout",this.onPointerOut),this.remove(),r.instance=null}}s(r,"instance",void 0);var o=new r;const a=new class{constructor(){o.initialize(),this.router=i.instance(),this.render(),this.addEventListeners()}render(){this.element=document.createElement("div"),this.element.innerHTML=this.template,this.element=this.element.firstElementChild,document.body.append(this.element)}get template(){return'\n      <main class="main">\n        <div class="progress-bar">\n          <div class="progress-bar__line"></div>\n        </div>\n        <aside class="sidebar">\n          <h2 class="sidebar__title">\n            <a href="/">shop admin</a>\n          </h2>\n          <ul class="sidebar__nav">\n            <li>\n              <a href="/" data-page="dashboard">\n                <i class="icon-dashboard"></i> <span>Панель управления</span>\n              </a>\n            </li>\n            <li>\n              <a href="/products" data-page="products">\n                <i class="icon-products"></i> <span>Товары</span>\n              </a>\n            </li>\n            <li>\n              <a href="/categories" data-page="categories">\n                <i class="icon-categories"></i> <span>Категории</span>\n              </a>\n            </li>\n            <li>\n              <a href="/sales" data-page="sales">\n                <i class="icon-sales"></i> <span>Продажи</span>\n              </a>\n            </li>\n          </ul>\n          <ul class="sidebar__nav sidebar__nav_bottom">\n            <li>\n              <button type="button" class="sidebar__toggler">\n                <i class="icon-toggle-sidebar"></i> <span>Скрыть панель</span>\n              </button>\n            </li>\n          </ul>\n        </aside>\n        <section class="content" id="content">\n\n        </section>\n      </main>\n    '}initializeRouter(){this.router.addRoute(/^$/,"dashboard").addRoute(/^products$/,"products/list").addRoute(/^products\/add$/,"products/edit").addRoute(/^products\/([\w()-]+)$/,"products/edit").addRoute(/^sales$/,"sales").addRoute(/^categories$/,"categories").addRoute(/^404\/?$/,"error404").setNotFoundPagePath("error404").listen()}addEventListeners(){this.element.querySelector(".sidebar__toggler").addEventListener("click",e=>{e.preventDefault(),document.body.classList.toggle("is-collapsed-sidebar")})}};document.body.append(a.element),a.initializeRouter()}]);
//# sourceMappingURL=app.bundle.js.map