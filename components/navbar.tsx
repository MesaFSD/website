'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo, LogoLight } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

const links = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/apply', label: 'Join' },
]

function DiscordButton() {
  return (
    <Link
      href="https://discord.gg/javuzE2f4r"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our Discord"
      className="inline-flex items-center gap-2 rounded-full bg-[#5865F2] px-4 py-2 text-base font-medium text-white transition-opacity hover:opacity-90"
    >
      <img src="/social-logos/discord.svg" alt="" className="size-5 invert" />
      Discord
    </Link>
  )
}

function DesktopNav({ dark }: { dark?: boolean }) {
  return (
    <nav className="relative flex items-center gap-4">
      <div className="hidden lg:flex">
        {links.map(({ href, label }) => (
          <PlusGridItem key={href} className="relative flex">
            <Link
              href={href}
              className={
                dark
                  ? 'flex items-center px-4 py-3 text-lg font-medium text-white transition-colors hover:text-[#00BFB4]'
                  : 'flex items-center px-4 py-3 text-lg font-medium text-gray-950 transition-colors hover:text-[#00BFB4]'
              }
            >
              {label}
            </Link>
          </PlusGridItem>
        ))}
      </div>
      <div className="hidden lg:block">
        <DiscordButton />
      </div>
    </nav>
  )
}

function MobileNavButton({ dark }: { dark?: boolean }) {
  return (
    <DisclosureButton
      className={
        dark
          ? 'flex size-12 items-center justify-center self-center rounded-lg text-white transition-colors hover:text-[#00BFB4] lg:hidden'
          : 'flex size-12 items-center justify-center self-center rounded-lg text-gray-950 transition-colors hover:text-[#00BFB4] lg:hidden'
      }
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav({ dark }: { dark?: boolean }) {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link
              href={href}
              className={
                dark
                  ? 'text-lg font-medium text-white transition-colors hover:text-[#00BFB4]'
                  : 'text-lg font-medium text-gray-950 transition-colors hover:text-[#00BFB4]'
              }
            >
              {label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.15, ease: 'easeInOut', rotateX: { duration: 0.3, delay: 0.4 } }}
        >
          <DiscordButton />
        </motion.div>
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div
          className={
            dark
              ? 'absolute inset-x-0 top-0 border-t border-white/10'
              : 'absolute inset-x-0 top-0 border-t border-black/5'
          }
        />
        <div
          className={
            dark
              ? 'absolute inset-x-0 top-2 border-t border-white/10'
              : 'absolute inset-x-0 top-2 border-t border-black/5'
          }
        />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({
  banner,
  dark,
}: { banner?: React.ReactNode; dark?: boolean }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                {dark ? <LogoLight /> : <Logo />}
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav dark={dark} />
          <MobileNavButton dark={dark} />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav dark={dark} />
    </Disclosure>
  )
}
