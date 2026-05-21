import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import {
  BoltIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid'
import { Advising } from '@/components/advising'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { RacingHeroBackground } from '@/components/racing-hero'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    "San Diego Mesa College's Full-Self Driving Club — building fully autonomous vehicles with Team Inspiration for the Autonomous Karting Series.",
}

function Hero() {
  return (
    <div className="relative h-screen bg-gray-950">
      {/* Animated racing track background */}
      <RacingHeroBackground />

      <div className="relative z-10 h-full">
        <div className="relative z-20 px-6 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <Navbar dark />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center px-6 sm:px-8 lg:px-16 max-md:justify-start max-md:pt-48 md:pt-[10vh]">
          <div className="pointer-events-auto mx-auto w-full max-w-2xl lg:max-w-7xl">
            <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-white sm:text-7xl/[0.85] md:text-8xl/[0.85]">
              Where students<br/>become engineers.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium text-gray-300 sm:mt-8 sm:text-xl/7 md:text-2xl/8">
              San Diego Mesa College's premier autonomous robotics club, dedicated to competing in the Autonomous Karting Series.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row">
              <Button href="/apply">
                Join us
              </Button>
              <Button variant="secondary" href="/sponsors">
                Sponsor us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Building a self-racing go-kart from the ground up.
        </Heading>
        <Screenshot
          width={1438}
          height={760}
          src="/pictures/kart.png"
          imageClassName="scale-[1.15]"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Why We're Different</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Supporting members through organization and community.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Engineering Team"
          title="Innovation at work"
          description="Developing the AI software and hardware behind the kart, encouraging advanced learning, work-experience, and growth opportunities along the way."
          graphic={
            <div className="h-80 bg-[url(/pictures/engineeringMarketingPicture.webp)] bg-cover bg-center bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Business Team"
          title="Building industry partnerships"
          description="Driving the club forward by securing the resources and support needed to compete through public relations, accounting, and marketing."
          graphic={
            <div className="absolute inset-0 bg-[url(/pictures/sponsorStickers.jpg)] bg-size-[720px_950px] bg-position-[left_-38px_top_-233px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Teams"
          title="Four teams, one goal"
          description="Electrical, Mechanical, Software, and Business work in parallel so we can move fast from lab to track."
          graphic={
            <div className="flex size-full items-center justify-center p-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: 'Electrical', Icon: BoltIcon },
                  { label: 'Mechanical', Icon: WrenchIcon },
                  { label: 'Software', Icon: CodeBracketIcon },
                  { label: 'Business', Icon: BriefcaseIcon },
                ].map((team) => (
                  <div
                    key={team.label}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl py-4 px-5 ring-1 bg-[#00BFB4]/10 ring-[#00BFB4]/30 text-[#00BFB4] transition-transform duration-200 group-hover:scale-[1.02]"
                  >
                    <team.Icon className="size-8 sm:size-9" aria-hidden />
                    <span className="text-xs font-medium opacity-90 sm:text-sm">{team.label}</span>
                  </div>
                ))}
              </div>
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Partners"
          title="Mentored by the best"
          description="We work with reputable local engineering teams to accelerate our members' learning and gain industry perspective."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Competitions"
          title="Ready to race"
          description="MesaFSD competes in competitions against notable four-year universities, including the Autonomous Karting Series at Purdue University."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Club Culture</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          This is where the magic happens.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Work sessions"
            title="Build together on and off campus"
            description="We work in the Innovation Research Lab and the Team Inspiration Lab that we've decked out with the tools and resources we need to build."
            graphic={
              <div className="h-80 overflow-hidden">
                <img
                  src="/pictures/engineeringWorkSession.webp"
                  alt=""
                  className="size-full object-cover object-[55%_50%]"
                />
              </div>
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Tools"
            title="Use industry-standard tools"
            description="We use the same software that engineering companies use, preparing members for future jobs."
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Advising"
            title="Get help when you need it"
            description="Teammates always help answer questions, with fun tutorial projects offered to ease the learning curve. "
            graphic={<Advising />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Teamwork"
            title="Join a team that cares about your success"
            description="We want you to succeed as an engineer and get the most out of your time with us. We're here to help you learn, grow, and have fun making friends along the way."
            graphic={
            <div className="h-80 overflow-hidden">
              <img
                src="/pictures/braincorpGroup.webp"
                alt=""
                className="size-full object-cover object-[55%_30%]"
              />
            </div>
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
