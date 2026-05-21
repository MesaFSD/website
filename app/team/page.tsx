import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { TealGradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { TeamPerson } from '@/components/team-person'
import { Heading, Lead, Subheading } from '@/components/text'
import { getLeaders, getTeamMembersExcludingLeaders, type TeamMember } from '@/lib/team-members'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
  description:
    "Meet the MesaFSD team — San Diego Mesa College's Full-Self Driving Club.",
}

const previousYearsTeams: Array<{
  year: string
  officers: TeamMember[]
  teamMembers: TeamMember[]
}> = []

export default function TeamPage() {
  const leaders = getLeaders()
  const members = getTeamMembersExcludingLeaders()

  return (
    <main className="overflow-hidden bg-gray-950">
      <div className="relative">
        <TealGradientBackground />
        <Container variant="hero">
          <Navbar dark />
        </Container>
      </div>

      <Container variant="hero" className="mt-16">
        <Heading as="h1" className="text-white">
          Team
        </Heading>
        <Lead className="mt-6 max-w-3xl text-gray-300">
          MesaFSD is run by community college students focused on getting our autonomous kart to the
          track. Meet our officers and members.
        </Lead>
      </Container>

      <Container className="mt-20 pb-16">
        <Subheading className="text-[#00BFB4]">Leadership</Subheading>
        <ul
          role="list"
          className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {leaders.map((person) => (
            <TeamPerson key={person.name} {...person} variant="leader" />
          ))}
        </ul>
      </Container>

      <Container className="pb-32">
        <Subheading as="h2" className="text-[#00BFB4]">
          Members
        </Subheading>
        <hr className="mt-6 border-t border-gray-700" />
        <ul
          role="list"
          className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {members.map((person) => (
            <TeamPerson key={person.name} {...person} />
          ))}
        </ul>
        <p className="mt-8 text-xs text-gray-500">(L) = Team Lead</p>

        <div className="mt-12">
          <Button href="/apply">Join the team</Button>
        </div>

        {previousYearsTeams.length > 0 && (
          <>
            <Subheading as="h3" className="mt-24 text-[#00BFB4]">
              Previous years
            </Subheading>
            <hr className="mt-6 border-t border-gray-700" />
            <div className="mt-6 space-y-2">
              {previousYearsTeams.map((yearEntry) => (
                <details
                  key={yearEntry.year}
                  className="group rounded-lg border border-gray-700 bg-gray-900/50 open:border-[#00BFB4]/30"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left font-medium text-white transition-colors hover:text-[#00BFB4] [&::-webkit-details-marker]:hidden">
                    <span>{yearEntry.year}</span>
                    <ChevronDownIcon
                      className="size-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="border-t border-gray-700 px-5 pb-5 pt-4">
                    <div className="space-y-8">
                      <section>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#00BFB4]">
                          Officers
                        </h4>
                        <ul
                          role="list"
                          className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                          {yearEntry.officers.map((member) => (
                            <TeamPerson key={member.name} {...member} />
                          ))}
                        </ul>
                      </section>
                      <section>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#00BFB4]">
                          Team members
                        </h4>
                        <ul
                          role="list"
                          className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                          {yearEntry.teamMembers.map((member) => (
                            <TeamPerson key={member.name} {...member} />
                          ))}
                        </ul>
                        <p className="mt-8 text-xs text-gray-500">(L) = Team Lead</p>
                      </section>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </>
        )}
      </Container>

      <Footer />
    </main>
  )
}
