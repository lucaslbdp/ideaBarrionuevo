import { createContext, useState } from 'react';

export const CartCtxt = createContext();


const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartCtxt.Provider value={{ cart, setCart }}>
            {children}
        </CartCtxt.Provider>
    )
}

export default CartContext;