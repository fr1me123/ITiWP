import React, { useState } from 'react';

const initialProducts = [
  { name: 'Телефон', price: 700, quantity: 5 },
  { name: 'Ноутбук', price: 1200, quantity: 2 },
  { name: 'Клавиатура', price: 50, quantity: 0 },
  { name: 'Мышь', price: 25, quantity: 3 },
  { name: 'Монитор', price: 300, quantity: 1 },
];

function ProductCatalog() {
  const [products, setProducts] = useState(initialProducts);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const toggleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);
  const totalCost = products.reduce((sum, p) => sum + p.quantity * p.price, 0);

  return (
    <div>
      <h2>Задание 2: Каталог товаров</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => toggleSort('name')} style={{ cursor: 'pointer' }}>Название</th>
            <th onClick={() => toggleSort('price')} style={{ cursor: 'pointer' }}>Цена</th>
            <th onClick={() => toggleSort('quantity')} style={{ cursor: 'pointer' }}>Кол-во</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product, index) => {
            let bgColor = '';
            if (product.quantity === 0) bgColor = 'red';
            else if (product.quantity < 3) bgColor = 'yellow';

            return (
              <tr key={index} style={{ backgroundColor: bgColor }}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ marginTop: '10px' }}>
        <strong>Всего товаров:</strong> {totalQuantity}<br />
        <strong>Общая стоимость:</strong> ${totalCost}
      </div>
    </div>
  );
}

export default ProductCatalog;
