import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] text-white px-6">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0b1220] to-[#111827]" />

      {/* GLOW ORB */}
      <div className="absolute w-[420px] h-[420px] bg-blue-500/20 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />

      {/* CONTENT */}
      <div className="relative max-w-3xl text-center">
        {/* LOGO ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-xl">
            <span className="text-blue-400 text-2xl">💼</span>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          FinTrack
        </h1>

        {/* TAGLINE */}
        <p className="mt-4 text-gray-400 text-lg">
          Smart budgeting • Expense tracking • Financial clarity
        </p>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-500 max-w-xl mx-auto">
          Official privacy policy and account deletion pages for the FinTrack
          mobile application.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/privacy-policy"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="/account-deletion"
            className="px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md font-semibold text-gray-200 hover:bg-white/10 transition"
          >
            Delete Account
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="absolute bottom-6 text-sm text-gray-500">
        © {new Date().getFullYear()} FinTrack • All rights reserved
      </footer>
    </main>
  );
}
