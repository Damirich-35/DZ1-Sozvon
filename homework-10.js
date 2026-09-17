import { productsList } from './products.js';
console.log('Задание 2 (Список товаров):', productsList);
// Задание 4: Группировка (reduce()) 
const productsMap = productsList.reduce((accumulator, product) => {
  const key = product.title;
  const value = product.ingredients.join(', ');
  accumulator.push({
    [key]: value
  });
  return accumulator;
}, []); 
console.log('Задание 4 (Массив объектов Название-Описание):', productsMap);
// Задание 5 (Часть 1): Функция получения количества карточек от пользователя
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

// Задание 3 и Задание 5 (Часть 2): Функция рендеринга карточек на страницу
function renderProductCards(productsArray) {
  const container = document.querySelector('.products-container');
  const template = document.querySelector('#product-card-template');
  if (!container || !template) {
    console.error("Контейнер или шаблон карточки не найдены!");
    return;
  }
  container.innerHTML = ''; // Очищаем контейнер перед рендером
  productsArray.forEach(product => {
    // Клонируем структуру шаблона из HTML (HTML-код остается в HTML-файле, как просил Рамшидо)
    const cardClone = template.content.cloneNode(true);

    const cardRoot = cardClone.querySelector('.product-card');
    cardRoot.setAttribute('data-id', product.id);
    const img = cardClone.querySelector('.product-image');
    img.src = `img/${product.image}.jpg`;
    img.alt = product.title;
    cardClone.querySelector('.product-title').textContent = product.title;
    cardClone.querySelector('.product-ingredients').textContent = product.ingredients.join(', ');
    cardClone.querySelector('.product-price').textContent = `${product.price} ₽`;
    // Добавляем готовую заполненную карточку в контейнер
    container.appendChild(cardClone);
  });
}
// === Точка запуска кода (Задание 5) ===
const numberOfCards = getCountFromUser();
if (numberOfCards !== null) {
  const productsToRender = productsList.slice(0, numberOfCards);
  renderProductCards(productsToRender);
}
