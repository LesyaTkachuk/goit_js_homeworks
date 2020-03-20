/* eslint-disable no-return-assign */
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const handleChangeOutput = ({ currentTarget }) =>
  (output.textContent =
    currentTarget.value === '' ? 'незнакомец' : currentTarget.value);

input.addEventListener('input', handleChangeOutput);
