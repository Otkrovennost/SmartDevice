import {popupOpenHandler, saveInLocalStorage} from "./popup.js";
import {scrollToContent} from "./scroll.js";
import {getDefaultState, onClickNavToggler, onClickContactsToggler} from "./footer-menu.js";

const openUserMessageLink = document.querySelector(`.nav__call`);
const formMessageBlock = document.querySelector(`.form-call`);
const submitForm = formMessageBlock.querySelector(`form`);
const scrollPreviewLink = document.querySelector(`.preview__link-scroll`);
const footerBlock = document.querySelector(`.footer`);
const navToggler = footerBlock.querySelector(`.footer__toggler--nav`);
const contactsToggler = footerBlock.querySelector(`.footer__toggler--contacts`);

getDefaultState();

if (openUserMessageLink) {
  openUserMessageLink.addEventListener(`click`, popupOpenHandler);
}

if (submitForm) {
  submitForm.addEventListener(`submit`, saveInLocalStorage);
}

if (scrollPreviewLink) {
  scrollToContent();
}

if (navToggler) {
  navToggler.addEventListener(`click`, onClickNavToggler);
}

if (contactsToggler) {
  contactsToggler.addEventListener(`click`, onClickContactsToggler);
}
