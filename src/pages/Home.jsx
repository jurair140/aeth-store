import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../allApi';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';


function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
     <div className="container">
       
       <SearchBar setSearchTerm={setSearchTerm} />
       <ProductList products={filteredProducts} />
     </div>
    </>
   
  );
}

export default Home;
