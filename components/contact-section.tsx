import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const contacts = [
  { icon: MapPin, label: 'Trụ sở', value: 'Tầng 2, Tòa nhà New Skyline, KĐT mới Văn Quán - Yên Phúc, Phường Hà Đông, Thành phố Hà Nội, Việt Nam.' },
  { icon: Phone, label: 'Hotline', value: '038 988 0369 Hoặc 034 84 02466' },
  { icon: Mail, label: 'Email', value: 'tecnic.vn.group@gmail.com' },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        <img
          src="/cta-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#003a6e]/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Liên hệ
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-white md:text-4xl">
              Cùng TECNIC kiến tạo giá trị bằng công nghệ
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-white/80">
              Để lại thông tin hoặc liên hệ trực tiếp với chúng tôi để được tư
              vấn về giải pháp công nghệ phù hợp cho doanh nghiệp của bạn.
            </p>

            <div className="mt-8 space-y-5">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white/10 text-secondary backdrop-blur">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-white/60">{c.label}</p>
                    <p className="font-semibold text-white">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="rounded-2xl bg-background p-6 shadow-2xl md:p-8">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Đăng ký tư vấn
              </h3>
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Họ và tên" id="name" placeholder="Nguyễn Văn A" />
                  <Field
                    label="Số điện thoại"
                    id="phone"
                    type="tel"
                    placeholder="09xx xxx xxx"
                  />
                </div>
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="email@congty.com"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Nội dung
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Nội dung cần tư vấn..."
                    className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Gửi thông tin
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = 'text',
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30"
      />
    </div>
  )
}
