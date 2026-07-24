document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    if (response?.token) {
      localStorage.setItem('auth_token', response.token);
      localStorage.setItem('user_name', response.name);
      window.location.href = 'dashboard.html';
    }
  } catch (err) {
    // Error handling handled by api.js
  }
});