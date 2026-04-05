import { Card, CardContent } from "@/components/ui/card";
import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout>
      <Card className="shadow-2xl border border-gray-100 rounded-2xl backdrop-blur">
        <CardContent className="p-10 md:p-14 space-y-10">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight">
              Privacy Policy
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">Introduction</h2>

            <p className="text-gray-600 leading-relaxed">
              FinTrack respects your privacy and is committed to protecting your
              personal data. This policy explains how we collect, use and
              safeguard your information when using the FinTrack mobile
              application.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">Information We Collect</h2>

            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>Email address for authentication</li>
              <li>Budget records created by users</li>
              <li>Expense and income data</li>
              <li>User profile information</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">How We Use Your Data</h2>

            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>Provide and maintain the FinTrack application</li>
              <li>Manage user authentication</li>
              <li>Generate analytics and financial insights</li>
              <li>Improve performance and reliability</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">Security</h2>

            <p className="text-gray-600">
              We implement industry-standard security measures to protect your
              data. However no internet transmission is 100% secure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">Account Deletion</h2>

            <p className="text-gray-600">
              You may request deletion of your account and associated financial
              records at any time.
            </p>

            <a
              href="/account-deletion"
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              View deletion instructions →
            </a>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">Contact</h2>

            <a
              href="mailto:satindersinghsall111@gmail.com"
              className="text-blue-600 hover:underline"
            >
              satindersinghsall111@gmail.com
            </a>
          </section>
        </CardContent>
      </Card>
    </LegalLayout>
  );
}
