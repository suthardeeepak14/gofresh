import { Link } from "react-router-dom";

export default function Navbar() { 
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center" >
      <Link to="/" className="text-2xl font-bold">
        GoFresh
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-green-300 transition duration-200">
          Home
        </Link>
        <Link to="/shop" className="hover:text-green-300 transition duration-200">
          Shop
        </Link>
        <Link to="/cart" className="hover:text-green-300 transition duration-200">
          Cart
        </Link>
        <Link to="/login" className="hover:text-green-300 transition duration-200">
          Login
        </Link>
        <Link to="/register" className="hover:text-green-300 transition duration-200">
          Register
        </Link>
      </div>
    </nav>
  )
}