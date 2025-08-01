import React, { useState, useEffect } from "react";
import { formatearNumero } from "../utils/format";

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
            <img 
              src={pizza.img} 
              className="card-img-top" 
              alt={pizza.name}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h1 className="card-title text-center mb-3">
                Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
              </h1>
              
              <p className="card-text text-muted mb-3">
                {pizza.desc}
              </p>
              
              <div className="mb-3">
                <h5>🍕 Ingredientes:</h5>
                <ul className="list-unstyled">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index} className="d-inline-block me-2">
                      <span className="badge bg-light text-dark">
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-primary mb-0">
                  Precio: ${formatearNumero(pizza.price)}
                </h3>
                <button className="btn btn-primary btn-lg">
                  🛒 Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
