export default function Home() {
  return (
    <div className="bg-linear-to-br from-neutral-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-neutral-900 via-neutral-700 to-emerald-700 bg-clip-text text-transparent">
                Luxury Tools Redefined
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Exquisite craftsmanship meets unparalleled sophistication.
              Tools designed for those who demand excellence in every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/shop"
                className="px-8 py-4 bg-linear-to-br from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all"
              >
                Shop Now
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-white text-neutral-700 font-semibold rounded-lg border-2 border-neutral-200 hover:border-emerald-500 hover:text-emerald-600 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-linear-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800">Exceptional Craftsmanship</h3>
              <p className="text-neutral-600">Meticulously curated from the world's finest artisans</p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-linear-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800">Timeless Investment</h3>
              <p className="text-neutral-600">Heirloom-quality pieces that appreciate with every use</p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-linear-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800">White Glove Service</h3>
              <p className="text-neutral-600">Concierge delivery and personalized onboarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Elevate Your Craftsmanship
          </h2>
          <p className="text-xl text-emerald-50">
            Discover our exclusive collection of luxury tools and equipment
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Explore Products
          </a>
        </div>
      </section>
    </div>
  );
}
