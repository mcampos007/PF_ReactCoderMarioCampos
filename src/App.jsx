import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx';
import { ItemListContainer } from './components/ItemListContainer.jsx';

import { NavBar } from './components/NavBar.jsx';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
