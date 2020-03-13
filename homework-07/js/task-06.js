const inputValidation = document.querySelector('#validation-input');

const handleCheckOfInputLength = event => {
  const input = event.currentTarget;
  const inputLength = inputValidation.dataset.length;
  if (input.value.length >= inputLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
};

inputValidation.addEventListener('change', handleCheckOfInputLength);
