// Ejemplo de JavaScript para agregar lógica a tu página

// Obtener elementos del DOM
const form = document.getElementById('form');
const emailInput = document.getElementById('email');

// Agregar un evento de escucha al enviar el formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Validar el correo electrónico ingresado
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Enviar el formulario
  form.submit();
});

// Función para validar el formato de correo electrónico
function validateEmail(email) {
  // Implementa tu lógica de validación de correo electrónico aquí
  // Puedes usar expresiones regulares u otras técnicas de validación
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Agregar lógica de desplazamiento suave a los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
