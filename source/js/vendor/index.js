import IMask from 'imask';

const inputsForTell = document.querySelectorAll(`input[name=tell]`);

if (inputsForTell) {
  inputsForTell.forEach(function (input) {
    const validatePhone = new IMask(input, {
      mask: `+{7}(000)000-00-00`
    });
  });
}
