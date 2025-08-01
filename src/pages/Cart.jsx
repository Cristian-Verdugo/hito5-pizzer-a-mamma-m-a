import React, { useState } from "react";
import { pizzaCart } from "../utils/pizzas";
import "../App.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleAdd = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="cart-container" style={{ maxWidth: 600, margin: '40px auto', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px #0001', padding: 32 }}>
      <h3 style={{ fontWeight: 500, marginBottom: 24 }}>Detalles del pedido:</h3>
      <ul className="cart-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {cart.map((pizza) => (
          <li key={pizza.id} className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: 18, borderBottom: '1px solid #eee', paddingBottom: 12 }}>
            <img src={pizza.img} alt={pizza.name} className="cart-img" style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8, marginRight: 16 }} />
            <span className="cart-name" style={{ flex: 1, fontWeight: 500 }}>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</span>
            <span className="cart-price" style={{ width: 90, textAlign: 'right', fontWeight: 500, marginRight: 16 }}>${pizza.price.toLocaleString("es-CL")}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <button className="cart-btn" style={{ border: '1.5px solid #e74c3c', color: '#e74c3c', background: '#fff', borderRadius: 6, width: 36, height: 36, fontSize: 20, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => handleRemove(pizza.id)}>-</button>
              <span className="cart-count" style={{ minWidth: 32, textAlign: 'center', fontWeight: 500, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pizza.count}</span>
              <button className="cart-btn" style={{ border: '1.5px solid #3498db', color: '#3498db', background: '#fff', borderRadius: 6, width: 36, height: 36, fontSize: 20, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => handleAdd(pizza.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h2 style={{ marginTop: 32, fontWeight: 700, fontSize: 28 }}>Total: ${total.toLocaleString("es-CL")}</h2>
      <button className="pay-btn" style={{ marginTop: 16, background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 32px', fontSize: 18, fontWeight: 500, cursor: 'pointer' }}>Pagar</button>
    </div>
  );
};

export default Cart;
