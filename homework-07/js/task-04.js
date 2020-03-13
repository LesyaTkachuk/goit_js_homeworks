const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;
function handleDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
function handleIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}

incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);
