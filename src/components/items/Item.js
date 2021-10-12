import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./itemList.css";


const Item = ({ product }) => {
  return (
    <div className="card contenedorCard">
      <div className="card-body">
        <img src={product.imagen} className="card-img-top" alt="" />
        <h5 className="card-title pt-4"> {product.nombre} </h5>
        <p className="card-text"> $ {product.precio} </p>
        <span className="btn btn-warning">{product.categoria}</span>
        <Link to={`/item/${product.id}`} className="btn btn-success">
          detalle
        </Link>
        <ItemCount />
      </div>
    </div>
  );
}

export default Item;