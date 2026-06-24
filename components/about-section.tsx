import { ArrowRight, Building2, Target, Users } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

const highlights = [
  {
    icon: Building2,
    title: 'Văn phòng hiện đại',
    desc: 'Hệ thống văn phòng và cơ sở vận hành quy mô lớn trên toàn quốc.',
  },
  {
    icon: Target,
    title: 'Tầm nhìn dài hạn',
    desc: 'Định hướng phát triển bền vững dựa trên nền tảng công nghệ lõi.',
  },
  {
    icon: Users,
    title: 'Đội ngũ chuyên gia',
    desc: 'Nhân sự giàu kinh nghiệm trong nhiều lĩnh vực công nghệ cao.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/about-team.png"
                alt="Đội ngũ nhân sự TECNIC làm việc tại văn phòng"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/40 to-transparent p-6">
                <div className="rounded-xl bg-background/95 p-4 shadow-lg backdrop-blur">
                  <p className="font-heading text-2xl font-extrabold text-primary">
                    Thành lập &amp; phát triển
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mở rộng quy mô hoạt động đa ngành nghề
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Về TECNIC
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              Sứ mệnh, tầm nhìn &amp; giá trị cốt lõi
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              TECNIC hướng tới trở thành tập đoàn công nghệ đa ngành hàng đầu,
              kiến tạo những giá trị bền vững cho khách hàng, đối tác và cộng
              đồng thông qua đổi mới sáng tạo và ứng dụng công nghệ tiên tiến.
            </p>

            <div className="mt-8 space-y-5">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <h.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'mt-9 h-12 px-7 text-base bg-primary text-primary-foreground hover:bg-primary/90',
              )}
            >
              Xem chi tiết
              <ArrowRight className="size-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
