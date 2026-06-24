import { cn } from '@/lib/utils'

export function TecnicLogo({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  return (
    <span
      className={cn(
        'flex items-center gap-2 font-heading text-xl font-extrabold tracking-tight',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M4 6h16M12 6v13"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="18" cy="16" r="2.5" fill="currentColor" />
        </svg>
      </span>
      <span className={variant === 'light' ? 'text-white' : 'text-foreground'}>
        TEC<span className="text-secondary">NIC</span>
      </span>
    </span>
  )
}
