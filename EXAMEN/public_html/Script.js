document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
    } else if (message.length > 300) {
        alert('El mensaje no debe exceder los 300 caracteres.');
    } else {
        alert('Mensaje enviado correctamente.');
        document.getElementById('contactForm').reset();
    }
});
