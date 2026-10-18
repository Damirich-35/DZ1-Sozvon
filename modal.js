export class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    if (!this.modalElement) {
      console.error(`Модальное окно с id="${modalId}" не найдено`);
      return;
    }

    const closeBtn = this.modalElement.querySelector('.modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    const overlay = this.modalElement.querySelector('.modal__overlay');
    if (overlay) {
      overlay.addEventListener('click', () => this.close());
    }
  }

  // 1. Открыть модалку
  open() {
    this.modalElement.classList.add('modal-showed');
    document.body.classList.add('modal-open');
  }

  // 2. Закрыть модалку
  close() {
    this.modalElement.classList.remove('modal-showed');
    document.body.classList.remove('modal-open');
  }

  // 3. Проверить, открыта ли сейчас
  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }
}