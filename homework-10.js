export const socialMediaComments = [
{
postId: 1,
id: 1,
name: "id labore ex et quam laborum",
email: "Eliseo@gardner.biz",body: `laudantium enim quasi est quidem magnam voluptate ipsam eos
tempora quo necessitatibus
dolor quam autem quasi
reiciendis et nam sapiente accusantium`

},
{
postId: 1,
id: 2,
name: "quo vero reiciendis velit similique earum",
email: "Jayne_Kuhic@sydney.com",
body:`est natus enim nihil est dolore omnis voluptatem numquam
et omnis occaecati quod ullam at
voluptatem error expedita pariatur
nihil sint nostrum voluptatem reiciendis et`
},
{
postId: 1,
id: 3,
name: "odio adipisci rerum aut animi",
email: "Nikita@garfield.biz",
body: `quia molestiae reprehenderit quasi aspernatur
aut expedita occaecati aliquam eveniet laudantium
omnis quibusdam delectus saepe quia accusamus maiores nam
est et quasi labore et voluptatem`
},
{
postId: 1,
id: 4,
name: "alias odio sit",
email: "Lew@alysha.tv",
body: `non et expedita accusantium unde eius
eaque aut occaecati qui quia quis expedita
voluptatem quia voluptas dolor
noque voluptatem qui deleniti commodi`
},
{
postId: 1,
id: 5,
name: "vero eaque aliquid doloribus et culpa",
email: "Hayden@althea.biz",
body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
},
{
postId: 2,
id: 6,
name: "et fugit eligendi deleniti quidem qui sint nihil autem",
email: "Presley.Mueller@myrl.com",
body: `doloribus at sed quis culpa deserunt id eos ea
consequatur et nam eum in ipsa quia\nconsequatur ut id sed dolores\nsit iusto eligendi eos expedit`
},
{
postId: 2,
id: 7,
name: "repellat consequatur praesentium vel ut eleifend",
email: "Dallas@ole.me",
body: "maiores sed dolores similique labore et inventore laudantium\nvoluptate sit omnis omnis id dolor\nratione quia et eos error ea varius\net expedita quasi aut"
},
{
postId: 2,
id: 8,
name: "et omnis dolorem",
email: "Mallory_Fritsch@coder.net",
body: `ut voluptatem corrupti velit
ad voluptatem maiores et
omnis velit porro iusto accusamus
fugit ut id laudantium enim quasi est`
},
{
postId: 2,
id: 9,
name: "provident id voluptas",
email: "Meghan_Littel@rene.us",
body: `sapiente assumenda molestiae atque
adipisci laborum distinctio aperiam et transient
quia eos rerum aut quia sunt\nut autem est facilis expedita`
},
{
postId: 2,
id: 10,
name: "eaque et iusto incidunt est et",
email: "Carmen_Keeling@caroline.com",
body: `voluptate iusto quis nobis reprehenderit ipsum amet nulla
quia quas dolores velit et voluptatem
provident consequuntur voluptatum laboriosam
omnis inventore architecto omnis sint unde`
}
];
import { productsList } from './products.js';
console.log('Задание 2 (Список товаров):', productsList);
import { productsList } from './products.js';

// ЗАДАНИЕ 3: Шаблон (функция) для создания HTML-разметки карточки товара
function createProductCardTemplate(product) {
  const ingredientsString = product.ingredients.join(', ');
  return `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.image}" alt="${product.title}" class="product-image">
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
  // ЗАДАНИЕ 4: Группировка продуктов через .reduce()
const productsMap = productsList.reduce((accumulator, product) => {
  accumulator[product.title] = {
    price: product.price,
    ingredients: product.ingredients
  };
  return accumulator;
}, {});
console.log('Задание 4 (Объект продуктов):', productsMap);
}
// ФУНКЦИЯ 1: Только запрашивает число у пользователя, проверяет его и возвращает
function getCountFromUser() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(userInput);

  // Проверка защиты (if)
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Допускаются только числа от 1 до 5.");
    return null; // Возвращаем null, если ввод некорректный
  }

  return count; // Если всё супер, возвращаем число
}

// ФУНКЦИЯ 2: Только рендерит карточки на страницу, принимая массив аргументом
function renderProductCards(productsArray) {
  const container = document.querySelector('.products-container');
  
  if (!container) {
    console.error("Контейнер .products-container не найден!");
    return;
  }

  // Очищаем контейнер перед выводом новых карточек
  container.innerHTML = '';

  // Перебираем переданный массив и отрисовываем карточки
  productsArray.forEach(product => {
    const cardHtml = createProductCardTemplate(product); // Используем шаблон из Задания 3
    container.innerHTML += cardHtml;
  });
}

// === ТОЧКА ЗАПУСКА КОДА ===
// 1. Получаем проверенное число от пользователя
const numberOfCards = getCountFromUser();

// 2. Если число успешно получено (не null), рендерим нужную часть массива
if (numberOfCards !== null) {
  // Вырезаем из нашего главного списка ровно столько товаров, сколько просил пользователь
  const productsToRender = productsList.slice(0, numberOfCards);
  
  // Передаем этот кусочек массива аргументом в функцию рендеринга
  renderProductCards(productsToRender);
}
// ФУНКЦИЯ 1
function getCountFromUser() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(userInput);

  // Проверка защиты (if)
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Допускаются только числа от 1 до 5.");
    return null; // Возвращаем null, если ввод некорректный
  }
  return count;
}

// ФУНКЦИЯ 2: 
function renderProductCards(productsArray) {
  const container = document.querySelector('.products-container');
  if (!container) {
    console.error("Контейнер .products-container не найден!");
    return;
  }
  container.innerHTML = '';
  productsArray.forEach(product => {
    const cardHtml = createProductCardTemplate(product);
    container.innerHTML += cardHtml;
  });
}

// === ТОЧКА ЗАПУСКА КОДА ===
const numberOfCards = getCountFromUser();
if (numberOfCards !== null) {
  const productsToRender = productsList.slice(0, numberOfCards);
  renderProductCards(productsToRender);
}
