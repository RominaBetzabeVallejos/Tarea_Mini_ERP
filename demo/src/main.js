import './style.css';
import { authAPI, productsAPI } from './services/api.js';
import { renderDashboard } from './components/Dashboard.js';

const app = document.getElementById('app');

function showLogin() {
  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Mini ERP</h2>
        <form id="login-form" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Usuario / Email</label>
            <input type="text" id="email" required class="w-full mt-1 p-2 border rounded-md border-gray-300">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Contraseña</label>
            <input type="password" id="password" required class="w-full mt-1 p-2 border rounded-md border-gray-300">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">Iniciar Sesión</button>
          <p id="error-msg" class="text-red-500 text-sm mt-2 hidden text-center"></p>
        </form>
      </div>
    </div>
  `;

  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    try {
      const data = await authAPI.login(email, password);
      const token = data.access || data.token || 'demo-token';
      localStorage.setItem('token', token);
      loadDashboard(token);
    } catch (err) {
      errorMsg.textContent = 'Credenciales inválidas';
      errorMsg.classList.remove('hidden');
    }
  });
}

function loadDashboard(token) {
  renderDashboard(app, token, () => {
    localStorage.removeItem('token');
    showLogin();
  });
}

const token = localStorage.getItem('token');
if (token) {
  loadDashboard(token);
} else {
  showLogin();
}
