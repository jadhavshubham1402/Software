// components/legal/TermsOfService.jsx
import React from "react";

const TermsOfService = () => {
  const lastUpdated = "July 29, 2026";

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-white/50">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website{" "}
              <a
                href="https://paxykop.in"
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                paxykop.in
              </a>
              , or any products, services, software, or solutions offered by
              Paxykop (collectively, the “Services”), you agree to be bound by
              these Terms of Service (“Terms”). If you do not agree to these
              Terms, you must not access or use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. About Paxykop
            </h2>
            <p>
              Paxykop is a software development company that provides custom
              software solutions, web & mobile application development, UI/UX
              design, cloud solutions, AI & machine learning services, and
              related digital products and consulting services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Account Registration
            </h2>
            <p>
              Some Services may require you to create an account. You are
              responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account.
              You agree to provide accurate, current, and complete information
              during registration and to update such information as needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Acceptable Use
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Use the Services for any illegal or unauthorized purpose</li>
              <li>
                Attempt to reverse engineer, decompile, or disassemble any
                software or systems provided by Paxykop
              </li>
              <li>
                Interfere with or disrupt the integrity, security, or
                performance of the Services
              </li>
              <li>
                Upload or transmit any malicious code, viruses, or harmful
                content
              </li>
              <li>
                Violate the intellectual property or other rights of Paxykop or
                any third party
              </li>
              <li>
                Use the Services to send unsolicited communications or spam
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Intellectual Property
            </h2>
            <p>
              All content, software, source code, designs, graphics, logos,
              trademarks, and materials available through the Services are the
              exclusive property of Paxykop or its licensors and are protected
              by applicable intellectual property laws. You are granted a
              limited, non-exclusive, non-transferable, and revocable license to
              use the Services solely for their intended purpose. You may not
              copy, modify, distribute, sell, or create derivative works without
              prior written permission from Paxykop.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Client Projects & Deliverables
            </h2>
            <p>
              For custom software development, design, or consulting projects,
              ownership of the final deliverables will be transferred to the
              client only after full payment has been received, unless otherwise
              agreed in a separate written contract or Statement of Work. Until
              full payment is made, Paxykop retains all rights to the work
              product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Payment & Fees
            </h2>
            <p>
              Fees for Services are as described on our website, proposals, or
              individual agreements. All payments are due according to the
              agreed payment schedule. Late payments may result in suspension of
              Services. Unless otherwise stated in a written agreement, all fees
              are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Termination
            </h2>
            <p>
              Paxykop may suspend or terminate your access to the Services at
              any time, with or without cause or prior notice, if you violate
              these Terms or for any other reason. Upon termination, your right
              to use the Services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p>
              The Services are provided on an “as is” and “as available” basis
              without warranties of any kind, whether express or implied,
              including but not limited to warranties of merchantability,
              fitness for a particular purpose, title, or non-infringement.
              Paxykop does not guarantee that the Services will be
              uninterrupted, error-free, or completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Paxykop and its
              directors, employees, and partners shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              or any loss of profits, data, or business opportunities, arising
              out of or related to your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of Singapore, without regard to its conflict of law
              principles. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Changes to These Terms
            </h2>
            <p>
              Paxykop reserves the right to update or modify these Terms at any
              time. We will notify users of material changes by posting the
              revised Terms on this page and updating the “Last updated” date.
              Your continued use of the Services after such changes constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              13. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
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

export default TermsOfService;
