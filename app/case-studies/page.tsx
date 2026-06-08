import CaseStudyCard from '@/components/CaseStudyCard'
import { getCaseStudies } from '@/lib/cosmic'

export const metadata = {
  title: 'Case Studies | Devmotors',
  description: 'Explore real projects and proven results from Devmotors.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="container-page py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Case Studies</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          A closer look at the challenges we've solved and the results we've delivered.
        </p>
      </header>

      {caseStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No case studies available yet.</p>
      )}
    </div>
  )
}