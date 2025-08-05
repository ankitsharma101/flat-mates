import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#001BB7] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          MyStartup
        </Link>
        <div className="flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-[#FF8040] transition">
            Home
          </Link>
          <Link to="/profile" className="hover:text-[#FF8040] transition">
            Profile
          </Link>
          <Link
            to="/login"
            className="bg-[#0046FF] px-3 py-1 rounded hover:bg-[#0033cc] transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#FF8040] px-3 py-1 rounded hover:bg-[#e66f20] transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
