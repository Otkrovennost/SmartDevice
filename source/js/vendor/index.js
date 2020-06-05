import IMask from 'imask';

const inputForTel = document.querySelector(`.form-call input[name=tell]`);

if (inputForTel) {
  const validatePhone = new IMask(inputForTel, {
    mask: `+{7}(000)000-00-00`
  });
}
