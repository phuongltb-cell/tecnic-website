import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { sectors, members } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Hệ sinh thái | TECNIC',
  description:
    'Hệ sinh thái công nghệ đa ngành của TECNIC gồm 5 lĩnh vực mũi nhọn và mạng lưới công ty thành viên chuyên môn hóa.',
}

export default function EcosystemPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Hệ sinh thái công nghệ đa ngành"
          subtitle="Năm lĩnh vực mũi nhọn và mạng lưới công ty thành viên chuyên môn hóa, cùng tạo nên sức mạnh tổng hợp của tập đoàn TECNIC."
          breadcrumbs={[{ label: 'Hệ sinh thái' }]}
        />

        {/* Sectors */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Lĩnh vực hoạt động
              </span>
              <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
                Năm lĩnh vực mũi nhọn
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                TECNIC đầu tư và phát triển chuyên sâu trong từng lĩnh vực, tạo
                nền tảng vững chắc cho hệ sinh thái công nghệ toàn diện.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s, i) => (
                <Reveal
                  key={s.slug}
                  delay={i * 90}
                  as="article"
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image || '/placeholder.svg'}
                      alt={`Lĩnh vực ${s.name} của TECNIC`}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                    <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-xl bg-background/95 text-primary shadow-md backdrop-blur">
                      <s.icon className="size-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {s.name}
                      </h3>
                      <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-secondary" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Member companies */}
        <section className="bg-muted/40 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Công ty thành viên
              </span>
              <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
                Mạng lưới đơn vị thành viên
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Các công ty thành viên chuyên môn hóa trong từng lĩnh vực, vận
                hành độc lập nhưng gắn kết trong hệ sinh thái chung.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {members.map((m, i) => (
                <Reveal
                  key={m.brand}
                  delay={i * 80}
                  as="article"
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      {m.field}
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-secondary" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-primary">
                    {m.brand}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {m.name}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center md:px-6">
            <h2 className="text-balance font-heading text-2xl font-extrabold md:text-3xl">
              Hợp tác cùng hệ sinh thái TECNIC
            </h2>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/85">
              Liên hệ với chúng tôi để khám phá cơ hội hợp tác trong các lĩnh vực
              công nghệ đa ngành.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'mt-8 h-12 px-7 text-base bg-accent text-accent-foreground hover:bg-accent/90',
              )}
            >
              Liên hệ ngay
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
