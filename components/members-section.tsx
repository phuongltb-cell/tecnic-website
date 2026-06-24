import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const members = [
  {
    brand: 'Tecnic Medical',
    name: 'Công Ty CP Công Nghệ Và Dịch Vụ Y Tế Tecnic',
    field: 'Y tế',
  },
  {
    brand: 'Tecnic Electric',
    name: 'Công Ty CP Năng Lượng Và Hệ Thống Điện Tecnic',
    field: 'Năng lượng',
  },
  {
    brand: 'Tecnic Mat',
    name: 'Công Ty CP Công Nghệ Vật Liệu Tecnic',
    field: 'Vật liệu',
  },
  {
    brand: 'Tecmin',
    name: 'Công Ty CP Khoáng Sản Tecmin',
    field: 'Khoáng sản',
  },
  {
    brand: 'Tecin Logistics',
    name: 'Công Ty CP Đầu Tư Hạ Tầng Logistics Và Vận Tải Tecin',
    field: 'Logistics',
  },
]

export function MembersSection() {
  return (
    <section id="members" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Công ty thành viên
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Các đơn vị thành viên TECNIC
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Mạng lưới công ty thành viên chuyên môn hóa trong từng lĩnh vực,
            cùng tạo nên sức mạnh tổng hợp của tập đoàn.
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
  )
}
