import { galleryItems } from './gallery-items.js';
// Change code below this line
const markup = createGalleryMarkup;
console.log(markup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description }) => {
   return `
   <div class = "gallery__item"> 
   <a class = "gallery__link" href '${original}'>
   <img class = "gallery__image" 
   src = '${preview}'
   alt = '${description}'/>
   />
   </div>
   `
})
.join('');
}

console.log(galleryItems);
