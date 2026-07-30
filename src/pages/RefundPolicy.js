// components/legal/RefundPolicy.jsx
import React from "react";

const RefundPolicy = () => {
  const lastUpdated = "July 29, 2026";

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-3 text-white/50">Last updated: {lastUpdated}</p>
        </header>

        <div className="space-y-10 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Overview
            </h2>
            <p>
              This Refund & Cancellation Policy applies to all paid services,
              software development projects, consulting engagements, and digital
              products offered by Paxykop through{" "}
              <a
                href="https://paxykop.in"
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                paxykop.in
              </a>{" "}
              or via direct agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Custom Software Development & Project-Based Services
            </h2>
            <p className="mb-3">
              For custom software development, web & mobile app development,
              UI/UX design, AI solutions, and other project-based services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>
                Payments are generally non-refundable once work has commenced.
              </li>
              <li>
                Refunds (if any) will be handled according to the signed
                Proposal, Statement of Work (SOW), or Service Agreement.
              </li>
              <li>
                If a project is cancelled by the client before work begins, a
                partial refund may be considered after deducting administrative
                costs.
              </li>
              <li>
                If Paxykop is unable to deliver the agreed services due to
                reasons solely attributable to us, a fair refund or alternative
                resolution will be provided.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Subscription or Recurring Services
            </h2>
            <p className="mb-3">
              If you have subscribed to any recurring or maintenance services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>
                You may cancel your subscription at any time by contacting us.
              </li>
              <li>
                Cancellation takes effect at the end of the current billing
                cycle.
              </li>
              <li>
                No refunds will be issued for partial billing periods unless
                required by law or agreed in writing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. How to Request a Cancellation or Refund
            </h2>
            <p className="mb-3">
              Email us at{" "}
              <a
                href="mailto:support@paxykop.in"
                className="text-cyan-400 hover:underline"
              >
                support@paxykop.in
              </a>{" "}
              with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Your full name and company name</li>
              <li>Project or service name / invoice number</li>
              <li>Reason for the request</li>
            </ul>
            <p className="mt-4">
              We will review and respond within 5–7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Exceptions
            </h2>
            <p className="mb-3">
              Paxykop reserves the right to refuse a refund request if:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Significant work has already been delivered</li>
              <li>The client has violated our Terms of Service</li>
              <li>The request is abusive, fraudulent, or made in bad faith</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Contact Us
            </h2>
            <p className="mb-4">
              For questions regarding this policy, contact us at:
            </p>
            <ul className="space-y-2 text-white/70">
              <li>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:support@paxykop.in"
                  className="text-cyan-400 hover:underline"
                >
                  support@paxykop.in
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

export default RefundPolicy;
