import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const clientName = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title
  const company = getMetafieldValue(testimonial.metadata?.company)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const rating = testimonial.metadata?.rating ?? 0
  const photo = testimonial.metadata?.photo

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <StarRating rating={typeof rating === 'number' ? rating : Number(rating) || 0} />
      {quote && (
        <blockquote className="mt-4 text-gray-700 italic leading-relaxed flex-grow">
          “{quote}”
        </blockquote>
      )}
      <div className="mt-6 flex items-center gap-3">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={clientName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-gray-900">{clientName}</p>
          {company && <p className="text-sm text-gray-500">{company}</p>}
        </div>
      </div>
    </div>
  )
}