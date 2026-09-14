const API_URL = 'https://minierp.rbnetto.dev/api';

export const authAPI = {
  async login(email, password) {
    const res = await fetch(`${API_URL}/token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, email, password })
    });

    if (!res.ok) throw new Error('Credenciales incorrectas');
    return res.json();
  }
};

export const productsAPI = {
  async getProducts(token) {
    // Lista de endpoints candidatos del backend
    const endpoints = [
      '/products/products/',
      '/inventory/products/',
      '/inventory/',
      '/products-list/',
      '/products/'
    ];

    for (const endpoint of endpoints) {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.status === 200) {
        return await res.json();
      }
    }

    throw new Error('Endpoint de productos no encontrado (404)');
  }
};