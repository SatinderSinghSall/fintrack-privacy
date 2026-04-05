import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 backdrop-blur-lg bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-blue-600 text-lg"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            FinTrack
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link
              href="/privacy-policy"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/account-deletion"
              className="hover:text-blue-600 transition-colors"
            >
              Delete Account
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <section className="flex-1 flex justify-center px-6 py-16">
        <div className="w-full max-w-4xl">{children}</div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center space-y-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FinTrack. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </Link>

            <Link href="/account-deletion" className="hover:text-blue-600">
              Account Deletion
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
