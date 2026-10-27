/* main.js */

// 1. Импорты
import { productsList } from './products.js';
import { renderProducts } from './render.js';
import { initToggleButton } from './toggleButton.js';
import { Modal } from './Modal.js';
import { Form } from './Form.js';

// 2. Инициализация интерфейса
initToggleButton();
renderProducts(productsList);

// 3. Модальное окно (по заданию №4)
const registerModal = new Modal('registerModal');

// Кнопка открытия модалки
const openModalBtn = document.getElementById('openModalBtn');
if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    registerModal.open();
  });
}

// 4. Форма подписки в футере (по заданию №5)
const subscribeForm = new Form('subscribeForm');

if (subscribeForm.formElement) {
  subscribeForm.formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!subscribeForm.isValid()) {
      subscribeForm.formElement.reportValidity();
      return;
    }

    const data = subscribeForm.getData();
    console.log({ email: data.email }); // Логируем только email
    subscribeForm.reset();
  });
}

// 5. Форма регистрации (по заданию №5)
const registerForm = new Form('registerForm');
const passwordInput = document.getElementById('password');
const passwordRepeatInput = document.getElementById('passwordRepeat');
const formError = document.getElementById('formError');

let user = null; // Внешняя переменная

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

    // Успешная регистрация
    user = registerForm.getData(); // Данные + createOn
    console.log(user);

    registerModal.close();
    registerForm.reset();
  });
}