/* eslint-disable prefer-template */
import images from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  image: document.querySelector('.lightbox__image'),
  button: document.querySelector('button[data-action="close-lightbox"]'),
  buttonPrev: document.querySelector('.slider__button--prev'),
  buttonNext: document.querySelector('.slider__button--next'),
  slider: document.querySelector('.js-slider'),
};

const renderGallery = array =>
  array.reduce(
    (str, { preview, original, description }, idx) =>
      str +
      `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${idx}"
      alt="${description}"
    />
  </a>
 </li>`,
    '',
  );
const markup = renderGallery(images);
refs.gallery.insertAdjacentHTML('afterbegin', markup);

let idxTarget;

const onImageClickHandler = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  const srcTarget = e.target.dataset.source;
  const altTarget = e.target.getAttribute('alt');
  idxTarget = Number(e.target.dataset.index);
  if (idxTarget === 0) {
    refs.buttonPrev.classList.add('inactive');
  }
  if (idxTarget === images.length - 1) {
    refs.buttonNext.classList.add('inactive');
  }
  console.log(idxTarget);
  refs.image.setAttribute('src', srcTarget);
  refs.image.setAttribute('alt', altTarget);
  refs.image.setAttribute('data-index', idxTarget);
  refs.lightbox.classList.add('is-open');
};

const handleCloseModal = e => {
  if (
    e.target === refs.image ||
    e.target === refs.buttonPrev ||
    e.target === refs.buttonNext
  )
    return;
  refs.lightbox.classList.remove('is-open');
  refs.image.removeAttribute('src');
};

const handleCloseModalByEscape = ({ code }) => {
  if (code === 'Escape') {
    refs.lightbox.classList.remove('is-open');
    refs.image.removeAttribute('src');
  }
};

const changeImg = () => {
  const nextImage = document.querySelector(
    `.gallery__image[data-index="${idxTarget}"]`,
  );
  const srcNextImg = nextImage.dataset.source;
  const altNextImg = nextImage.getAttribute('alt');

  refs.image.setAttribute('src', srcNextImg);
  refs.image.setAttribute('alt', altNextImg);
};

const handleNextButton = ({ target }) => {
  if (idxTarget === images.length - 1) return;
  idxTarget += 1;
  if (idxTarget === 1) {
    refs.buttonPrev.classList.remove('inactive');
  }
  if (idxTarget === images.length - 1) {
    target.classList.add('inactive');
  }
  changeImg();
};

const handlePrevButton = ({ target }) => {
  if (idxTarget === 0) return;
  idxTarget -= 1;
  if (idxTarget === images.length - 2) {
    refs.buttonNext.classList.remove('inactive');
  }
  if (idxTarget === 0) {
    target.classList.add('inactive');
  }
  changeImg();
};

refs.gallery.addEventListener('click', onImageClickHandler);
refs.buttonPrev.addEventListener('click', handlePrevButton);
refs.buttonNext.addEventListener('click', handleNextButton);
refs.lightbox.addEventListener('click', handleCloseModal);
window.addEventListener('keydown', handleCloseModalByEscape);
