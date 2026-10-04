const subscribeForm = document.getElementById('subscribeForm');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('subscriberEmail');

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  const data = { email: emailInput.value };
  console.log(data);

  subscribeForm.reset();
});

const openModalBtn  = document.getElementById('openModalBtn');
const registerModal = document.getElementById('registerModal');
const registerForm  = document.getElementById('registerForm');
const formError     = document.getElementById('formError');
const passwordInput = document.getElementById('password');
const passwordRepeatInput = document.getElementById('passwordRepeat');

let user = null;

function openModal() {
  registerModal.classList.add('modal-showed');
  document.body.classList.add('modal-open');
}

function closeModal() {
  registerModal.classList.remove('modal-showed');
  document.body.classList.remove('modal-open');
  formError.classList.remove('visible');
  registerForm.reset();
}

openModalBtn.addEventListener('click', openModal);

registerModal.querySelectorAll('[data-close-modal]').forEach((el) => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && registerModal.classList.contains('modal-showed')) {
    closeModal();
  }
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  formError.classList.remove('visible');

  const isValid = registerForm.checkValidity();
  const passwordsMatch = passwordInput.value === passwordRepeatInput.value;

  if (!isValid || !passwordsMatch) {
    formError.classList.add('visible');

    if (!passwordsMatch) {
      passwordRepeatInput.setCustomValidity('Пароли не совпадают');
      passwordRepeatInput.reportValidity();
      passwordRepeatInput.setCustomValidity('');
    } else {
      registerForm.reportValidity();
    }

    console.warn('Регистрация отклонена');
    return;
  }

  const formData = new FormData(registerForm);
  const userData = Object.fromEntries(formData.entries());
  userData.createOn = new Date();
  user = userData;

  console.log(user);

  closeModal();
});