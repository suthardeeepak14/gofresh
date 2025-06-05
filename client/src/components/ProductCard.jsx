export default function ProductCard({name, price,image}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-green-600 text-xl font-bold mt-2">
          ₹{price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  )
}