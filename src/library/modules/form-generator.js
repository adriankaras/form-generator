import { isEmpty } from '../helpers/object-methods';
import { formInputLabelValue, supportedTypes } from '../utils/consts';

class FormGeneratorClass {
  constructor(domElementId, form) {
    this.domElementId = domElementId;
    this.form = form;
    this.init();
  }

  prepareFormElements() {
    return this.form
      .map((el) => {
        const findType = supportedTypes[el.type];
        
        if (findType) {
          return findType.availableAttributes.reduce((obj, key) => {
            if (el[key]) {
              obj[key] = el[key]; 
            }
            if (el.type === 'reset' || el.type === 'submit') {
              obj.value = el.label;
            }
            return obj;
          }, {});
        }
        return {};
      })
      .filter((el) => !isEmpty(el));
  }

  renderForm() {
    const formElements = this.prepareFormElements();
    const formElementsToRender = formElements.map((el) => {
      const findType = supportedTypes[el.type];
      const element = document.createElement(findType.htmlElementType);

      for (const [key, value] of Object.entries(el)) {
        element.setAttribute(key, value);
      }

      if (!formInputLabelValue.includes(el.type) && el.type) {
        const label = document.createElement('label');
        const labelText = document.createTextNode(el.label);

        label.append(labelText);
        label.append(element);

        return label;
      }

      return element;
    });

    formElementsToRender.forEach((el) => {
      // div as a wrapper is only for better UI look, styles modification should be considered as additional layout like UI schema etc.
      const divWrapper = document.createElement('div');

      divWrapper.style.marginBottom = '10px';
      divWrapper.appendChild(el);
      
      document.querySelector(`#${this.domElementId}`).appendChild(divWrapper);
    });
  }

  init() {
    this.renderForm();
  }
}

export { FormGeneratorClass };
