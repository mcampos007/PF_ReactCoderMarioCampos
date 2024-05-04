import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { CardFooter } from 'react-bootstrap';

export function Item({ product }) {
  return (
    <Col sm={4}>
      {' '}
      {/* Cada producto ocupa 4 columnas en pantallas pequeñas */}
      <Card
        style={{
          marginTop: '15px',
          marginBottom: '20px',
          height: '100%',
          width: '15rem',
          paddingTop: 5,
        }}
      >
        <Card.Img
          variant="top"
          src={product.pictureUrl}
          style={{
            maxHeight: '150px', // Ajusta la altura máxima según sea necesario
            objectFit: 'cover', // Para mantener la relación de aspecto y recortar la imagen si es necesario
          }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Categoria:{product.category}</Card.Text>
          <Card.Text>Price: {product.price}</Card.Text>
          <Card.Text>Stock: {product.stock}</Card.Text>
        </Card.Body>
        <CardFooter>
          <Link to={`/item/${product.id}`}>
            <Button variant="primary">Más Información</Button>
          </Link>
        </CardFooter>
      </Card>
    </Col>
  );
}
