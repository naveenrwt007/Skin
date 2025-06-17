const users = JSON.parse(localStorage.getItem('clearskin_users') || '[]');
let currentUser = null;

function saveUsers() {
  localStorage.setItem('clearskin_users', JSON.stringify(users));
}

// Toggle forms
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.addEventListener('click', function(e) {
  e.preventDefault();
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

showLogin.addEventListener('click', function(e) {
  e.preventDefault();
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Signup
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (users.find(u => u.username === username || u.email === email || u.phone === phone)) {
    alert('User already exists.');
    return;
  }

  users.push({ username, email, phone, password });
  saveUsers();
  alert('Signup successful! Please login.');
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Login
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    alert('Invalid credentials.');
    return;
  }

  localStorage.setItem('currentUser', JSON.stringify(user));
  window.location.href = 'basic-info.html';
});
