const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  if(checkInputs()) {
    alert('La inscripción ha sido correcta');
  }
});

function checkInputs() {
  let valid = true;
  const usuarioValue = usuario.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  
  if(usuarioValue === '') {
    setErrorFor(usuario, 'Rellene este campo');
    valid = false;
  } else {
    setSuccessFor(usuario);
  }
  
  if(emailValue === '') {
    setErrorFor(email, 'Rellene este campo');
    valid = false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email invalido');
    valid = false;
  } else {
    setSuccessFor(email);
  }
  
  if(passwordValue === '') {
    setErrorFor(password, 'Rellene este campo');
    valid = false;
  } else if (passwordValue.length < 8 ) {
    setErrorFor(password, 'Debe tener al menos 8 caracteres');
    valid = false;
  } else {
    setSuccessFor(password);
  }
  
  if(password2Value === '') {
    setErrorFor(password2, 'Rellene este campo');
    valid = false;
  } else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Las contraseñas no coinciden');
    valid = false;
  } else{
    setSuccessFor(password2);
  }

  return valid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}