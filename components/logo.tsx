'use client'

import { clsx } from 'clsx'
import Image from 'next/image'

/** Full FSD logo for light backgrounds (black/dark FSD on transparent) */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/fsd-transparent-black.png"
      alt="MesaFSD - Full-Self Driving Club"
      width={360}
      height={100}
      className={clsx('h-20 w-auto sm:h-24 md:h-28 lg:h-32', className)}
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
      width={360}
      height={100}
      className={clsx('h-20 w-auto sm:h-24 md:h-28 lg:h-32', className)}
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
      width={80}
      height={24}
      className={clsx(className, 'h-8 w-auto')}
    />
  )
}
