import{a as p,i as h,S as B}from"./assets/vendor-BkVuWn-o.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();p.defaults.baseURL="https://pixabay.com/api/";const P="53351360-25752520852e3bd129b79410f";function m(e,a=1,l=15){return p.get("",{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:l}}).then(r=>!r.data||r.data.hits.length===0?(h.warning({message:"На жаль, за вашим запитом зображень не знайдено. Спробуйте ще раз!",position:"topRight"}),{hits:[]}):r.data).catch(r=>(console.error(r),{hits:[]}))}let i=null;function S(e=".gallery a"){i||(i=new B(e,{captions:!0,captionsData:"alt",captionDelay:250}))}function q(){i?i.refresh():S()}function R(){i&&(i.destroy(),i=null)}function L(e,a){if(!e||e.length===0)return Promise.resolve();const r=e.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,alt:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads})).map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img 
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.alt}"
          />
        </a>
        <div class="gallery-image-info">
          <p>Likes: ${t.likes}</p>
          <p>Views: ${t.views}</p>
          <p>Comments: ${t.comments}</p>
          <p>Downloads: ${t.downloads}</p>
        </div>
      </li>
      `).join("");a.querySelector(".loader-wrapper").insertAdjacentHTML("beforebegin",r);const s=Array.from(a.querySelectorAll("li.gallery-item img")).slice(-e.length);return Promise.all(s.map(t=>new Promise(g=>{t.complete&&g(),t.onload=t.onerror=g}))).then(()=>{q()})}function x(e){e.innerHTML=`
    <li class="loader-wrapper hidden">
      <span class="loader"></span>
    </li>`,R()}function w(e){e==null||e.classList.remove("hidden")}function b(e){e==null||e.classList.add("hidden")}function v(e){e==null||e.classList.remove("hidden")}function u(e){e==null||e.classList.add("hidden")}const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-wrapper"),galleryBtn:document.querySelector(".gallery-btn")};let d="",c=1;const f=15;let y=0;async function I(e){var l;e.preventDefault();const a=(l=e.target.elements["search-text"])==null?void 0:l.value.trim();if(a){d=a,c=1,x(n.gallery),u(n.galleryBtn),w(n.loader);try{const r=await m(d,c,f);if(!r.hits||r.hits.length===0){h.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y=Math.ceil(r.totalHits/f),await L(r.hits,n.gallery),c<y&&v(n.galleryBtn)}catch(r){console.error(r)}finally{b(n.loader)}}}async function O(e){c++,u(n.galleryBtn),w(n.loader);try{const a=await m(d,c,f);await L(a.hits,n.gallery);const l=n.gallery.querySelector("li"),r=l?l.getBoundingClientRect().height:0;scrollBy({top:r*2,behavior:"smooth"}),c>=y?(h.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u(n.galleryBtn)):v(n.galleryBtn)}catch(a){console.error(a)}finally{b(n.loader)}}n.form.addEventListener("submit",I);n.galleryBtn.addEventListener("click",O);
//# sourceMappingURL=index.js.map
