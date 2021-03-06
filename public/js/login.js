const loginFormHandler = async (event) => {
    event.preventDefault();
    //grab data inserted and attempt a login
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Incorrect username or password');
      }
    }
};
  //attempt to make a new user with the data given
const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
};
  
document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);
  
document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);
  