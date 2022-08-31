import './assets/css/styles.css';
import Header from './assets/components/Header';
import Suggested from './assets/components/Suggested';
import Discounts from './assets/components/Discounts';
import Footer from './assets/components/Footer';
import ItemListContainer from './assets/components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer tipo="Computador"/>
      <Suggested />
      <Discounts />
      <Footer />
    </div>
  );
}

export default App;
