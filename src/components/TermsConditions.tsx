import { useState } from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Gavel, Shield, Clock } from 'lucide-react';

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'services', title: 'Services', icon: Users },
    { id: 'terms', title: 'Terms of Use', icon: Scale },
    { id: 'payments', title: 'Payments', icon: Shield },
    { id: 'warranty', title: 'Warranty', icon: Clock },
    { id: 'liability', title: 'Liability', icon: AlertTriangle },
    { id: 'disputes', title: 'Disputes', icon: Gavel },
  ];

  const content = {
    introduction: {
      title: 'Terms and Conditions',
      content: `
        <p class="mb-4">Welcome to Vishwakarma Foundry Works. These Terms and Conditions govern your use of our website, products, and services. By accessing our website or purchasing our products, you agree to be bound by these terms.</p>
        <p class="mb-4"><strong>Vishwakarma Foundry Works</strong> ("we," "us," or "our") is a manufacturer of agricultural machinery and foundry products. This agreement outlines the rights and responsibilities of both parties.</p>
        <p class="mb-4">Last updated: January 29, 2026</p>
        
        <h3 class="text-xl font-bold mb-3">Acceptance of Terms</h3>
        <p class="mb-4">By using our website, services, or purchasing products from us, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.</p>
      `
    },
    services: {
      title: 'Products and Services',
      content: `
        <h3 class="text-xl font-bold mb-3">Our Products</h3>
        <p class="mb-4">Vishwakarma Foundry Works specializes in manufacturing:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Half Dala Machines</li>
          <li>Balwan Bhoosi Tanks</li>
          <li>VFW Half Dala Machines</li>
          <li>Agricultural threshing equipment</li>
          <li>Custom foundry products</li>
          <li>Spare parts and accessories</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Service Availability</h3>
        <p class="mb-4">Our products and services are available throughout India. We reserve the right to modify, suspend, or discontinue any product or service without prior notice.</p>
        
        <h3 class="text-xl font-bold mb-3">Product Specifications</h3>
        <p class="mb-4">While we strive to provide accurate product information, specifications may change without notice. We recommend confirming current specifications before making a purchase.</p>
      `
    },
    terms: {
      title: 'Terms of Use',
      content: `
        <h3 class="text-xl font-bold mb-3">Website Usage</h3>
        <p class="mb-4">You may use our website for lawful purposes only. You agree not to:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Use the website for any illegal or unauthorized purpose</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with or disrupt the website's functionality</li>
          <li>Use automated tools to access the website excessively</li>
          <li>Reproduce or redistribute content without permission</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Account Registration</h3>
        <p class="mb-4">If you create an account on our website, you are responsible for:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>Providing accurate and complete information</li>
          <li>Updating your information promptly</li>
          <li>Notifying us immediately of unauthorized use</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Intellectual Property</h3>
        <p class="mb-4">All content on our website, including text, images, logos, and designs, is owned by Vishwakarma Foundry Works and protected by intellectual property laws. You may not use our content without prior written permission.</p>
      `
    },
    payments: {
      title: 'Payment Terms',
      content: `
        <h3 class="text-xl font-bold mb-3">Pricing</h3>
        <p class="mb-4">All prices are quoted in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise specified. We reserve the right to modify prices without prior notice.</p>
        
        <h3 class="text-xl font-bold mb-3">Payment Methods</h3>
        <p class="mb-4">We accept the following payment methods:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Bank Transfer (NEFT/RTGS)</li>
          <li>Cash on Delivery (for select locations)</li>
          <li>Cheque (subject to clearance)</li>
          <li>Demand Draft</li>
          <li>Digital Payment Platforms</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Payment Terms</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Advance Payment:</strong> 50% advance required for custom orders</li>
          <li><strong>Balance Payment:</strong> Due before delivery or installation</li>
          <li><strong>Late Payments:</strong> Interest may be charged on overdue amounts</li>
          <li><strong>Refund Policy:</strong> Refunds processed within 7-10 business days</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Invoice and Receipt</h3>
        <p class="mb-4">We provide proper invoices and receipts for all transactions. Please retain these documents for warranty and service purposes.</p>
      `
    },
    warranty: {
      title: 'Warranty Policy',
      content: `
        <h3 class="text-xl font-bold mb-3">Manufacturer Warranty</h3>
        <p class="mb-4">All our products come with a standard manufacturer warranty:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Half Dala Machines:</strong> 12 months warranty against manufacturing defects</li>
          <li><strong>Balwan Bhoosi Tanks:</strong> 24 months warranty against manufacturing defects</li>
          <li><strong>VFW Half Dala Machines:</strong> 18 months warranty against manufacturing defects</li>
          <li><strong>Spare Parts:</strong> 6 months warranty against manufacturing defects</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Warranty Coverage</h3>
        <p class="mb-4">The warranty covers:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Manufacturing defects in materials and workmanship</li>
          <li>Functional failures under normal use conditions</li>
          <li>Defects in cast iron components</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Warranty Exclusions</h3>
        <p class="mb-4">The warranty does not cover:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Normal wear and tear</li>
          <li>Damage due to misuse or improper installation</li>
          <li>Damage from accidents or natural disasters</li>
          <li>Modifications or repairs by unauthorized personnel</li>
          <li>Consumable parts and routine maintenance</li>
        </ul>
      `
    },
    liability: {
      title: 'Limitation of Liability',
      content: `
        <h3 class="text-xl font-bold mb-3">Disclaimer of Warranties</h3>
        <p class="mb-4">Our products are provided "as is" and "as available" without any express or implied warranties, except as specifically stated in this agreement.</p>
        
        <h3 class="text-xl font-bold mb-3">Limitation of Damages</h3>
        <p class="mb-4">To the maximum extent permitted by law, Vishwakarma Foundry Works shall not be liable for:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Indirect, incidental, or consequential damages</li>
          <li>Loss of profits, revenue, or business opportunities</li>
          <li>Damage to property or equipment</li>
          <li>Personal injury or death resulting from product misuse</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Maximum Liability</h3>
        <p class="mb-4">Our total liability for any claim arising from or related to our products or services shall not exceed the purchase price of the product in question.</p>
        
        <h3 class="text-xl font-bold mb-3">Product Use</h3>
        <p class="mb-4">Customers are responsible for ensuring proper installation, operation, and maintenance of our products. We recommend following all safety guidelines and user manuals provided.</p>
      `
    },
    disputes: {
      title: 'Dispute Resolution',
      content: `
        <h3 class="text-xl font-bold mb-3">Governing Law</h3>
        <p class="mb-4">These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
        
        <h3 class="text-xl font-bold mb-3">Jurisdiction</h3>
        <p class="mb-4">Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh, India.</p>
        
        <h3 class="text-xl font-bold mb-3">Dispute Resolution Process</h3>
        <p class="mb-4">We encourage amicable resolution of disputes. The following process shall be followed:</p>
        <ol class="list-decimal pl-6 mb-4 space-y-2">
          <li><strong>Negotiation:</strong> Both parties shall attempt to resolve disputes through good faith negotiations</li>
          <li><strong>Mediation:</strong> If negotiation fails, disputes may be referred to mediation</li>
          <li><strong>Arbitration:</strong> Unresolved disputes may be settled through binding arbitration</li>
          <li><strong>Litigation:</strong> As a last resort, disputes may be resolved through court proceedings</li>
        </ol>
        
        <h3 class="text-xl font-bold mb-3">Class Action Waiver</h3>
        <p class="mb-4">You agree to resolve any disputes individually and waive any right to participate in class action lawsuits or class-wide arbitration.</p>
        
        <h3 class="text-xl font-bold mb-3">Severability</h3>
        <p class="mb-4">If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
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
              <FileText className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-bold text-gray-900">Terms & Conditions</span>
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
              <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gavel className="h-6 w-6 text-amber-600 mr-2" />
                  Legal Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="font-semibold">Legal Department:</p>
                    <p>legal@vishwakarmafoundry.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p>+91 9415139283</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold">Registered Office:</p>
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
