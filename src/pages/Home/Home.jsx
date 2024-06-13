import ProductCard from "../../components/ProductCard/ProductCard";
import Abc from "./Abc";
import SliderComponent from "../Slider/SliderComponent";


const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
  ];





  return (
    <>
      <div className="home">
      <SliderComponent/>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Abc/>
    </div>
    
   
    </>

  );
};

export default Home;






