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

    if (!res.ok) throw new Error('Credenciales incorrectas');
    return res.json();
  }
};

export const productsAPI = {
  async getProducts(token) {
    // Apuntamos al endpoint registrado en la app de Django (/products/products/)
    const res = await fetch(`${API_URL}/products/products/`, {
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
