'use strict';
const total = 100;
const ordered = 80;
let message;

if (ordered > total) {
    message = 'На складе недостаточно товаров!';
} else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(message);

// можно записать с помощью тернарного оператора
// const total = 100;
// const ordered = 130;
// let message = ordered <= total ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';
// console.log(message);