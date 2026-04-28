"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <main className="min-h-screen relative flex flex-col bg-white overflow-hidden">
      {/* 🌟 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-100/40 blur-3xl rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-indigo-100/40 blur-3xl rounded-full" />
      </div>

      {/* 🔝 NAVBAR */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/70 border-b border-gray-200/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* BRAND */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center shadow-md group-hover:scale-105 transition">
              <span className="text-white text-sm">💼</span>
            </div>

            <span className="font-semibold text-gray-900 text-lg tracking-tight">
              FinTrack
            </span>
          </Link>

          {/* NAV */}
          <nav className="flex items-center gap-2 bg-gray-100/70 p-1 rounded-xl backdrop-blur">
            <Link
              href="/privacy-policy"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/privacy-policy")
                  ? "bg-white shadow-sm text-blue-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Privacy Policy
            </Link>

            <Link
              href="/account-deletion"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/account-deletion")
                  ? "bg-white shadow-sm text-blue-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Delete Account
            </Link>
          </nav>
        </div>
      </header>

      {/* 📄 CONTENT */}
      <section className="flex-1 flex justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-4xl">{children}</div>
      </section>

      {/* 🔻 FOOTER */}
      <footer className="relative border-t border-gray-200/70 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-700">FinTrack</span>. All
            rights reserved.
          </p>

          <div className="flex justify-center gap-8 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/account-deletion"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              Account Deletion
            </Link>
          </div>

          {/* subtle divider glow */}
          <div className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 rounded-full" />
        </div>
      </footer>
    </main>
  );
}
