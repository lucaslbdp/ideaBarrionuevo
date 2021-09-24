import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./common.css";


const CartWidget = () => {
    return <div className="blanco">
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    </div>
}
export default CartWidget;