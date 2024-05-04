import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';
import { ItemCount } from './ItemQuantitySelector';

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const add = (quantity) => {
    addItem(product, quantity);
    setQuantityAdded(quantity);
  };
  // console.log(1, product);

  return (
    <Container className="mt-4">
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={product.pictureUrl}
            alt="Imágen del Producto"
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Categoria:{product.category}</Card.Text>
            <Card.Text>Precio: {product.price}</Card.Text>
            <Card.Text>Stock:{product.stock}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            {quantityAdded > 0 ? (
              <Container>
                <Button
                  variant="primary"
                  as={NavLink}
                  to="/cart"
                  className="btn-primary"
                >
                  Finalizar compra
                </Button>
              </Container>
            ) : (
              <ItemCount initial={1} stock={product.stock} onAdd={add} />
            )}
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
};
