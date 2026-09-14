export function renderDashboard(container, token, onLogout) {
  container.innerHTML = `
    <div class="min-h-screen bg-gray-100">
      <nav class="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md">
        <h1 class="text-xl font-bold tracking-wide">MINI ERP - DASHBOARD</h1>
        <button id="logout-btn" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
          Cerrar Sesión
        </button>
      </nav>
      
      <main class="p-6 max-w-7xl mx-auto space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-white p-5 rounded-xl shadow border border-gray-200">
            <p class="text-xs text-gray-500 font-bold uppercase">Total Productos</p>
            <h3 class="text-2xl font-bold text-gray-800 mt-1">128</h3>
          </div>
          <div class="bg-white p-5 rounded-xl shadow border border-gray-200">
            <p class="text-xs text-gray-500 font-bold uppercase">Órdenes</p>
            <h3 class="text-2xl font-bold text-gray-800 mt-1">45</h3>
          </div>
          <div class="bg-white p-5 rounded-xl shadow border border-gray-200">
            <p class="text-xs text-gray-500 font-bold uppercase">Bajo Stock</p>
            <h3 class="text-2xl font-bold text-red-600 mt-1">4</h3>
          </div>
          <div class="bg-white p-5 rounded-xl shadow border border-gray-200">
            <p class="text-xs text-gray-500 font-bold uppercase">Ventas Hoy</p>
            <h3 class="text-2xl font-bold text-green-600 mt-1">$3,420</h3>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow border border-gray-200 p-6">
          <h2 class="text-lg font-bold text-gray-800 mb-4">Productos Recientes</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b bg-gray-50 text-gray-600 text-xs uppercase">
                  <th class="p-3">Producto</th>
                  <th class="p-3">Categoría</th>
                  <th class="p-3">Stock</th>
                  <th class="p-3">Precio</th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y">
                <tr>
                  <td class="p-3 font-semibold text-gray-800">Laptop Pro 15</td>
                  <td class="p-3 text-gray-600">Electrónica</td>
                  <td class="p-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">15 unid.</span></td>
                  <td class="p-3 text-gray-800 font-medium">$1,200</td>
                </tr>
                <tr>
                  <td class="p-3 font-semibold text-gray-800">Monitor 4K 27"</td>
                  <td class="p-3 text-gray-600">Periféricos</td>
                  <td class="p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">2 unid.</span></td>
                  <td class="p-3 text-gray-800 font-medium">$350</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  `;

  document.getElementById('logout-btn').addEventListener('click', () => {
    if (onLogout) onLogout();
  });
}
