import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onLogin, 500));
formEl.addEventListener('submit', onSbmitForm);

const KEY_FEEDBACK_FORM = 'feedback-form-state';
const userData = {};

addContentInFields();

function onLogin(evt) {
  userData[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY_FEEDBACK_FORM, JSON.stringify(userData));
}

function onSbmitForm(evt) {
  evt.preventDefault();
  const localData = JSON.parse(localStorage.getItem(KEY_FEEDBACK_FORM));

  if (localData === null) {
    return;
  }

  console.log(JSON.parse(localStorage.getItem(KEY_FEEDBACK_FORM)));

  formEl.reset();

  localStorage.removeItem(KEY_FEEDBACK_FORM);
}

function addContentInFields() {
  const localData = JSON.parse(localStorage.getItem(KEY_FEEDBACK_FORM));

  if (localData === null) {
    return;
  }

  formEl.email.value = localData.email;
  formEl.message.value = localData.message;
}
