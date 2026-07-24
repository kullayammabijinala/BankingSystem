document.addEventListener('DOMContentLoaded', async () => {
  try {
    const user = await request('/customer/profile');
    document.getElementById('profileName').value = user.fullName;
    document.getElementById('profileEmail').value = user.email;
  } catch (err) {}
});