import { FormGeneratorClass } from './modules/form-generator';
import { FormValidatorClass } from './modules/form-validator';

export const init = (domElementId, form, validation = false) => {
  const generator = new FormGeneratorClass(domElementId, form);
  let validator;

  if (validation) {
    validator = new FormValidatorClass(domElementId, form);
  }

  const methods = {
    destroy: () => {
      if (validation) {
        validator.removeSubmit();
      }
    },
    getInvalidFormElements: () => validation ? validator.getInvalidFormElements() : [],
  };

  const entries = validator ? { generator, validator } : { generator };

  return {
    entries,
    methods,
  };
};
