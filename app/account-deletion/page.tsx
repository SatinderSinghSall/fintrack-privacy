import { Card, CardContent } from "@/components/ui/card";
import LegalLayout from "@/components/LegalLayout";

export default function AccountDeletionPage() {
  return (
    <LegalLayout>
      <Card className="shadow-2xl border border-gray-100 rounded-2xl">
        <CardContent className="p-10 md:p-14 space-y-10">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
              Delete Your FinTrack Account
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Request permanent deletion of your account and data
            </p>
          </div>

          <div className="bg-slate-50 border rounded-xl p-6 space-y-4">
            <h2 className="font-semibold text-lg">How to Request Deletion</h2>

            <p>1. Send an email from your registered FinTrack account.</p>

            <p>2. Email us at:</p>

            <a
              href="mailto:satindersinghsall111@gmail.com"
              className="block text-center bg-blue-50 text-blue-700 font-medium py-3 rounded-lg hover:bg-blue-100 transition"
            >
              satindersinghsall111@gmail.com
            </a>

            <p>3. Use this subject line:</p>

            <div className="bg-gray-100 text-center py-3 rounded-lg font-medium">
              Account Deletion Request – FinTrack
            </div>

            <p>4. Our team will verify and process the request.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-3">
              Data That Will Be Deleted
            </h2>

            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>User account information</li>
              <li>Email and authentication data</li>
              <li>Budgets and financial records</li>
              <li>Expense and income history</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-md text-sm">
            ⚠️ This action is permanent and cannot be undone.
          </div>
        </CardContent>
      </Card>
    </LegalLayout>
  );
}
