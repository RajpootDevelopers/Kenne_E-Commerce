import "./utils.css";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollHeader from "./components/Header/scrolledHeader"
import {  useState, useEffect } from "react";
import "./loader.css"


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 500)
  }, [])


  return (
    <BrowserRouter>
     <div className="App">
      {
        loading ? <Loader/> : 
           (
            <div>
           <Header />
           <ScrollHeader/>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/cart" element={<Cart />} />
           </Routes>
           <Footer />
           </div>
          )
      }
       
      </div>
    </BrowserRouter>
  );
}

export default App;



export const Loader = () => {
  return (
    <div className="loader">
      
    </div>
  )
}

