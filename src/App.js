import { useState } from 'react';
import './css/styles.css';
import Header from './components/Header';
import Suggested from './components/Suggested';
import Discounts from './components/Discounts';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  const [selectedItem, setSelectedItem] = useState();

  return (
    <div className="App">
      <Header />
      <ItemListContainer setSelectedItem={setSelectedItem}/>
      <ItemDetailContainer selectedItem={selectedItem}/>
      <Suggested />
      <Discounts />
      <Footer />
    </div>
  );
}

export default App;
