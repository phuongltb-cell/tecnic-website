"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib//lib/supabase";
import { AboutSection } from "@/components/home/about-section";

export default function AdminPage() {
  const [newsCount, setNewsCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [companiesCount, setCompaniesCount] = useState(0);
  const [contactsCount, setContactsCount] = useState(0);

  async function loadDashboard() {
    const news = await supabase.from("news").select("*", { count: "exact", head: true });
    const jobs = await supabase.from("jobs").select("*", { count: "exact", head: true });
    const companies = await supabase.from("companies").select("*", { count: "exact", head: true });
    const contacts = await supabase.from("contacts").select("*", { count: "exact", head: true });

    setNewsCount(news.count || 0);
    setJobsCount(jobs.count || 0);
    setCompaniesCount(companies.count || 0);
    setContactsCount(contacts.count || 0);
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold mb-8">
        TECNIC Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border p-6">
          <p className="text-gray-500">Bài viết</p>
          <h2 className="text-4xl font-bold">{newsCount}</h2>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <p className="text-gray-500">Tuyển dụng</p>
          <h2 className="text-4xl font-bold">{jobsCount}</h2>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <p className="text-gray-500">Công ty</p>
          <h2 className="text-4xl font-bold">{companiesCount}</h2>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <p className="text-gray-500">Liên hệ</p>
          <h2 className="text-4xl font-bold">{contactsCount}</h2>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <a className="bg-white border rounded-xl p-6 text-xl" href="/admin/news">
          📰 Quản lý Tin tức
        </a>

        <a className="bg-white border rounded-xl p-6 text-xl" href="/admin/jobs">
          💼 Quản lý Tuyển dụng
        </a>

        <a className="bg-white border rounded-xl p-6 text-xl" href="/admin/companies">
          🏢 Công ty thành viên
        </a>

        <a className="bg-white border rounded-xl p-6 text-xl" href="/admin/contacts">
          📩 Liên hệ khách hàng
        </a>
      </div>
    </main>
  );
}