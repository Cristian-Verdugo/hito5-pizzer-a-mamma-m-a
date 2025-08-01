import React, { useState, useEffect } from "react";
import { formatPrice } from "../utils/format";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const data = await response.json();
        setPizza(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pizza:', error);
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          Error al cargar la pizza
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <img src={pizza.img} className="card-img-top" alt={pizza.name} />
            <div className="card-body">
              <h2 className="card-title">{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h2>
              <h4 className="card-subtitle mb-2 text-muted">${formatPrice(pizza.price)}</h4>
              <p className="card-text">Ingredientes:</p>
              <ul>
                {pizza.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
