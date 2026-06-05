export type TeamMember = {
  name: string
  description: string
  img: string
  link?: string
}

type TeamYearRoster = {
  year: string
  leaderNames: readonly string[]
  officerNames: readonly string[]
  members: TeamMember[]
}

export const CURRENT_YEAR = '2026-2027'

const roster2026_2027: TeamYearRoster = {
  year: CURRENT_YEAR,
  leaderNames: ['Marcus Hernandez', 'Jad Assaad', 'Kseniia Oblasova', 'Carmen Vera'],
  officerNames: [
    'Marcus Hernandez',
    'Jad Assaad',
    'Kseniia Oblasova',
    'Carmen Vera',
    'Julian Roma',
  ],
  members: [
    {
      name: 'Marcus Hernandez',
      description: 'President',
      img: '/team/marcus-hernandez.webp',
      link: 'https://www.linkedin.com/in/marcus-hernandez-9543b5344/',
    },
    {
      name: 'Jad Assaad',
      description: 'Vice President / Mechanical',
      img: '/team/jad-assad.webp',
      link: 'https://www.linkedin.com/in/jad-assaad-766130270/',
    },
    {
      name: 'Kseniia Oblasova',
      description: 'Secretary / Software',
      img: '/team/kseniia-oblasova.webp',
      link: 'https://www.linkedin.com/in/kseniia-oblasova-a48797367/',
    },
    {
      name: 'Carmen Vera',
      description: 'Treasurer',
      img: '/team/carmen-vera.png',
      link: 'https://www.linkedin.com/in/carmenvera927428/',
    },
    {
      name: 'Julian Roma',
      description: 'Club Rep / Business',
      img: '/team/julian-roma.webp',
      link: 'https://www.linkedin.com/in/julian-roma-a770373b7/',
    },
    {
      name: 'Peyton Slape',
      description: 'Software',
      img: '/team/peyton-slape.jpeg',
      link: 'https://www.linkedin.com/in/peyton-slape-5b4756303/',
    },
    {
      name: 'Christian Avila',
      description: 'Software',
      img: '',
      link: '',
    },
    {
      name: 'Dmytro Klymenko',
      description: 'Software (L)',
      img: '/team/dmytro-klymenko.webp',
      link: 'https://www.linkedin.com/in/dmytro-klymenko-ab7b5b26b/',
    },
    {
      name: 'Darren Du',
      description: 'Electrical (L) / Mechanical',
      img: '/team/darren-du.webp',
      link: 'https://www.linkedin.com/in/darren-d/',
    },
    {
      name: 'Christian Del Rio',
      description: 'Business (L) / Mechanical',
      img: '/team/christian-del-rio.webp',
      link: 'https://www.linkedin.com/in/christian-del-rio-4738a9334/',
    },
    {
      name: 'Regina Alaniz Solis',
      description: 'Mechanical (L)',
      img: '/team/regina-alaniz-solis.webp',
      link: 'https://www.linkedin.com/in/regina-alaniz-075125313/',
    },
    {
      name: 'Daniel Park',
      description: 'Mechanical',
      img: '/team/daniel-park.webp',
      link: 'https://www.linkedin.com/in/daniel-park-2a64aa32a/',
    },
    {
      name: 'Nicolas Orozco',
      description: 'Mechanical',
      img: '/team/nicolas-orozco.webp',
      link: 'https://www.linkedin.com/in/nicolas-orozco-2986962a1/',
    },
    {
      name: 'Pierce Curry',
      description: 'Electrical (L) / Mechanical',
      img: '/team/pierce-curry.webp',
      link: 'https://www.linkedin.com/in/pierce-curry-254854242/',
    },
    {
      name: 'Anmol Verma',
      description: 'Electrical',
      img: '/team/anmol-verma.webp',
      link: 'https://www.linkedin.com/in/anmol-verma-a59341388/',
    },
  ],
}

