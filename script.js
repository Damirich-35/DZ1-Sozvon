// ЗАДАЧА 2
const firstProductCard = document.querySelector('.product-card');
firstProductCard.style.backgroundColor = 'lightgreen';

// ЗАДАЧА 3
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(function(card) {
  card.style.backgroundColor = 'lightblue';
});

// ЗАДАЧА 4
setTimeout(function() {
  window.location.href = 'https://google.com';
}, 5000); 

// ЗАДАЧА 5
console.log('Скрипт успешно запущен, карточки перекрашены!');
alert('JavaScript работает! Нажмите ОК, чтобы увидеть карточки.');

// ЗАДАЧА 6
const mainPageHeading = document.querySelector('h1');
mainPageHeading.addEventListener('mouseenter', function() {
  console.log(mainPageHeading.textContent);
});

// ЗАДАЧА 7
const creativeColorBtn = document.querySelector('.toggle-btn');
creativeColorBtn.addEventListener('click', function() {
  creativeColorBtn.classList.toggle('toggle-btn--active');
});
console.log(unifiedLibraryCollection);
