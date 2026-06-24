import { Reveal } from '@/components/reveal'

const stats = [
  { value: '05', label: 'Lĩnh vực hoạt động' },
  { value: '500+', label: 'Nhân sự chuyên môn' },
  { value: '100+', label: 'Đối tác & khách hàng' },
  { value: '24/7', label: 'Hỗ trợ vận hành' },
]

export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <p className="font-heading text-4xl font-extrabold md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80 md:text-base">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
