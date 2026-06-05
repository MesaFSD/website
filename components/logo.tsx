'use client'

import { clsx } from 'clsx'
import Image from 'next/image'

const LOGO_SIZE = 500

/** Full FSD logo for light backgrounds (black/dark FSD on transparent) */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/fsd-transparent-black.png"
      alt="MesaFSD - Full-Self Driving Club"
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      className={clsx('h-20 w-auto sm:h-24 md:h-28 lg:h-32', className)}
      style={{ width: 'auto' }}
      priority
    />
  )
}

/** FSD logo for dark backgrounds (white/teal on transparent) */
export function LogoLight({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/fsd-transparent-white.png"
      alt="MesaFSD - Full-Self Driving Club"
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      className={clsx('h-20 w-auto sm:h-24 md:h-28 lg:h-32', className)}
      style={{ width: 'auto' }}
      priority
    />
  )
}

/** Mark/icon only - for compact use (uses same as Logo) */
export function Mark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/fsd-transparent-black.png"
      alt="MesaFSD"
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      className={clsx(className, 'h-8 w-auto')}
      style={{ width: 'auto' }}
    />
  )
}
