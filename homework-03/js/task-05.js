const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  let properties = [];
  for (let i = 0; i < arr.length; i += 1) {
    const keys = Object.keys(arr[i]);
    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      if (key === prop) {
        properties.push(arr[i][key]);
      }
    }
  }
  return properties;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

console.log(getAllPropValues(products, 'price')); // [1300, 2700, 400, 1200]
