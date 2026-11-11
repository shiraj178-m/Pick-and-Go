import { useState, useEffect } from "react";
import NavSlide from "./NavSlide";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Products({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("All");
  const [count, setCount] = useState(1);
  const[loading,setloading]=useState(false);

  useEffect(() => {
    fetch("https://json-server-api-3-comq.onrender.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error:", err));
    
  }, []);

  const filteredProducts = category === "All" ? products : products
    .filter((eachProduct) => eachProduct.category === category
    );

  // ADD TO CART
  const addToCart = (product, quantity = 1) => {
    if (!product) return;
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + quantity,
            }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          cartId: crypto.randomUUID(),
          quantity: quantity,
        },
      ];
    });




  };

  // MODAL ADD TO CART
  const handleAddToCart = (product) => {
    addToCart(product, Math.max(1, count));
    setSelectedProduct(null);
    setCount(1);


  };

  // BUY NOW
  const navigate = useNavigate();

const handleBuyNow = (product) => {
  navigate("/CusAdd", {
    state: {
      selectedProduct: product,
      quantity: count,
    },
  }
);
};



  // QUANTITY
  const inc = () => {
    setCount((prev) => prev + 1);
  };

  const dec = () => {
    setCount((prev) => Math.max(1, prev - 1));
  };

  

  return (
    <>
  
      <NavSlide setCategory={setCategory} />


      <div className="product-container">
        {filteredProducts.map((eachProduct) => (
          <div
            className="products"
            key={eachProduct.id}
            onClick={() => {
              setSelectedProduct(eachProduct);
              setCount(1);
            }}
          >
            <img
              src={eachProduct.photo}
              alt={eachProduct.name}
            />

            <h4>{eachProduct.name}</h4>

            <p>₹{eachProduct.price}</p>

            <div className="div d-flex">
              <button
                className="btn btn-primary border-2 border-white"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(eachProduct, 1);
                }}
              >
                Add to Cart
              </button>

              <button
                className="btn btn-success border-1 border-white"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuyNow(eachProduct);
                }}

              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            <img
              src={selectedProduct.photo}
              alt={selectedProduct.name}
            />

            <h2>{selectedProduct.name}</h2>

            <h3>₹{selectedProduct.price}</h3>

            <div className="model-btncont">
              <button
                className="model-btn1 btn btn-primary"
                onClick={dec}
              >
                <strong>-</strong>
              </button>

              <p>{count}</p>

              <button
                className="model-btn btn btn-primary"
                onClick={inc}
              >
                <strong>+</strong>
              </button>
            </div>

            <div className="modal-buttons">
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Add to Cart
              </button>

              <button
                className="btn btn-success"
                onClick={() => handleBuyNow(selectedProduct)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        
      )}

      
    </>


  );
}
