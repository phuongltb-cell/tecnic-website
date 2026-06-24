import type { Metadata } from 'next'
import { Target, Eye, Gem, Building2, Users, Award, Globe } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'GIỚI THIỆU | TECNIC',
  description:
    'Tìm hiểu về sứ mệnh, tầm nhìn, giá trị cốt lõi và lịch sử phát triển của Tập đoàn công nghệ đa ngành TECNIC.',
}

const pillars = [
  {
    icon: Target,
    title: 'Sứ mệnh',
    desc: 'Kiến tạo giá trị bền vững cho khách hàng, đối tác và cộng đồng thông qua đổi mới sáng tạo và ứng dụng công nghệ tiên tiến.',
  },
  {
    icon: Eye,
    title: 'Tầm nhìn',
    desc: 'Trở thành tập đoàn công nghệ đa ngành hàng đầu, dẫn dắt xu hướng phát triển công nghệ tại Việt Nam và khu vực.',
  },
  {
    icon: Gem,
    title: 'Giá trị cốt lõi',
    desc: 'Đổi mới sáng tạo, chính trực, trách nhiệm và phát triển bền vững là kim chỉ nam cho mọi hoạt động của tập đoàn.',
  },
]

const values = [
  {
    icon: Award,
    title: 'Chất lượng vượt trội',
    desc: 'Cam kết mang đến sản phẩm và dịch vụ đạt tiêu chuẩn cao nhất.',
  },
  {
    icon: Users,
    title: 'Con người là trung tâm',
    desc: 'Phát triển đội ngũ nhân sự và đặt lợi ích khách hàng làm ưu tiên.',
  },
  {
    icon: Globe,
    title: 'Phát triển bền vững',
    desc: 'Hài hòa giữa tăng trưởng kinh tế và trách nhiệm với môi trường, xã hội.',
  },
  {
    icon: Building2,
    title: 'Hợp tác cùng phát triển',
    desc: 'Xây dựng quan hệ đối tác lâu dài dựa trên niềm tin và lợi ích chung.',
  },
]

const milestones = [
  { year: 'Khởi đầu', title: 'Thành lập tập đoàn', desc: 'TECNIC ra đời với định hướng phát triển công nghệ đa ngành.' },
  { year: 'Mở rộng', title: 'Phát triển hệ sinh thái', desc: 'Hình thành các công ty thành viên chuyên môn hóa trong từng lĩnh vực.' },
  { year: 'Tăng trưởng', title: 'Khẳng định vị thế', desc: 'Mở rộng quy mô hoạt động, hợp tác với nhiều đối tác chiến lược.' },
  { year: 'Tương lai', title: 'Vươn tầm khu vực', desc: 'Hướng tới trở thành tập đoàn công nghệ hàng đầu trong khu vực.' },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Về Tập đoàn TECNIC"
          subtitle="Tập đoàn công nghệ đa ngành, kiến tạo giá trị bền vững bằng công nghệ trong các lĩnh vực y tế, năng lượng, vật liệu, khoáng sản và logistics."
          breadcrumbs={[{ label: 'GIỚI THIỆU' }]}
        />

        {/* Intro */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/about-team.png"
                    alt="Đội ngũ nhân sự TECNIC làm việc tại văn phòng"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                  Câu chuyện của chúng tôi
                </span>
                <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
                  Hành trình kiến tạo giá trị bằng công nghệ
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  TECNIC được xây dựng trên nền tảng đam mê công nghệ và khát
                  vọng tạo ra những giá trị thực sự cho xã hội. Từ những bước đi
                  đầu tiên, tập đoàn đã không ngừng mở rộng quy mô và lĩnh vực
                  hoạt động.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Ngày nay, TECNIC hoạt động trong năm lĩnh vực mũi nhọn với mạng
                  lưới các công ty thành viên chuyên môn hóa, cùng tạo nên sức
                  mạnh tổng hợp và hệ sinh thái công nghệ toàn diện.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="bg-muted/40 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Định hướng phát triển
              </span>
              <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
                Sứ mệnh, tầm nhìn &amp; giá trị cốt lõi
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 90}
                  as="article"
                  className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
                >
                  <span className="grid size-14 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <p.icon className="size-7" />
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Core values grid */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Giá trị chúng tôi theo đuổi
              </span>
              <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
                Những giá trị làm nên TECNIC
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={i * 80}
                  as="article"
                  className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
                >
                  <span className="grid size-12 place-items-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-muted/40 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Quá trình phát triển
              </span>
              <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
                Chặng đường phát triển
              </h2>
            </Reveal>
            <ol className="mt-14 space-y-8">
              {milestones.map((m, i) => (
                <Reveal key={m.title} delay={i * 90} as="li">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      {i < milestones.length - 1 && (
                        <span className="mt-2 w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div className="pb-2">
                      <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                        {m.year}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-bold text-foreground">
                        {m.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
