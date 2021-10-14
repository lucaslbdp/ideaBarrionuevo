import React, { useState, useContext } from "react";
import { CartCtxt } from "../../context/Context";
import { Link } from "react-router-dom";
import Button from '@restart/ui/esm/Button';
import ItemCount from "./ItemCount";
import "./itemList.css";


const Item = ({ product }) => {

  const [value] = useState("");
  const { cart, setCart } = useContext(CartCtxt);

  const handleClick = (product) => {
    setCart([
      ...cart,
      product
    ]);
  }


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
        <Button className="btn btn-success" value={value} onClick={() => handleClick(product)}>Comprar</Button>
      </div>
    </div>
  );
}

export default Item;