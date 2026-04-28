import { Card, CardContent } from "@/components/ui/card";
import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout>
      <div className="max-w-3xl mx-auto">
        <Card className="rounded-3xl border border-gray-200 shadow-xl bg-white">
          <CardContent className="p-8 md:p-12 space-y-12">
            {/* HEADER */}
            <div className="text-center space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Privacy Policy
              </h1>

              <p className="text-gray-500 text-sm">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* INTRO */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                Introduction
              </h2>

              <p className="text-gray-600 leading-relaxed">
                FinTrack respects your privacy and is committed to protecting
                your personal data. This policy explains how we collect, use,
                and safeguard your information when using the FinTrack mobile
                application.
              </p>
            </section>

            {/* INFO COLLECTED */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Information We Collect
              </h2>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <ul className="space-y-2 text-gray-600">
                  <li>• Email address for authentication</li>
                  <li>• Budget records created by users</li>
                  <li>• Expense and income data</li>
                  <li>• User profile information</li>
                </ul>
              </div>
            </section>

            {/* USAGE */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                How We Use Your Data
              </h2>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide and maintain the FinTrack application</li>
                  <li>• Manage user authentication</li>
                  <li>• Generate analytics and financial insights</li>
                  <li>• Improve performance and reliability</li>
                </ul>
              </div>
            </section>

            {/* SECURITY */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">Security</h2>

              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect your
                data. However, no internet transmission is 100% secure.
              </p>
            </section>

            {/* ACCOUNT DELETION */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Account Deletion
              </h2>

              <p className="text-gray-600">
                You may request deletion of your account and associated
                financial records at any time.
              </p>

              <a
                href="/account-deletion"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                View deletion instructions →
              </a>
            </section>

            {/* CONTACT */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Contact</h2>

              <a
                href="mailto:satindersinghsall111@gmail.com"
                className="inline-block px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 text-blue-600 font-medium hover:bg-blue-50 transition"
              >
                satindersinghsall111@gmail.com
              </a>
            </section>
          </CardContent>
        </Card>
      </div>
    </LegalLayout>
  );
}
