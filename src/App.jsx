import "./utils.css";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollHeader from "./components/Header/scrolledHeader"
function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Header />
        <ScrollHeader/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
