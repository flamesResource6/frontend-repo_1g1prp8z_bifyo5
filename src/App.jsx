import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('All')
  const [cart, setCart] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${backend}/api/products`)
        const data = await res.json()
        setProducts(data.items || [])
      } catch {}
      try {
        const res = await fetch(`${backend}/api/categories`)
        const data = await res.json()
        setCategories(['All', ...(data.categories || [])])
      } catch {}
    }
    load()
  }, [backend])

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat = activeCat === 'All' || p.category === activeCat
      const q = query.trim().toLowerCase()
      const matchQ = !q || p.name?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q) || (p.tags||[]).join(' ').toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [products, activeCat, query])

  const onAdd = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i._id === product._id)
      if (exists) return prev.map(i => i._id === product._id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const total = cart.reduce((sum, i) => sum + Number(i.price) * i.qty, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 text-gray-900">
      <Navbar cartCount={cart.length} onCartClick={() => document.getElementById('cart').showModal()} />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="products" className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold">Menu Pilihan</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari boba, snack, dll" className="rounded-full border border-rose-200 bg-white/70 backdrop-blur px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300" />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map(cat => (
                  <button key={cat} onClick={()=>setActiveCat(cat)} className={`px-4 py-2 rounded-full text-sm border transition-colors ${activeCat===cat? 'bg-rose-500 text-white border-rose-500' : 'bg-white/70 backdrop-blur border-rose-200 text-gray-700 hover:bg-rose-50'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <ProductCard key={p._id || p.name} product={p} onAdd={onAdd} />
            ))}
          </div>
        </section>

        <section id="why" className="mb-20">
          <div className="rounded-3xl bg-white/70 backdrop-blur border border-rose-100 p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold">Kenapa belanja di Rasa Lokal?</h3>
            <ul className="mt-4 grid md:grid-cols-3 gap-6 text-gray-700">
              <li className="rounded-2xl p-5 bg-gradient-to-br from-rose-50 to-white border border-rose-100">• Mendukung UMKM sekitar Anda</li>
              <li className="rounded-2xl p-5 bg-gradient-to-br from-rose-50 to-white border border-rose-100">• Bahan segar, rasa autentik</li>
              <li className="rounded-2xl p-5 bg-gradient-to-br from-rose-50 to-white border border-rose-100">• Desain modern, pengalaman mulus</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />

      <dialog id="cart" className="rounded-2xl p-0 w-11/12 md:w-[480px] bg-white shadow-2xl">
        <div className="p-6 border-b border-rose-100">
          <h4 className="text-lg font-semibold">Keranjang</h4>
        </div>
        <div className="p-6 max-h-[50vh] overflow-auto divide-y divide-rose-100">
          {cart.length===0 ? (
            <p className="text-gray-500">Belum ada item.</p>
          ) : (
            cart.map(item => (
              <div key={item._id} className="py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty {item.qty}</p>
                </div>
                <p className="font-semibold">Rp {(Number(item.price)*item.qty).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>
        <div className="p-6 border-t border-rose-100 flex items-center justify-between">
          <p className="font-semibold">Total</p>
          <p className="font-semibold text-rose-600">Rp {total.toLocaleString()}</p>
        </div>
        <div className="p-6 pt-0 flex items-center justify-end gap-3">
          <form method="dialog">
            <button className="px-4 py-2 rounded-full border border-rose-200">Tutup</button>
          </form>
          <button className="px-4 py-2 rounded-full bg-rose-500 text-white">Checkout</button>
        </div>
      </dialog>
    </div>
  )
}

export default App
