document.querySelector('.contact-form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      event.preventDefault();
    } else {
      alert('Form submitted successfully!');
    }
  })