const roster2025_2026: TeamYearRoster = {
  year: '2025-2026',
  leaderNames: ['Antoine Bonhomme', 'Aiden Tabrizi', 'Andres Muñoz Trasviña'],
  officerNames: [
    'Antoine Bonhomme',
    'Aiden Tabrizi',
    'Andres Muñoz Trasviña',
    'Julian Roma',
    'Darren Du',
  ],
  members: [
    {
      name: 'Antoine Bonhomme',
      description: 'President',
      img: '/team/antoine-bonhomme.jpeg',
      link: 'https://www.linkedin.com/in/antoine-bonhomme-5b210a320/',
    },
    {
      name: 'Aiden Tabrizi',
      description: 'Vice President',
      img: '/team/aiden-tabrizi.png',
      link: 'https://www.linkedin.com/in/aidenkt/',
    },
    {
      name: 'Andres Muñoz Trasviña',
      description: 'Secretary / Mechanical / Business',
      img: '/team/andres-munoz-trasvina.png',
      link: 'https://www.linkedin.com/in/andres-munoz-trasvina/',
    },
    {
      name: 'Julian Roma',
      description: 'Treasurer / Business',
      img: '/team/julian-roma.webp',
      link: 'https://www.linkedin.com/in/julian-roma-a770373b7/',
    },
    {
      name: 'Darren Du',
      description: 'Club Rep / Mechanical / Electrical',
      img: '/team/darren-du.webp',
      link: 'https://www.linkedin.com/in/darren-d/',
    },
    {
      name: 'Pierce Curry',
      description: 'Electrical / Mechanical',
      img: '/team/pierce-curry.webp',
      link: 'https://www.linkedin.com/in/pierce-curry-254854242/',
    },
    {
      name: 'Alex Valera',
      description: 'Electrical / Mechanical',
      img: '',
      link: '',
    },
    {
      name: 'Gavin Leitel',
      description: 'Mechanical',
      img: '/team/gavin-leitel.webp',
      link: 'https://www.linkedin.com/in/gavin-leitel-29bba93b3/',
    },
    {
      name: 'Daniel Park',
      description: 'Mechanical',
      img: '/team/daniel-park.webp',
      link: 'https://www.linkedin.com/in/daniel-park-2a64aa32a/',
    },
    {
      name: 'Jad Assaad',
      description: 'Mechanical',
      img: '/team/jad-assad.webp',
      link: 'https://www.linkedin.com/in/jad-assaad-766130270/',
    },
    {
      name: 'Santiago Gonzalez',
      description: 'Business',
      img: '/team/santiago-gonzalez.webp',
      link: 'https://www.linkedin.com/in/sdg3355/',
    },
    {
      name: 'Dmytro Klymenko',
      description: 'Software',
      img: '/team/dmytro-klymenko.webp',
      link: 'https://www.linkedin.com/in/dmytro-klymenko-ab7b5b26b/',
    },
    {
      name: 'Anmol Verma',
      description: 'Electrical',
      img: '/team/anmol-verma.webp',
      link: 'https://www.linkedin.com/in/anmol-verma-a59341388/',
    },
    {
      name: 'Marcus Hernandez',
      description: 'Software / Electrical',
      img: '/team/marcus-hernandez.webp',
      link: 'https://www.linkedin.com/in/marcus-hernandez-9543b5344/',
    },
    {
      name: 'Nicolas Orozco',
      description: 'Mechanical',
      img: '/team/nicolas-orozco.webp',
      link: 'https://www.linkedin.com/in/nicolas-orozco-2986962a1/',
    },
    {
      name: 'Brandon Pace',
      description: 'Software',
      img: '/team/brandon-pace.webp',
      link: '',
    },
    {
      name: 'Evan Sanchez',
      description: 'Software',
      img: '/team/evan-sanchez.webp',
      link: 'https://www.linkedin.com/in/evanjoel/recent-activity/all/',
    },
    {
      name: 'Mariela Cueto',
      description: 'Business',
      img: '/team/mariela-cueto.webp',
      link: 'https://www.linkedin.com/in/mariela-cueto-947b67325/',
    },
    {
      name: 'Benjamin Kennedy',
      description: 'Mechanical / Electrical',
      img: '/team/benjamin-kennedy.webp',
      link: 'https://www.linkedin.com/in/benjamin-kennedy-01457a201/recent-activity/all/',
    },
    {
      name: 'Edwin Espana-Suarez',
      description: 'Electrical',
      img: '/team/edwin-espana-suarez.webp',
      link: 'https://www.linkedin.com/in/edwin-espana-suarez-5444b9280/',
    },
    {
      name: 'Christian Del Rio',
      description: 'Mechanical',
      img: '/team/christian-del-rio.webp',
      link: 'https://www.linkedin.com/in/christian-del-rio-4738a9334/',
    },
    {
      name: 'Kseniia Oblasova',
      description: 'Software',
      img: '/team/kseniia-oblasova.webp',
      link: 'https://www.linkedin.com/in/kseniia-oblasova-a48797367/',
    },
    {
      name: 'Regina Alaniz Solis',
      description: 'Mechanical',
      img: '/team/regina-alaniz-solis.webp',
      link: 'https://www.linkedin.com/in/regina-alaniz-075125313/',
    },
    {
      name: 'Christian Avila',
      description: 'Software',
      img: '',
      link: '',
    },
    {
      name: 'Chase Norvell',
      description: 'Electrical / Mechanical',
      img: '/team/chase-norvell.jpeg',
      link: 'https://www.linkedin.com/in/chasenorvell/',
    },
    {
      name: 'Carmen Vera',
      description: 'Business',
      img: '/team/carmen-vera.png',
      link: 'https://www.linkedin.com/in/carmenvera927428/',
    },
    {
      name: 'Sandra Lin',
      description: 'Software',
      img: '/team/sandra-lin.jpeg',
      link: 'https://www.linkedin.com/in/sandra-lin-575a9a348/',
    },
    {
      name: 'Peyton Slape',
      description: 'Software',
      img: '/team/peyton-slape.jpeg',
      link: 'https://www.linkedin.com/in/peyton-slape-5b4756303/',
    },
  ],
}

