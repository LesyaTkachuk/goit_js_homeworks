let deliveryCost;
let message;
const deliveryToChina = 'Китай';
const deliveryToChili = 'Чили';
const deliveryToAustralia = 'Австралия';
const deliveryToIndia = 'Индия';
const deliveryToYamaika = 'Ямайка';
const userChoise = prompt(
  'Введите название страны на русском языке, в которую будет произведена доставка товара:',
);

if (userChoise === null) {
  message = 'Отменено пользователем!';
} else {
  const messagePattern = `Доставка в ${userChoise.toUpperCase()} будет стоить ${deliveryCost} кредитов`;

  switch (userChoise.toLowerCase()) {
    case deliveryToChina.toLowerCase():
      deliveryCost = 100;
      message = messagePattern;
      break;

    case deliveryToChili.toLowerCase():
      deliveryCost = 250;
      message = messagePattern;
      break;

    case deliveryToAustralia.toLowerCase():
      deliveryCost = 170;
      message = messagePattern;
      break;

    case deliveryToIndia.toLowerCase():
      deliveryCost = 80;
      message = messagePattern;
      break;

    case deliveryToYamaika.toLowerCase():
      deliveryCost = 120;
      message = messagePattern;
      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
}

alert(message);
