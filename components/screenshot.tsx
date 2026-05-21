import { clsx } from 'clsx'

export function Screenshot({
  width,
  height,
  src,
  className,
  imageClassName,
}: {
  width: number
  height: number
  src: string
  className?: string
  imageClassName?: string
}) {
  return (
    <div
      style={{ '--width': width, '--height': height } as React.CSSProperties}
      className={clsx(
        className,
        'relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)]',
      )}
    >
      <div
        className={clsx(
          'absolute -inset-(--padding) overflow-hidden rounded-[calc(var(--radius)+var(--padding))] [--padding:--spacing(2)]',
          'shadow-xs ring-1 ring-black/5 max-md:shadow-none max-md:ring-0',
        )}
      >
        <img
          alt=""
          src={src}
          className={clsx(
            'size-full rounded-(--radius) object-cover object-center',
            'shadow-2xl ring-1 ring-black/10 max-md:shadow-none max-md:ring-0',
            imageClassName,
          )}
        />
      </div>
    </div>
  )
}
