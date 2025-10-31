import { ShoppingCart, Bell, Heart, User } from "lucide-react";
import logo from "../assets/Logo.svg";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#F59E0B] shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-2xl font-bold text-white">Sazon Peruana</h1>
      </div>

      {/* Menú de navegación */}
      <ul className="flex gap-8 text-white font-semibold">
        <li className="hover:text-gray-100 cursor-pointer">Inicio</li>
        <li className="hover:text-gray-100 cursor-pointer">Mi Menu</li>
        <li className="hover:text-gray-100 cursor-pointer">Ordenes</li>
        <li className="hover:text-gray-100 cursor-pointer">Contactanos</li>
      </ul>

      {/* Iconos */}
      <div className="flex items-center gap-5">
        <Heart className="text-white cursor-pointer hover:scale-110 transition" />
        <Bell className="text-white cursor-pointer hover:scale-110 transition" />
        <ShoppingCart className="text-white cursor-pointer hover:scale-110 transition" />

        {/* Botón de login */}
        <button className="flex items-center gap-2 bg-white text-[#D97706] font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          <User className="w-5 h-5" />
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
}
