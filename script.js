// ЗАДАЧА 2
const singleProductCard = document.querySelector('.product-card');
singleProductCard.style.border = '2px solid red'; 

// ЗАДАЧА 3
const itemsCollection = document.querySelectorAll('.product-card');
itemsCollection.forEach(function(item) {
  item.style.backgroundColor = '#e1f5fe';
});

// ЗАДАЧА 4
// window.location.href = 'https://google.com';

// ЗАДАЧА 5
console.log('Скрипт успешно запущен, карточки перекрашены!');
alert('JavaScript работает! Нажмите ОК, чтобы увидеть карточки.');

// ЗАДАЧА 6
const pageMainHeading = document.querySelector('h1');
pageMainHeading.addEventListener('mouseenter', function() {
  console.log(pageMainHeading.textContent);
});

// ЗАДАЧА 7
const colorSwitcherBtn = document.querySelector('.toggle-btn');
colorSwitcherBtn.addEventListener('click', function() {
  colorSwitcherBtn.classList.toggle('toggle-btn--active');
});
