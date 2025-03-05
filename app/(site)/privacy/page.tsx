import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Eko Builders",
  description: "Privacy Policy for Eko Builders AI-Powered Building Design Platform",
};

const PrivacyPolicy = () => {
  return (
    <div className="pb-20 pt-40">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top rounded-lg bg-white px-8 py-12 shadow-solid-8 dark:bg-blacksection md:px-14 md:py-16 lg:px-24 lg:py-20">
          <h1 className="mb-8 text-3xl font-bold text-black dark:text-white">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Building design data and simulations</li>
              <li>Usage information and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Process your simulations and analysis</li>
              <li>Send you important updates and notifications</li>
              <li>Enhance our AI models and algorithms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">3. Data Security</h2>
            <p className="mb-4">We implement appropriate security measures to protect your information, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of sensitive data</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
              <li>Secure data storage and transmission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">4. Data Sharing</h2>
            <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of certain data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:info@ekobuilders.com" className="text-primary">
                info@ekobuilders.com
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 