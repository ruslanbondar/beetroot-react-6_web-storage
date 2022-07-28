import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Todos from './pages/Todos';

function App() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
      {pathname !== '/' && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
