export default function ProductCard({product}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-green-600 text-xl font-bold mt-2">
          ₹{product.price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  )
}