import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick)

function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description }) => {
   return `
   <div class = "gallery__item"> 
   <a class = "gallery__link" href '${original}'>
   <img class = "gallery__image" 
   src = '${preview}'
   data-source = '${original}'
   alt = '${description}'/>
   </a>
   </div>
   `
})
.join('');
}

function onGalleryContainerClick(evt) {
if(!evt.target.classlist.contains('gallery__image')) {
    return;
}
console.log(evt.target);
}
evt.preventDefault();
onModalOpen(evt);
console.log(evt.target.dataset.source);

function onModalOpen(evt) {
    const instance = basicLightbox.create (
        `img src = '${evt.target.dataset.source}' width = "1280"
        `
        );
    instance.show();
    addEventListener('keydown', onEscapePress);

function onEscapePress(evt) {
    const ESC_KEY_CODE = 'Escape';
    const isEscape = evt.code === ESC_KEY_CODE;
    if (isEscape) {
        instance.close();
    }
}
}


console.log(galleryItems);
