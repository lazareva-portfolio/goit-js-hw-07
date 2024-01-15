function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const randomColor = getRandomHexColor();


const inputAmount = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');




let amount = 0;

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
amount = Number(inputAmount.value);
  if (amount >= 1 && amount <= 100) {
    let boxSize = 30;
    for (let i = 0; i < amount; i++) {
      const newBox = document.createElement('div');

      newBox.style.width = `${boxSize}px`;
      newBox.style.height = `${boxSize}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(newBox);
      boxSize += 10;
    }
  }

  inputAmount.value = '';
}



buttonCreate.addEventListener('click', createBoxes);


  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

buttonDestroy.addEventListener('click', destroyBoxes);

