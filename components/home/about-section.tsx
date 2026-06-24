import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, HeartPulse, Zap } from "lucide-react";

const fields = [
  {
    title: "Vật liệu xây dựng",
    icon: Building2,
    text: "Nghiên cứu, sản xuất và cung cấp các sản phẩm gạch bê tông lát nền, gạch bê tông giả đá nghệ thuật, gạch xây chất lượng cao.",
  },
  {
    title: "Năng lượng & hệ thống điện",
    icon: Zap,
    text: "Tích hợp, cung cấp, lắp đặt và bảo trì hệ thống điện cho các tòa nhà, tối ưu công nghệ và tiết kiệm năng lượng.",
  },
  {
    title: "Y tế thông minh",
    icon: HeartPulse,
    text: "Phát triển hệ sinh thái y tế dự phòng, chăm sóc tại nhà và giải pháp công nghệ y tế chuyên sâu cho bệnh viện.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/about-tecnic.jpg"
              alt="Giới thiệu TECNIC"
              width={720}
              height={560}
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#005BAC] p-6 text-white shadow-xl md:block">
            <p className="text-4xl font-bold">TECNIC</p>
            <p className="mt-1 text-sm">Phụng sự để dẫn đầu</p>
          </div>
        </div>

        <div>
          <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#005BAC]">
            Giới thiệu TECNIC
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Phụng sự để dẫn đầu
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            <p>
              Kính thưa quý khách hàng, đối tác, nhà đầu tư và toàn thể CBNV
              hệ thống TECNIC!
            </p>

            <p>
              Công ty Cổ phần Tập đoàn TECNIC xin gửi lời chào trân trọng và lời
              chúc tốt đẹp nhất đến các quý vị. Với phương châm kinh doanh là
              phụng sự, phụng sự để dẫn đầu, chúng tôi mong muốn được hợp tác,
              đồng hành với quý khách hàng, đối tác để cùng thành công và phát
              triển thịnh vượng.
            </p>

            <p>
              Với nguồn lực và thế mạnh của mình, TECNIC phát triển hệ thống
              kinh doanh trong các lĩnh vực trọng tâm như vật liệu xây dựng,
              năng lượng và hệ thống điện, y tế thông minh.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {fields.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#005BAC] text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-bold text-slate-900">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-slate-600">
            <p className="leading-8">
              Chúng tôi có đội ngũ cán bộ quản lý, chuyên gia, kỹ thuật giàu
              kinh nghiệm, nhiệt huyết và trách nhiệm. TECNIC cam kết mang lại
              giá trị cho khách hàng, đối tác để mọi sự hợp tác đều hướng đến
              thắng lợi bền vững.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center rounded-xl bg-[#005BAC] px-6 py-3 font-bold text-white transition hover:bg-[#004a8f]"
            >
              Tìm hiểu thêm
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-[#005BAC] px-6 py-3 font-bold text-[#005BAC] transition hover:bg-[#005BAC] hover:text-white"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}