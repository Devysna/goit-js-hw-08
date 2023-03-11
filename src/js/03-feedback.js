import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(onFormDataInput, 500));
form.addEventListener('submit', onFormSubmit);


function onFormDataInput() {
    const formDataInput = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataInput));
};      

function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === '' || message.value === '') {
    alert('Fill in all the field!');
  };

  const formDataSubmit = { email: email.value, message: message.value };
  console.log(formDataSubmit);

  e.currentTarget.reset();  
  localStorage.removeItem(STORAGE_KEY);
};


const load = key => {
  try {
    const newData = localStorage.getItem(key);
    return newData === null ? undefined : JSON.parse(newData);
  } catch (error) {
    console.error('Error: ', error.message);
  }
};

const savedData = load(STORAGE_KEY);
if (savedData) {
  email.value = savedData.email;
  message.value = savedData.message;
};