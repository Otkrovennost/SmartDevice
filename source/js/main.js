'use strict';

var ESC_KEYCODE = 27;
var body = document.querySelector('body');
var inputInFormCall = document.querySelector('.form-call input[name=tel]');
var inputInFeedback = document.querySelector('.feedback__content input[name=tel]');
var footerBlock = document.querySelector('.footer');
var footerNavBlock = footerBlock.querySelector('.footer__nav');
var footerContactsBlock = footerBlock.querySelector('.footer__contacts');
var footerNavToggler = footerBlock.querySelector('.footer__input--nav');
var footerContactsToggler = footerBlock.querySelector('.footer__input--contacts');
var popupElement = document.querySelector('.popup');
var submitForm = popupElement.querySelector('form');
var popupClose = popupElement.querySelector('.popup__button--closer');
var userName = popupElement.querySelector('[name = name]');
var userTel = popupElement.querySelector('[name = tel]');
var userMessage = popupElement.querySelector('[name = user-message]');
var openUserMessageLink = document.querySelector('.nav__call');
var storageName = localStorage.getItem('name');
var storageTell = localStorage.getItem('tel');
var storageMessage = localStorage.getItem('user-message');
var anchorList = document.querySelectorAll('.anchor-link');
var anchor;

var validatePhoneInForm = new IMask(inputInFormCall, {
  mask: '+{7}(000)000-00-00'
});

var validatePhoneInFeedback = new IMask(inputInFeedback, {
  mask: '+{7}(000)000-00-00'
});

// меню-аккордеон в подвале

var getDefaultState = function () {
  footerNavBlock.classList.remove('footer__nav--nojs');
  footerContactsBlock.classList.remove('footer__contacts--nojs');
  footerNavBlock.classList.add('footer__nav--closed');
  footerContactsBlock.classList.add('footer__contacts--closed');
};

var showFooterNavBlock = function () {
  footerNavBlock.classList.remove('footer__nav--closed');
  footerNavBlock.classList.add('footer__nav--opened');
};

var hideFooterNavBlock = function () {
  footerNavBlock.classList.remove('footer__nav--opened');
  footerNavBlock.classList.add('footer__nav--closed');
};

var showFooterContactsBlock = function () {
  footerContactsBlock.classList.remove('footer__contacts--closed');
  footerContactsBlock.classList.add('footer__contacts--opened');
};

var hideFooterContactsBlock = function () {
  footerContactsBlock.classList.remove('footer__contacts--opened');
  footerContactsBlock.classList.add('footer__contacts--closed');
};

var onClickNavToggler = function () {
  if (footerContactsBlock.classList.contains('footer__contacts--opened') || footerNavBlock.classList.contains('footer__nav--closed')) {
    showFooterNavBlock();
    hideFooterContactsBlock();
  } else {
    hideFooterNavBlock();
  }
};

var onClickContactsToggler = function () {
  if (footerNavBlock.classList.contains('footer__nav--opened') || footerContactsBlock.classList.contains('footer__contacts--closed')) {
    showFooterContactsBlock();
    hideFooterNavBlock();
  } else {
    hideFooterContactsBlock();
  }
};
// скролл при открытии попапа

var getScrollbarWidth = function () {
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  body.appendChild(outer);
  var inner = document.createElement('div');
  outer.appendChild(inner);
  var scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};

var disableScrolling = function () {
  var scrollWidth = getScrollbarWidth();
  body.style.paddingRight = scrollWidth + 'px';
  body.classList.add('no-scroll');
};

var enableScrolling = function () {
  body.removeAttribute('style');
  body.classList.remove('no-scroll');
};

var scrollToContent = function () {
  for (var i = 0; i < anchorList.length; i++) {
    anchor = anchorList[i];
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var link = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
      var blockId = link.getAttribute('href');
      if (blockId !== '#') {
        document.querySelector(blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
};

// форма обратной связи

var popupCloserHandler = function () {
  popupElement.classList.remove('popup--show');
  enableScrolling();
};

var saveInLocalStorage = function () {
  if (userName.value || userTel.value || userMessage.value) {
    localStorage.setItem('name', userName.value);
    localStorage.setItem('tel', userTel.value);
    localStorage.setItem('user-message', userMessage.value);
    popupCloserHandler();
  }
};

var getInLocalStorage = function () {
  if (storageName || storageTell || storageMessage) {
    userName.value = storageName;
    userTel.value = storageTell;
    userMessage.value = storageMessage;
  }
};

var closeByEsc = function () {
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      popupCloserHandler();
    }
  });
};

var closeOnClickOutsideHandler = function (e) {
  var target = e.target;

  if (target.classList.contains('popup__overlay')) {
    popupCloserHandler();
  }
};

var popupOpenHandler = function () {
  if (popupElement) {
    popupElement.classList.add('popup--show');
    userName.focus();
    getInLocalStorage();
    disableScrolling();
  }

  popupClose.addEventListener('click', popupCloserHandler);
  closeByEsc();
  document.addEventListener('click', closeOnClickOutsideHandler);
};

var submilFormCall = function () {
  saveInLocalStorage();
};

svg4everybody();
getDefaultState();
scrollToContent();

openUserMessageLink.addEventListener('click', popupOpenHandler);
submitForm.addEventListener('submit', submilFormCall);
footerNavToggler.addEventListener('click', onClickNavToggler);
footerContactsToggler.addEventListener('click', onClickContactsToggler);
