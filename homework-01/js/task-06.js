let totalSum = 0;
let userInput;
const requestMessage = 'Введите любое число';
const noNumberMessage = 'Было введено не число, попробуйте еще раз';

do {
  userInput = prompt(requestMessage);
  const userInputNum = Number(userInput);

  if (Number.isNaN(userInputNum)) {
    alert(noNumberMessage);
    continue;
  }

  totalSum += userInputNum;
} while (userInput !== null);

const totalSumMessage = `Общая сумма чисел равна ${totalSum}`;
alert(totalSumMessage);
