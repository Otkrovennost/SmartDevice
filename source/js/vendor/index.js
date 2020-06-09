import IMask from "./imask-min.js";
import svg4everybody from 'svg4everybody';

const inputInFormCall = document.querySelector(`.form-call input[name=tell]`);
const inputInFeedback = document.querySelector(`.feedback__content input[name=tell]`);

svg4everybody();

if (inputInFormCall) {
  const validatePhoneInForm = new IMask(inputInFormCall, {
    mask: `+{7}(000)000-00-00`
  });
}

if (inputInFeedback) {
  const validatePhoneInFeedback = new IMask(inputInFeedback, {
    mask: `+{7}(000)000-00-00`
  });
}
