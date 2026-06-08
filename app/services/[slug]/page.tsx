// app/services/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService, getMetafieldValue } from '@/lib/cosmic'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const description = getMetafieldValue(service.metadata?.short_description)
  const details = getMetafieldValue(service.metadata?.details)
  const icon = getMetafieldValue(service.metadata?.icon)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const image = service.metadata?.featured_image

  return (
    <article>
      {image && (
        <div className="w-full aspect-[21/9] max-h-[480px] overflow-hidden">
          <img
            src={`${image.imgix_url}?w=2000&h=860&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="container-page py-12 max-w-3xl">
        <Link href="/services" className="text-sm font-medium text-brand-700 hover:text-brand-900">
          ← Back to Services
        </Link>

        <div className="mt-4 flex items-center gap-3">
          {icon && <span className="text-4xl">{icon}</span>}
          <h1 className="text-4xl font-extrabold text-gray-900">{name}</h1>
        </div>

        {price && (
          <p className="mt-3 inline-block text-sm font-semibold text-accent bg-orange-50 px-3 py-1 rounded-full">
            Starting at {price}
          </p>
        )}

        {description && (
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">{description}</p>
        )}

        {details && (
          <div className="prose prose-lg mt-8 max-w-none text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: details }} />
          </div>
        )}
      </div>
    </article>
  )
}