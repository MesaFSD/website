import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { TealGradientBackground } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata = createPageMetadata({
  title: 'Join',
  description:
    'Apply to join MesaFSD — Electrical, Software, Mechanical, or Business. No prior experience required; work sessions on campus at San Diego Mesa College.',
  path: '/apply',
})

const APPLICATION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeCGyePZAsW5Xd__y1kxaLlng2MDQ2ZtQOZAwXOEirJe5bm_w/viewform?usp=dialog'

const teams = [
  {
    name: 'Electrical & Mechanical' as const,
    slug: 'electrical-mechanical',
    description: 'Hardware, wiring, and mechanical systems.',
    tasks: [
      'CAD design and part modeling',
      'Part assembly and fabrication',
      'Circuit & PCB design and wiring',
      'Sensor installation and calibration',
      'Weatherproofing and mechanical systems',
    ],
    perfectFor: ['Mechanical Engineering', 'Electrical Engineering', 'Industrial Engineering', 'Other Engineering', 'Physics'],
  },
  {
    name: 'Software' as const,
    slug: 'software',
    description: 'Autonomy stack, perception, planning, and controls.',
    tasks: [
      'Mission planning and pathfinding',
      'Computer vision and ML for perception',
      'Remote piloting systems',
      'Website development and tooling',
      'Autonomous stack development',
    ],
    perfectFor: ['Computer Science', 'Software Engineering', 'Computer Engineering', 'Data Science', 'Applied Math'],
  },
  {
    name: 'Business' as const,
    slug: 'business',
    description: 'Operations, outreach, and club coordination.',
    tasks: [
      'Budgeting and financial planning',
      'Sponsor outreach and partnerships',
      'Marketing and social media',
      'Event coordination',
      'Grant writing',
    ],
    perfectFor: ['Business Administration', 'Marketing', 'Communications', 'Economics', 'Public Policy'],
  },
]

function Header() {
  return (
    <Container variant="hero" className="mt-16">
      <Heading as="h1" className="text-white">Join the team.</Heading>
      <Lead className="mt-6 max-w-3xl text-gray-300">
        Select the team that matches your interests and apply today!
      </Lead>
    </Container>
  )
}

function TeamCards() {
  return (
    <div className="relative py-24">
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {teams.map((team, teamIndex) => (
            <TeamCard key={teamIndex} team={team} />
          ))}
        </div>
        <LogoCloud className="mt-24" dark />
      </Container>
    </div>
  )
}

function TeamCard({ team }: { team: (typeof teams)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff0d] ring-1 ring-white/10 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md">
        <div className="rounded-3xl bg-gray-900/80 p-10 pb-9 ring-1 ring-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{team.name}</h2>
          <p className="mt-2 text-sm/6 text-gray-300">{team.description}</p>
          <div className="mt-8">
            <Button href={APPLICATION_FORM_URL} target="_blank" rel="noopener noreferrer">
              Apply
            </Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-white">
              What you'll do:
            </h3>
            <ul className="mt-3 space-y-3">
              {team.tasks.map((task, index) => (
                <TaskItem key={index} task={task} />
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-white">
              Perfect for:
            </h3>
            <p className="mt-3 text-sm/6 text-gray-300">
              {team.perfectFor.join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TaskItem({ task }: { task: string }) {
  return (
    <li className="flex items-start gap-4 text-sm/6 text-gray-300">
      <span className="inline-flex h-6 shrink-0 items-center">
        <PlusIcon className="size-3.75 fill-[#00BFB4]" />
      </span>
      {task}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/andres-munoz-trasvina.png"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white lg:text-4xl">
                  "MesaFSD grew me towards my career through hands-on experience and teamwork a classroom can’t provide."
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Andres Muñoz Trasviña</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-[#00BFB4] via-[#00d4c8] to-[#5eb8e8] bg-clip-text text-transparent">
                    Mechanical team
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center text-[#00BFB4]">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center text-white">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold text-white">
              Do I need prior experience to get in?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-300">
              No. In fact, some of our most successful members started with no prior experience. 
              All we ask is that you be willing to show up, be part of the team, learn, and contribute!
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold text-white">
              When and where are the meetings for my team?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-300">
              Some meetings and work sessions are held in the Innovation Research Lab (Room B106) on Mesa Campus while others are held remotely. Depending on scheduling, meeting times may vary between semesters. You can find the current meeting times on our{' '}
              <a
                href="https://discord.gg/javuzE2f4r"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#00BFB4] underline decoration-[#00BFB4]/50 underline-offset-2 transition-colors hover:text-[#00d4c8] hover:decoration-[#00BFB4]"
              >
                Discord community
              </a>
              .
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold text-white">
              Why do I have to apply and interview?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-300">
              Due to limited funding and resources, we want to ensure that everyone who joins the club is committed to the club, is able to learn effectively, and will take good advantage of the opportunities provided. We will never turn someone away because of a lack of prior experience.<br></br><br></br>Trust us, this club is worth it!
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold text-white">
              What is the Autonomous Karting Series?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-300">
              See more information about the Autonomous Karting Series on their website <a
                href="https://www.autonomouskartingseries.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#00BFB4] underline decoration-[#00BFB4]/50 underline-offset-2 transition-colors hover:text-[#00d4c8] hover:decoration-[#00BFB4]"
              >
                here
              </a>
              .
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default async function Apply({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let params = await searchParams
  let selectedTeam =
    typeof params.team === 'string'
      ? teams.find(({ slug }) => slug === params.team)!
      : teams[0]

  return (
    <main className="overflow-hidden bg-gray-950">
      <div className="relative">
        <TealGradientBackground />
        <Container variant="hero">
          <Navbar dark />
        </Container>
      </div>
      <Header />
      <TeamCards />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
