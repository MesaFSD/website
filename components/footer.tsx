import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { LogoLight } from './logo'

function CallToAction({ variant = 'default' }: { variant?: 'default' | 'sponsors' }) {
  if (variant === 'sponsors') {
    return (
      <div className="relative pt-20 pb-16 text-center sm:py-24">
        <hgroup>
          <p className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-[#00BFB4]">
            Partner with us
          </p>
          <p className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-5xl">
          Help build the future
          <br />
          generation of engineers.
          </p>
        </hgroup>
        <p className="mx-auto mt-6 max-w-sm text-sm/6 text-gray-400">
          Your sponsorship directly supports STEM community college students of all backgrounds to gain hands-on experience.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button className="w-full sm:w-auto" href="mailto:sponsorships@mesafsd.com">
            Become a sponsor
          </Button>
          <Button variant="secondary" href="/about" className="w-full sm:w-auto">
            Learn more
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <p className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-[#00BFB4]">
          Get involved
        </p>
        <p className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-5xl">
          We're racing into the future,
          <br />
          ready to join us?
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-400">
        Electrical, Software, Mechanical, or Business — no experience required, beginners welcome.
      </p>
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button className="w-full sm:w-auto" href="/apply">
          Apply to join
        </Button>
        <Button variant="secondary" href="mailto:contact@mesafsd.com" className="w-full sm:w-auto">
          Contact us
        </Button>
      </div>
    </div>
  )
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className="font-medium text-white/80 transition-colors hover:text-[#00BFB4]"
    />
  )
}

function Sitemap() {
  const links = [
    { href: '/apply', label: 'Join' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/sponsors', label: 'Sponsors' },
  ]
  return (
    <nav aria-label="Footer">
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:gap-x-10">
        {links.map(({ href, label }) => (
          <li key={label}>
            <SitemapLink
              href={href}
            >
              {label}
            </SitemapLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function SocialIconInstagram(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"/>
      <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"/>
      <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"/>
    </svg>
  )
}

function SocialIconDiscord(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M13.5447 3.01094C12.5249 2.54302 11.4313 2.19828 10.2879 2.00083C10.2671 1.99702 10.2463 2.00654 10.2356 2.02559C10.0949 2.27573 9.93916 2.60206 9.83006 2.85856C8.60027 2.67445 7.37679 2.67445 6.17221 2.85856C6.0631 2.59636 5.90166 2.27573 5.76038 2.02559C5.74966 2.00718 5.72886 1.99765 5.70803 2.00083C4.56527 2.19765 3.47171 2.54239 2.45129 3.01094C2.44246 3.01475 2.43488 3.02111 2.42986 3.02935C0.355595 6.12826 -0.212634 9.151 0.0661201 12.1363C0.0673814 12.1509 0.0755799 12.1648 0.086932 12.1737C1.45547 13.1787 2.78114 13.7889 4.08219 14.1933C4.10301 14.1997 4.12507 14.192 4.13832 14.1749C4.44608 13.7546 4.72043 13.3115 4.95565 12.8454C4.96953 12.8181 4.95628 12.7857 4.92791 12.775C4.49275 12.6099 4.0784 12.4086 3.67982 12.1801C3.64829 12.1617 3.64577 12.1166 3.67477 12.095C3.75865 12.0321 3.84255 11.9667 3.92264 11.9007C3.93713 11.8886 3.95732 11.8861 3.97436 11.8937C6.59286 13.0892 9.4277 13.0892 12.0153 11.8937C12.0323 11.8855 12.0525 11.888 12.0677 11.9001C12.1478 11.9661 12.2316 12.0321 12.3161 12.095C12.3451 12.1166 12.3433 12.1617 12.3117 12.1801C11.9132 12.4131 11.4988 12.6099 11.063 12.7743C11.0346 12.7851 11.022 12.8181 11.0359 12.8454C11.2762 13.3108 11.5505 13.754 11.8526 14.1743C11.8652 14.192 11.8879 14.1997 11.9087 14.1933C13.2161 13.7889 14.5417 13.1787 15.9103 12.1737C15.9223 12.1648 15.9298 12.1515 15.9311 12.1369C16.2647 8.6856 15.3723 5.68765 13.5655 3.02998C13.5611 3.02111 13.5535 3.01475 13.5447 3.01094ZM5.34668 10.3185C4.55833 10.3185 3.90876 9.59478 3.90876 8.70593C3.90876 7.81707 4.54574 7.09331 5.34668 7.09331C6.15392 7.09331 6.79721 7.82343 6.78459 8.70593C6.78459 9.59478 6.14761 10.3185 5.34668 10.3185ZM10.6632 10.3185C9.87484 10.3185 9.22526 9.59478 9.22526 8.70593C9.22526 7.81707 9.86222 7.09331 10.6632 7.09331C11.4704 7.09331 12.1137 7.82343 12.1011 8.70593C12.1011 9.59478 11.4704 10.3185 10.6632 10.3185Z" />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  const linkClass =
    'flex size-8 shrink-0 items-center justify-center overflow-visible text-white/60 transition-colors hover:text-[#00BFB4]'
  const iconSize = 'size-5 shrink-0'
  // Scale Discord and Instagram to match LinkedIn. Weird workaround, but bro I cannot find consistent svgs.
  const scaleSlightly = 'inline-flex origin-center scale-[1.4]'
  return (
    <div className="flex items-center gap-8">
      <Link
        href="https://discord.gg/javuzE2f4r"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our Discord community"
        className={linkClass}
      >
        <span className={scaleSlightly}>
          <SocialIconDiscord className={iconSize} />
        </span>
      </Link>
      <Link
        href="https://instagram.com/mesafsd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on Instagram"
        className={linkClass}
      >
        <span className={scaleSlightly}>
          <SocialIconInstagram className={iconSize} />
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/company/mesafsd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on LinkedIn"
        className={linkClass}
      >
        <SocialIconLinkedIn className={iconSize} />
      </Link>
    </div>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-white/60">
      &copy; {new Date().getFullYear()} MesaFSD · San Diego Mesa College
    </div>
  )
}

export function Footer({ variant = 'default' }: { variant?: 'default' | 'sponsors' } = {}) {
  return (
    <footer className="bg-gray-950">
      <div className="mx-2 mt-2 rounded-4xl bg-gray-900/50 ring-1 ring-white/10">
        <Container>
          <CallToAction variant={variant} />
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="flex flex-col gap-10 pb-6 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:gap-12">
                <PlusGridItem>
                  <Link href="/" title="Home" className="block">
                    <LogoLight />
                  </Link>
                </PlusGridItem>
                <PlusGridItem className="sm:flex sm:flex-1 sm:justify-end">
                  <Sitemap />
                </PlusGridItem>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-4">
              <PlusGridItem>
                <Copyright />
              </PlusGridItem>
              <PlusGridItem className="flex gap-8">
                <SocialLinks />
              </PlusGridItem>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </div>
    </footer>
  )
}
