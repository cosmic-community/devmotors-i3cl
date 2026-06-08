// app/case-studies/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const content = getMetafieldValue(caseStudy.metadata?.content)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const image = caseStudy.metadata?.featured_image
  const service = caseStudy.metadata?.related_service

  return (
    <article>
      {image && (
        <div className="w-full aspect-[21/9] max-h-[480px] overflow-hidden">
          <img
            src={`${image.imgix_url}?w=2000&h=860&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="container-page py-12 max-w-3xl">
        <Link href="/case-studies" className="text-sm font-medium text-brand-700 hover:text-brand-900">
          ← Back to Case Studies
        </Link>

        {service && (
          <div className="mt-4">
            <Link
              href={`/services/${service.slug}`}
              className="inline-block text-xs font-semibold uppercase tracking-wide text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full hover:bg-brand-100"
            >
              {getMetafieldValue(service.metadata?.service_name) || service.title}
            </Link>
          </div>
        )}

        <h1 className="mt-4 text-4xl font-extrabold text-gray-900">{title}</h1>

        {summary && <p className="mt-6 text-lg text-gray-700 leading-relaxed">{summary}</p>}

        {content && (
          <div className="prose prose-lg mt-8 max-w-none text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}

        {results && (
          <div className="mt-10 bg-brand-50 border border-brand-100 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-brand-800 mb-3">Results</h2>
            <div className="prose max-w-none text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: results }} />
            </div>
          </div>
        )}
      </div>
    </article>
  )
}