import { clsx } from 'clsx'

export function Container({
  className,
  variant = 'default',
  children,
}: {
  className?: string
  variant?: 'default' | 'hero'
  children: React.ReactNode
}) {
  const paddingClass =
    variant === 'hero' ? 'px-6 sm:px-8 lg:px-16' : 'px-6 lg:px-8'
  return (
    <div className={clsx(className, paddingClass)}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  )
}
