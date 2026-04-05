import { Card, CardContent } from "@/components/ui/card";

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-10">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-blue-600">FinTrack</h1>
            </div>

            <h2 className="text-2xl font-semibold text-center mb-2">
              Account Deletion Request
            </h2>

            <p className="text-center text-sm text-gray-500 mb-6">
              Manage your data and privacy with full control
            </p>

            <p className="text-gray-600 mb-6">
              FinTrack respects your privacy. If you want to permanently delete
              your account and all financial data, follow the steps below.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl space-y-3">
              <h3 className="font-semibold text-lg">How to Request Deletion</h3>

              <p>1. Send an email from your registered FinTrack email.</p>

              <p>2. Email your request to:</p>

              <div className="bg-indigo-100 text-indigo-800 font-semibold text-center py-2 rounded-md">
                satindersinghsall111@gmail.com
              </div>

              <p>3. Use this subject line:</p>

              <div className="bg-gray-200 text-center py-2 rounded-md font-medium">
                Account Deletion Request – FinTrack
              </div>

              <p>4. Our team will verify and process your request.</p>
            </div>

            <h3 className="font-semibold text-lg mt-8 mb-2">
              Data That Will Be Deleted
            </h3>

            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>User account data</li>
              <li>Email and login information</li>
              <li>Budgets and financial records</li>
              <li>Expenses and income history</li>
              <li>Profile information</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6 rounded-md text-sm">
              ⚠️ Your data will be permanently deleted and cannot be recovered.
            </div>

            <h3 className="font-semibold text-lg mt-8 mb-2">Processing Time</h3>

            <p className="text-gray-600">
              Requests are processed within <strong>7 days</strong>.
            </p>

            <p className="text-center text-xs text-gray-400 mt-8">
              © FinTrack • Developed by Satinder Singh
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
