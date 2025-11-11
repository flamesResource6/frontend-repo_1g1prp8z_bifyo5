export default function Footer(){
  return (
    <footer className="border-t border-rose-100 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h4 className="font-semibold text-gray-900">Rasa Lokal</h4>
          <p className="mt-2">Marketplace untuk menikmati makanan & minuman dari UMKM sekitar Anda.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Dukungan</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-900">Bantuan</a></li>
            <li><a href="#" className="hover:text-gray-900">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-gray-900">Syarat & Ketentuan</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Kontak</h4>
          <p className="mt-2">Email: halo@rasalokal.id</p>
          <p>Instagram: @rasalokal</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Rasa Lokal — Mendukung UMKM Indonesia</div>
    </footer>
  )
}
