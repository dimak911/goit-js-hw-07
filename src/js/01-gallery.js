import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems

const galleryRef = document.querySelector('.gallery');

insertMarkup(createGalleryMarkup(galleryItems));

function createGalleryMarkup(arrayOfItems) {
  return arrayOfItems
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          loading="lazy"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

function insertMarkup(markupString) {
  galleryRef.insertAdjacentHTML('afterbegin', markupString);
}

// Реализация делегирования на div.gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи

galleryRef.addEventListener('click', openOriginalImg);

function openOriginalImg(event) {
  event.preventDefault();

  const originalImgSrc = event.target.dataset.source;
  if (!originalImgSrc) {
    return;
  }
  const instance = createImgModal(originalImgSrc);
  instance.show();
  if (basicLightbox.visible()) {
    document.addEventListener('keydown', closeModal);
  }
  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', closeModal);
    }
  }
}

function createImgModal(imgLink) {
  return basicLightbox.create(`<img src="${imgLink}">`);
}
