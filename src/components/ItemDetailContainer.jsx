import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const { iditem } = useParams();
  const [llantas, setLlantas] = useState({});

  useEffect(() => {
    const dataBase = getFirestore();
    let documento = doc(dataBase, 'productos', iditem);
    getDoc(documento).then((item) => {
      setLlantas({ id: item.id, ...item.data() });
    });
  }, [iditem]);

  return (
    <>
      <ItemDetail item={llantas} />
    </>
  );
}