const previousYearRosters = [roster2025_2026]

const TEAM_ORDER = ['Electrical', 'Mechanical', 'Software', 'Business'] as const
type Team = (typeof TEAM_ORDER)[number]

function normalizeTeam(label: string): Team | null {
  const normalized = label.replace(/\s*\(L\)/g, '').trim()
  if (normalized === 'Electrical Engineer') return 'Electrical'
  return (TEAM_ORDER as readonly string[]).includes(normalized) ? (normalized as Team) : null
}

function getPrimaryTeam(description: string): Team | 'Other' {
  const parts = description.split('/').map((part) => part.trim())

  for (const part of parts) {
    if (!part.includes('(L)')) continue
    const team = normalizeTeam(part)
    if (team) return team
  }

  for (const part of parts) {
    const team = normalizeTeam(part)
    if (team) return team
  }

  if (description.includes('Treasurer') || description.includes('Club Rep')) {
    return 'Business'
  }

  return 'Other'
}

function teamOrderIndex(team: Team | 'Other'): number {
  const index = TEAM_ORDER.indexOf(team as Team)
  return index === -1 ? TEAM_ORDER.length : index
}

function sortMembersByLeadAndTeam(members: TeamMember[]): TeamMember[] {
  return [...members].sort((a, b) => {
    const aIsLead = a.description.includes('(L)')
    const bIsLead = b.description.includes('(L)')
    if (aIsLead !== bIsLead) return aIsLead ? -1 : 1

    const teamDiff =
      teamOrderIndex(getPrimaryTeam(a.description)) - teamOrderIndex(getPrimaryTeam(b.description))
    if (teamDiff !== 0) return teamDiff

    return a.name.localeCompare(b.name)
  })
}

function getMembersByNames(roster: TeamYearRoster, names: readonly string[]): TeamMember[] {
  const byName = new Map(roster.members.map((m) => [m.name, m]))
  return names.map((n) => byName.get(n)).filter((m): m is TeamMember => m != null)
}

function getMembersExcludingNames(roster: TeamYearRoster, names: readonly string[]): TeamMember[] {
  const excluded = new Set(names)
  return roster.members.filter((m) => !excluded.has(m.name))
}

export function getLeaders(): TeamMember[] {
  return getMembersByNames(roster2026_2027, roster2026_2027.leaderNames)
}

export function getTeamMembersExcludingLeaders(): TeamMember[] {
  return sortMembersByLeadAndTeam(
    getMembersExcludingNames(roster2026_2027, roster2026_2027.leaderNames),
  )
}

export function getPreviousYearRosters(): Array<{
  year: string
  officers: TeamMember[]
  teamMembers: TeamMember[]
}> {
  return previousYearRosters.map((roster) => ({
    year: roster.year,
    officers: getMembersByNames(roster, roster.officerNames),
    teamMembers: sortMembersByLeadAndTeam(
      getMembersExcludingNames(roster, roster.officerNames),
    ),
  }))
}
