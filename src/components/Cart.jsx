import { useContext, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { CartContext } from '../contexts/CartContext';
import { CartItem } from './CartItem';

const initialValues = {
  name: '',
  phone: '',
  email: '',
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const [mensaje, setMensaje] = useState('No hay items en el carrito');

  const { addItem, clear, items, removeItem } = useContext(CartContext);
  const total = items.reduce(
    (acc, elem) => acc + elem.quantity * elem.price,
    0
  );
  const handleChange = (ev) => {
    setValues((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items: items,
      total: total,
      fecha: new Date(),
      estado: 'generada', // Agrega el estado "generada"
    };
    const db = getFirestore();
    const orderColection = collection(db, 'orders');
    addDoc(orderColection, order)
      .then(({ id }) => {
        if (id) {
          setMensaje(`El Id de su Orden es: ${id}`);
        }
      })
      .finally(() => {
        clear();
        setValues(initialValues);
      });
  };

  if (items.length === 0)
    return (
      <Container className="my-5">
        <Alert key="warning" variant="warning">
          {mensaje}
        </Alert>
        <Button variant="primary" as={NavLink} to="/" className="btn-primary">
          Productos
        </Button>
      </Container>
    );

  return (
    <div>
      <Container className="my-5">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Quitar</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <MdDelete />
                </td>
              </tr>

              // <CartItem key={item.id} {...item} />
            ))}
          </tbody>
        </Table>
      </Container>
      <Container className="my-5 ">
        <h3 style={{ textAlign: 'right' }}>Total: ${total}</h3>
      </Container>
      <Container className="my-5">
        <Form>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del Comprador"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Ingrese el nombre del comprador.
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="formTelefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Teléfono del Comprador"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Ingrese el teléfono del comprador.
              </Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Por favor verifique que sea un email correcto
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId="formEmailCtrl">
              <Form.Label>Repita Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Repita email"
                name="emailCtrl"
                value={values.emailCtrl}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                {/* Puedes agregar texto de ayuda aquí si es necesario */}
              </Form.Text>
            </Form.Group>
          </Row>
        </Form>
      </Container>

      <Container className="my-5 d-flex justify-content-between">
        <Button
          variant="primary"
          onClick={() => clear()}
          className="btn-primary"
        >
          Limpiar carrito
        </Button>{' '}
        <Button
          variant="primary"
          type="button"
          className="btn-danger"
          onClick={handleSubmit}
        >
          Crear Orden
        </Button>
      </Container>
    </div>
  );
};
