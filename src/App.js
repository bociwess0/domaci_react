import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import data from './data';
import { Route , BrowserRouter as Router, Routes} from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  const {products} = data;
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/products' element={ <ProductList products = {products}/>}></Route>
          <Route path='/cart' element={ <Cart/>}></Route>
          <Route path='/' element={ <ProductList products = {products}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
