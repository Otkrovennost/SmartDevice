import {disableScrolling, enableScrolling} from "./scroll.js";

const ESC_KEYCODE = 27;
const popupElement = document.querySelector(`.popup`);
const popupClose = popupElement.querySelector(`.popup__button--closer`);
const userName = popupElement.querySelector(`[name = name]`);
const userTell = popupElement.querySelector(`[name = tell]`);
const userMessage = popupElement.querySelector(`[name = user-message]`);
let storageName = localStorage.getItem(`name`);
let storageTell = localStorage.getItem(`tell`);
let storageMessage = localStorage.getItem(`user-message`);

const popupCloserHandler = () => {
  popupElement.classList.remove(`popup--show`);
  enableScrolling();
};

export const saveInLocalStorage = () => {
  if (userName.value || userTell.value || userMessage.value) {
    localStorage.setItem(`name`, userName.value);
    localStorage.setItem(`tell`, userTell.value);
    localStorage.setItem(`user-message`, userMessage.value);
    popupCloserHandler();
  }
};

const getInLocalStorage = () => {
  if (storageName || storageTell || storageMessage) {
    userName.value = storageName;
    userTell.value = storageTell;
    userMessage.value = storageMessage;
  }
};

const closeByEsc = () => {
  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      popupCloserHandler();
    }
  });
};

const closeOnClickOutsideHandler = (e) => {
  let target = e.target;

  if (target.classList.contains(`popup__overlay`)) {
    popupCloserHandler();
  }
};

export const popupOpenHandler = () => {
  if (popupElement) {
    popupElement.classList.add(`popup--show`);
    userName.focus();
    getInLocalStorage();
    disableScrolling();
  }

  popupClose.addEventListener(`click`, popupCloserHandler);
  closeByEsc();
  document.addEventListener(`click`, closeOnClickOutsideHandler);
};

export const submilFormCall = () => {
  saveInLocalStorage();
};
