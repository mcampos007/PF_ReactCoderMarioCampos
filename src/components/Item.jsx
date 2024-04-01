import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Item({product}) {
    return (
        <Col sm={4}> {/* Cada producto ocupa 4 columnas en pantallas pequeñas */}
            <Card style={{ marginTop: '15px', marginBottom: '20px', height: '100%', width: '20rem', paddingTop:5 }}>
                <Card.Img variant="top" src={product.pictureUrl} />
                <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    Price: {product.price}
                </Card.Text>
                <Link to={`/item/${product.id}`} ><Button variant="primary">More Information</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
  }