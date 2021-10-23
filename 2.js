(window.webpackJsonp=window.webpackJsonp||[]).push([[2,1],[,,,function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return i}));class i{constructor(e){s(this,"element",void 0),s(this,"subElements",{}),s(this,"components",{})}async render(){return this.element=document.createElement("div"),this.element.innerHTML=this.template,this.element=this.element.firstElementChild,this.subElements=this.getSubElements(this.element),this.components=await this.getComponents(),Object.keys(this.components).forEach(e=>{this.subElements[e].append(this.components[e].element)}),this.initEventListeners(),this.element}initEventListeners(){}get template(){return"<div></div>"}getSubElements(e){const t={};for(const n of e.querySelectorAll("[data-element]"))t[n.dataset.element]=n;return t}async getComponents(){return{}}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null,this.subElements={},Object.values(this.components).forEach(e=>e.destroy()),this.components={}}}},,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var s=n(3),i=n(15),r=n(11),o=n(13),a=n(12),l=n(10);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class h{constructor(){c(this,"element",void 0),this.url=new URL(l.c,l.a),this.render().catch(e=>new r.a(e.message,{type:l.h.error}).show())}async loadCategories(){return this.url.searchParams.set("_sort","weight"),this.url.searchParams.set("_refs","subcategory"),await Object(a.a)(this.url)}async render(){this.element=document.createElement("div"),this.element.dataset.element="categories",this.data=await this.loadCategories(),this.element.append(...this.renderCategories())}renderCategories(){return this.data.map(e=>new d(e).element)}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null}}class d{constructor(e){c(this,"element",void 0),c(this,"onClick",e=>{e.target.classList.contains("category__header")&&this.toggle()}),c(this,"onListOrderUpdate",()=>{this.saveOrder().then(()=>new r.a("Изменения сохранены!",{type:l.h.success}).show()).catch(e=>new r.a(e.message,{type:l.h.error}).show())}),this.data=e,this.render()}render(){this.element=document.createElement("div"),this.element.innerHTML=this.template,this.element=this.element.firstElementChild,this.element.querySelector(".subcategory-list").append(this.createSubcategoriesList()),this.initEventListeners()}initEventListeners(){this.element.addEventListener("click",this.onClick),this.element.addEventListener("list-order-update",this.onListOrderUpdate)}get template(){return`\n      <div class="category category_open" data-id="${this.data.id}">\n        <header class="category__header">\n          ${Object(o.a)(this.data.title)}\n        </header>\n        <div class="category__body">\n          <div class="subcategory-list"></div>\n        </div>\n      </div>\n    `}toggle(){this.element.classList.toggle("category_open")}createSubcategoriesList(){return new i.a({items:this.data.subcategories.map(e=>this.createSubcategoriesListItem(e))}).element}createSubcategoriesListItem({id:e,title:t,count:n}){const s=document.createElement("div");return s.innerHTML=`\n      <li class='categories__sortable-list-item sortable-list__item' data-grab-handle='' data-id='${e}'>\n        <strong>${Object(o.a)(t)}</strong>\n        <span><b>${n}</b> товаров</span>\n      </li>\n    `,s.firstElementChild}async saveOrder(){const e=[...this.element.querySelectorAll(".sortable-list__item")].map((e,t)=>({id:e.dataset.id,weight:t+1}));this.data.subcategories=await Object(a.a)(new URL(l.m,l.a),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null}}class u extends s.default{constructor(e){super(e)}get template(){return'\n      <div class="categories">\n        <div class="content__top-panel">\n          <h1 class="page-title">Категории товаров</h1>\n        </div>\n        <div data-element="categories"></div>\n      </div>\n    '}async getComponents(){return{categories:new h}}}},,function(e,t,n){"use strict";n.d(t,"j",(function(){return s})),n.d(t,"l",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"k",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"m",(function(){return c})),n.d(t,"i",(function(){return h})),n.d(t,"a",(function(){return d})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"h",(function(){return p}));const s="api/dashboard/orders",i="api/dashboard/sales",r="api/dashboard/customers",o="api/dashboard/bestsellers",a="api/rest/products",l="api/rest/categories",c="api/rest/subcategories",h="api/rest/orders",d="https://course-js.javascript.ru/",u="https://api.imgur.com/3/image",m="28aaa2e823b03b1",g="ru-RU",p={success:"success",error:"error"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));class s{constructor(e="",{duration:t=2e3,type:n=""}={}){this.message=e,this.duration=t,this.type=n,this.render()}render(){this.element=document.createElement("div"),this.element.innerHTML=`\n      <div class="notification notification_${this.type} show">\n        <div class="notification-body notification__content">${this.message}</div>\n      </div>\n    `,this.element=this.element.firstElementChild}show(e=document.body){s.currentNotification&&s.currentNotification.remove(),e.append(this.element),this.timeoutId=setTimeout(()=>{this.remove()},this.duration),s.currentNotification=this}remove(){this.element&&this.element.remove(),clearTimeout(this.timeoutId)}destroy(){this.remove(),this.element=null,s.currentNotification=null}}var i,r,o;o=null,(r="currentNotification")in(i=s)?Object.defineProperty(i,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[r]=o},function(e,t,n){"use strict";t.a=async function(e,t){let n,i;try{n=await fetch(e.toString(),t)}catch(e){throw new s(n,"Network error has occurred.")}if(!n.ok){let e=n.statusText;try{i=await n.json(),e=i.error&&i.error.message||i.data&&i.data.error&&i.data.error.message||e}catch(e){}let t=`Error ${n.status}: ${e}`;throw new s(n,i,t)}try{return await n.json()}catch(e){throw new s(n,null,e.message)}};class s extends Error{constructor(e,t,n){var s,i,r;super(n),r="FetchError",(i="name")in(s=this)?Object.defineProperty(s,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[i]=r,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof s&&alert(e.reason.message)})},function(e,t,n){"use strict";t.a=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},,function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));class i{constructor({items:e=[]}){s(this,"element",void 0),s(this,"onTouchStart",e=>{e.preventDefault(),this.onPointerDown(e)}),s(this,"onTouchMove",e=>{e.preventDefault(),this.onPointerMove(e)}),s(this,"onTouchEnd",e=>{e.preventDefault(),this.onPointerUp(e)}),s(this,"onPointerDown",e=>{const t=e.target.closest(".sortable-list__item");t&&(e.target.closest("[data-grab-handle]")&&(e.preventDefault(),this.startDragging(e.clientX,e.clientY,t)),e.target.closest("[data-delete-handle]")&&(e.preventDefault(),t.remove()))}),s(this,"onPointerMove",e=>{const t=this.element.querySelector(".sortable-list__item.sortable-list__item_dragging");if(!t)return;if(e.preventDefault(),e.clientX){e.clientX,this.shiftX,e.clientY,this.shiftY}else{e.changedTouches[0].clientX,this.shiftX,e.changedTouches[0].clientY,this.shiftY}this.moveAt(x,y,t);const n=this.element.querySelector(".sortable-list__placeholder"),{top:s,bottom:i}=n.getBoundingClientRect(),{offsetHeight:r}=n;n.previousElementSibling&&i-r/2>t.getBoundingClientRect().bottom&&n.previousElementSibling.before(n),n.nextElementSibling&&s+r/2<t.getBoundingClientRect().top&&n.nextElementSibling.after(n)}),s(this,"onPointerUp",e=>{const t=this.element.querySelector(".sortable-list__item.sortable-list__item_dragging");t&&(e.preventDefault(),this.stopDragging(t))}),this.items=e,this.render(),this.initEventListeners()}render(){this.element=document.createElement("ul"),this.element.classList.add("sortable-list"),this.items.forEach(e=>{e.classList.add("sortable-list__item")}),this.element.append(...this.items)}initEventListeners(){this.element.addEventListener("dragstart",()=>!1),this.element.addEventListener("mousedown",this.onPointerDown),this.element.addEventListener("touchstart",this.onTouchStart),this.element.addEventListener("pointercancel",()=>{alert("pointercancel")})}moveAt(e,t,n){n.style.left=e+"px",n.style.top=t+"px"}startDragging(e,t,n){this.indexFrom=this.getIndex(n);const s=n.getBoundingClientRect();this.shiftX=e-s.left,this.shiftY=t-s.top,n.classList.add("sortable-list__item_dragging"),n.style.width=s.width+"px",n.style.height=s.height+"px",n.style.left=s.left+"px",n.style.top=s.top+"px",n.after(this.createPlaceholder(s.width,s.height)),n.parentElement.append(n),this.element.addEventListener("touchend",this.onTouchEnd),this.element.addEventListener("touchmove",this.onTouchMove),this.element.addEventListener("mouseup",this.onPointerUp),this.element.addEventListener("mousemove",this.onPointerMove)}stopDragging(e){this.element.removeEventListener("touchmove",this.onTouchMove),this.element.removeEventListener("touchend",this.onTouchEnd),this.element.removeEventListener("mousemove",this.onPointerMove),this.element.removeEventListener("mouseup",this.onPointerUp),e.classList.remove("sortable-list__item_dragging"),e.style.cssText="";const t=this.element.querySelector(".sortable-list__placeholder");t.before(e),t.remove();const n=this.getIndex(e);this.indexFrom!==n&&this.element.dispatchEvent(new CustomEvent("list-order-update",{bubbles:!0,detail:{indexFrom:this.indexFrom,indexTo:n}}))}createPlaceholder(e,t){const n=document.createElement("div");return n.classList.add("sortable-list__placeholder"),n.style.width=e+"px",n.style.height=t+"px",n}getIndex(e){let t=0,n=e;for(;n.previousElementSibling;)n=n.previousElementSibling,t++;return t}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null}}}]]);
//# sourceMappingURL=2.js.map