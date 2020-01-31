// // eslint-disable-next-line func-names
// const calculateEngravingPrice = function(message, pricePerWord) {
//   let totalPrice = 0;
//   const words = message.split(' ');
//   // eslint-disable-next-line no-restricted-syntax
//   for (const word of words) {
//     totalPrice += pricePerWord;
//   }
//   return totalPrice;
// };

// eslint-disable-next-line func-names
const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(' ');
  const wordsNumber = words.length;
  const totalPrice = wordsNumber * pricePerWord;
  return totalPrice;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
