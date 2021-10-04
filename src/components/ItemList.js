import React from 'react';
import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        <div className="d-flex flex-wrap">
            {productos.length !== 0 ? (
                productos.map((producto) => (
                    <Item product={producto} key={producto.id}></Item>
                ))
            ) : (
                <h3>Cargando...</h3>
            )}
        </div>
    );
};

export default ItemList;