
import React, { useState, useEffect } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <main className="container mt-4">
      <Header />
      <div className="row justify-content-center">
        {pizzas.map((pizza) => (
          <div className="col-md-4 d-flex" key={pizza.id}>
            <CardPizza
              name={pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
