export class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
    if (!this.formElement) {
      console.error(`Форма с id="${formId}" не найдена`);
    }
  }

  getData() {
    if (!this.formElement) return null;
    const formData = new FormData(this.formElement);
    const data = Object.fromEntries(formData.entries());
    
    data.createOn = new Date();
    
    return data;
  }

  isValid() {
    if (!this.formElement) return false;
    return this.formElement.checkValidity();
  }

  reset() {
    if (this.formElement) {
      this.formElement.reset();
    }
  }
}