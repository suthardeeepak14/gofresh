import ProductCard from "../components/ProductCard";

export default function Shop() {
  const dummyProducts = [
    {
      name: "Fresh Apples",
      price: 120,
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Organic Bananas",
      price: 80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Green Vegetables",
      price: 99,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    },
  ];
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dummyProducts.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
   </div>
  );
}