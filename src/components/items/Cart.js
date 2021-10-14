import { useContext } from 'react';
import { CartCtxt } from '../../context/Context';

const Cart = () => {

    const { cart } = useContext(CartCtxt);

    return (
        <div>
            <h3>Cart</h3>
            {
                cart.length &&
                cart.map(item => {
                    return (
                        <ul>
                            <li>{item.nombre} {item.categoria} $ {item.precio}</li>
                        </ul>
                    )
                })
            }
        </div>
    );
};

export default Cart;