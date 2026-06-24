import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-corporate.png"
          alt="Trụ sở tập đoàn công nghệ TECNIC"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003a6e]/95 via-[#005BAC]/80 to-[#00AEEF]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003a6e]/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 md:px-6">
        <div className="max-w-3xl">
          <span className="animate-fade-up inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Tập đoàn công nghệ đa ngành
          </span>

          <h1
            className="animate-fade-up mt-6 text-balance font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Kiến tạo giá trị <br className="hidden md:block" />
            bằng công nghệ
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85 md:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            TECNIC là tập đoàn công nghệ đa ngành hoạt động trong lĩnh vực y tế,
            năng lượng, vật liệu, khoáng sản và logistics.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-12 px-7 text-base bg-accent text-accent-foreground hover:bg-accent/90',
              )}
            >
              Tìm hiểu về TECNIC
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 px-7 text-base border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary',
              )}
            >
              <Phone className="size-5" />
              Liên hệ 
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </section>
  )
}
