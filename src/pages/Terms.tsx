
import React from 'react';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms & Conditions | Host Africa</title>
        <meta name="description" content="Our terms and conditions for using Host Africa services." />
      </Helmet>

      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-hosting-dark-gray mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to Host Africa. These Terms & Conditions govern your use of our website and services.
              By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">1. ACCEPTANCE OF TERMS</h2>
            <p>
              By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound
              by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">2. SERVICES</h2>
            <p>
              Host Africa provides web hosting, domain registration, web design, cloud services, connectivity solutions,
              and related digital services to businesses and individuals. The specific details, limitations, and features
              of each service are outlined in the service descriptions provided at the time of purchase.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">3. ACCOUNT RESPONSIBILITIES</h2>
            <p>
              When you create an account with us, you are responsible for maintaining the confidentiality of your account
              and password and for restricting access to your computer or device. You agree to accept responsibility for
              all activities that occur under your account.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">4. PAYMENT TERMS</h2>
            <p>
              Fees for our services are outlined at the time of purchase. We reserve the right to modify pricing with
              reasonable notice. Payment is required in advance for most services. Failure to maintain timely payments
              may result in service suspension or termination.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">5. REFUND POLICY</h2>
            <p>
              Refund eligibility varies by service type. Domain registrations are generally non-refundable. Hosting services
              may be eligible for a refund within 30 days of purchase if you're not satisfied with the service. Custom development
              and design services are subject to separate refund terms outlined in the service agreement.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">6. ACCEPTABLE USE</h2>
            <p>
              You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict,
              or inhibit anyone else's use and enjoyment of the service. Prohibited activities include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Distributing malware, viruses, or other malicious code</li>
              <li>Phishing or attempting to fraudulently acquire sensitive information</li>
              <li>Distributing illegal content or content that infringes on intellectual property rights</li>
              <li>Conducting illegal gambling operations</li>
              <li>Sending unsolicited promotional or marketing messages (spam)</li>
              <li>Using the service for high-risk activities where failure could lead to personal injury or property damage</li>
            </ul>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">7. TERMINATION</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services, without prior notice or liability,
              for any reason whatsoever, including, without limitation, if you breach these Terms & Conditions.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">8. LIMITATION OF LIABILITY</h2>
            <p>
              To the maximum extent permitted by applicable law, Host Africa and its suppliers shall not be liable
              for any indirect, incidental, special, consequential, or exemplary damages, including but not limited to,
              damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use of or
              inability to use the service.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">9. WARRANTY DISCLAIMER</h2>
            <p>
              Our services are provided "as is" without any warranty of any kind, either express or implied. We do not
              guarantee that the services will be uninterrupted, timely, secure, or error-free.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">10. CHANGES TO TERMS</h2>
            <p>
              We reserve the right to modify these Terms & Conditions at any time. We will provide notice of significant
              changes through our website or via email. Your continued use of our services after such modifications constitutes
              your acceptance of the revised terms.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">11. GOVERNING LAW</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of South Africa,
              without regard to its conflict of law provisions.
            </p>

            <h2 className="text-xl font-semibold text-hosting-orange mt-8">12. CONTACT INFORMATION</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at support@hostingkzn.com.
            </p>

            <p className="mt-8 text-sm text-gray-500">Last updated: 10 December 2024</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
