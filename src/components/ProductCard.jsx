import { Star } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-2xl bg-white border border-rose-100 hover:border-rose-200 transition-all shadow-sm hover:shadow-md overflow-hidden">
      <div className="aspect-[4/3] w-full overflow-hidden bg-rose-50">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-rose-300">No Image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.vendor}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-amber-400" />
            <span className="text-sm font-medium">{product.rating?.toFixed ? product.rating.toFixed(1) : product.rating}</span>
          </div>
        </div>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-rose-600 font-semibold">Rp {Number(product.price).toLocaleString()}</span>
          <button onClick={() => onAdd(product)} className="rounded-full px-4 py-2 bg-rose-500 text-white text-sm font-medium hover:bg-rose-600 transition-colors">
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
}
