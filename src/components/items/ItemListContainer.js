import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import misProductos from "../../data/products.json";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { id: idCategory } = useParams();

  const getItems = () => {
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

  useEffect(() => {
    setProductos([]);
    getItems()
      .then((res) => setProductos(res))
      .catch((acaHayError) => console.log(acaHayError));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCategory]);

  return <ItemList productos={productos} />;
}

export default ItemListContainer;
