/** Featured leadership row (order matters). */
export const leaderNames = [
  'Antoine Bonhomme',
  'Aiden Tabrizi',
  'Andres Muñoz Trasviña',
] as const

export type TeamMember = {
  name: string
  description: string
  img: string
  link?: string
}

/** Full roster, roughly org order then alphabetically within groups. */
export const allTeamMembers: TeamMember[] = [
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
    description: 'ASG Rep / Mechanical / Electrical',
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
    link: '',
  },
  {
    name: 'Jad Assaad',
    description: 'Mechanical',
    img: '/team/jad-assad.webp',
    link: '',
  },
  {
    name: 'Santiago Gonzalez',
    description: 'Business',
    img: '/team/santiago-gonzalez.webp',
    link: '',
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
    link: '',
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
]

const leaderSet = new Set<string>(leaderNames)

export function getLeaders(): TeamMember[] {
  const byName = new Map(allTeamMembers.map((m) => [m.name, m]))
  return leaderNames
    .map((n) => byName.get(n))
    .filter((m): m is TeamMember => m != null)
}

export function getTeamMembersExcludingLeaders(): TeamMember[] {
  return allTeamMembers.filter((m) => !leaderSet.has(m.name))
}
