import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const newGalleryItems = [];

const galleryMarkup = generateGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function generateGalleryMarkup(galleryItems) {
  return galleryItems.map((galleryItem) => `
    <div class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image" 
             src="${galleryItem.preview}"
             data-source="${galleryItem.original}"
             alt="${galleryItem.description}" />
      </a>
    </div>
  `).join('');
};

new SimpleLightbox('.gallery a', {
	captionDelay: 250
});