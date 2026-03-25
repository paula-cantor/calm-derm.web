// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias! Tu mensaje ha sido enviado.');
    this.reset();
});