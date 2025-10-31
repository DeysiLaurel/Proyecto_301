import Navbar from "../components/Navbar";
import CategoryButtons from "../components/CategoryButtons";
import FeaturedDishes from "../components/FeaturedDishes";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="text-center mt-10">
          <h1 className="text-4xl font-bold text-[#D97706]">Bienvenido a SelvaFood 🌴</h1>
          <p className="text-gray-700 mt-2">Descubre lo mejor de la gastronomía amazónica</p>
        </section>
        <CategoryButtons />
        <FeaturedDishes />
      </main>
      <Footer />
    </div>
  );
}
