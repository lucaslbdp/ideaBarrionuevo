import React from 'react';

const ItemListContainer = () => {

    const products = [{ id: 1, categoria: "bebés", nombre: "jean", precio: 400 },
    { id: 2, categoria: "bebés", nombre: "body", precio: 600 },
    { id: 3, categoria: "bebés", nombre: "remera", precio: 300 },
    { id: 4, categoria: "niños", nombre: "jean", precio: 400 },
    { id: 5, categoria: "niños", nombre: "camisa", precio: 500 },
    { id: 6, categoria: "niños", nombre: "remera", precio: 300 }
    ];

    const getProducts = () => {
        return new Promise((res, req) => {
            setTimeout(() => {
                res(products);
            }, 2000)
        })
    }

    async function allProducts() {
        const products = await getProducts();
        console.log(products);
    }
    allProducts();

    return (
        <div className="container">
            <h1>Catalogo</h1>
        </div>
    );
};

export default ItemListContainer;