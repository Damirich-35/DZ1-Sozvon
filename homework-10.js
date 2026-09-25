import { productsList } from './products.js';

console.log('Задание 2 (Список товаров):', productsList);

/* ---------- Задание 4: reduce → массив объектов ---------- */
const productsWithDescriptions = productsList.reduce((accumulator, product) => {
  accumulator.push({
    name: product.title,
    description: product.ingredients.join(', ')
  });
  return accumulator;
}, []);

console.log('Задание 4 (Массив объектов Название-Описание):', productsWithDescriptions);

/* ---------- Задание 5 (Часть 1): запрос количества ---------- */
function getCountFromUser() {
  const MIN = 1;
  const MAX = 5;

  while (true) {
    const userInput = prompt(`Сколько карточек отобразить? От ${MIN} до ${MAX}`);

    if (userInput === null) return MIN;

    const count = Number(userInput.trim());
    if (Number.isInteger(count) && count >= MIN && count <= MAX) {
      return count;
    }
    alert(`Ошибка! Допускаются только числа от ${MIN} до ${MAX}.`);
  }
}

/* ---------- Задание 3 и 5 (Часть 2): рендеринг карточек ---------- */
function renderProductCards(productsArray) {
  const container = document.querySelector('.products-container');
  const template  = document.querySelector('#product-card-template');

  if (!container || !template) {
    console.error('Контейнер или шаблон карточки не найдены!');
    return;
  }

  container.innerHTML = '';

  productsArray.forEach(product => {
    const cardClone = template.content.cloneNode(true);

    const cardRoot = cardClone.querySelector('.product-card');
    cardRoot.dataset.id = product.id;

    const img = cardClone.querySelector('.product-card__image');
    img.src = `./img/${product.image}.jpg`;
    img.alt = product.title;

    cardClone.querySelector('.product-card__category').textContent    = product.category;
    cardClone.querySelector('.product-card__title').textContent       = product.title;
    cardClone.querySelector('.product-card__description').textContent = product.description;
    cardClone.querySelector('.product-card__price-value').textContent =
      `${product.price.toLocaleString('ru-RU')} ₽`;

    const list = cardClone.querySelector('.product-card__ingredients-list');
    product.ingredients.forEach(item => {
      const li = document.createElement('li');
      li.className = 'product-card__ingredients-item';
      li.textContent = item;
      list.appendChild(li);
    });

    container.appendChild(cardClone);
  });
}

const numberOfCards = getCountFromUser();
renderProductCards(productsList.slice(0, numberOfCards));