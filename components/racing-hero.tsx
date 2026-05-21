'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// The track path - smooth flowing circuit shifted right for left-aligned content
const TRACK_PATH =
  'M 300 450 ' +                    // Start/finish line
  'L 500 450 ' +                    // Pit straight
  'Q 580 450 620 410 ' +            // Turn 1 entry
  'Q 660 370 680 320 ' +            // Turn 1 progressive
  'Q 700 270 740 230 ' +            // Turn 1 exit
  'Q 780 190 840 170 ' +            // Transition to chicane
  'Q 900 150 950 165 ' +            // Chicane flick left
  'Q 1000 180 1030 220 ' +          // Chicane flick right
  'Q 1060 260 1070 310 ' +          // Exit chicane
  'L 1070 400 ' +                   // Short straight to hairpin
  'Q 1070 470 1030 530 ' +          // Hairpin entry
  'Q 990 590 920 600 ' +            // Hairpin braking
  'Q 850 605 800 580 ' +            // Hairpin apex
  'Q 750 555 720 510 ' +            // Hairpin exit
  'Q 690 465 680 420 ' +            // Climbing out
  'L 660 320 ' +                    // Back straight
  'Q 650 260 620 210 ' +            // Fast left entry
  'Q 590 160 530 140 ' +            // Fast left apex
  'Q 470 120 400 130 ' +            // Fast left exit
  'L 320 150 ' +                    // Top straight
  'Q 250 165 200 220 ' +            // Wide left-hander entry
  'Q 150 280 150 350 ' +            // Wide left-hander apex (big radius)
  'Q 150 420 220 450 ' +            // Wide left-hander exit
  'Q 260 465 300 450 '              // Smooth return to start

// Racing dot that follows the track path with variable speed
function RacingDot({
  delay,
  baseDuration,
  color,
  size = 5,
  blur = false,
}: {
  delay: number
  baseDuration: number
  color: string
  size?: number
  blur?: boolean
}) {
  // Even position intervals around the track
  const positions = [
    '0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%',
  ]

  // Subtle timing variation - faster on straights, slightly slower in corners
  const times = [
    0,     // 0% - start
    0.08,  // 10% - pit straight (fast)
    0.17,  // 20% - Turn 1 (slightly slow)
    0.26,  // 30% - chicane
    0.36,  // 40% - approaching hairpin
    0.48,  // 50% - hairpin (slow)
    0.60,  // 60% - exiting hairpin
    0.70,  // 70% - back straight (fast)
    0.80,  // 80% - sweeper
    0.91,  // 90% - downhill left
    1.0,   // 100% - finish
  ]

  return (
    <motion.circle
      r={size}
      fill={color}
      filter={blur ? 'url(#glow)' : undefined}
      initial={{ offsetDistance: '0%', opacity: 0 }}
      animate={{ offsetDistance: positions, opacity: 1 }}
      transition={{
        offsetDistance: {
          duration: baseDuration,
          delay,
          repeat: Infinity,
          times,
          ease: 'linear',
        },
        opacity: { duration: 0.5, delay },
      }}
      style={{
        offsetPath: `path("${TRACK_PATH}")`,
        offsetRotate: '0deg',
      }}
    />
  )
}

// Floating particle for atmosphere
function FloatingParticle({
  x,
  y,
  delay,
  duration,
}: {
  x: number
  y: number
  delay: number
  duration: number
}) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={1.5}
      fill="rgba(0,191,180,0.4)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1.2, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function RacingHeroBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Generate particles along and near the track
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: 100 + Math.random() * 900,
    y: 100 + Math.random() * 500,
    delay: Math.random() * 6,
    duration: 2 + Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1200 700"
        className="absolute left-1/2 top-1/2 h-[130%] w-[160%] -translate-x-[55%] -translate-y-1/2"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Glow filter for racing dots */}
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Track surface gradient */}
          <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,191,180,0.12)" />
            <stop offset="50%" stopColor="rgba(0,191,180,0.08)" />
            <stop offset="100%" stopColor="rgba(0,191,180,0.12)" />
          </linearGradient>
        </defs>

        {/* Track outer edge - wider, subtle */}
        <motion.path
          d={TRACK_PATH}
          fill="none"
          stroke="url(#trackGradient)"
          strokeWidth="60"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        />

        {/* Track inner boundary */}
        <motion.path
          d={TRACK_PATH}
          fill="none"
          stroke="rgba(0,191,180,0.25)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
        />

        {/* Racing line (center) - dashed */}
        <motion.path
          d={TRACK_PATH}
          fill="none"
          stroke="rgba(0,191,180,0.15)"
          strokeWidth="1"
          strokeDasharray="12 8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeOut', delay: 0.5 }}
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <FloatingParticle key={p.id} {...p} />
        ))}

        {/* Racing dots - "cars" at different speeds */}
        <RacingDot delay={0} baseDuration={12} color="#00BFB4" size={8} blur />
        <RacingDot delay={1.5} baseDuration={13} color="#ffffff" size={7} blur />
        <RacingDot delay={3} baseDuration={14} color="#00BFB4" size={6} blur />
        <RacingDot delay={5} baseDuration={15} color="rgba(255,255,255,0.8)" size={5} blur />
        <RacingDot delay={7} baseDuration={14.5} color="rgba(0,191,180,0.7)" size={5} />
        <RacingDot delay={9} baseDuration={16} color="rgba(255,255,255,0.6)" size={4} />
        <RacingDot delay={4} baseDuration={13.5} color="#00BFB4" size={6} blur />
        <RacingDot delay={6} baseDuration={15.5} color="rgba(0,191,180,0.5)" size={4} />
      </svg>

      {/* Gradient overlays for depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-transparent to-gray-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 via-transparent to-gray-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.4)_70%)]" />
    </div>
  )
}
