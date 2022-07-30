import React, { useState, useEffect } from 'react';

import './Todos.css';

const data = [
  { title: 'eat', id: 1 },
  { title: 'drink', id: 2 },
];

function Todos() {
  // const title = localStorage.getItem('title');

  const [todos, setTodos] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    if (savedTodos) {
      setTodos(savedTodos);
    } else setTodos(data);

    const savedItems = JSON.parse(localStorage.getItem('cartItems'));

    if (savedItems) {
      setCartItems(savedItems);
    }
  }, []);

  const addHandler = () => {
    const newTodos = [...todos, { title: value, id: Date.now() }];

    if (value) localStorage.setItem('todos', JSON.stringify(newTodos));
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    setTodos(savedTodos);

    setValue('');
  };

  const addToCartHandler = (id) => {
    todos.map((item) => {
      if (item.id === id) {
        const savedItems = [...cartItems, item];
        setCartItems(savedItems);
        localStorage.setItem('cartItems', JSON.stringify(savedItems));
      }

      return item;
    });
  };

  return (
    <div>
      <h1>Todos</h1>

      <div>
        <input
          type="text"
          placeholder="start typing here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={addHandler}>add</button>
      </div>

      <div>
        {todos.map((item) => (
          <div key={item.id} className="todo-wrapper">
            <span>{item.title}</span>
            <button onClick={() => addToCartHandler(item.id)}>+</button>
          </div>
        ))}
      </div>

      {/* <button onClick={() => localStorage.removeItem('title')}>remove</button>
      <button onClick={() => localStorage.clear()}>remove all</button> */}
    </div>
  );
}

export default Todos;
