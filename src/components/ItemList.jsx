import Row from 'react-bootstrap/Row';

import { Item } from './Description';

export const ItemList = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </Row>
  );
};

// <div key={product.id}>

//</div>
