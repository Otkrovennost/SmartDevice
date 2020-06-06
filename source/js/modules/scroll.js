const body = document.querySelector(`body`);

const getScrollbarWidth = () => {
  const outer = document.createElement(`div`);
  outer.style.visibility = `hidden`;
  outer.style.overflow = `scroll`;
  outer.style.msOverflowStyle = `scrollbar`;
  body.appendChild(outer);
  const inner = document.createElement(`div`);
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};

export const disableScrolling = () => {
  const scrollWidth = getScrollbarWidth();
  body.setAttribute(`style`, `padding-right:${scrollWidth}px;`);
  body.classList.add(`no-scroll`);
};

export const enableScrolling = () => {
  body.removeAttribute(`style`);
  body.classList.remove(`no-scroll`);
};

export const scrollToContent = () => {
  const anchors = document.querySelectorAll(`a[href*="#"]`);

  for (let anchor of anchors) {
    anchor.addEventListener(`click`, function (evt) {
      evt.preventDefault();

      const blockId = anchor.getAttribute(`href`);

      if (blockId !== `#`) {
        document.querySelector(`` + blockId).scrollIntoView({
          behavior: `smooth`,
          block: `start`
        });
      }
    });
  }
};
