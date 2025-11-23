import{a as u,i as f,S as d}from"./assets/vendor-BkVuWn-o.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const e of n.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&a(e)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();u.defaults.baseURL="https://pixabay.com/api/";const m="53351360-25752520852e3bd129b79410f";function p(t){return u.get("",{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>!o.data||o.data.hits.length===0?(f.warning({message:"На жаль, за вашим запитом зображень не знайдено. Спробуйте ще раз!",position:"topRight"}),{hits:[]}):o.data).catch(o=>(console.error(o),{hits:[]}))}let l=null;function h(t=".gallery a"){l||(l=new d(t,{captions:!0,captionsData:"alt",captionDelay:250}))}function y(){if(!l){h();return}l.refresh()}function g(t,o){if(!t||t.length===0)return Promise.resolve();const a=t.map(e=>({webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,alt:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads})).map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img 
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.alt}"
          />
        </a>
        <div class="gallery-image-info">
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </li>
      `).join("");o.innerHTML=a;const n=[...o.querySelectorAll("img")].map(e=>new Promise(c=>{if(e.complete)return c();e.onload=e.onerror=c}));return Promise.all(n).then(()=>{y()})}function L(t){t.innerHTML=""}function w(t){t&&t.classList.remove("hidden")}function b(t){t&&t.classList.add("hidden")}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};async function v(t){var s;t.preventDefault();const o=(s=t.target.elements["search-text"])==null?void 0:s.value.trim();if(o){L(i.gallery),w(i.loader);try{const a=await p(o);if(!a.hits||a.hits.length===0){f.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}await g(a.hits,i.gallery)}catch(a){console.error(a)}finally{b(i.loader)}}}i.form.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
