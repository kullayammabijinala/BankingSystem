document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  try {
    await request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    alert('Registration successful! Please login.');
    window.location.href = 'login.html';
  } catch (err) {}
});