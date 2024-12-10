document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way
    alert('Thank you for contacting us!'); // Show a thank you message
});
