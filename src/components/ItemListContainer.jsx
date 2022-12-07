import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Watch } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
export default function ItemListContainer() {
  const { idcategory } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const dataBase = getFirestore();
    let productos;
    if (idcategory) {
      productos = query(collection(dataBase, 'productos'), where('dimension', '==', idcategory));
    } else {
      productos = collection(dataBase, 'productos');
    }
    getDocs(productos).then((res) => {
      const arrayProductos = res.docs.map((element) => {
        return {
          id: element.id,
          nombre: element.data().name,
          dimension: element.data().dimension,
          precio: element.data().price,
          imagen: element.data().img,
          stock: element.data().stock,
        };
      });
      setProductos(arrayProductos);
    });
  }, [idcategory]);
  return (
    <>
      {!productos.length && (
        <div className="watchContainer">
          <Watch height="250" width="250" radius="48" color="red" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
        </div>
      )}
      <div style={{ margin: "20px" }}>
        <ItemList productos={productos} />
      </div>
    </>
  );
}
