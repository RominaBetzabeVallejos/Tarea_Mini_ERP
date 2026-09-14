import './style.css';
import { authAPI, productsAPI } from './services/api.js';
import { Login } from './components/Login.js';
import { Dashboard } from './components/Dashboard.js';


Login();
Dashboard();

const loginForm = document.getElementById('login-form');
const loginSection = document.getElementById('login-section');
const productsSection = document.getElementById('products-section');
const productsList = document.getElementById('products-list');
const errorMsg = document.getElementById('error-msg');
const logoutBtn = document.getElementById('logout-btn');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsg.textContent = 'Cargando...';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const data = await authAPI.login(email, password);
      const token = data.access || data.access_token;
      localStorage.setItem('token', token);
      
      await loadProducts(token);
    } catch (err) {
      errorMsg.textContent = 'Error de inicio de sesión. Revisa tus credenciales.';
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    loginSection.style.display = 'block';
    productsSection.style.display = 'none';
  });
}

async function loadProducts(token) {
  try {
    const response = await productsAPI.getProducts(token);
    const products = Array.isArray(response) ? response : (response.results || []);

    productsList.innerHTML = products.map(p => `<li><strong>${p.name || p.title || 'Producto'}</strong> - $${p.price || 0}</li>`).join('');
    
    loginSection.style.display = 'none';
    productsSection.style.display = 'block';
  } catch (err) {
    errorMsg.textContent = 'Error al cargar los productos.';
  }
}
