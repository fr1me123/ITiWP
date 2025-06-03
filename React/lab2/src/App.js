import React, { useState } from 'react';
import Clock from './Clock';
import JobMenu from './JobMenu';
import JobSelector from './JobSelector';

function App() {
  const [profession, setProfession] = useState('developer');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Лабораторная работа №2</h1>

      <h2>Задание 1: Часы</h2>
      <Clock format="24" timezone="+3:00" />
      <Clock format="12" timezone="-4:00" />

      <h2>Задание 2: Меню профессий</h2>
      <JobSelector profession={profession} onChange={setProfession} />
      <JobMenu profession={profession} />
    </div>
  );
}

export default App;
