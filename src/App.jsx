import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" component={<Home/>} />
          <Route path="/cart" component={<Cart/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
