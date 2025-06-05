import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [])
  
  return <div className="p-4">
    <h1 className='text-2xl font-bold mb-4'>🛒Grocery Product</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  </div>;
}
