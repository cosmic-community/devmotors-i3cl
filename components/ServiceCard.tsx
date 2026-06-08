import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const description = getMetafieldValue(service.metadata?.short_description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const image = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
            {name}
          </h3>
        </div>
        {description && <p className="text-sm text-gray-600 line-clamp-3">{description}</p>}
        {price && (
          <p className="mt-4 text-sm font-semibold text-accent">
            Starting at {price}
          </p>
        )}
      </div>
    </Link>
  )
}