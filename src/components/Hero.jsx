import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-rose-50 to-orange-50">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,182,193,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,228,196,0.25),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div>
          <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur rounded-full px-3 py-1 text-rose-600 text-xs border border-rose-100">🍹 Dukungan UMKM Lokal</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Makanan & Minuman Hangat dari UMKM Sekitar
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Temukan boba segar, camilan rumahan, dan hidangan khas daerah. Desain hangat, warna lembut, dan tipografi elegan untuk pengalaman berbelanja yang menyenangkan.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-rose-500 text-white px-5 py-3 font-medium shadow hover:bg-rose-600 transition-colors">
              Jelajah Menu
            </a>
            <a href="#why" className="inline-flex items-center justify-center rounded-full bg-white text-rose-600 px-5 py-3 font-medium border border-rose-200 hover:bg-rose-50 transition-colors">
              Kenapa Rasa Lokal?
            </a>
          </div>
        </div>
        <div className="h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-rose-100 bg-white/60 backdrop-blur shadow-sm">
          <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
