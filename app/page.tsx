import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'
import { getServices, getCaseStudies, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [services, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getTestimonials(),
  ])

  const featuredServices = services.slice(0, 3)
  const featuredCaseStudies = caseStudies.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <div>
      <Hero />

      {/* Services */}
      <section className="container-page py-16 md:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Services</h2>
            <p className="mt-2 text-gray-600">Expert care for your vehicle, end to end.</p>
          </div>
          <Link href="/services" className="hidden sm:inline text-sm font-semibold text-brand-700 hover:text-brand-900">
            View all →
          </Link>
        </div>
        {featuredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No services available yet.</p>
        )}
      </section>

      {/* Case studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container-page">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Recent Work</h2>
                <p className="mt-2 text-gray-600">Real results for real customers.</p>
              </div>
              <Link href="/case-studies" className="hidden sm:inline text-sm font-semibold text-brand-700 hover:text-brand-900">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="container-page py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Clients Say</h2>
            <p className="mt-2 text-gray-600">Trusted by drivers everywhere.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-700 text-white">
        <div className="container-page py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to get started?</h2>
          <p className="mt-3 text-brand-100 max-w-xl mx-auto">
            Meet the team behind Devmotors and discover how we can help keep your vehicle running smoothly.
          </p>
          <Link
            href="/team"
            className="mt-8 inline-flex items-center px-6 py-3 rounded-xl bg-white text-brand-700 font-semibold hover:bg-gray-100 transition-colors"
          >
            Meet the Team
          </Link>
        </div>
      </section>
    </div>
  )
}