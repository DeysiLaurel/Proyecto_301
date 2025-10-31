import React from "react";

export default function FeaturedDishes() {
  const dishes = [
    { name: "Juane", img: "/src/assets/ceviche.svg", price: "S/ 18.00" },
    { name: "Tacacho con Cecina", img: "/src/assets/tacacho.svg", price: "S/ 22.00" },
    { name: "Inchicapi", img: "/src/assets/lomo.svg", price: "S/ 15.00" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-[#D97706] mb-8">
        Platos Destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={dish.img}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {dish.name}
              </h3>
              <p className="text-[#D97706] font-bold mt-2">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

