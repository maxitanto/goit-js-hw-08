import throttle from 'lodash.throttle';

const inputEl = document.querySelector('.feedback-form');
inputEl.addEventListener('input', throttle(onLogin, 500));
inputEl.addEventListener('submit', onSbmitForm);

const KEY_FEEDBACK_FORM = 'feedback-form-state';
const localUserData = JSON.parse(localStorage.getItem(KEY_FEEDBACK_FORM));
const userData = {};

addContentInFields();

function onLogin(evt) {
  evt.preventDefault();

  const { email, message } = evt.currentTarget.elements;
  userData.email = email.value;
  userData.message = message.value;

  localStorage.setItem(KEY_FEEDBACK_FORM, JSON.stringify(userData));
}

function addContentInFields() {
  if (localUserData === null) {
    return;
  }
  inputEl.email.value = localUserData.email;
  inputEl.message.value = localUserData.message;
}

function onSbmitForm(evt) {
  evt.preventDefault();
  console.log(localUserData);
  inputEl.reset();
  localStorage.removeItem(KEY_FEEDBACK_FORM);
}
