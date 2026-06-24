import Link from "next/link";
import { supabase } from "@/lib/lib/supabase";

type NewsItem = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  created_at: string;
};

export default async function NewsPage() {
  const { data: news } = await supabase
    .from("news")
    .select("*")
    .eq("status", "published")
    .order("id", { ascending: false });

  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            TECNIC GROUP
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Tin tức & Sự kiện
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl">
            Cập nhật các tin tức, sự kiện và hoạt động mới nhất từ hệ sinh thái TECNIC.
          </p>
        </div>

        <div className="space-y-10">
          {news?.map((item: NewsItem) => (
            <Link
              href={`/news/${item.slug}`}
              key={item.id}
              className="group grid grid-cols-1 md:grid-cols-[420px_1fr] gap-8 items-start border-b pb-10"
            >
              <div className="h-[260px] overflow-hidden rounded-xl bg-gray-100">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-400">
                    Chưa có ảnh
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-3">
                  {item.created_at
                    ? new Date(item.created_at).toLocaleDateString("vi-VN")
                    : ""}
                </p>

                <h2 className="text-2xl md:text-3xl font-bold leading-snug group-hover:text-green-600 transition">
                  {item.title}
                </h2>

                <p className="mt-4 text-gray-600 text-lg leading-8">
                  {item.excerpt}
                </p>

                <span className="inline-block mt-6 font-semibold text-green-600">
                  Xem chi tiết →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}