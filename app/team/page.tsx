import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Team | Devmotors',
  description: 'Meet the skilled professionals behind Devmotors.',
}

export default async function TeamPage() {
  const members = await getTeamMembers()

  return (
    <div className="container-page py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Meet the Team</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          The dedicated experts who keep your vehicle in top shape.
        </p>
      </header>

      {members.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No team members available yet.</p>
      )}
    </div>
  )
}