const password = document.querySelector('#password');
const confirmPsw = document.querySelector('#conf-psw');

const validatePassword = () => {
  if (password.value != confirmPsw.value) {
    confirmPsw.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPsw.setCustomValidity('');
  }
};

password.addEventListener(onchange, validatePassword);
confirmPsw.addEventListener(onkeyup, validatePassword);
