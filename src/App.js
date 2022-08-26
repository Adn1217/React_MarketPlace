import './assets/css/styles.css';
import Header from './assets/components/Header';
import Suggested from './assets/components/Suggesed';
import Discounts from './assets/components/Discounts';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Suggested />
      <Discounts />
      <Footer />
    </div>
  );
}

export default App;
