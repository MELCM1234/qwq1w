
const presetUser = "Juan Gomez";
const presetPassword = "12345";

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === presetUser && password === presetPassword) {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('message').innerText = 'Registro exitoso. Ahora puede iniciar sesión.';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos.';
        document.getElementById('message').style.color = 'red';
    }
}

function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (loginUsername === presetUser && loginPassword === presetPassword) {
        document.getElementById('message').innerText = 'Inicio de sesión exitoso.';
        document.getElementById('message').style.color = 'green';
        window.location.href = 'pagina_principal.html';  // Reemplaza 'pagina_principal.html' con la URL de la página principal del restaurante
    } else {
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos.';
        document.getElementById('message').style.color = 'red';
    }
}
