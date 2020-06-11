import svg4everybody from 'svg4everybody';
import {popupOpenHandler, submilFormCall} from "./popup.js";
import {scrollToContent} from "./scroll.js";
import {getDefaultState, onClickNavToggler, onClickContactsToggler} from "./footer-menu.js";

const openUserMessageLink = document.querySelector(`.nav__call`);
const popupCallForm = document.querySelector(`.form-call`);
const submitForm = popupCallForm.querySelector(`form`);
const scrollPreviewLink = document.querySelector(`.preview__link-scroll`);
const footerBlock = document.querySelector(`.footer`);
const navToggler = footerBlock.querySelector(`.footer__toggler--nav`);
const contactsToggler = footerBlock.querySelector(`.footer__toggler--contacts`);
const inputInFormCall = document.querySelector(`.form-call input[name=tell]`);
const inputInFeedback = document.querySelector(`.feedback__content input[name=tell]`);

svg4everybody();
getDefaultState();

const validatePhoneInForm = new IMask(inputInFormCall, {
  mask: `+{7}(000)000-00-00`
});

const validatePhoneInFeedback = new IMask(inputInFeedback, {
  mask: `+{7}(000)000-00-00`
});

navToggler.addEventListener(`click`, onClickNavToggler);
contactsToggler.addEventListener(`click`, onClickContactsToggler);

if (openUserMessageLink) {
  openUserMessageLink.addEventListener(`click`, popupOpenHandler);
}

if (submitForm) {
  submitForm.addEventListener(`submit`, submilFormCall);
}

if (scrollPreviewLink) {
  scrollToContent();
}
