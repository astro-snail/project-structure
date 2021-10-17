(window.webpackJsonp=window.webpackJsonp||[]).push([[5,1],[,,,function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return i}));class i{constructor(e){s(this,"element",void 0),s(this,"subElements",{}),s(this,"components",{})}async render(){return this.element=document.createElement("div"),this.element.innerHTML=this.template,this.element=this.element.firstElementChild,this.subElements=this.getSubElements(this.element),this.components=await this.getComponents(),Object.keys(this.components).forEach(e=>{this.subElements[e].append(this.components[e].element)}),this.initEventListeners(),this.element}initEventListeners(){}get template(){return"<div></div>"}getSubElements(e){const t={};for(const n of e.querySelectorAll("[data-element]"))t[n.dataset.element]=n;return t}async getComponents(){return{}}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null,this.subElements={},Object.values(this.components).forEach(e=>e.destroy()),this.components={}}}},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var s=n(3),i=n(15),r=n(11),a=n(13),o=n(12),l=n.p+"components/product-form/icon-grab.svg",c=n.p+"components/product-form/icon-trash.svg",u=n(10);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class m{constructor(e){d(this,"element",void 0),d(this,"subElements",{}),d(this,"onUploadImage",()=>{let e=document.getElementById("imageUpload");e||(e=document.createElement("input"),e.id="imageUpload",e.type="file",e.accept="image/*",e.hidden=!0,e.addEventListener("change",this.onChange),this.element.append(e)),e.click()}),d(this,"onChange",e=>{const[t]=e.target.files;if(!t)return;this.disableImageUpload();const n=new FormData;n.append("image",t),Object(o.a)(u.f,{method:"POST",headers:{Authorization:"Client-ID "+u.e},body:n,referrer:""}).then(e=>this.addImage({url:e.data.link,source:t.name})).catch(e=>new r.a(e.message,{type:u.h.error}).show()).finally(()=>this.enableImageUpload())}),d(this,"onSubmit",e=>{e.preventDefault(),this.save().then(()=>new r.a("Товар сохранен!",{type:u.h.success}).show()).catch(e=>new r.a(e.message,{type:u.h.error}).show())}),this.productId=e,this.defaultData={title:"",description:"",price:100,quantity:1,discount:0,status:1,images:[]},this.render().catch(e=>new r.a(e.message,{type:u.h.error}).show())}async loadCategories(){const e=new URL(u.c,u.a);return e.searchParams.set("_sort","weight"),e.searchParams.set("_refs","subcategory"),await Object(o.a)(e)}async loadProduct(e){const t=new URL(u.k,u.a);return t.searchParams.set("id",e),await Object(o.a)(t)}async loadData(){const[e,t]=await Promise.all([this.loadCategories(),this.productId?this.loadProduct(this.productId):Promise.resolve([this.defaultData])]);this.setCategories(e);const[n]=t;this.setProductData(n)}async render(){this.element=document.createElement("div"),this.element.innerHTML=this.template,this.element=this.element.firstElementChild,this.subElements=this.getSubElements(this.element),await this.loadData(),this.initEventListeners()}async save(){const[e,t]=this.productId?["PATCH","product-updated"]:["PUT","product-saved"],n=await Object(o.a)(new URL(u.k,u.a),{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(this.getProductData())});this.element.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{response:n}}))}initEventListeners(){this.subElements.productForm.elements.uploadImage.addEventListener("click",this.onUploadImage),this.subElements.productForm.addEventListener("submit",this.onSubmit)}get template(){return"\n      <div class='product-form'>\n        <form data-element='productForm' class='form-grid'>\n          <div class='form-group form-group__half_left'>\n            <fieldset>\n              <label class='form-label'>Название товара</label>\n              <input required='' type='text' name='title' id='title' class='form-control' placeholder='Название товара'>\n            </fieldset>\n          </div>\n          <div class='form-group form-group__wide'>\n            <label class='form-label'>Описание</label>\n            <textarea required='' class='form-control' name='description' id='description' placeholder='Описание товара'></textarea>\n          </div>\n          <div class='form-group form-group__wide'>\n            <label class='form-label'>Фото</label>\n            <div data-element='imageList'></div>\n            <button type='button' name='uploadImage' class='button-primary-outline fit-content'><span>Загрузить</span></button>\n          </div>\n          <div class='form-group form-group__half_left'>\n            <label class='form-label'>Категория</label>\n            <select class='form-control' name='subcategory' id='subcategory'></select>\n          </div>\n          <div class='form-group form-group__half_left form-group__two-col'>\n            <fieldset>\n              <label class='form-label'>Цена ($)</label>\n              <input required='' type='number' name='price' id='price' class='form-control' placeholder='100'>\n            </fieldset>\n            <fieldset>\n              <label class='form-label'>Скидка ($)</label>\n              <input required='' type='number' name='discount' id='discount' class='form-control' placeholder='0'>\n            </fieldset>\n          </div>\n          <div class='form-group form-group__part-half'>\n            <label class='form-label'>Количество</label>\n            <input required='' type='number' class='form-control' name='quantity' id='quantity' placeholder='1'>\n          </div>\n          <div class='form-group form-group__part-half'>\n            <label class='form-label'>Статус</label>\n            <select class='form-control' name='status' id='status'>\n              <option value='1'>Активен</option>\n              <option value='0'>Неактивен</option>\n            </select>\n          </div>\n          <div class='form-buttons'>\n            <button type='submit' name='save' class='button-primary-outline'>\n              Сохранить товар\n            </button>\n          </div>\n        </form>\n      </div>\n    "}setCategories(e){const t=[];e.forEach(e=>{e.subcategories.forEach(n=>{t.push({id:n.id,text:e.title+" > "+n.title})})}),this.subElements.productForm.elements.subcategory.innerHTML=t.map(({id:e,text:t})=>`\n        <option value="${e}">${Object(a.a)(t)}</option>\n      `).join("")}createImageList(e){return new i.a({items:e.map(e=>this.createImageListItem(e))}).element}createImageListItem({url:e,source:t}){const n=document.createElement("div");return n.innerHTML=`\n      <li class='products-edit__imagelist-item sortable-list__item'>\n        <input type="hidden" name="url" value="${e}">\n        <input type="hidden" name="source" value="${t}">\n        <span>\n           <img src="${l}" data-grab-handle="" alt="grab">\n           <img class="sortable-table__cell-img" alt="Image" src="${e}"><span>${t}</span>\n        </span>\n        <button type="button">\n           <img src="${c}" data-delete-handle="" alt="delete">\n        </button>\n      </li>\n    `,n.firstElementChild}disableImageUpload(){this.subElements.productForm.elements.uploadImage.classList.add("is-loading"),this.subElements.productForm.elements.uploadImage.disabled=!0}enableImageUpload(){this.subElements.productForm.elements.uploadImage.classList.remove("is-loading"),this.subElements.productForm.elements.uploadImage.disabled=!1}addImage(e){const t=this.getImages();t.push(e),this.setImages(t)}getImages(){const e=[];return this.subElements.imageList.querySelectorAll(".sortable-list__item").forEach(t=>{const n=t.querySelector('input[name="url"]').value,s=t.querySelector('input[name="source"]').value;e.push({url:n,source:s})}),e}setImages(e){this.subElements.imageList.replaceChildren(this.createImageList(e))}getSubElements(e){const t={};for(const n of e.querySelectorAll("[data-element]"))t[n.dataset.element]=n;return t}getProductData(){const e=this.subElements.productForm.elements,t={title:e.title.value,description:e.description.value,subcategory:e.subcategory.value,price:Number(e.price.value),quantity:Number(e.quantity.value),discount:Number(e.discount.value),status:Number(e.status.value),images:this.getImages()};return this.productId&&(t.id=this.productId),t}setProductData(e){const t=this.subElements.productForm.elements;t.title.value=e.title,t.description.value=e.description,e.subcategory&&(t.subcategory.value=e.subcategory),t.price.value=e.price,t.quantity.value=e.quantity,t.discount.value=e.discount,t.status.value=e.status,this.setImages(e.images)}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null,this.subElements={}}}class h extends s.default{constructor(e){super(e),this.productId=e[1]}async getComponents(){return{productForm:new m(this.productId)}}get template(){return`\n      <div class="products-edit">\n        <div class="content__top-panel">\n          <h1 class="page-title">\n            <a href="/project-structure/products" class="link">Товары</a> / ${this.productId?"Редактировать":"Добавить"}\n          </h1>\n        </div>\n        <div class="content-box">\n          <div data-element="productForm"></div>\n        </div>\n      </div>\n    `}}},,,,,function(e,t,n){"use strict";n.d(t,"j",(function(){return s})),n.d(t,"l",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"k",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"m",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return g}));const s="api/dashboard/orders",i="api/dashboard/sales",r="api/dashboard/customers",a="api/dashboard/bestsellers",o="api/rest/products",l="api/rest/categories",c="api/rest/subcategories",u="api/rest/orders",d="https://course-js.javascript.ru/",m="https://api.imgur.com/3/image",h="28aaa2e823b03b1",p="ru-RU",g={success:"success",error:"error"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));class s{constructor(e="",{duration:t=2e3,type:n=""}={}){this.message=e,this.duration=t,this.type=n,this.render()}render(){this.element=document.createElement("div"),this.element.innerHTML=`\n      <div class="notification notification_${this.type} show">\n        <div class="notification-body notification__content">${this.message}</div>\n      </div>\n    `,this.element=this.element.firstElementChild}show(e=document.body){s.currentNotification&&s.currentNotification.remove(),e.append(this.element),this.timeoutId=setTimeout(()=>{this.remove()},this.duration),s.currentNotification=this}remove(){this.element&&this.element.remove(),clearTimeout(this.timeoutId)}destroy(){this.remove(),this.element=null,s.currentNotification=null}}var i,r,a;a=null,(r="currentNotification")in(i=s)?Object.defineProperty(i,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[r]=a},function(e,t,n){"use strict";t.a=async function(e,t){let n,i;try{n=await fetch(e.toString(),t)}catch(e){throw new s(n,"Network error has occurred.")}if(!n.ok){let e=n.statusText;try{i=await n.json(),e=i.error&&i.error.message||i.data&&i.data.error&&i.data.error.message||e}catch(e){}let t=`Error ${n.status}: ${e}`;throw new s(n,i,t)}try{return await n.json()}catch(e){throw new s(n,null,e.message)}};class s extends Error{constructor(e,t,n){var s,i,r;super(n),r="FetchError",(i="name")in(s=this)?Object.defineProperty(s,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[i]=r,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof s&&alert(e.reason.message)})},function(e,t,n){"use strict";t.a=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},,function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));class i{constructor({items:e=[]}){s(this,"element",void 0),s(this,"onPointerDown",e=>{const t=e.target.closest(".sortable-list__item");t&&(e.target.closest("[data-grab-handle]")&&(e.preventDefault(),this.startDragging(e.clientX,e.clientY,t)),e.target.closest("[data-delete-handle]")&&(e.preventDefault(),t.remove()))}),s(this,"onPointerMove",e=>{const t=this.element.querySelector(".sortable-list__item.sortable-list__item_dragging");if(!t)return;e.preventDefault();const n=e.clientX-this.shiftX,s=e.clientY-this.shiftY;this.moveAt(n,s,t);const i=this.element.querySelector(".sortable-list__placeholder"),{top:r,bottom:a}=i.getBoundingClientRect(),{offsetHeight:o}=i;i.previousElementSibling&&a-o/2>t.getBoundingClientRect().bottom&&i.previousElementSibling.before(i),i.nextElementSibling&&r+o/2<t.getBoundingClientRect().top&&i.nextElementSibling.after(i)}),s(this,"onPointerUp",e=>{const t=this.element.querySelector(".sortable-list__item.sortable-list__item_dragging");t&&(e.preventDefault(),this.stopDragging(t))}),this.items=e,this.render(),this.initEventListeners()}render(){this.element=document.createElement("ul"),this.element.classList.add("sortable-list"),this.items.forEach(e=>{e.classList.add("sortable-list__item")}),this.element.append(...this.items)}initEventListeners(){this.element.addEventListener("pointerdown",this.onPointerDown),this.element.addEventListener("dragstart",()=>!1),this.element.addEventListener("pointercancel",()=>{alert("pointercancel")})}moveAt(e,t,n){n.style.left=e+"px",n.style.top=t+"px"}startDragging(e,t,n){this.indexFrom=this.getIndex(n);const s=n.getBoundingClientRect();this.shiftX=e-s.left,this.shiftY=t-s.top,n.classList.add("sortable-list__item_dragging"),n.style.width=s.width+"px",n.style.height=s.height+"px",n.style.left=s.left+"px",n.style.top=s.top+"px",n.after(this.createPlaceholder(s.width,s.height)),n.parentElement.append(n),this.element.addEventListener("pointerup",this.onPointerUp),this.element.addEventListener("pointermove",this.onPointerMove)}stopDragging(e){this.element.removeEventListener("pointermove",this.onPointerMove),this.element.removeEventListener("pointerup",this.onPointerUp),e.classList.remove("sortable-list__item_dragging"),e.style.cssText="";const t=this.element.querySelector(".sortable-list__placeholder");t.before(e),t.remove();const n=this.getIndex(e);this.indexFrom!==n&&this.element.dispatchEvent(new CustomEvent("list-order-update",{bubbles:!0,detail:{indexFrom:this.indexFrom,indexTo:n}}))}createPlaceholder(e,t){const n=document.createElement("div");return n.classList.add("sortable-list__placeholder"),n.style.width=e+"px",n.style.height=t+"px",n}getIndex(e){let t=0,n=e;for(;n.previousElementSibling;)n=n.previousElementSibling,t++;return t}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null}}}]]);
//# sourceMappingURL=5.js.map