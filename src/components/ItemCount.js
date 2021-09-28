import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

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
        <div className="container">
            <h3>Jean {counter}</h3>
            <Button className="btn btn-danger" onClick={() => restar()}>-</Button>
            <Button className="btn btn-primary" onClick={() => sumar()}>+</Button>
        </div>
    );
};

export default ItemCount;