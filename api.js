const API_BASE_URL = 'http://localhost:8080/api/v1';

async function request(endpoint, options = {}) {
  const token = localStorage.getItem('auth_token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers
    });

    if (response.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = 'login.html';
      return;
    }

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Something went wrong');
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    alert(error.message);
    throw error;
  }
}