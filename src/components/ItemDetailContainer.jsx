import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import please_wait from '../assets/please-wait.gif';
import item_notfound from '../assets/404_Product.png';

import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, 'products', itemId);

    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          setProduct(null);
        } else {
          setProduct({ id: snapshot.id, ...snapshot.data() });
          // console.log(1, product);
        }
      })
      .catch((e) => {
        console.log(1, e);
      }),
      [itemId];
  });

  if (!product) {
    return (
      <div className="loading-container">
        <img src={please_wait} alt="Loading..." />
      </div>
    );
  } else {
    if (!product.title) {
      return (
        <div className="loading-container">
          <img src={item_notfound} alt="Producto No encontrado..." />
        </div>
      );
    } else {
      return (
        <div>
          <ItemDetail product={product} />
        </div>
      );
    }
  }
};
