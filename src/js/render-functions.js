import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


let lightboxInstance = null; 

function initLightbox(selector = '.gallery a') {

  if (lightboxInstance) return;
  lightboxInstance = new SimpleLightbox(selector, {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}


function refreshLightbox() {
if (!lightboxInstance) initLightbox();
else lightboxInstance.refresh();
}

export function destroyLightbox() {
  if (lightboxInstance) {
    lightboxInstance.destroy();
    lightboxInstance = null;
  }
}


export function createGallery(images, galleryEl) {
  if (!images || images.length === 0) return Promise.resolve();

  const galleryObj = images.map(image => ({
    webformatURL: image.webformatURL,
    largeImageURL: image.largeImageURL,
    alt: image.tags,
    likes: image.likes,
    views: image.views,
    comments: image.comments,
    downloads: image.downloads,
  }));

  const markup = galleryObj
    .map(
      img => `
      <li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img 
            class="gallery-image"
            src="${img.webformatURL}"
            alt="${img.alt}"
          />
        </a>
        <div class="gallery-image-info">
          <p>Likes: ${img.likes}</p>
          <p>Views: ${img.views}</p>
          <p>Comments: ${img.comments}</p>
          <p>Downloads: ${img.downloads}</p>
        </div>
      </li>
      `
    )
    .join('');

   
  const loaderEl = galleryEl.querySelector('.loader-wrapper');

  if (loaderEl) {
loaderEl.insertAdjacentHTML('beforebegin', markup);
} else {
galleryEl.insertAdjacentHTML('beforeend', markup);
}


    const newImages = Array.from(
    galleryEl.querySelectorAll('li.gallery-item img')
  ).slice(-images.length);

  return Promise.all(
    newImages.map(img =>
      new Promise(resolve => {
        if (img.complete) resolve();
        img.onload = img.onerror = resolve;
      })
    )
  ).then(() => {
   
    refreshLightbox();
  });
}

export function clearGallery(galleryEl) {
  galleryEl.innerHTML = `
    <li class="loader-wrapper hidden">
      <span class="loader"></span>
    </li>`;
  destroyLightbox(); 
}

export function showLoader() {
const loader = document.querySelector('.loader-wrapper');
if (loader) loader.classList.remove('hidden');
}

export function hideLoader() {
const loader = document.querySelector('.loader-wrapper');
if (loader) loader.classList.add('hidden');
}

export function showLoadMoreButton(btn) {
if (btn) btn.classList.remove('hidden');
}

export function hideLoadMoreButton(btn) {
if (btn) btn.classList.add('hidden');
}