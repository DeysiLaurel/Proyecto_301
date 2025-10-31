import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#D97706] text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Suscripción */}
        <div>
          <h3 className="font-bold text-lg mb-3">Suscríbete</h3>
          <p className="text-sm mb-3">Recibe ofertas y novedades directamente a tu correo.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Tu correo"
              className="px-3 py-2 rounded-l-md text-black w-full"
            />
            <button className="bg-[#F59E0B] px-4 py-2 rounded-r-md font-semibold hover:bg-[#b45309] transition">
              Enviar
            </button>
          </div>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="font-bold text-lg mb-3">Enlaces útiles</h3>
          <ul className="space-y-2 text-sm">
            <li>Inicio</li>
            <li>Platos</li>
            <li>Bebidas</li>
            <li>Postres</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contáctanos</h3>
          <p className="flex items-center gap-2 text-sm">
            <Phone size={16} /> +51 987 654 321
          </p>
          <p className="flex items-center gap-2 text-sm mt-2">
            <Mail size={16} /> contacto@selvafood.pe
          </p>
        </div>

        {/* Redes */}
        <div>
          <h3 className="font-bold text-lg mb-3">Síguenos</h3>
          <div className="flex gap-4">
            <Facebook className="hover:text-gray-200 cursor-pointer" />
            <Instagram className="hover:text-gray-200 cursor-pointer" />
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-8 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} SelvaFood. Todos los derechos reservados.
      </p>
    </footer>
  );
}
