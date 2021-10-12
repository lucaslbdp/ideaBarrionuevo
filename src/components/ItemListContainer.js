import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import misProductos from "../data/products.json";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { id: idCategory } = useParams();

    useEffect(() => {

        const getProducts = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (idCategory) {
                        const filtroCategory = misProductos.filter(
                            (item) => item.categoria === idCategory
                        );
                        resolve(filtroCategory);
                    } else {
                        resolve(misProductos);
                    }

                    reject("error al traer productos");
                }, 3000);
            });
        };

        setProductos([]);
        getProducts()
            .then((res) => setProductos(res))
            .catch((error) => console.log(error));
    }, [idCategory]);

    return <ItemList productos={productos} />;
};

export default ItemListContainer;