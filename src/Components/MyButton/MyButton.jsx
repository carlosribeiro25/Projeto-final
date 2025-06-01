
export default function MyButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 w-40 h-10 bg-pink-600 text-white rounded-sm shadow-md hover:bg-pink-700 active:scale-95 transition-all duration-200"
    >Ver Ofertas
      {children}
    </button>

  );
}
