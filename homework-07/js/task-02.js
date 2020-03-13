const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const createItems = array => {
  const items = array.map(elem => {
    const item = document.createElement('li');
    item.textContent = elem;
    return item;
  });
  return items;
};
const items = createItems(ingredients);
ingredientsList.append(...items);
console.log(ingredientsList);

// решение через forEach
// let items = [];
// ingredients.forEach(elem => {
//   const item = document.createElement('li');
//   item.textContent = elem;
//   items = [...items, item];
// });
// console.log(items);
// ingredientsList.append(...items);
// console.log(ingredientsList);

// решение через шаблонную строку и innerHTML
// const items = ingredients.reduce(
//   (string, elem) => string + `<li>${elem}</li>`,
//   '',
// );
// ingredientsList.innerHTML = items;
// console.log(ingredientsList);

// решение через цикл for
// let items = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const item = document.createElement('li');
//   console.log(item);
//   item.textContent = ingredients[i];
//   console.log(item);
//   items.push(item);
// }
// console.log(items);
// ingredientsList.append(...items);
// console.log(ingredientsList);
