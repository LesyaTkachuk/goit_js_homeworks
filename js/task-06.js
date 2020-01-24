let totalSum = 0;
while (true) {
  const userInput = prompt('Введите любое число');
  const userInputNum = Number(userInput);
  if (Number.isNaN(userInputNum)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  if (userInput === null) {
    break;
  }
  totalSum += userInputNum;
}
alert(`Общая сумма чисел равна ${totalSum}`);
