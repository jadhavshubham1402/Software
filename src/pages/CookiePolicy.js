// components/legal/CookiePolicy.jsx
import React from "react";

const CookiePolicy = () => {
  const lastUpdated = "July 29, 2026";

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-34">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-3 text-white/50">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p>
              This Cookie Policy explains how Paxykop (“we”, “us”, or “our”)
              uses cookies and similar technologies on our website{" "}
              <a
                href="https://paxykop.in"
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                paxykop.in
              </a>
              . By continuing to browse or use our website, you agree to our use
              of cookies as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help the site recognize your device and remember
              information about your visit, such as preferences and actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. How We Use Cookies
            </h2>
            <p className="mb-3">
              Paxykop uses cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>
                <strong className="text-white">Essential Cookies:</strong>{" "}
                Required for the website to function properly
              </li>
              <li>
                <strong className="text-white">Analytics Cookies:</strong> Help
                us understand how visitors use our site
              </li>
              <li>
                <strong className="text-white">Functional Cookies:</strong>{" "}
                Remember your preferences and settings
              </li>
              <li>
                <strong className="text-white">Marketing Cookies:</strong> Used
                to deliver relevant advertisements
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Third-Party Cookies
            </h2>
            <p>
              We may use third-party services (such as Google Analytics) that
              set their own cookies. These third parties are responsible for the
              cookies they place and have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Managing Cookies
            </h2>
            <p>
              You can control and delete cookies through your browser settings.
              Note that disabling certain cookies may affect the functionality
              of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Changes to This Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with a revised “Last updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Contact Us
            </h2>
            <p className="mb-4">
              Questions about our use of cookies? Contact us at:
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

export default CookiePolicy;
