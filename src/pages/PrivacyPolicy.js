// components/legal/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  const lastUpdated = "July 29, 2026";

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-white/50">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how Paxykop (“we”, “us”, or “our”)
              collects, uses, discloses, and safeguards your information when
              you visit our website{" "}
              <a
                href="https://paxykop.in"
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                paxykop.in
              </a>{" "}
              or use any of our software development services, products, or
              solutions. Please read this policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>
                <strong className="text-white">Personal Information:</strong>{" "}
                Name, email address, phone number, company name, job title, and
                billing information
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> IP address,
                browser type, pages visited, time spent, referring URLs
              </li>
              <li>
                <strong className="text-white">Device Information:</strong>{" "}
                Device type, operating system, unique device identifiers
              </li>
              <li>
                <strong className="text-white">Cookies & Tracking:</strong>{" "}
                Information collected via cookies and similar technologies
              </li>
              <li>
                <strong className="text-white">
                  Project-Related Information:
                </strong>{" "}
                Any information you provide while discussing or working on
                projects with us
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Provide, operate, and maintain our website and Services</li>
              <li>
                Respond to inquiries and deliver project-related communications
              </li>
              <li>Process transactions and manage client relationships</li>
              <li>Improve and expand our services</li>
              <li>
                Send updates or marketing communications (you can opt out)
              </li>
              <li>Detect and prevent security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Sharing of Information
            </h2>
            <p className="mb-3">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>
                Trusted service providers under confidentiality agreements
              </li>
              <li>Business partners (only with your consent)</li>
              <li>Legal authorities when required by law</li>
              <li>
                In connection with a merger, acquisition, or sale of assets
              </li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">
                We do not sell, rent, or trade your personal information to
                third parties.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy and to
              comply with legal requirements. When data is no longer needed, we
              securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:info@paxykop.in"
                className="text-cyan-400 hover:underline"
              >
                info@paxykop.in
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Security
            </h2>
            <p>
              Paxykop implements appropriate technical and organizational
              measures to protect your personal information. However, no method
              of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own, including Singapore. We ensure appropriate
              safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Children’s Privacy
            </h2>
            <p>
              Our Services are not directed to individuals under the age of 16.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Cookies
            </h2>
            <p>
              We use cookies and similar technologies. For more details, please
              see our{" "}
              <a href="/cookies" className="text-cyan-400 hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will post
              the updated version on this page and revise the “Last updated”
              date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Contact Us
            </h2>
            <p className="mb-4">
              For questions about this Privacy Policy, contact us at:
            </p>
            <ul className="space-y-2 text-white/70">
              <li>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:info@paxykop.in"
                  className="text-cyan-400 hover:underline"
                >
                  info@paxykop.in
                </a>
              </li>
              <li>
                <strong className="text-white">Website:</strong>{" "}
                <a
                  href="https://paxykop.in"
                  className="text-cyan-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://paxykop.in
                </a>
              </li>
              <li>
                <strong className="text-white">Address:</strong> L-39, MBFC, 10
                Marina Blvd, Singapore 018983
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
