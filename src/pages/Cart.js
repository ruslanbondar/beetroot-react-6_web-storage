import React, { useEffect, useState } from 'react';

const cartItemsKey = 'cartItems';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem(cartItemsKey));

    if (savedItems) {
      setCartItems(savedItems);
    }
  }, []);

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Cart;
