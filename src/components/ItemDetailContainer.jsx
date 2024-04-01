import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import please_wait from '../assets/please-wait.gif';

import data from '../data/products.json';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    // Simulando una promesa con un setTimeout de 2 segundos
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 2000);
      });
    };

    setIsLoading(true);

    fetchData()
      .then((response) => {
        const filtered = response.find((p) => p.id === Number(id));
        // Actualizar el estado con los datos de productos después de que se resuelva la promesa
        setProduct(filtered);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      })
      .finally(() => {
        setIsLoading(false); // Finalizar la carga de datos
      });
  }, []);

  // useEffect(() => {
  //   setProducts(data); // Actualizar el estado con los datos de productos solo una vez al montar el componente
  // }, []);

//   if (!product) return (<div><img src={please_wait} alt="Loading..." /></div>)
  return (
    <>
      <Container className="mt-4">
        {isLoading ? (
          <div className="loading-container">
            <img src={please_wait} alt="Loading..." />
          </div>
        ) : (
          <div>
            <h1>{product.title}</h1>
            <img src={product.pictureUrl} alt="Imágen del Producto" />
          </div>
        )}
      </Container>
    </>
  );
};
