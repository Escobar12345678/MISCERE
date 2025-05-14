// Mostrar el formulario de registro
function mostrarRegistro() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registroForm').classList.remove('hidden');
}

// Mostrar el formulario de login
function mostrarLogin() {
  document.getElementById('registroForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
}

// Función para registrar usuario
async function registerWithEmail() {
  // Obtener los valores del formulario de registro
  const email = document.getElementById('registerEmail').value;
  const phone = document.querySelector('#registroForm input[type="text"]:nth-child(1)').value + document.querySelector('#registroForm input[type="text"]:nth-child(2)').value;
  const password = document.getElementById('registerPassword').value;
  const passwordConfirm = document.getElementById('registerPasswordConfirm').value;

  // Validación simple
  if (password !== passwordConfirm) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Crear objeto con los datos del usuario
  const userData = {
    email: email,
    phone: phone,
    password: password
  };

  // Hacer una solicitud POST para registrar al usuario
  try {
    const response = await fetch('http://localhost:3000/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    if (response.ok) {
      alert('Usuario registrado con éxito!');
      mostrarLogin(); // Mostrar el formulario de login después de registrarse
    } else {
      alert('Error al registrar usuario: ' + data.message);
    }
  } catch (error) {
    alert('Hubo un error al registrar al usuario.');
    console.error(error);
  }
}

// Función para iniciar sesión (esto debe adaptarse a tu autenticación)
function loginWithEmail() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Aquí deberías agregar la lógica para autenticar al usuario, por ejemplo con Firebase u otro método.
  alert('Iniciando sesión con email: ' + email);
}
