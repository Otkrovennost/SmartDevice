import {popupOpenHandler, saveInLocalStorage} from "./popup.js";

const openUserMessageLink = document.querySelector(`.nav__call`);
const formMessageBlock = document.querySelector(`.form-call`);
const submitForm = formMessageBlock.querySelector(`form`);

if (openUserMessageLink) {
  openUserMessageLink.addEventListener(`click`, popupOpenHandler);
}

if (submitForm) {
  submitForm.addEventListener(`submit`, saveInLocalStorage);
}
