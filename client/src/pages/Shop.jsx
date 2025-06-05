import ProductCard from "../components/ProductCard";

export default function Shop() {
 
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dummyProducts.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
   </div>
  );
}