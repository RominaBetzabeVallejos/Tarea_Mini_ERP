const API_URL = 'https://minierp.rbnetto.dev/api';

export const authAPI = {
  async login(email, password) {
    const res = await fetch(`${API_URL}/token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: email,
        email: email,
        password: password
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error('Error detallado del login:', res.status, errData);
      throw new Error('Credenciales o endpoint incorrectos');
    }
    
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
