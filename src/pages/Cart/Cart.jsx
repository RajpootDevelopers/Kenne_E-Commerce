import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$10', quantity: 1 },
    { id: 2, name: 'Product 2', price: '$20', quantity: 2 },
    // Add more cart items
  ];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price.slice(1) * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <div className="total-price">
            <h2>Total Price: ${getTotalPrice()}</h2>
          </div>
        </div>
      ) : (
        <p>Your cart is empty. <Link to="/">Start shopping</Link>.</p>
      )}
    </div>
  );
};

export default Cart;
