import React from 'react';
import './App.css';
import ChessBoard from './ChessBoard';

const stocks = [
  { stock_name: "EFX", company_name: "Equifax Inc", price: 163.55, currency: "USD", change: "+9.03" },
  { stock_name: "IRM", company_name: "Iron Mountain Inc", price: 33.21, currency: "USD", change: "+1.42" },
  { stock_name: "NTAP", company_name: "NetApp Inc", price: 54.81, currency: "USD", change: "-6.01" },
  { stock_name: "CTL", company_name: "Centurylink Inc", price: 13.79, currency: "USD", change: "-1.37" }
];

function App() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Hello, world!</h1>
      <p>Сегодняшняя дата: {today}</p>

      <h2>📈 Таблица акций</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Название</th>
            <th>Компания</th>
            <th>Цена</th>
            <th>Изменение</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => {
            const isPositive = stock.change.startsWith('+');
            return (
              <tr key={index}>
                <td>{stock.stock_name}</td>
                <td>{stock.company_name}</td>
                <td>{stock.price} {stock.currency}</td>
                <td style={{ color: isPositive ? 'green' : 'red' }}>{stock.change}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>♟️ Шахматная доска</h2>
      <ChessBoard />
    </div>
  );
}

export default App;
