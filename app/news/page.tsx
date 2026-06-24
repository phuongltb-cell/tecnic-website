import Link from "next/link";
import { supabase } from "@/lib/lib/supabase";

type NewsItem = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  status: string;
  created_at: string;
};

export default async function NewsPage() {
  const { data } = await supabase
    .from("news")
    .select("*")
    .eq("status", "published")
    .order("id", { ascending: false });

  const news = (data || []) as NewsItem[];
  const mainNews = news[0];
  const smallNews = news.slice(1);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold">Tin tức & Sự kiện</h1>
        <p className="mt-3 text-gray-600">
          Cập nhật tin tức mới nhất từ TECNIC.
        </p>

        {mainNews && (
          <Link
            href={`/news/${mainNews.slug}`}
            className="mt-10 grid gap-6 border-b pb-8 md:grid-cols-[55%_1fr]"
          >
            <div className="h-[360px] overflow-hidden rounded-xl bg-gray-100">
              {mainNews.image && (
                <img
                  src={mainNews.image}
                  alt={mainNews.title}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight hover:text-green-600">
                {mainNews.title}
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                {mainNews.excerpt}
              </p>

              <span className="mt-6 inline-block font-semibold text-green-600">
                Xem chi tiết →
              </span>
            </div>
          </Link>
        )}

        <div className="mt-8 space-y-8">
          {smallNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="grid gap-6 border-b pb-8 md:grid-cols-[330px_1fr]"
            >
              <div className="h-[210px] overflow-hidden rounded-xl bg-gray-100">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <div>
                <h3 className="text-2xl font-bold leading-snug hover:text-green-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg leading-8 text-gray-600">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}