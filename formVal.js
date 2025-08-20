// Hello, this is a JavaScript file for form validation.
// I have implemented a contact form validation script that checks user input for first name, last name, email, phone number, and message.
// It ensures that the first and last names only contain letters, spaces, and hyphens, the email is valid, the phone number starts with '04' and is 10 digits long, and the message is not empty.
// This script also includes real-time input validation and formatting for the first name, last name, and phone number fields.

// Show/hide region field based on citizenship selection
document.getElementById('citizenOrInternational').addEventListener('change', function() {
    var regionField = document.getElementById('regionField');
    if (this.value === 'International Student') {
        regionField.style.display = 'block';
    } else {
        regionField.style.display = 'none';
    }
});

// Real-time capitalization for first and last name
function capitalizeFirstLetter(input) {
    let value = input.value;
    input.value = value.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

document.getElementById('firstName').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-Z\s-]/g, '');
    capitalizeFirstLetter(this);
});
document.getElementById('lastName').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-Z\s-]/g, '');
    capitalizeFirstLetter(this);
});

// Restrict phone input: only numbers, must start with 04, max 10 digits
document.getElementById('phone').addEventListener('input', function() {
    // Remove all non-digit characters
    let digits = this.value.replace(/\D/g, '');

    // Always start with '04'
    if (!digits.startsWith('04')) {
        digits = '04' + digits.replace(/^0*/, '').replace(/^4*/, '');
    }

    // Limit to 10 digits
    digits = digits.slice(0, 10);

    this.value = digits;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Error elements
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    // Reset errors
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    messageError.textContent = '';

    let hasError = false;

    // Validate first name
    if (!firstName) {
        firstNameError.textContent = 'First name is required.';
        hasError = true;
    } else if (!/^[a-zA-Z\s-]+$/.test(firstName)) {
        firstNameError.textContent = 'First name can only contain letters, spaces, and hyphens.';
        hasError = true;
    }
    // Validate last name
    if (!lastName) {
        lastNameError.textContent = 'Last name is required.';
        hasError = true;
    } else if (!/^[a-zA-Z\s-]+$/.test(lastName)) {
        lastNameError.textContent = 'Last name can only contain letters, spaces, and hyphens.';
        hasError = true;
    }
    // Validate email
    if (!email) {
        emailError.textContent = 'Email is required.';
        hasError = true;
    } else if (
        email.length > 254 ||
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
        emailError.textContent = 'Enter a valid email address.';
        hasError = true;
    }
    // Validate phone
    if (!phone) {
        phoneError.textContent = 'Phone is required.';
        hasError = true;
    } else if (!/^04\d{8}$/.test(phone)) {
        phoneError.textContent = 'Phone must be 10 digits and start with 04.';
        hasError = true;
    }
    // Validate message
    if (!message) {
        messageError.textContent = 'Message is required.';
        hasError = true;
    }

    if (!hasError) {
        alert('Form submitted successfully!');
        // this.submit(); // Uncomment to actually submit
    }
});
