import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems

const galleryRef = document.querySelector('.gallery');

insertMarkup(createGalleryMarkup(galleryItems));

function createGalleryMarkup(arrayOfItems) {
  return arrayOfItems
    .map(({ description, original, preview }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" loading="lazy" alt="${description}" /></a>`;
    })
    .join('');
}

function insertMarkup(markupString) {
  galleryRef.insertAdjacentHTML('afterbegin', markupString);
}

// Инициализация библиотеки simplelightbox
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
