export const inputTypes = {
  email: 'email',
  password: 'password',
  reset: 'reset',
  submit: 'submit',
};

export const formInputLabelValue = [inputTypes.reset, inputTypes.submit];
export const availableFormInputAttributes = ['id', 'type', 'name', 'label', 'autofocus'];
export const availableInputButtonAttributes = ['value', 'type'];

export const htmlElementTypes = {
  input: 'input',
  // textarea, select and more
};
export const availableFormElements = Object.keys(htmlElementTypes);

// could be extended for another types
export const supportedTypes = {
  email: {
    htmlElementType: htmlElementTypes.input,
    availableAttributes: availableFormInputAttributes,
  },
  password: {
    htmlElementType: htmlElementTypes.input,
    availableAttributes: availableFormInputAttributes,
  },
  reset: {
    htmlElementType: htmlElementTypes.input,
    availableAttributes: availableInputButtonAttributes,
  },
  submit: {
    htmlElementType: htmlElementTypes.input,
    availableAttributes: availableInputButtonAttributes,
  },
};
