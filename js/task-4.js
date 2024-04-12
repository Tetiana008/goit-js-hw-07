const loginValue = document.querySelector('.login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

let emailValue = '';
let passwordValue = '';

emailInput.addEventListener('input', function(event) {
  emailValue = event.target.value.trim();
});

passwordInput.addEventListener('input', function(event) {
  passwordValue = event.target.value.trim();
});

loginValue.addEventListener('submit', function(event) {
  event.preventDefault();
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: emailValue,
    password: passwordValue
  };
  
  console.log(formData);
  loginValue.reset();
});
