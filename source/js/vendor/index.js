import IMask from 'imask';
import svg4everybody from 'svg4everybody';

const inputsForTell = document.querySelectorAll(`input[name=tell]`);

svg4everybody();

if (inputsForTell) {
  inputsForTell.forEach(function (input) {
    const validatePhone = new IMask(input, {
      mask: `+{7}(000)000-00-00`
    });
  });
}
