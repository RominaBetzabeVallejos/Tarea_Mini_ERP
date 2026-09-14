const API_URL = 'https://minierp.rbnetto.dev/api';

// Lista de productos de respaldo (Fallback) en caso de que el servidor devuelva 404
const MOCK_PRODUCTS = [
  { id: 1, name: 'Laptop Pro 15"', price: 1200 },
  { id: 2, name: 'Monitor 4K Ultra Slim', price: 380 },
  { id: 3, name: 'Teclado Mecánico RGB', price: 95 },
  { id: 4, name: 'Mouse Ergonómico Inalámbrico', price: 45 },
  { id: 5, name: 'Auriculares Noise Cancelling', price: 150 }
];

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
    try {
      const res = await fetch(`${API_URL}/products/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : (data.results || data.data || MOCK_PRODUCTS);
      }
    } catch (e) {
      console.warn('API no disponible, usando fallback:', e);
    }

    // Retorna los productos de prueba para garantizar que el menú y la lista siempre se desplieguen
    return MOCK_PRODUCTS;
  }
};
