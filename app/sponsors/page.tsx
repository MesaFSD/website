import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { TealGradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sponsors',
  description:
    'Support MesaFSD — San Diego Mesa College\'s Full-Self Driving Club. Partner with us to build the next generation of autonomous systems engineers.',
}

function Header() {
  return (
    <Container variant="hero" className="mt-16">
      <Heading as="h1" className="mt-2 text-white">
        Sponsor MesaFSD
      </Heading>
      <Lead className="mt-6 max-w-3xl text-gray-300">
        Your support enables community college students to get hands-on experience in engineering, robotics, AI, and business.
      </Lead>
    </Container>
  )
}

function SponsorCta() {
  return (
    <Container className="mt-24">
      <p className="max-w-2xl text-sm/6 text-gray-300">
        We're building industry partnerships to fund our kart, lab space, and competition travel. If you're interested in sponsoring MesaFSD or partnering with us, we'd love to hear from you.
      </p>
      <div className="mt-10">
        <Button href="mailto:sponsorships@mesafsd.com">
          Get in touch
        </Button>
      </div>
    </Container>
  )
}

const impactItems = [
  {
    title: 'Expands access to robotics & AI for underrepresented students',
    description:
      'A majority of our students are low-income community college students with limited access to maker spaces and industry exposure.',
  },
  {
    title: 'High-return talent pipeline',
    description:
      'MesaFSD members tend to transfer to four-year universities at significantly higher rates and become high-value interns with real experience.',
  },
  {
    title: 'Supports hands-on engineering education',
    description:
      'Supports hands-on autonomy, robotics, and applied AI education at an accessible and affordable level.',
  },
]

function Impact() {
  return (
    <Container className="mt-32 pb-32">
      <Subheading className="text-[#00BFB4]">Impact</Subheading>
      <Heading as="h2" className="mt-2 text-white">
        Your donation goes far.
      </Heading>
      <Lead className="mt-6 max-w-3xl text-gray-300">
        Sponsoring MesaFSD directly supports community college students who otherwise have limited access to robotics, AI, and industry experience.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <ul role="list" className="mt-8 space-y-10 lg:mt-14">
          {impactItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-2.5 size-2 shrink-0 rounded-full bg-[#00BFB4]"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm/6 text-gray-300">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="relative -mx-4 sm:-mx-8 lg:mx-0 lg:-mt-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10">
              <img
                alt=""
                src="/club/1.webp"
                className="block size-full object-cover object-center"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 -mt-8 sm:-mt-12 lg:-mt-32">
              <img
                alt=""
                src="/club/2.webp"
                className="block size-full object-cover object-center"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10">
              <img
                alt=""
                src="/club/3.webp"
                className="block size-full object-cover object-center"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 -mt-8 sm:-mt-12 lg:-mt-32">
              <img
                alt=""
                src="/club/4.webp"
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Sponsors() {
  return (
    <main className="overflow-hidden bg-gray-950">
      <div className="relative">
        <TealGradientBackground />
        <Container variant="hero">
          <Navbar dark />
        </Container>
      </div>
      <Header />
      <SponsorCta />
      <Impact />
      <Footer variant="sponsors" />
    </main>
  )
}
