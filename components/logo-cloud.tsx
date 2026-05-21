import { clsx } from 'clsx'

type LogoCloudProps = React.ComponentPropsWithoutRef<'div'> & {
  dark?: boolean
}

export function LogoCloud({ className, dark, ...props }: LogoCloudProps) {
  const logoClass = dark ? 'invert opacity-90' : ''
  return (
    <div
      {...props}
      className={clsx(
        className,
        'grid grid-cols-2 items-center justify-items-center gap-8 sm:flex sm:justify-between sm:gap-4',
      )}
    >
      <img
        alt="TeamInspiration"
        src="/logo-cloud/teaminspiration.png"
        className={clsx('h-10 sm:h-10 lg:h-16', logoClass)}
      />
      <img
        alt="BrainCorp"
        src="/logo-cloud/braincorp.svg"
        className={clsx('h-8 sm:h-9 lg:h-14', logoClass)}
      />
      <img
        alt="San Diego Mesa College Foundation"
        src="/logo-cloud/mesacollegefoundation.svg"
        className={clsx('h-8 sm:h-9 lg:h-14', logoClass)}
      />
      <img
        alt="Mesa Associated Student Government"
        src="/logo-cloud/asg.svg"
        className={clsx('h-14 sm:h-16 lg:h-24', logoClass)}
      />
      <img
        alt="Advancing Science, Technology, and Art"
        src="/logo-cloud/asta.svg"
        className={clsx('col-span-2 h-16 sm:h-14 lg:h-20', logoClass)}
      />
    </div>
  )
}
