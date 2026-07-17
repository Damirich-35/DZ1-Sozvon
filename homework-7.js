// ЗАДАЧА 3
function displayCurrentWeather(cityName, currentTemperature) {
  console.log(`Сейчас в ${cityName} температура — ${currentTemperature} градусов по Цельсию`);
}

displayCurrentWeather('Москва', 22);
// ЗАДАЧА 4
const SPEED_OF_LIGHT = 299792458; // Скорость света в м/с

function checkMovementSpeed(currentSpeed) {
  if (currentSpeed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (currentSpeed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

checkMovementSpeed(1500); // Выведет: Субсветовая скорость
// ЗАДАЧА 5
const storeProductTitle = 'Гель для умывания Invisible Symphony';
const storeProductPrice = 1650; // Цена в рублях (или условных единицах)

function tryToPurchaseProduct(userCurrentBudget) {
  if (userCurrentBudget >= storeProductPrice) {
    console.log(`${storeProductTitle} приобретён. Спасибо за покупку!`);
  } else {
    // Обсчитываем разницу, сколько пользователю не хватает
    const cashDeficit = storeProductPrice - userCurrentBudget;
    console.log(`Вам не хватает ${cashDeficit}$, пополните баланс`);
  }
}

// Пример вызова функции для проверки:
tryToPurchaseProduct(1000); 
// ЗАДАЧА 6 (Произвольная функция с адекватным именем)
function calculateLoyaltyDiscount(totalOrderSum, userDiscountPercent) {
  const finalDiscountAmount = (totalOrderSum * userDiscountPercent) / 100;
  console.log(`Ваша персональная скидка составляет: ${finalDiscountAmount}`);
}

// ЗАДАЧА 7 (Три произвольные переменные с адекватными именами)
const currentDayOfWeek = 'Пятница';
const userAccountStatus = 'Mekka';
const maximumItemsInCart = 11;
