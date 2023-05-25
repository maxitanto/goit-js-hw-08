import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');

formEl.addEventListener('input', throttle(onLogin, 500));
formEl.addEventListener('submit', onSbmitForm);

const KEY_FEEDBACK_FORM = 'feedback-form-state';
let userData = JSON.parse(localStorage.getItem(KEY_FEEDBACK_FORM)) || {};

addContentInFields();

function onLogin(evt) {
  userData[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY_FEEDBACK_FORM, JSON.stringify(userData));
}

function onSbmitForm(evt) {
  evt.preventDefault();

  console.log(userData);

  localStorage.removeItem(KEY_FEEDBACK_FORM);

  formEl.reset();

  userData = {};
}

function addContentInFields() {
  textarea.value = userData.message || ' ';
  inputEmail.value = userData.email || ' ';
}
