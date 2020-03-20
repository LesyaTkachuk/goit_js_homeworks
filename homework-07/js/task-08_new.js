const refs = {
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  input: document.querySelector('#controls>input'),
  boxes: document.querySelector('#boxes'),
};

const handleRenderBoxes = () => {
  const randomColor = () => Math.floor(Math.random() * 256);
  const randomRGB = () =>
    `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

  const createDivs = n => {
    const initialSize = 30;
    const step = 10;
    const markup = Array(n)
      .fill('')
      .map(
        (elem, idx) =>
          `<div style="width: ${initialSize +
            step * idx}px; height: ${initialSize +
            step * idx}px; background-color: ${randomRGB()};"></div>`,
      )
      .join('');
    console.log(markup);
    refs.boxes.innerHTML = '';
    refs.boxes.insertAdjacentHTML('afterbegin', markup);
  };
  const numberOfBoxes = Number(refs.input.value);
  createDivs(numberOfBoxes);
};
const handleDestroyBoxes = () => {
  refs.boxes.innerHTML = '';
  refs.input.value = 0;
};

refs.renderBtn.addEventListener('click', handleRenderBoxes);
refs.destroyBtn.addEventListener('click', handleDestroyBoxes);
