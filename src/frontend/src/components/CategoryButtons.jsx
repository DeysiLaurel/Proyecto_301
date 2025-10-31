export default function CategoryButtons() {
  const categories = [
    { name: "Comida Criolla", color: "#D97706" },
    { name: "Comida Marina", color: "#F59E0B" },
    { name: "Postres", color: "#D97706" },
    { name: "Postres", color: "#D97706" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto px-4">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
          style={{ backgroundColor: cat.color }}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
