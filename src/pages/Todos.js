import React from 'react';

function Todos() {
  const title = localStorage.getItem('title');
  console.log(title);

  return (
    <div>
      <h1>Todos</h1>

      <button onClick={() => localStorage.removeItem('title')}>remove</button>
      <button onClick={() => localStorage.clear()}>remove all</button>
    </div>
  );
}

export default Todos;
