import { init } from '../library/index';
import formSchema from './jsons/form.json';
import formSchemaWithoutValidation from './jsons/formWithoutValidation.json';

const formA = init('form-register', formSchema, true);
const formB = init('form-login', formSchemaWithoutValidation);

document.querySelector('#form-register').addEventListener('submit', () => {
  const invalidFormElements = formA.methods.getInvalidFormElements();
  console.log('Error fields:', invalidFormElements);
});
