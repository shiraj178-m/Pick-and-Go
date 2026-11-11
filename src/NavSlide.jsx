import { useState } from "react";

export default function NavSlide({ setCategory }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategory = (category) => {
    setActiveCategory(category);
    setCategory(category);
  };

  return (<div className="nav-main">
     <div className="main-nav">
    <button
      className={`nav-btn ${activeCategory === "All" ? "active" : ""}`}
      onClick={() => handleCategory("All")}
    >
      All </button>


    <button
      className={`nav-btn ${activeCategory === "Electronics" ? "active" : ""}`}
      onClick={() => handleCategory("Electronics")}
    >
      Electronics
    </button>

    <button
      className={`nav-btn ${activeCategory === "Clothing" ? "active" : ""}`}
      onClick={() => handleCategory("Clothing")}
    >
      Clothing
    </button>

    <button
      className={`nav-btn ${activeCategory === "Mobiles" ? "active" : ""}`}
      onClick={() => handleCategory("Mobiles")}
    >
      Mobiles
    </button>

    <button
      className={`nav-btn ${activeCategory === "Sarees" ? "active" : ""}`}
      onClick={() => handleCategory("Sarees")}
    >
      Sarees
    </button>

    <button
      className={`nav-btn ${activeCategory === "Shoes" ? "active" : ""}`}
      onClick={() => handleCategory("Shoes")}
    >
      Shoes
    </button>

    <button
      className={`nav-btn ${activeCategory === "Accessories" ? "active" : ""}`}
      onClick={() => handleCategory("Accessories")}
    >
      Accessories
    </button>
  </div>
  </div>


  );
}
