import { clsx } from 'clsx'
import Image from 'next/image'

const LOGO_SIZE = 500

const logoSizes =
  'inline-block h-20 w-20 shrink-0 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32'

/** Full FSD logo for light backgrounds (black/dark FSD on transparent) */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx(logoSizes, className)}>
      <Image
        src="/logo/fsd-transparent-black.png"
        alt="MesaFSD - Full-Self Driving Club"
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        className="size-full object-contain"
        priority
      />
    </span>
  )
}

/** FSD logo for dark backgrounds (white/teal on transparent) */
export function LogoLight({ className }: { className?: string }) {
  return (
    <span className={clsx(logoSizes, className)}>
      <Image
        src="/logo/fsd-transparent-white.png"
        alt="MesaFSD - Full-Self Driving Club"
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        className="size-full object-contain"
        priority
      />
    </span>
  )
}

/** Mark/icon only - for compact use (uses same as Logo) */
export function Mark({ className }: { className?: string }) {
  return (
    <span className={clsx('inline-block h-8 w-8 shrink-0', className)}>
      <Image
        src="/logo/fsd-transparent-black.png"
        alt="MesaFSD"
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        className="size-full object-contain"
      />
    </span>
  )
}
