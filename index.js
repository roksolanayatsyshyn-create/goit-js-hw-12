import{a as u,i as d,S as m}from"./assets/vendor-BkVuWn-o.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();u.defaults.baseURL="https://pixabay.com/api/";const f="53351360-25752520852e3bd129b79410f";function p(r){return u.get("",{params:{key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>!o.data||o.data.hits.length===0?(d.warning({message:"На жаль, за вашим запитом зображень не знайдено. Спробуйте ще раз!",position:"topRight"}),{hits:[]}):o.data).catch(o=>(console.error(o),{hits:[]}))}function y(r,o){if(!r||r.length===0)return Promise.resolve();const n=r.map(e=>({webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,alt:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads})).map(e=>`
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
      `).join(""),t=document.createElement("div");t.innerHTML=n;const i=[...t.querySelectorAll("img")].map(e=>new Promise(c=>{if(e.complete)return c();e.onload=c,e.onerror=c}));return Promise.all(i).then(()=>{o.innerHTML=n})}function h(r){r.innerHTML=""}function g(r){r.classList.remove("hidden")}function L(r){r.classList.add("hidden")}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let w=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});async function b(r){var s;r.preventDefault();const o=(s=r.target.elements["search-text"])==null?void 0:s.value.trim();if(o){h(l.gallery),g(l.loader);try{const n=await p(o);if(!n.hits||n.hits.length===0){d.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}await y(n.hits,l.gallery),w.refresh()}catch(n){console.error(n)}finally{L(l.loader)}}}l.form.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
