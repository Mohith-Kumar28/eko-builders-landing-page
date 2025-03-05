import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Eko Builders",
  description: "Terms and Conditions for Eko Builders AI-Powered Building Design Platform",
};

const TermsAndConditions = () => {
  return (
    <div className="pb-20 pt-40">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top rounded-lg bg-white px-8 py-12 shadow-solid-8 dark:bg-blacksection md:px-14 md:py-16 lg:px-24 lg:py-20">
          <h1 className="mb-8 text-3xl font-bold text-black dark:text-white">Terms and Conditions</h1>
          
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Eko Builders' services, you agree to be bound by these Terms and Conditions. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">2. Service Description</h2>
            <p className="mb-4">
              Eko Builders provides AI-powered building design simulation services. Our platform includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Building performance simulation and analysis</li>
              <li>Energy efficiency optimization</li>
              <li>Integration with standard design tools</li>
              <li>Cloud-based computation and storage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">3. User Obligations</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Not misuse or attempt to exploit the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">4. Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality of our service are owned by Eko Builders and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">5. Limitation of Liability</h2>
            <p className="mb-4">
              Eko Builders shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">6. Modifications to Service</h2>
            <p className="mb-4">
              We reserve the right to modify or discontinue our service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">7. Contact</h2>
            <p className="mb-4">
              For any questions regarding these Terms and Conditions, please contact us at:{" "}
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

export default TermsAndConditions; 