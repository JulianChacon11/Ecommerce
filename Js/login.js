import { usuarios } from './usuarios.js'
const user = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('login');
const btnLogin = document.getElementById('btn-login');
const msgError = document.getElementById('msg-error');
const eyeIcon = document.getElementById('eyeIcon');


eyeIcon.addEventListener('mouseover', () => {
  password.type = 'text';

})

eyeIcon.addEventListener('mouseout', () => {
  password.type = 'password'
})
btnLogin.addEventListener('click', (evento) => {
  let exists = false;
  evento.preventDefault();
  usuarios.forEach(element => {
    if (element.username == user.value) {
      if (element.password == password.value) {
        window.location.href = "./Html/principal.html";
        msgError.style.display = 'none';
        exists = true;

      }
    }
  });
  if (exists == false) {
    console.log('Usuario y/o contraseña incorrecto.');
    msgError.style.display = 'block';
    setTimeout(() => {
      msgError.style.display = 'none'
    }, 2000)

  }
})