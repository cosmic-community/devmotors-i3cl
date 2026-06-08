import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-gray-300 mt-20">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-extrabold text-white mb-3">
              <span className="text-2xl">🔧</span> Devmotors
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Professional automotive services delivered by an expert team you can trust.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
            <p className="text-sm text-gray-400">
              Ready to get started? Reach out and our team will be happy to help.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-gray-500">
          © {year} Devmotors. All rights reserved.
        </div>
      </div>
    </footer>
  )
}