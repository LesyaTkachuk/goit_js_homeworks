const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector('#controls>input');
const boxes = document.querySelector('#boxes');

const handleRenderBoxes = () => {
  const divs = [];
  let currentSize = 20;
  for (let i = 0; i < input.value; i += 1) {
    currentSize += 10;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    divs[
      i
    ] = `<div style="width: ${currentSize}px; height: ${currentSize}px; background-color: rgb(${r}, ${g}, ${b});"></div>`;
  }
  boxes.innerHTML = divs.join('');
};

const handleDestroyBoxes = () => {
  boxes.innerHTML = '';
  input.value = 0;
};

renderBtn.addEventListener('click', handleRenderBoxes);
destroyBtn.addEventListener('click', handleDestroyBoxes);
