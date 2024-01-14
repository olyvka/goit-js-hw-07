function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', () => createBoxes(input.value));
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const validAmount = Number(amount);

  if (validAmount >= 1 && validAmount <= 100) {
    clearBoxes();
    for (let i = 0; i < validAmount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesContainer.appendChild(box);
    }
    input.value = '';
  }
}

function clearBoxes() {
  boxesContainer.innerHTML = '';
}

function destroyBoxes() {
  clearBoxes();
}