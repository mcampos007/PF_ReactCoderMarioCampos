import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import please_wait from '../assets/please-wait.gif';

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
        }
      })
      .catch((e) => {
        console.log(1, e);
      }),
      [itemId];
  });

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <div className="loading-container">
          <img src={please_wait} alt="Loading..." />
        </div>
      )}
    </div>
  );
};
