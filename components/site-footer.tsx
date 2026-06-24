import Link from 'next/link'
import { TecnicLogo } from '@/components/tecnic-logo'

const sectors = ['Y tế', 'Năng lượng', 'Vật liệu', 'Khoáng sản', 'Logistics']
const links = [
  { label: 'GIỚI THIỆU', href: '/about' },
  { label: 'SỨC KHỎE CỘNG ĐỒNG',  href: "https://tecnic.vn", },
  { label: 'TIN TỨC & TUYỂN DỤNG', href: "https://tecnic.vn/tin-tuc-tuyen-dung" },
  { label: 'VĂN HÓA DOANH NGHIỆP', href: '/news' },
  { label: 'LIÊN HỆ', href: '/contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#02263f] text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <TecnicLogo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Tập đoàn công nghệ đa ngành, kiến tạo giá trị bền vững bằng công
              nghệ tiên tiến.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Lĩnh vực
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {sectors.map((s) => (
                <li key={s}>
                  <Link
                    href="/ecosystem"
                    className="text-white/60 transition-colors hover:text-secondary"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Liên kết
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 transition-colors hover:text-secondary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Liên hệ
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>Website: tecnic.com.vn</li>
              <li>Email: tecnic.vn.group@gmail.com</li>
              <li>Hotline: 034 84 02466</li>
              <li>Tầng 2, Tòa nhà New Skyline, KĐT mới Văn Quán - Yên Phúc, Phường Hà Đông, Thành phố Hà Nội, Việt Nam.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Bản quyền thuộc Tập đoàn TECNIC.</p>
          <p>Kiến tạo để phụng sự</p>
        </div>
      </div>
    </footer>
  )
}
