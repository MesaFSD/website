'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Mark } from './logo'

function Circle({
  size,
  delay,
  opacity,
}: {
  size: number
  delay: number
  opacity: string
}) {
  return (
    <motion.div
      variants={{
        idle: { width: `${size}px`, height: `${size}px` },
        active: {
          width: [`${size}px`, `${size + 10}px`, `${size}px`],
          height: [`${size}px`, `${size + 10}px`, `${size}px`],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay,
          },
        },
      }}
      style={{ '--opacity': opacity } as React.CSSProperties}
      className={clsx(
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
        'bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,var(--color-blue-500)_var(--opacity),transparent)_100%)]',
        'ring-1 ring-blue-500/8 ring-inset',
      )}
    />
  )
}

function Circles() {
  return (
    <div className="absolute inset-0">
      <Circle size={528} opacity="3%" delay={0.45} />
      <Circle size={400} opacity="5%" delay={0.3} />
      <Circle size={272} opacity="5%" delay={0.15} />
      <Circle size={144} opacity="10%" delay={0} />
      <div className="absolute inset-0 bg-linear-to-t from-white to-35%" />
    </div>
  )
}

function MainLogo() {
  return (
    <div className="absolute top-32 left-44 flex size-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
      <Mark className="h-14 fill-black" />
    </div>
  )
}

function Logo({
  src,
  left,
  top,
  hover,
  imgSize = 'size-10',
  objectFit = 'contain',
}: {
  src: string
  left: number
  top: number
  hover: { x: number; y: number; rotate: number; delay: number }
  /** Tailwind size class for the inner image, e.g. size-8, size-10, size-12. Default size-10. */
  imgSize?: string
  /** How the image fits inside the circle: 'contain' (no stretch) or 'cover'. Default contain. */
  objectFit?: 'contain' | 'cover'
}) {
  const objectFitClass = objectFit === 'cover' ? 'object-cover' : 'object-contain'
  return (
    <motion.div
      variants={{
        idle: { x: 0, y: 0, rotate: 0 },
        active: {
          x: [0, hover.x, 0],
          y: [0, hover.y, 0],
          rotate: [0, hover.rotate, 0],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay: hover.delay,
          },
        },
      }}
      style={{ left, top } as React.CSSProperties}
      className="absolute flex size-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5"
    >
      <img
        alt=""
        src={src}
        className={clsx(imgSize, objectFitClass, 'rounded-full')}
      />
    </motion.div>
  )
}

export function LogoCluster() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <Circles />
      <div className="absolute left-1/2 h-full w-104 -translate-x-1/2">
        <MainLogo />
        <Logo
          src="/logo-cloud/teaminspiration.png"
          left={144}
          top={40}
          hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
        />
        <Logo
          src="/logo-cloud/asta.svg"
          left={290}
          top={196}
          hover={{ x: 4, y: 5, rotate: -6, delay: 0.25 }}
        />
        <Logo
          src="/logo-cluster/tritonai.png"
          left={96}
          top={176}
          hover={{ x: -3, y: 5, rotate: 3, delay: 0.15 }}
          imgSize="size-9"
          objectFit="contain"
        />
      </div>
    </div>
  )
}
