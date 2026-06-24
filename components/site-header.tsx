'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { TecnicLogo } from '@/components/tecnic-logo'

const navItems = [
  { label: 'TRANG CHỦ', href: '/' },
  { label: 'GIỚI THIỆU', href: '/about' },
  { label: 'SỨC KHỎE CỘNG ĐỒNG', href: "https://tecnic.vn" },
  { label: 'TIN TỨC & TUYỂN DỤNG', href: "https://tecnic.vn/tin-tuc-tuyen-dung"  },
  { label: 'VĂN HÓA DOANH NGHIỆP', href: '/recruitment' },
  { label: 'LIÊN HỆ', href: '/contact' },
]

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Solid header unless we explicitly want a transparent overlay (home hero)
  const isSolid = !transparent || scrolled

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isSolid
          ? 'border-b border-border bg-background/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link href="/" className="flex items-center" aria-label="TECNIC trang chủ">
          <TecnicLogo variant={isSolid ? 'dark' : 'light'} />
        </Link>

        <nav
          className="hidden items-center gap-7 xl:flex"
          aria-label="Điều hướng chính"
        >
          {navItems.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-secondary',
                  isSolid ? 'text-foreground' : 'text-white/90',
                  active && 'text-secondary',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              'h-10 px-5 bg-secondary text-secondary-foreground hover:bg-secondary/90',
            )}
          >
            Liên hệ tư vấn
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
          aria-expanded={open}
          className={cn(
            'grid size-10 place-items-center rounded-md xl:hidden',
            isSolid ? 'text-foreground' : 'text-white',
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-4"
            aria-label="Điều hướng di động"
          >
            {navItems.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'border-b border-border/60 py-3 text-sm font-medium last:border-0',
                    active ? 'text-secondary' : 'text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                'mt-4 h-11 bg-secondary text-secondary-foreground hover:bg-secondary/90',
              )}
            >
              Liên hệ tư vấn
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
