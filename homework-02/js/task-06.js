let input;
const numbers = [];
let total = 0;
const request = 'Введите любое число';
const noNumber = 'Было введено не число, попробуйте еще раз';
do {
  input = prompt(request);
  const inputNumber = Number(input);

  if (Number.isNaN(inputNumber)) {
    alert(noNumber);
    continue;
  }

  numbers.push(inputNumber);
} while (input !== null);
numbers.pop();
console.log(numbers);

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}

const message = `Общая сумма чисел равна ${total}`;
console.log(message);
