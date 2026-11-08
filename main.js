/* main.js */

// 1. Импортируем классы и данные
import { productsList } from './products.js';
import { Modal } from './Modal.js';
import { Form } from './Form.js';

// 2. Логика рендера карточек (бывший render.js)
function renderProducts(products) {
  const container = document.querySelector('.products-container');
  const template = document.getElementById('product-card-template');
  
  if (!container || !template) return;
  container.innerHTML = '';

  products.forEach(product => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.product-card').dataset.id = product.id;
    clone.querySelector('.product-card__image').src = `./img/${product.image}.jpg`;
    clone.querySelector('.product-card__category').textContent = product.category;
    clone.querySelector('.product-card__title').textContent = product.title;
    clone.querySelector('.product-card__description').textContent = product.description;
    clone.querySelector('.product-card__price-value').textContent = product.price;
    
    const ingredientsList = clone.querySelector('.product-card__ingredients-list');
    if (product.ingredients && ingredientsList) {
      product.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });
    }
    container.appendChild(clone);
  });
}

// 3. Логика кнопки (бывший toggleButton.js)
function initToggleButton() {
  const toggleButton = document.querySelector('.toggle-btn');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('toggle-btn--active');
    });
  }
}

// 4. Инициализация интерфейса
initToggleButton();
renderProducts(productsList);

// 5. Модальное окно
const registerModal = new Modal('registerModal');
const openModalBtn = document.getElementById('openModalBtn');
if (openModalBtn) {
  openModalBtn.addEventListener('click', () => registerModal.open());
}

// 6. Форма подписки
const subscribeForm = new Form('subscribeForm');
if (subscribeForm.formElement) {
  subscribeForm.formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!subscribeForm.isValid()) {
      subscribeForm.formElement.reportValidity();
      return;
    }
    const data = subscribeForm.getData();
    console.log({ email: data.email });
    subscribeForm.reset();
  });
}

// 7. Форма регистрации
const registerForm = new Form('registerForm');
const passwordInput = document.getElementById('password');
const passwordRepeatInput = document.getElementById('passwordRepeat');
const formError = document.getElementById('formError');

let user = null;

if (registerForm.formElement) {
  registerForm.formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formError) formError.classList.remove('visible');

    const passwordsMatch = passwordInput.value === passwordRepeatInput.value;

    if (!registerForm.isValid() || !passwordsMatch) {
      if (formError) formError.classList.add('visible');
      if (!passwordsMatch) {
        passwordRepeatInput.setCustomValidity('Пароли не совпадают');
        passwordRepeatInput.reportValidity();
        passwordRepeatInput.setCustomValidity('');
      } else {
        registerForm.formElement.reportValidity();
      }
      console.warn('Регистрация отклонена');
      return;
    }

    user = registerForm.getData();
    console.log(user);
    registerModal.close();
    registerForm.reset();
  });
}