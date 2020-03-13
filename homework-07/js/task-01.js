const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`В списке ${items.length} категории`);
items.forEach(el => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});
