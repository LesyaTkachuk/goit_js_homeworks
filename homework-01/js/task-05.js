let deliveryCost;
const CHINA = 'Китай';
const CHILI = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const YAMAIKA = 'Ямайка';
const cancelledByUser = 'Отменено пользователем!';
const noDelivery = 'В вашей стране доставка не доступна';
let message;
let countryName;
const userChoise = prompt(
  'Введите название страны на русском языке, в которую будет произведена доставка товара:',
);

if (userChoise === null) {
  message = cancelledByUser;
} else {
  countryName = userChoise[0].toUpperCase() + userChoise.slice(1).toLowerCase();

  switch (countryName) {
    case CHINA:
      deliveryCost = 100;
      break;

    case CHILI:
      deliveryCost = 250;
      break;

    case AUSTRALIA:
      deliveryCost = 170;
      break;

    case INDIA:
      deliveryCost = 80;
      break;

    case YAMAIKA:
      deliveryCost = 120;
      break;

    default:
      message = noDelivery;
  }
}

if (deliveryCost > 0) {
  const deliveryInfo = `Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`;
  message = deliveryInfo;
}

alert(message);
