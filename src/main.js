import {getImagesByQuery} from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';
// import axios from "axios";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


// refs
export const refs={
  form: document.querySelector('.form'),
  gallery:document.querySelector('.gallery'),
  loader: document.querySelector('.loader-wrapper'),
  galleryBtn: document.querySelector('.gallery-btn')
}
let currentQuery = "";
let currentPage = 1;
const perPage = 15; 
let totalPages = 0;
let endMessageShown = false;

 async function onFormSubmit(event){
event.preventDefault();
 
const query = event.target.elements["search-text"]?.value.trim();
if (!query) {
  iziToast.warning({
    message: "Please enter a search query.",
    position: "topRight",
  });
  return;
}

currentQuery = query;
currentPage = 1;
endMessageShown = false;

 clearGallery(refs.gallery);
 hideLoadMoreButton(refs.galleryBtn);
 showLoader(refs.loader);

 try{ 
  const data =await getImagesByQuery(currentQuery, currentPage, perPage);

    if (!data.hits || data.hits.length === 0) {
      iziToast.warning({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;}
    
    totalPages=Math.ceil(data.totalHits / perPage);

    await createGallery(data.hits, refs.gallery); 

    if (currentPage < totalPages) {
      showLoadMoreButton(refs.galleryBtn);
    }
    
  }catch (err) {
    console.error(err);
  }finally {
    hideLoader(refs.loader);}
 
}


async function onLoadMoreClick(event){
  currentPage++; 

  hideLoadMoreButton(refs.galleryBtn);
  showLoader(refs.loader);

  try {
    const data = await getImagesByQuery(currentQuery, currentPage, perPage);

    await createGallery(data.hits, refs.gallery);

const firstCard = refs.gallery.querySelector('li');
    const cardHeight = firstCard ? firstCard.getBoundingClientRect().height : 0;

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth'
    });


    if (currentPage >= totalPages) {

  if (!endMessageShown) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: "topRight"
    });
    endMessageShown = true;
  }

  hideLoadMoreButton(refs.galleryBtn);  

} else {
  showLoadMoreButton(refs.galleryBtn);
}

  } catch (err) {
    console.error(err);
  } finally {
    hideLoader(refs.loader);
  }}

// listener
refs.form.addEventListener('submit', onFormSubmit);
refs.galleryBtn.addEventListener('click', onLoadMoreClick)