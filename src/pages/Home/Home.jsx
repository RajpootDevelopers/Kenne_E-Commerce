import ProductCard from "../../components/ProductCard/ProductCard"

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    // Add more products
  ];

  return (
    <div className="home">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
