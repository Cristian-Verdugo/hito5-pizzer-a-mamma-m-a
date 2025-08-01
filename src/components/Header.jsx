import React from "react";
import headerImg from "../img/Header.jpg";

const Header = () => (
  <header
    className="bg-dark text-white text-center py-4 mb-4"
    style={{
      backgroundImage: `url(${headerImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div style={{ background: "rgba(0,0,0,0.5)", padding: "2rem" }}>
      <h1 className="display-4">¡Pizzería Mamma Mia!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </div>
  </header>
);

export default Header;
