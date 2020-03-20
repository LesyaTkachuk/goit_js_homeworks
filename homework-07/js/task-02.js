const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const createItems = array =>
  array.map(elem => {
    const item = document.createElement('li');
    item.textContent = elem;
    return item;
  });
const items = createItems(ingredients);
ingredientsList.append(...items);
console.log(ingredientsList);
