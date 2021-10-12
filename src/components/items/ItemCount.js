import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import "./itemList.css";

const ItemCount = () => {
    const [counter, setCounter] = useState(1);
    const stock = 10;

    const sumar = () => {
        if (counter !== stock) {
            setCounter(counter + 1)
        }
    }

    const restar = () => {
        if (counter !== 1) {
            setCounter(counter - 1)
        }
    }

    return (
<<<<<<< HEAD:src/components/items/ItemCount.js
        <div className="container itemCount">
            <h3 className="mr-3">{counter}

            </h3>
=======
        <div className="container">
            <h3>Jean {counter}</h3>
>>>>>>> 0d04f3e3f53012cf33581c707f8007e86f413046:src/components/ItemCount.js
            <Button className="btn btn-danger" onClick={() => restar()}>-</Button>
            <Button className="btn btn-primary" onClick={() => sumar()}>+</Button>
        </div>
    );
};

export default ItemCount;