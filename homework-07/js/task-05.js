const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const handleChangeOutput = event => {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    output.textContent = 'незнакомец';
  }
};

input.addEventListener('input', handleChangeOutput);
