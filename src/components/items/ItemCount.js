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
        <div className="container itemCount">
            <h3 className="mr-3">{counter}

            </h3>
            <Button className="btn btn-danger" onClick={() => restar()}>-</Button>
            <Button className="btn btn-primary" onClick={() => sumar()}>+</Button>
        </div>
    );
};

export default ItemCount;