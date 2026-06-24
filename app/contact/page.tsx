"use client";

import { useState } from "react";
import { supabase } from "@/lib/lib/supabase";

export default function ContactPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!fullname.trim()) {
      alert("Vui lòng nhập họ tên");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("contacts").insert([
      {
        fullname,
        email,
        phone,
        message,
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Lỗi gửi thông tin: " + error.message);
      return;
    }

    alert("Cảm ơn quý khách, thông tin đã được gửi.");

    setFullname("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-100 px-6 py-4 text-gray-600">
        <div className="mx-auto max-w-7xl">
          Trang chủ / Liên hệ
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold uppercase text-gray-800 md:text-3xl">
            CÔNG TY CỔ PHẦN TẬP ĐOÀN TECNIC
          </h1>

          <div className="mt-6 space-y-3 text-lg leading-8 text-gray-700">
            <p>
              <strong>• Địa chỉ:</strong> Tầng 2, Tòa nhà New Skyline,
              KĐT mới Văn Quán - Yên Phúc, Phường Hà Đông, Thành phố Hà Nội,
              Việt Nam.
            </p>

            <p>
              <strong>• Mã số thuế:</strong> 0108469044
            </p>

            <p>
              <strong>• Email liên hệ:</strong> tecnic.vn.group@gmail.com
            </p>

            <p>
              <strong>• Điện thoại liên hệ:</strong> 038 988 0369 hoặc 034 84 02466
            </p>

            <p>
              <strong>• Website:</strong> tecnic.com.vn
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold uppercase">
            Bản đồ chỉ đường
          </h2>

          <div className="mt-5 overflow-hidden rounded-xl border bg-gray-100">
            <iframe
              title="TECNIC Map"
              src="https://www.google.com/maps?q=New%20Skyline%20V%C4%83n%20Qu%C3%A1n%20H%C3%A0%20%C4%90%C3%B4ng%20H%C3%A0%20N%E1%BB%99i&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold uppercase text-gray-800">
            Liên hệ với chúng tôi
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Quý khách vui lòng điền đầy đủ các thông tin vào các ô dưới đây
            để gửi thông tin đến chúng tôi!
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                className="rounded-lg border p-4 outline-none focus:border-red-500"
                placeholder="Họ tên*"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />

              <input
                className="rounded-lg border p-4 outline-none focus:border-red-500"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input
              className="w-full rounded-lg border p-4 outline-none focus:border-red-500"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              className="h-40 w-full rounded-lg border p-4 outline-none focus:border-red-500"
              placeholder="Thông tin thêm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-red-600 px-10 py-4 font-bold uppercase text-white transition hover:bg-red-700 disabled:opacity-60"
            >
              {loading ? "Đang gửi..." : "Gửi thông tin"}
            </button>
          </form>
        </div>
      </section>

      <a
        href="tel:0389880369"
        className="fixed bottom-6 left-6 z-50 rounded-full bg-red-600 px-6 py-4 font-bold text-white shadow-xl"
      >
        ☎ 038 988 0369
      </a>

      <a
        href="https://zalo.me/0389880369"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 px-5 py-4 font-bold text-white shadow-xl"
      >
        Zalo
      </a>
    </main>
  );
}