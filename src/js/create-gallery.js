import {refs} from './refs';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(images) {
    return images
    .map(
    ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
    }) => `<div class="photo-card">
            <a href="${largeImageURL}">
            <img class="gallery_image img"
            src="${webformatURL}" alt="${tags}"
            loading="lazy"/>
        <div class="info">
            <p class="info-item">
                <b>Likes</b>
                <span>${likes}</span>
            </p>
            <p class="info-item">
                <b>Views</b>
                <span>${views}</span>
            </p>
            <p class="info-item">
                <b>Comments</b>
                <span>${comments}</span>
            </p>
            <p class="info-item">
                <b>Downloads</b>
                <span>${downloads}</span>
            </p>
        </div>
    </div>`   
    )
    .join('');
}

export function renderGallery(images) {
    refs.gallery.insertAdjacentHTML('beforeend', createGallery(images));
}