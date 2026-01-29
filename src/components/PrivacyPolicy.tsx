import { useState } from 'react';
import { ArrowLeft, Shield, Eye, Lock, Cookie, Database, UserCheck, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: Eye },
    { id: 'collection', title: 'Information Collection', icon: Database },
    { id: 'usage', title: 'Information Usage', icon: FileText },
    { id: 'protection', title: 'Data Protection', icon: Shield },
    { id: 'cookies', title: 'Cookies Policy', icon: Cookie },
    { id: 'rights', title: 'User Rights', icon: UserCheck },
  ];

  const content = {
    overview: {
      title: 'Privacy Policy Overview',
      content: `
        <p class="mb-4">At Vishwakarma Foundry Works, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our website, products, and services.</p>
        <p class="mb-4">This policy applies to all visitors, customers, and users of our website <strong>www.vishwakarmafoundry.com</strong> and any associated services. By using our website, you agree to the collection and use of information in accordance with this policy.</p>
        <p class="mb-4">Last updated: January 29, 2026</p>
      `
    },
    collection: {
      title: 'Information We Collect',
      content: `
        <h3 class="text-xl font-bold mb-3">Personal Information</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Name and contact details (email, phone number, address)</li>
          <li>Business information (company name, industry, role)</li>
          <li>Account credentials (username, password)</li>
          <li>Communication preferences</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Technical Information</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>IP address and device information</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on our website</li>
          <li>Referral source</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Business Information</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Product inquiries and requirements</li>
          <li>Purchase history and preferences</li>
          <li>Support requests and communications</li>
          <li>Feedback and testimonials</li>
        </ul>
      `
    },
    usage: {
      title: 'How We Use Your Information',
      content: `
        <h3 class="text-xl font-bold mb-3">Primary Purposes</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Product and Service Delivery:</strong> Process orders, provide technical support, and deliver agricultural machinery</li>
          <li><strong>Communication:</strong> Respond to inquiries, send updates, and provide customer service</li>
          <li><strong>Marketing:</strong> Send promotional materials about our products and services (with consent)</li>
          <li><strong>Website Improvement:</strong> Analyze usage patterns to enhance user experience</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Legal Compliance</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Comply with legal obligations and regulatory requirements</li>
          <li>Protect our rights, property, and safety</li>
          <li>Prevent fraudulent activities and ensure security</li>
          <li>Enforce our terms and conditions</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Business Operations</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Conduct business analytics and research</li>
          <li>Develop new products and services</li>
          <li>Maintain and improve our website infrastructure</li>
          <li>Train our staff and ensure quality service</li>
        </ul>
      `
    },
    protection: {
      title: 'Data Protection Measures',
      content: `
        <h3 class="text-xl font-bold mb-3">Security Measures</h3>
        <p class="mb-4">We implement industry-standard security measures to protect your personal information:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission</li>
          <li><strong>Access Control:</strong> Restricted access to personal data</li>
          <li><strong>Regular Updates:</strong> Continuous security monitoring and updates</li>
          <li><strong>Data Backup:</strong> Secure backup systems to prevent data loss</li>
          <li><strong>Staff Training:</strong> Regular training on data protection practices</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Data Retention</h3>
        <p class="mb-4">We retain your personal information only as long as necessary for the purposes outlined in this policy, unless required by law to retain it longer. Specific retention periods vary based on the type of information and legal requirements.</p>
        
        <h3 class="text-xl font-bold mb-3">Third-Party Sharing</h3>
        <p class="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
      `
    },
    cookies: {
      title: 'Cookies and Tracking Technologies',
      content: `
        <h3 class="text-xl font-bold mb-3">What Are Cookies?</h3>
        <p class="mb-4">Cookies are small text files stored on your device when you visit our website. They help us enhance your experience and provide personalized services.</p>
        
        <h3 class="text-xl font-bold mb-3">Types of Cookies We Use</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and content</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Managing Cookies</h3>
        <p class="mb-4">You can control cookies through your browser settings. However, disabling certain cookies may affect your experience on our website.</p>
      `
    },
    rights: {
      title: 'Your Rights and Choices',
      content: `
        <h3 class="text-xl font-bold mb-3">Your Rights</h3>
        <p class="mb-4">You have the following rights regarding your personal information:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Access:</strong> Request access to your personal information</li>
          <li><strong>Correction:</strong> Request correction of inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Portability:</strong> Request transfer of your data to another service</li>
          <li><strong>Objection:</strong> Object to processing of your personal information</li>
          <li><strong>Restriction:</strong> Request restriction of processing</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">How to Exercise Your Rights</h3>
        <p class="mb-4">To exercise any of these rights, please contact us at:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Email: privacy@vishwakarmafoundry.com</li>
          <li>Phone: +91 9415139283</li>
          <li>Address: Industrial Area, Sector 82, Ghaziabad 201009, Uttar Pradesh, India</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Response Time</h3>
        <p class="mb-4">We will respond to your request within 30 days of receipt, unless additional time is required to fulfill your request.</p>
      `
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Website</span>
            </button>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-bold text-gray-900">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  {content[activeSection].title}
                </h1>
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content[activeSection].content }}
                />
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-blue-600 mr-2" />
                  Contact Us for Privacy Concerns
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>privacy@vishwakarmafoundry.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p>+91 9415139283</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold">Address:</p>
                    <p>Industrial Area, Sector 82, Ghaziabad 201009, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
