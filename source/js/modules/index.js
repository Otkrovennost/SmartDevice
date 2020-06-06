import {popupOpenHandler, saveInLocalStorage} from "./popup.js";
import {scrollToContent} from "./scroll.js";

const openUserMessageLink = document.querySelector(`.nav__call`);
const formMessageBlock = document.querySelector(`.form-call`);
const submitForm = formMessageBlock.querySelector(`form`);
const scrollPreviewLink = document.querySelector(`.preview__link-scroll`);

if (openUserMessageLink) {
  openUserMessageLink.addEventListener(`click`, popupOpenHandler);
}

if (submitForm) {
  submitForm.addEventListener(`submit`, saveInLocalStorage);
}

if (scrollPreviewLink) {
  scrollToContent();
}
