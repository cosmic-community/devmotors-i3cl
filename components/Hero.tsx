import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://imgix.cosmicjs.com/16e61160-6386-11f1-ac8c-330ac011d850-autopilot-photo-1486262715619-67b85e0b08d3-1780956298605.jpeg?w=1920&h=900&fit=crop&auto=format,compress"
          alt="Automotive workshop"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-transparent" />

      <div className="relative container-page py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Professional Automotive Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Drive with confidence, powered by Devmotors
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            From routine maintenance to complex repairs, our expert team delivers
            quality service you can rely on — every time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-accent hover:bg-accent-dark font-semibold transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}