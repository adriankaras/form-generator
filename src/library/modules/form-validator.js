import { availableFormElements } from '../utils/consts';

class FormValidatorClass {
  constructor(domElementId, form) {
    this.domElementId = domElementId;
    this.form = form;
    this.invalidFormElements = [];
    this.init();
  }

  validateOnSubmit(e) {
    const getAllFormElements = (form) => Array.from(form.elements)
      .filter((tag) => availableFormElements.includes(tag.tagName.toLowerCase()));
    const formElements = getAllFormElements(document.querySelector(`#${this.domElementId}`));
    const invalidInputs = [];
        
    formElements.forEach((el) => {
      const findFormEl = this.form.find((element) => element.id === el.id || element.name === el.name);
      
      // add other rules here or this could be included in form elements type config
      if (findFormEl && findFormEl.required && !el.value) {
        invalidInputs.push({ ...findFormEl, reference: el });
        // added only for UI, this should be handled by UI schema or CSS class
        el.style.borderColor = '#ff4e4e';
      } else {
        // added only for UI, this should be handled by UI schema or CSS class
        el.style.borderColor = '#767676';
      }
    });
    
    this.invalidFormElements = invalidInputs;

    if (invalidInputs.length) {
      e.preventDefault();
      // show errors
    }
  }

  addSubmit() {
    document.querySelector(`#${this.domElementId}`).addEventListener('submit', this.validateOnSubmit.bind(this));
  }

  removeSubmit() {
    document.querySelector(`#${this.domElementId}`).removeEventListener('submit', this.validateOnSubmit);
  }

  getInvalidFormElements() {
    return this.invalidFormElements;
  }

  init() {
    this.addSubmit();
  }
}

export { FormValidatorClass };
