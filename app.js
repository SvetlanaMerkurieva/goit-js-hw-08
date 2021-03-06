const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const galleryEl = document.querySelector('.gallery');
const closeModal = document.querySelector('[data-action="close-lightbox"]');
const modalWindow = document.querySelector('.lightbox');
const imageEl = document.querySelector('.lightbox__image');
const overlayEl = document.querySelector('.lightbox__overlay');

const addGallery = galleryItems
  .map( item => {
    return `<li class="gallery__item">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" width ="408" height ="290">
          </li>`;
  })
  .join(" ");

galleryEl.insertAdjacentHTML("afterbegin", addGallery);


galleryEl.addEventListener('click', onModalOpen);
closeModal.addEventListener('click', onModalClose);

function onModalOpen(event) {
  modalWindow.classList.add('is-open');
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onArrowsKeyPress);
  overlayEl.addEventListener('click', onOverlayClick);

  galleryItems.forEach(image => {
    if (event.target.src === image.preview) {
      imageEl.src = `${image.original}`;
      imageEl.alt = `${image.description}`;
    };
  });
};

function onModalClose() {
  modalWindow.classList.remove('is-open');
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onArrowsKeyPress);
  imageEl.src = "";
};

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onModalClose();
  };
};

function onOverlayClick(event) {
  if (event.currentTarget === event.target) {
    onModalClose();
  };
};

function onArrowsKeyPress(event) {
    let index = galleryItems.indexOf(galleryItems.find(item =>
    item.original === imageEl.src));
    if (event.code === 'ArrowRight') {
      index += 1
    } else if (event.code === 'ArrowLeft') {
      index -= 1;
    };
    imageEl.src = `${galleryItems[index].original}`;
    imageEl.alt = `${galleryItems[index].description}`;
};

