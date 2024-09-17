const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
  wrapper.classList.add('active');
}

loginLink.onclick = () => {
  wrapper.classList.remove('active');
}

document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous error messages
  clearErrors();

  // Form inputs
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validation flags
  let isValid = true;

  // Username validation (at least 3 characters)
  if (username.length < 3) {
    showError('username-error', 'Username must be at least 3 characters long.');
    isValid = false;
  }

  // Email validation (basic pattern check)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    showError('email-error', 'Please enter a valid email address.');
    isValid = false;
  }

  // Password validation (at least 6 characters)
  if (password.length < 6) {
    showError('password-error', 'Password must be at least 6 characters long.');
    isValid = false;
  }

  // If all validations pass, submit the form (this can be further customized for back-end processing)
  if (isValid) {
    alert('Form submitted successfully!');
    // Here you can implement further actions, like sending the data to a server
  }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous error messages
  clearErrors();

  // Form inputs
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  // Validation flags
  let isValid = true;

  // Username validation (at least 3 characters)
  if (username.length < 3) {
    showError('login-username-error', 'Username must be at least 3 characters long.');
    isValid = false;
  }

  // Password validation (at least 6 characters)
  if (password.length < 6) {
    showError('login-password-error', 'Password must be at least 6 characters long.');
    isValid = false;
  }

  // If all validations pass, submit the form (this can be further customized for back-end processing)
  if (isValid) {
    alert('Login successful!');
    // Here you can implement further actions, like sending the data to a server
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function clearErrors() {
  document.querySelectorAll('.error-message').forEach(function(element) {
    element.textContent = '';
    element.style.display = 'none';
  });
}

// Add event listeners to clear error messages on input
document.getElementById('username').addEventListener('input', function() {
  clearError('username-error');
});

document.getElementById('email').addEventListener('input', function() {
  clearError('email-error');
});

document.getElementById('password').addEventListener('input', function() {
  clearError('password-error');
});

document.getElementById('login-username').addEventListener('input', function() {
  clearError('login-username-error');
});

document.getElementById('login-password').addEventListener('input', function() {
  clearError('login-password-error');
});

function clearError(elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = '';
  errorElement.style.display = 'none';
}
