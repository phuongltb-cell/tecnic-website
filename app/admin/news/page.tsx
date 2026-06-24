"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/lib/supabase";
import { uploadImage } from "@/lib/uploadImage";

type NewsItem = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  youtube_url: string;
  status: string;
  created_at: string;
};

function createSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function AdminNewsPage() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [status, setStatus] = useState("published");
  const [imageFile, setImageFile] = useState<File | null>(null);

  async function loadNews() {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      alert("Lỗi tải danh sách: " + error.message);
      return;
    }

    setNewsList((data || []) as NewsItem[]);
  }

  function resetForm() {
    setEditingId(null);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setImage("");
    setYoutubeUrl("");
    setStatus("published");
    setImageFile(null);
  }

  function startEdit(item: NewsItem) {
    setEditingId(item.id);
    setTitle(item.title || "");
    setSlug(item.slug || "");
    setExcerpt(item.excerpt || "");
    setContent(item.content || "");
    setImage(item.image || "");
    setYoutubeUrl(item.youtube_url || "");
    setStatus(item.status || "published");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function saveNews() {
    if (!title.trim()) {
      alert("Vui lòng nhập tiêu đề");
      return;
    }

    const finalSlug = slug.trim() || createSlug(title);

    let finalImage = image;

if (imageFile) {
  finalImage = await uploadImage(imageFile);
}
    const payload = {
      
      title: title.trim(),
      slug: finalSlug,
      excerpt: excerpt.trim(),
      content,
      image: finalImage,
      youtube_url: youtubeUrl.trim(),
      status,
      updated_at: new Date().toISOString(),
    };

    if (editingId !== null) {
      const { error } = await supabase
        .from("news")
        .update(payload)
        .eq("id", editingId);

      if (error) {
        alert("Lỗi cập nhật: " + error.message);
        return;
      }

      setNewsList((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, ...payload } : item
        )
      );

      alert("Đã cập nhật bài viết");
      resetForm();
  
      return;
    }

    const { data, error } = await supabase
      .from("news")
      .insert([payload])
      .select()
      .single();

    if (error) {
      alert("Lỗi thêm bài viết: " + error.message);
      return;
    }

    if (data) {
      setNewsList((prev) => [data as NewsItem, ...prev]);
    }

    alert("Đã thêm bài viết");
    resetForm();
  }

  async function deleteNews(id: number) {
    if (!confirm("Bạn có chắc muốn xóa bài viết này không?")) return;

    const { error } = await supabase
      .from("news")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Lỗi xóa: " + error.message);
      return;
    }

    setNewsList((prev) => prev.filter((item) => item.id !== id));

    if (editingId === id) {
      resetForm();
    }

    alert("Đã xóa bài viết");
  }

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold">Quản lý Tin tức</h1>

      <section className="mt-8 rounded-2xl border bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">
          {editingId ? "Sửa bài viết" : "Thêm bài viết"}
        </h2>

        <div className="grid gap-4">
          <input
            className="rounded-lg border p-3"
            placeholder="Tiêu đề bài viết"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (editingId === null) {
                setSlug(createSlug(e.target.value));
              }
            }}
          />

          <input
            className="rounded-lg border p-3"
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />

          <textarea
            className="rounded-lg border p-3"
            placeholder="Mô tả ngắn"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />

          <div className="grid gap-3">
  <label className="font-medium">Ảnh đại diện</label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => setImageFile(e.target.files?.[0] || null)}
  />

  {imageFile && (
    <img
      src={URL.createObjectURL(imageFile)}
      alt="Preview"
      className="h-56 w-full rounded-xl object-cover"
    />
  )}

  {!imageFile && image && (
    <img
      src={image}
      alt="Ảnh hiện tại"
      className="h-56 w-full rounded-xl object-cover"
    />
  )}
</div>

          <input
            className="rounded-lg border p-3"
            placeholder="Link YouTube"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />

          <select
            className="rounded-lg border p-3"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>

          <textarea
            className="min-h-[240px] rounded-lg border p-3"
            placeholder="Nội dung bài viết"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="flex gap-3">
            <button
              onClick={saveNews}
              className="rounded-lg bg-green-600 px-6 py-3 text-white"
            >
              {editingId ? "Cập nhật bài viết" : "Lưu bài viết"}
            </button>

            <button
              onClick={resetForm}
              className="rounded-lg border px-6 py-3"
            >
              Hủy
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border bg-white p-6">
        <h2 className="mb-5 text-2xl font-bold">Danh sách bài viết</h2>

        <div className="grid gap-5">
          {newsList.map((item) => (
            <article
              key={item.id}
              className="grid gap-4 rounded-xl border p-4 md:grid-cols-[220px_1fr]"
            >
              <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Chưa có ảnh</span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-500">/{item.slug}</p>
                <p className="mt-2 text-gray-600">{item.excerpt}</p>

                <div className="mt-4 flex gap-3">
                  <a
                    href={`/news/${item.slug}`}
                    target="_blank"
                    className="rounded-lg border px-4 py-2"
                  >
                    Xem
                  </a>

                  <button
                    onClick={() => startEdit(item)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                  >
                    Sửa
                  </button>

                  <button
                    onClick={() => deleteNews(item.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}