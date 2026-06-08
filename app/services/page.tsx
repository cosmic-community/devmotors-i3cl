import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata = {
  title: 'Services | Devmotors',
  description: 'Explore the full range of automotive services offered by Devmotors.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container-page py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Services</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Comprehensive automotive solutions delivered by certified experts.
        </p>
      </header>

      {services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No services available yet.</p>
      )}
    </div>
  )
}