import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apples", price: 50, quantity: 2 },
    { id: 2, name: "Bananas", price: 30, quantity: 5 },
    { id: 3, name: "Milk", price: 60, quantity: 1 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", price: "", quantity: "" });

  // Add new item
  const addItem = () => {
    if (!newItem.name || !newItem.price || !newItem.quantity) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { id, ...newItem, price: +newItem.price, quantity: +newItem.quantity }]);
    setNewItem({ name: "", price: "", quantity: "" });
  };

  // Remove item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }; 

  // Update quantity
  const updateQuantity = (id, qty) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: Number(qty) } : item
      )
    );
  };

  return (
    <div className="container">
      <h1>🛒 Grocery List</h1>
      <div className="add-section">
        <input
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, price, quantity }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>₹{price}</td>
              <td>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => updateQuantity(id, e.target.value)}
                />
              </td>
              <td>₹{price * quantity}</td>
              <td>
                <button onClick={() => removeItem(id)}>❌ Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;