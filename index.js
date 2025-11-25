import{a as m,i as d,S as q}from"./assets/vendor-BkVuWn-o.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();m.defaults.baseURL="https://pixabay.com/api/";const P="53351360-25752520852e3bd129b79410f";function L(e,a=1,s=15){return m.get("",{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:s}}).then(r=>!r.data||r.data.hits.length===0?(d.warning({message:"На жаль, за вашим запитом зображень не знайдено. Спробуйте ще раз!",position:"topRight"}),{hits:[]}):r.data).catch(r=>(console.error(r),{hits:[]}))}let i=null;function B(e=".gallery a"){i||(i=new q(e,{captions:!0,captionsData:"alt",captionDelay:250}))}function R(){i?i.refresh():B()}function M(){i&&(i.destroy(),i=null)}function w(e,a){if(!e||e.length===0)return Promise.resolve();const r=e.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,alt:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads})).map(t=>`
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
      `).join(""),o=a.querySelector(".loader-wrapper");o?o.insertAdjacentHTML("beforebegin",r):a.insertAdjacentHTML("beforeend",r);const n=Array.from(a.querySelectorAll("li.gallery-item img")).slice(-e.length);return Promise.all(n.map(t=>new Promise(g=>{t.complete&&g(),t.onload=t.onerror=g}))).then(()=>{R()})}function x(e){e.innerHTML=`
    <li class="loader-wrapper hidden">
      <span class="loader"></span>
    </li>`,M()}function b(){const e=document.querySelector(".loader-wrapper");e&&e.classList.remove("hidden")}function v(){const e=document.querySelector(".loader-wrapper");e&&e.classList.add("hidden")}function S(e){e&&e.classList.remove("hidden")}function u(e){e&&e.classList.add("hidden")}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-wrapper"),galleryBtn:document.querySelector(".gallery-btn")};let f="",c=1;const y=15;let h=0,p=!1;async function I(e){var s;e.preventDefault();const a=(s=e.target.elements["search-text"])==null?void 0:s.value.trim();if(!a){d.warning({message:"Please enter a search query.",position:"topRight"});return}f=a,c=1,p=!1,x(l.gallery),u(l.galleryBtn),b();try{const r=await L(f,c,y);if(!r.hits||r.hits.length===0){d.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h=Math.ceil(r.totalHits/y),await w(r.hits,l.gallery),c<h&&S(l.galleryBtn)}catch(r){console.error(r)}finally{v()}}async function O(e){c++,u(l.galleryBtn),b();try{const a=await L(f,c,y);await w(a.hits,l.gallery);const s=l.gallery.querySelector("li"),r=s?s.getBoundingClientRect().height:0;scrollBy({top:r*2,behavior:"smooth"}),c>=h?(p||(d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),p=!0),u(l.galleryBtn)):S(l.galleryBtn)}catch(a){console.error(a)}finally{v()}}l.form.addEventListener("submit",I);l.galleryBtn.addEventListener("click",O);
//# sourceMappingURL=index.js.map
