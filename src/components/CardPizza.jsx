import React from "react";
import { formatPrice } from "../utils/format";

const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card m-2 flex-fill" style={{ minWidth: "18rem", maxWidth: "22rem" }}>
    <img src={img} className="card-img-top" alt={name} style={{height: '200px', objectFit: 'cover'}} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{name}</h5>
      <p className="mb-1"><strong>Ingredientes:</strong></p>
      <ul className="list-unstyled mb-2">
        {ingredients.map((ing, i) => (
          <li key={i} className="text-warning">🍕 {ing}</li>
        ))}
      </ul>
      <h6 className="mt-auto">Precio: <span className="fw-bold">${formatPrice(price)}</span></h6>
      <div className="d-flex gap-2 mt-2">
        <button className="btn btn-outline-secondary btn-sm flex-fill">Ver Más 👀</button>
        <button className="btn btn-dark btn-sm flex-fill">Añadir 🛒</button>
      </div>
    </div>
  </div>
);

export default CardPizza;
