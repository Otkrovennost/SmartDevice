const footerBlock = document.querySelector(`.footer`);
const footerNavBlock = footerBlock.querySelector(`.footer__nav`);
const footerContactsBlock = footerBlock.querySelector(`.footer__contacts`);

export const getDefaultState = () => {
  footerNavBlock.classList.remove(`footer__nav--nojs`);
  footerContactsBlock.classList.remove(`footer__contacts--nojs`);
  footerNavBlock.classList.add(`footer__nav--closed`);
  footerContactsBlock.classList.add(`footer__contacts--closed`);
};

const showFooterNavBlock = () => {
  footerNavBlock.classList.remove(`footer__nav--closed`);
  footerNavBlock.classList.add(`footer__nav--opened`);
};

const hideFooterNavBlock = () => {
  footerNavBlock.classList.remove(`footer__nav--opened`);
  footerNavBlock.classList.add(`footer__nav--closed`);
};

const showFooterContactsBlock = () => {
  footerContactsBlock.classList.remove(`footer__contacts--closed`);
  footerContactsBlock.classList.add(`footer__contacts--opened`);
};

const hideFooterContactsBlock = () => {
  footerContactsBlock.classList.remove(`footer__contacts--opened`);
  footerContactsBlock.classList.add(`footer__contacts--closed`);
};

export const onClickNavToggler = () => {
  if (footerContactsBlock.classList.contains(`footer__contacts--opened`) || footerNavBlock.classList.contains(`footer__nav--closed`)) {
    showFooterNavBlock();
    hideFooterContactsBlock();
  } else {
    hideFooterNavBlock();
  }
};

export const onClickContactsToggler = () => {
  if (footerNavBlock.classList.contains(`footer__nav--opened`) || footerContactsBlock.classList.contains(`footer__contacts--closed`)) {
    showFooterContactsBlock();
    hideFooterNavBlock();
  } else {
    hideFooterContactsBlock();
  }
};
