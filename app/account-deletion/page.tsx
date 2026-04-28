import { Card, CardContent } from "@/components/ui/card";
import LegalLayout from "@/components/LegalLayout";

export default function AccountDeletionPage() {
  return (
    <LegalLayout>
      <div className="max-w-3xl mx-auto">
        {/* MAIN CARD */}
        <Card className="rounded-3xl border border-gray-200 shadow-xl bg-white">
          <CardContent className="p-8 md:p-12 space-y-10">
            {/* HEADER */}
            <div className="text-center space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Delete Your FinTrack Account
              </h1>

              <p className="text-gray-500 max-w-md mx-auto">
                Request permanent deletion of your account and associated data.
              </p>
            </div>

            {/* HOW TO DELETE */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 space-y-5">
              <h2 className="text-lg font-semibold text-gray-900">
                How to Request Deletion
              </h2>

              <div className="space-y-3 text-gray-600">
                <p>1. Send an email from your registered FinTrack account.</p>

                <p>2. Email us at:</p>

                {/* EMAIL CTA */}
                <a
                  href="mailto:satindersinghsall111@gmail.com"
                  className="block text-center bg-white border border-gray-200 text-blue-600 font-medium py-3 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-50 transition"
                >
                  satindersinghsall111@gmail.com
                </a>

                <p>3. Use this subject line:</p>

                {/* SUBJECT BLOCK */}
                <div className="bg-white border border-dashed border-gray-300 text-center py-3 rounded-xl font-medium text-gray-700">
                  Account Deletion Request – FinTrack
                </div>

                <p>4. Our team will verify and process your request.</p>
              </div>
            </div>

            {/* DATA SECTION */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Data That Will Be Deleted
              </h2>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <ul className="space-y-2 text-gray-600">
                  <li>• User account information</li>
                  <li>• Email and authentication data</li>
                  <li>• Budgets and financial records</li>
                  <li>• Expense and income history</li>
                </ul>
              </div>
            </div>

            {/* WARNING */}
            <div className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <span className="text-orange-500 text-lg">⚠️</span>
              <p className="text-sm text-orange-700">
                This action is permanent and cannot be undone.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </LegalLayout>
  );
}
