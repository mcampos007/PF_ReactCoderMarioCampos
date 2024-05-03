import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

import carticon from '../assets/cart-add.svg';

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (stock > quantity) {
      setQuantity((prev) => prev + 1);
      setShowA(false);
      setShowB(false);
    } else {
      toggleShowA();
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setShowB(false);
      setShowA(false);
    } else {
      toggleShowB();
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
  };

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const [showB, setShowB] = useState(false);
  const toggleShowB = () => setShowB(!showB);

  return (
    <>
      <div className="text-center">
        <Button variant="primary" size="sm" onClick={decrement}>
          -
        </Button>{' '}
        <Button variant="light" size="sm" value={quantity}>
          {quantity}
        </Button>{' '}
        <Button variant="primary" size="sm" onClick={increment}>
          +
        </Button>{' '}
        <Button variant="primary" size="sm">
          <img
            src={carticon}
            alt="imagen de carrito"
            height="15"
            onClick={handleAdd}
            disabled={!stock}
          />
        </Button>{' '}
      </div>
      <div>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">ATENCION!!</strong>
            {/* <small>Atención !</small> */}
          </Toast.Header>
          <Toast.Body>
            No es posible comprar más de {stock} unidades!
          </Toast.Body>
        </Toast>
      </div>
      <div>
        <Toast show={showB} onClose={toggleShowB}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">ATENCION!!</strong>
            {/* <small>Atención !</small> */}
          </Toast.Header>
          <Toast.Body>No es posible comprar menos de 1 producto!</Toast.Body>
        </Toast>
      </div>
    </>
  );
};

//  <div className="d-flex " style={{ padding: '10px' }}>
//           {/* <div
//         style={{ padding: '0 10px', color: 'red', fontWeight: 900 }}
//         onClick={decrement}
//       >
//         -
//       </div> */}
//           <div>
//             <Button variant="info" onClick={decrement}>
//               -
//             </Button>{' '}
//           </div>
//           <Button variant="light" value={quantity}>
//             {quantity}
//           </Button>{' '}
//           <div>
//             <Button variant="info" onClick={increment}>
//               +
//             </Button>{' '}
//           </div>
//           <div className="mb-2">
//             <Button variant="primary" size="sm">
//               Agregar al Carrito
//             </Button>{' '}
//           </div>
//         </div>
