import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const image = caseStudy.metadata?.featured_image
  const service = caseStudy.metadata?.related_service

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {service && (
          <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wide text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
            {getMetafieldValue(service.metadata?.service_name) || service.title}
          </span>
        )}
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
          {title}
        </h3>
        {summary && <p className="mt-2 text-sm text-gray-600 line-clamp-3">{summary}</p>}
      </div>
    </Link>
  )
}