import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SiteContext from "./Sitecontext";
import Products from "./Prodcuts";
import Login from "./Login";
import Signin from "./Signin";
import About from "./About";
import Cart from "./Cart";
import CusAdd from "./CusAdd";
import "./App.css";
import Navbar from "./navbar";

export default function App() {
  const [siteName] = useState("Pick and Go");
  const [cartItems, setCartItems] = useState([]);

  return (
    <SiteContext.Provider value={{ siteName }}> 
    
    <BrowserRouter>
    <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route path="/About" element={<About />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/Signin" element={<Signin />} />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route path="/CusAdd" 
        element={<CusAdd cartItems={cartItems} 
        />} 
        />
      </Routes>
    </BrowserRouter>
    </SiteContext.Provider>


  );
}
