const form = document.getElementById('form');
const username = document.getElementById('username');
const correo = document.getElementById('usuario');
const password = document.getElementById('password');

// let existe;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let users = Array({
    usuario: username.value,
    correo: correo.value,
    password: password.value,
  });

  localStorage.setItem('user', JSON.stringify(users));
  location.href = 'home.html';
});

// const exiteUser = (userIn, correoIn, passwordIn) => {
//   existe = false;
//   for (user of users) {
//     if (userIn === user && correoIn === user && passwordIn === user) {
//       existe = true;
//     }
//   }
// };
