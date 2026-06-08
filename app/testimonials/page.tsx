import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Testimonials | Devmotors',
  description: 'Hear what our clients have to say about Devmotors.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="container-page py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Client Testimonials</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it — hear from the drivers who trust us.
        </p>
      </header>

      {testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No testimonials available yet.</p>
      )}
    </div>
  )
}