const API_URL = 'https://minierp.rbnetto.dev/api';

export const authAPI = {
  async login(email, password) {
    const res = await fetch(`${API_URL}/users/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error('Credenciales incorrectas');
    return res.json();
  }
};

export const productsAPI = {
  async getProducts(token) {
    const res = await fetch(`${API_URL}/products/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!res.ok) throw new Error('Error al obtener productos');
    return res.json();
  }
};