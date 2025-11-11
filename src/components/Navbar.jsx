import { ShoppingCart, ChefHat } from "lucide-react";

export default function Navbar({ cartCount = 0, onCartClick }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-400 to-orange-300 text-white flex items-center justify-center shadow-sm">
            <ChefHat className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Rasa Lokal</p>
            <p className="text-xs text-gray-500">UMKM Food Market</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#products" className="hover:text-gray-900 transition-colors">Produk</a>
          <a href="#vendors" className="hover:text-gray-900 transition-colors">UMKM</a>
          <a href="#why" className="hover:text-gray-900 transition-colors">Kenapa Kami</a>
        </nav>

        <button onClick={onCartClick} className="relative inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-600 transition-colors">
          <ShoppingCart className="h-4 w-4" />
          Keranjang
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 text-[10px] bg-white text-rose-600 font-semibold rounded-full px-1.5 py-0.5 border border-rose-200">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
