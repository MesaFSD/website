import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { TealGradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata = createPageMetadata({
  title: 'About',
  description:
    'MesaFSD gives advanced community college students a path to industry experience and prepares them for university-level engineering—we build and race a fully autonomous go-kart across Electrical, Software, Mechanical, and Business.',
  path: '/about',
})

function AboutHero() {
  return (
    <Container variant="hero" className="mt-16">
      <Heading as="h1" className="text-white">
        About MesaFSD
      </Heading>
      <Lead className="mt-6 max-w-3xl text-gray-300">
        We started MesaFSD as a way to give advanced students in community college a real path to
        industry experience and prepare them for university-level engineering programs. We work as a team
        across Electrical, Software, Mechanical, and Business to design, build, and race a fully
        autonomous go-kart.
      </Lead>
    </Container>
  )
}

function AboutContent() {
  return (
    <Container variant="hero" className="mt-24 pb-24 lg:pb-32">
      <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10">
              <img alt="" src="/club/1.webp" className="block size-full object-cover" />
            </div>
            <div className="-mt-6 aspect-square overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 sm:-mt-10 lg:-mt-24 xl:-mt-28">
              <img alt="" src="/club/2.webp" className="block size-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10">
              <img alt="" src="/club/3.webp" className="block size-full object-cover" />
            </div>
            <div className="-mt-6 aspect-square overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 sm:-mt-10 lg:-mt-24 xl:-mt-28">
              <img alt="" src="/club/4.webp" className="block size-full object-cover" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-2xl font-medium tracking-tight text-white">Background</h2>
          <p className="mt-6 text-sm/6 text-gray-300">
            When Antoine and Aiden arrived at community college, they wanted to join the engineering
            community but found few clubs offering real build experience. They started MesaFSD to give
            students a path into industry-style work while still at a two-year school.
          </p>
          <p className="mt-6 text-sm/6 text-gray-300 lg:mt-8">
            Today we&apos;re a cross-functional team across Electrical, Software, Mechanical, and Business,
            designing and racing a fully autonomous go-kart. You don&apos;t need prior experience—just
            curiosity and the drive to show up, learn, and contribute.
          </p>
          <div className="mt-10">
            <Button href="/team" variant="secondary" className="w-full sm:w-auto">
              Meet the team
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-20 border-t border-gray-800 pt-16 lg:mt-24 lg:pt-20">
        <Subheading className="text-[#00BFB4]">At a glance</Subheading>
        <hr className="mt-6 border-t border-gray-700" />
        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:mt-10">
          <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-700 pb-4">
            <dt className="text-sm/6 text-gray-300">Members</dt>
            <dd className="order-first text-6xl font-medium tracking-tight text-white">
              <AnimatedNumber start={20} end={25} />+
            </dd>
          </div>
          <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-700 pb-4">
            <dt className="text-sm/6 text-gray-300">Teams</dt>
            <dd className="order-first text-6xl font-medium tracking-tight text-white">
              <AnimatedNumber start={4} end={4} />
            </dd>
          </div>
          <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-700 max-sm:pb-4">
            <dt className="text-sm/6 text-gray-300">Raised</dt>
            <dd className="order-first text-6xl font-medium tracking-tight text-white">
              $<AnimatedNumber start={5} end={10} />,000+
            </dd>
          </div>
          <div className="flex flex-col gap-y-2">
            <dt className="text-sm/6 text-gray-300">Partner Organizations</dt>
            <dd className="order-first text-6xl font-medium tracking-tight text-white">
              <AnimatedNumber start={0} end={5} />+
            </dd>
          </div>
        </dl>
      </section>
    </Container>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden bg-gray-950">
      <div className="relative">
        <TealGradientBackground />
        <Container variant="hero">
          <Navbar dark />
        </Container>
      </div>
      <AboutHero />
      <AboutContent />
      <Footer />
    </main>
  )
}
