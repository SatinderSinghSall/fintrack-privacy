import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6">
      <div className="max-w-3xl text-center">
        {/* Logo / Brand */}
        <h1 className="text-5xl font-bold text-blue-600 tracking-tight">
          FinTrack
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Smart budgeting • Expense tracking • Financial clarity
        </p>

        <p className="mt-6 text-gray-500">
          Official privacy policy and account deletion pages for the FinTrack
          mobile application.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/privacy-policy"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="/account-deletion"
            className="px-6 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition"
          >
            Delete Account
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-gray-400">
        © {new Date().getFullYear()} FinTrack • All rights reserved
      </footer>
    </main>
  );
}
