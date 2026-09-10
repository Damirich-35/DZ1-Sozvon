import { productsList } from './products.js';

console.log('Задание 2 (Список товаров):', productsList);

// Задание 3: Шаблон для создания HTML-разметки карточки товара
function createProductCardTemplate(product) {
  const ingredientsString = product.ingredients.join(', ');
  
  // Код сам добавляет папку 'img/' в начало и расширение '.jpg' в конец
  return `
    <div class="product-card" data-id="${product.id}">
      <img src="img/${product.image}.jpg" alt="${product.title}" class="product-image">
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-ingredients">${ingredientsString}</p>
        <div class="product-footer">
          <span class="product-price">${product.price} ₽</span>
          <button class="add-to-cart-btn">В корзину</button>
        </div>
      </div>
    </div>
  `;
}

// Задание 4: Группировка (reduce())
const productsMap = productsList.reduce((accumulator, product) => {
  accumulator[product.id] = {
    price: product.price,
    ingredients: product.ingredients
  };
  return accumulator;
}, {});
console.log('Задание 4 (Объект продуктов):', productsMap);

// Функция получения количества карточек от пользователя
function getCountFromUser() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  if (userInput === null) {
    return null;
  }

  const count = parseInt(userInput, 10);

  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Допускаются только числа от 1 до 5.");
    return null;
  }
  return count;
}

// Функция рендеринга карточек на страницу
function renderProductCards(productsArray) {
  const container = document.querySelector('.products-container');
  if (!container) {
    console.error("Контейнер .products-container не найден!");
    return;
  }
  
  // Безопасный и быстрый рендеринг одной строкой
  const cardsHtml = productsArray.map(product => createProductCardTemplate(product)).join('');
  container.innerHTML = cardsHtml;
}

// === Точка запуска кода ===
const numberOfCards = getCountFromUser();

if (numberOfCards !== null) {
  const productsToRender = productsList.slice(0, numberOfCards);
  renderProductCards(productsToRender);
}
