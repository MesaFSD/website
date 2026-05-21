import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-[#00BFB4] shadow-md',
    'text-base font-medium whitespace-nowrap text-gray-950',
    'data-disabled:bg-[#00BFB4] data-disabled:opacity-40 data-hover:bg-[#00d4c8]',
    'transition-colors',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-white/20 bg-white/10 shadow-md',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff1a]',
    'text-base font-medium whitespace-nowrap text-white',
    'data-disabled:bg-white/10 data-disabled:opacity-40 data-hover:bg-white/20',
    'transition-colors',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-transparent shadow-sm ring-1 ring-white/20',
    'text-sm font-medium whitespace-nowrap text-white',
    'data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-white/10',
    'transition-colors',
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
