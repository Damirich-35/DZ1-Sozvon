// ЗАДАЧА 3
const allCards = document.querySelectorAll('.product-card');

allCards.forEach(function(card) {
  card.style.backgroundColor = '#e1f5fe';
});

// ЗАДАЧА 5
console.log('Скрипт успешно запущен, карточки перекрашены!');
alert('JavaScript работает! Нажмите ОК, чтобы увидеть карточки.');

// ЗАДАЧА 6
const mainTitle = document.querySelector('h1');

mainTitle.addEventListener('mouseenter', function() {
  console.log(mainTitle.textContent);
});

// ЗАДАЧА 7
const myButton = document.querySelector('.toggle-btn');

myButton.addEventListener('click', function() {
  myButton.classList.toggle('toggle-btn--active');
});
