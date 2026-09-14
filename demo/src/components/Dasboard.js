import { productsAPI } from '../services/api.js';

export function renderDashboard(container, token, onLogout) {

  const MOCK_PROD = [
    { name: 'Probe Product X2', category: 'Electronics', stock: 6, price: '0.00' },
    { name: 'supra mk4', category: 'Sin categoría', stock: 1, price: '0.00' },
    { name: 'RTX 5090TI SUPER', category: 'Electronics', stock: 123, price: '0.00' },
    { name: 'auricular gamer 2', category: 'Sin categoría', stock: 4, price: '0.00' },
    { name: 'Iphone 564', category: 'Sin categoría', stock: 40, price: '0.00' }
  ];

  container.innerHTML = `
    <div class="dashboard-wrapper">
      <!-- Navbar Superior -->
      <header class="navbar">
        <h1 class="logo">Mini ERP</h1>
        <div class="user-menu">
          <span class="user-name">Hola, System</span>
          <button id="logout-btn" class="btn-logout">Cerrar Sesión</button>
        </div>
      </header>

      <main class="dashboard-content">
        <!-- Tarjetas de Métricas -->
        <div class="metrics-grid">
          <div class="card-metric">
            <div class="icon-box icon-blue">📦</div>
            <div>
              <span class="metric-title">Total Productos</span>
              <h3 id="metric-total" class="metric-val">-</h3>
            </div>
          </div>
          <div class="card-metric">
            <div class="icon-box icon-green">📈</div>
            <div>
              <span class="metric-title">Órdenes del Mes</span>
              <h3 class="metric-val">-</h3>
            </div>
          </div>
          <div class="card-metric">
            <div class="icon-box icon-yellow">⚠️</div>
            <div>
              <span class="metric-title">Bajo Stock</span>
              <h3 class="metric-val">-</h3>
            </div>
          </div>
          <div class="card-metric">
            <div class="icon-box icon-purple">💲</div>
            <div>
              <span class="metric-title">Ventas del Mes</span>
              <h3 class="metric-val">-</h3>
            </div>
          </div>
        </div>

        <!-- Tabla de Productos -->
        <div class="table-card">
          <h2>Productos Recientes</h2>
          <table class="products-table">
            <thead>
              <tr>
                <th>PRODUCTO</th>
                <th>CATEGORÍA</th>
                <th>STOCK</th>
                <th>PRECIO</th>
              </tr>
            </thead>
            <tbody id="products-tbody">
              <tr><td colspan="4" style="text-align:center;">Cargando productos...</td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  `;

  
  document.getElementById('logout-btn').addEventListener('click', onLogout);
  productsAPI.getProducts(token).then(products => {
    const list = (Array.isArray(products) && products.length > 0) ? products : MOCK_PROD;
    
    document.getElementById('metric-total').textContent = list.length;
    const tbody = document.getElementById('products-tbody');
    
    tbody.innerHTML = list.map(p => `
      <tr>
        <td><strong>${p.name || p.title || 'Producto'}</strong></td>
        <td class="text-muted">${p.category || 'Sin categoría'}</td>
        <td><span class="badge-stock ${p.stock > 100 ? 'badge-red' : 'badge-green'}">${p.stock ?? 0}</span></td>
        <td>$${p.price ?? '0.00'}</td>
      </tr>
    `).join('');
  });
}