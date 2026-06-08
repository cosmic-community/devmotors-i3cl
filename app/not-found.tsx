import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <h1 className="text-6xl font-extrabold text-brand-700">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center px-6 py-3 rounded-xl bg-brand-700 text-white font-semibold hover:bg-brand-800 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}