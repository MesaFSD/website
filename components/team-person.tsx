import type { TeamMember } from '@/lib/team-members'

function Avatar({
  name,
  img,
  size,
}: {
  name: string
  img: string
  size: 'default' | 'leader'
}) {
  const avatarClass =
    size === 'leader'
      ? 'size-20 sm:size-28 rounded-full ring-2 ring-[#00BFB4]/40 object-cover'
      : 'size-12 rounded-full ring-1 ring-white/10 object-cover'

  if (img) {
    return <img alt="" src={img} className={`shrink-0 bg-white/15 ${avatarClass}`} />
  }
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gray-700 ring-1 ring-white/10 text-lg font-medium text-white ${
        size === 'leader' ? 'size-20 sm:size-28' : 'size-12'
      }`}
    >
      {name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)}
    </div>
  )
}

export function TeamPerson({
  name,
  description,
  img,
  link,
  variant = 'default',
}: TeamMember & { variant?: 'default' | 'leader' }) {
  const isLeader = variant === 'leader'
  const text = (
    <div className={`min-w-0 text-sm/6 ${isLeader ? 'text-center' : ''}`}>
      <h3
        className={
          isLeader
            ? 'text-lg font-semibold tracking-tight text-white sm:text-xl'
            : 'font-medium text-white'
        }
      >
        {name}
      </h3>
      <p className={isLeader ? 'mt-1 text-gray-300' : 'text-gray-300'}>{description}</p>
    </div>
  )

  const inner = (
    <>
      <Avatar name={name} img={img} size={isLeader ? 'leader' : 'default'} />
      {text}
    </>
  )

  if (isLeader) {
    const card = link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-4 transition-opacity hover:opacity-90"
      >
        {inner}
      </a>
    ) : (
      <div className="flex flex-col items-center gap-4">{inner}</div>
    )
    return (
      <li className="flex flex-col rounded-2xl bg-linear-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/15 sm:p-8">
        {card}
      </li>
    )
  }

  const row = link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-w-0 flex-1 items-center gap-4 transition-opacity hover:opacity-90"
    >
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-4">{inner}</div>
  )

  return <li className="flex items-center gap-4">{row}</li>
}
