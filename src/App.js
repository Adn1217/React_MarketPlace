import { useState, useContext } from 'react';
import './css/styles.css';
import Header from './components/Header';
import Suggested from './components/Suggested';
import Discounts from './components/Discounts';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CartProvider from './components/CartContext';

function App() {

  const [selectedItem, setSelectedItem] = useState();

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
          <Routes >
            <Route exact path='/' element={<ItemListContainer setSelectedItem={setSelectedItem} />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer setSelectedItem={setSelectedItem} />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer selectedItem={selectedItem} />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
          <Suggested />
          <Discounts />
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
