import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>404 - Página no encontrada</h1>
      <p>¡Ups! La página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
