import {
  HeartPulse,
  Zap,
  Layers,
  Mountain,
  Truck,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const sectors = [
  {
    icon: HeartPulse,
    name: 'Y tế',
    image: '/biz-medical.png',
    desc: 'Cung cấp giải pháp công nghệ và dịch vụ y tế tiên tiến, nâng cao chất lượng chăm sóc sức khỏe.',
  },
  {
    icon: Zap,
    name: 'Năng lượng',
    image: '/biz-electric.png',
    desc: 'Phát triển hệ thống điện và năng lượng tái tạo, hướng tới tương lai phát triển bền vững.',
  },
  {
    icon: Layers,
    name: 'Vật liệu',
    image: '/biz-material.png',
    desc: 'Nghiên cứu và sản xuất vật liệu công nghệ cao phục vụ công nghiệp và xây dựng.',
  },
  {
    icon: Mountain,
    name: 'Khoáng sản',
    image: '/biz-mineral.png',
    desc: 'Khai thác và chế biến khoáng sản hiệu quả, tối ưu tài nguyên gắn với trách nhiệm môi trường.',
  },
  {
    icon: Truck,
    name: 'Logistics',
    image: '/biz-logistics.png',
    desc: 'Đầu tư hạ tầng logistics và vận tải, kết nối chuỗi cung ứng thông minh và hiệu quả.',
  },
]

export function BusinessSection() {
  return (
    <section id="business" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Lĩnh vực hoạt động
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Hệ sinh thái công nghệ đa ngành
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Năm lĩnh vực mũi nhọn tạo nên nền tảng phát triển toàn diện của tập
            đoàn TECNIC.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal
              key={s.name}
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
  )
}
