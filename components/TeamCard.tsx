import type { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const bio = getMetafieldValue(member.metadata?.bio)
  const email = getMetafieldValue(member.metadata?.email)
  const photo = member.metadata?.photo

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {photo && (
        <div className="aspect-square overflow-hidden">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        {role && <p className="text-sm font-medium text-accent mb-2">{role}</p>}
        {bio && <p className="text-sm text-gray-600 line-clamp-3">{bio}</p>}
        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-3 inline-block text-sm font-medium text-brand-700 hover:text-brand-900"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  )
}