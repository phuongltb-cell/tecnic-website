import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export type Crumb = { label: string; href?: string }

export function PageHero({
  title,
  subtitle,
  breadcrumbs = [],
  image = '/page-hero.png',
}: {
  title: string
  subtitle?: string
  breadcrumbs?: Crumb[]
  image?: string
}) {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0">
        <img
          src={image || '/placeholder.svg'}
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003a6e]/95 via-[#005BAC]/85 to-[#00AEEF]/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Trang chủ
              </Link>
            </li>
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight className="size-4 text-white/40" />
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white" aria-current="page">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="max-w-3xl text-balance font-heading text-3xl font-extrabold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
