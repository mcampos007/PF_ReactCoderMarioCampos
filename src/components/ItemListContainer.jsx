import { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

import { ItemList } from './ItemList';
import please_wait from '../assets/please-wait.gif';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let refCollection;

    if (!categoryId) {
      refCollection = collection(db, 'products');
    } else {
      refCollection = query(
        collection(db, 'products'),
        where('category', '==', categoryId)
      );
    }

    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) setProducts([]);
        else {
          setProducts(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      <Container className="mt-4">
        {isLoading ? ( // Mostrar el gif de carga si los datos están cargando
          <div className="loading-container">
            <img src={please_wait} alt="Loading..." />
          </div>
        ) : (
          <ItemList products={products} />
        )}
      </Container>
    </>
  );
};
