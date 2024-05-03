import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

<Container className="my-5">
  <Form>
    <Form.Group className="mb-4" controlId="formNombre">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" placeholder="Nombre del Comprador" />
      <Form.Text className="text-muted">
        Ingrese el nombre del comprador.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-4" controlId="formTelefono">
      <Form.Label>Telefono</Form.Label>
      <Form.Control type="text" placeholder="Teléfono del Comprador" />
      <Form.Text className="text-muted">
        Ingrese el teléfono del comprador.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-4" controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Ingrese email" />
      <Form.Text className="text-muted">
        Por favor verifique que sea un email correcto
      </Form.Text>
    </Form.Group>
    <Form.Group className="d-flex justify-content-between">
      <Button variant="primary" onClick={() => clear()}>
        Limpiar carrito
      </Button>{' '}
      <Button variant="primary" type="button">
        Crear Orden
      </Button>
    </Form.Group>
  </Form>
</Container>;
