import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ItemDetailContainer } from './components/ItemDetailContainer.jsx';
import { ItemListContainer } from './components/ItemListContainer.jsx';
import { NavBar } from './components/NavBar.jsx';
import { Provider } from './contexts/CartContext.jsx';
import { Cart } from './components/Cart.jsx';

function App() {
  return (
    <>
      <Router>
        <Provider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND </h1>} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
