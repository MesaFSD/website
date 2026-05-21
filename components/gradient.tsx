import { clsx } from 'clsx'

export function TealGradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-linear-115 from-[#009a91] via-[#00BFB4] to-[#00d4c8]',
          'rotate-[-10deg] rounded-full blur-3xl opacity-90',
        )}
      />
    </div>
  )
}
