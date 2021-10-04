import React from "react";
import { Link } from "react-router-dom";


function Item({ product }) {
  return (
    <div className="card" style={{ width: "15rem", margin: "10px" }}>
      <img src={product.imagen} className="card-img-top" alt={product.nombre} />

      <div className="card-body">
        <h5 className="card-title"> {product.nombre} </h5>
        <p className="card-text"> {product.precio} </p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">
          detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
