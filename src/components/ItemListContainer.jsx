import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

import please_wait from '../assets/please-wait.gif';
import data from '../data/products.json';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    // Simulando una promesa con un setTimeout de 2 segundos
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 2000);
      });
    };

    setIsLoading(true); // Iniciar la carga de datos

    fetchData()
      .then((response) => {
        // Actualizar el estado con los datos de productos después de que se resuelva la promesa
        if (!id) {
          setProducts(response);
        } else {
          const filtered = data.filter((p) => p.category === id);
          setProducts(filtered);
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      })
      .finally(() => {
        setIsLoading(false); // Finalizar la carga de datos
      });
  }, [id]);

  // useEffect(() => {
  //   setProducts(data); // Actualizar el estado con los datos de productos solo una vez al montar el componente
  // }, []);

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

// <ItemList products={products}/>
