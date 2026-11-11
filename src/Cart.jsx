import "./App.css";
import { useNavigate} from "react-router-dom";



export default function Cart({ cartItems, setCartItems }) {
  
  const navigate = useNavigate();

const toPayment = () => {
  navigate("/Cusadd", {
    state: {
      totalPrice: totalPrice,
      cartItems: cartItems,
    },
  });
};
    
  
  // INCREASE QUANTITY
  const increaseQty = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === cartId
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQty = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === cartId
          ? {
            ...item,
            quantity: Math.max(1, item.quantity - 1),
          }
          : item
      )
    );
  };

  // REMOVE PRODUCT
  const removeFromCart = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== cartId)
    );
  };

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );



  // BUY SINGLE PRODUCT
  // const buyProduct = (item) => {
  //   alert(
  //     `Order placed successfully!
  //     \n\nProduct: ${item.name}
  //     \nQuantity: ${item.quantity}
  //     \nTotal: ₹${Number(item.price) * item.quantity}`
  //   );
  // };

  // BUY ALL PRODUCTS
  // const buyAllProducts = () => {
  //   if (cartItems.length === 0) return;


  //   alert(
  //     `Order placed successfully!\n\nTotal items: ${cartItems.reduce(
  //       (total, item) => total + item.quantity,
  //       0
  //     )}\nTotal amount: ₹${totalPrice}`
  //   );


  // };

  return (
    <div className="cart-page">
      <div className="cartnav d-flex justify-content-around"> <h1>My Cart 🛒</h1>
        <h2 className="total">Total: ₹{totalPrice}</h2>


        {cartItems.length>0&&    
        <button
              className="btn btn-success"
              onClick={toPayment}>
              Buy All — ₹{totalPrice}
            </button>}       
      </div>

      {cartItems.length === 0 ? (
        <p className="emptycart">Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item d-flex" key={item.cartId}>
              <img 
                src={item.photo}
                alt={item.name}
                width="120"
              />

              <h3 className="itemname">{item.name}</h3>

              <p>Price: ₹{item.price}</p>

              <div className="cart-quantity">
                <button
                  className="btn btn-primary"
                  onClick={() => decreaseQty(item.cartId)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  className="btn btn-primary"
                  onClick={() => increaseQty(item.cartId)}
                >
                  +
                </button>
              </div>

              <p>
                Subtotal: ₹
                {Number(item.price) * item.quantity}
              </p>

              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.cartId)}
              >
                Remove
              </button>

              <button
                className="btn btn-success"
                onClick={() => buyProduct(item)}
              >
                Buy Now
              </button>
            </div>
          ))}

          <div className="cart-buy-all">
            {   cartItems.length===0&&<button
              className="btn btn-success"
              onClick={toPayment}
            >
              Buy All — ₹{totalPrice}
            </button>}
          </div>
        </>
      )}
    </div>


  );
}
