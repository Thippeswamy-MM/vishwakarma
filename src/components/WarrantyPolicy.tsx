import { useState } from 'react';
import { ArrowLeft, Shield, Clock, Wrench, AlertCircle, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function WarrantyPolicy() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Warranty Overview', icon: Shield },
    { id: 'coverage', title: 'Coverage Details', icon: CheckCircle },
    { id: 'exclusions', title: 'Exclusions', icon: AlertCircle },
    { id: 'claims', title: 'Claim Process', icon: Clock },
    { id: 'support', title: 'Support', icon: Wrench },
  ];

  const content = {
    overview: {
      title: 'Warranty Policy Overview',
      content: `
        <p class="mb-4">At Vishwakarma Foundry Works, we stand behind the quality and durability of our agricultural machinery. This Warranty Policy outlines the terms and conditions for warranty coverage on our products.</p>
        <p class="mb-4">Our warranty ensures that your investment in our machinery is protected against manufacturing defects and provides peace of mind for your agricultural operations.</p>
        <p class="mb-4">Last updated: January 29, 2026</p>
        
        <h3 class="text-xl font-bold mb-3">Warranty Commitment</h3>
        <p class="mb-4">We are committed to providing high-quality agricultural machinery built with heavy iron materials. Our warranty covers manufacturing defects and ensures that our products perform as specified under normal operating conditions.</p>
        
        <h3 class="text-xl font-bold mb-3">Warranty Registration</h3>
        <p class="mb-4">To activate your warranty, please register your product within 30 days of purchase by providing:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Product serial number</li>
          <li>Purchase date and invoice number</li>
          <li>Customer contact information</li>
          <li>Installation details</li>
        </ul>
      `
    },
    coverage: {
      title: 'Warranty Coverage Details',
      content: `
        <h3 class="text-xl font-bold mb-3">Product-Specific Warranty Periods</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="border border-gray-300 px-4 py-2 text-left">Product</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Warranty Period</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Half Dala Machine</td>
                <td class="border border-gray-300 px-4 py-2">12 Months</td>
                <td class="border border-gray-300 px-4 py-2">Manufacturing defects</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-4 py-2">Balwan Bhoosi Tank</td>
                <td class="border border-gray-300 px-4 py-2">24 Months</td>
                <td class="border border-gray-300 px-4 py-2">Structural integrity, rust protection</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">VFW Half Dala Machine</td>
                <td class="border border-gray-300 px-4 py-2">18 Months</td>
                <td class="border border-gray-300 px-4 py-2">Manufacturing defects</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-4 py-2">Spare Parts</td>
                <td class="border border-gray-300 px-4 py-2">6 Months</td>
                <td class="border border-gray-300 px-4 py-2">Manufacturing defects</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 class="text-xl font-bold mb-3">What's Covered</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Cast Iron Components:</strong> Cracks, breaks, or defects in casting</li>
          <li><strong>Mechanical Parts:</strong> Gears, bearings, shafts, and moving components</li>
          <li><strong>Structural Integrity:</strong> Frame and body components</li>
          <li><strong>Surface Finish:</strong> Excessive rust or corrosion (for tanks)</li>
          <li><strong>Assembly Defects:</strong> Improper assembly or missing components</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Warranty Services</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Free replacement of defective parts</li>
          <li>Free labor for warranty repairs</li>
          <li>On-site service for major components</li>
          <li>Technical support and troubleshooting</li>
          <li>Priority service for warranty claims</li>
        </ul>
      `
    },
    exclusions: {
      title: 'Warranty Exclusions',
      content: `
        <h3 class="text-xl font-bold mb-3">Not Covered Under Warranty</h3>
        <p class="mb-4">The following are specifically excluded from warranty coverage:</p>
        
        <h3 class="text-xl font-bold mb-3">Usage-Related Exclusions</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Misuse:</strong> Using the machine for purposes other than intended</li>
          <li><strong>Overloading:</strong> Exceeding specified capacity limits</li>
          <li><strong>Improper Operation:</strong> Not following user manual instructions</li>
          <li><strong>Negligence:</strong> Failure to perform required maintenance</li>
          <li><strong>Environmental Factors:</strong> Damage from extreme weather conditions</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Maintenance Exclusions</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Normal Wear and Tear:</strong> Gradual deterioration from normal use</li>
          <li><strong>Consumables:</strong> Oil, grease, filters, belts, and similar items</li>
          <li><strong>Routine Maintenance:</strong> Regular servicing and adjustments</li>
          <li><strong>Cleaning:</strong> Removal of debris and normal cleaning</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">External Factors</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Accidents:</strong> Damage from collisions, falls, or impacts</li>
          <li><strong>Natural Disasters:</strong> Floods, earthquakes, storms, lightning</li>
          <li><strong>Power Issues:</strong> Voltage fluctuations, power surges</li>
          <li><strong>Unauthorized Modifications:</strong> Changes made without approval</li>
          <li><strong>Third-Party Repairs:</strong> Repairs by unauthorized service centers</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Installation and Setup</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Improper installation or foundation issues</li>
          <li>Incorrect electrical connections</li>
          <li>Failure to follow installation guidelines</li>
          <li>Site preparation issues</li>
        </ul>
      `
    },
    claims: {
      title: 'Warranty Claim Process',
      content: `
        <h3 class="text-xl font-bold mb-3">How to File a Warranty Claim</h3>
        <p class="mb-4">To file a warranty claim, please follow these steps:</p>
        
        <ol class="list-decimal pl-6 mb-6 space-y-3">
          <li><strong>Document the Issue:</strong> Take photos/videos of the problem and note when it occurs</li>
          <li><strong>Contact Support:</strong> Call our warranty hotline at +91 9415139283</li>
          <li><strong>Provide Information:</strong> Share your warranty registration details and product information</li>
          <li><strong>Initial Assessment:</strong> Our technical team will assess the issue remotely</li>
          <li><strong>Service Visit:</strong> Schedule an on-site visit if required</li>
          <li><strong>Resolution:</strong> Repair or replacement of defective components</li>
        </ol>
        
        <h3 class="text-xl font-bold mb-3">Required Documentation</h3>
        <p class="mb-4">Please have the following documents ready:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Original purchase invoice</li>
          <li>Warranty registration certificate</li>
          <li>Product serial number</li>
          <li>Installation date and details</li>
          <li>Maintenance records (if available)</li>
          <li>Photos/videos of the issue</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Response Time</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Initial Response:</strong> Within 24 hours of claim submission</li>
          <li><strong>Assessment:</strong> Within 48 hours for remote evaluation</li>
          <li><strong>On-site Visit:</strong> Within 3-5 business days (depending on location)</li>
          <li><strong>Resolution:</strong> Within 7-10 business days after assessment</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Emergency Service</h3>
        <p class="mb-4">For critical equipment failures affecting your operations, we offer emergency service with priority response within 24 hours (additional charges may apply for non-warranty issues).</p>
      `
    },
    support: {
      title: 'Warranty Support Services',
      content: `
        <h3 class="text-xl font-bold mb-3">Technical Support</h3>
        <p class="mb-4">Our technical support team is available to help you:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Troubleshoot operational issues</li>
          <li>Provide maintenance guidance</li>
          <li>Assist with proper setup and calibration</li>
          <li>Answer technical questions about your equipment</li>
          <li>Offer optimization tips for better performance</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Service Network</h3>
        <p class="mb-4">We have authorized service centers across India:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>North India:</strong> Delhi, Punjab, Haryana, Uttar Pradesh</li>
          <li><strong>East India:</strong> West Bengal, Bihar, Jharkhand, Odisha</li>
          <li><strong>West India:</strong> Maharashtra, Gujarat, Rajasthan</li>
          <li><strong>South India:</strong> Karnataka, Tamil Nadu, Andhra Pradesh, Kerala</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Extended Warranty Options</h3>
        <p class="mb-4">We offer extended warranty plans for additional protection:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Extended Warranty:</strong> Additional 12 months coverage</li>
          <li><strong>Premium Service:</strong> Annual maintenance contract with priority service</li>
          <li><strong>Comprehensive Coverage:</strong> Includes wear and tear items</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">Customer Training</h3>
        <p class="mb-4">We provide comprehensive training to ensure proper operation and maintenance:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>On-site installation and setup training</li>
          <li>Operation and safety procedures</li>
          <li>Basic maintenance and troubleshooting</li>
          <li>Best practices for optimal performance</li>
        </ul>
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
              <span className="text-lg font-bold text-gray-900">Warranty Policy</span>
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
              <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Phone className="h-6 w-6 text-green-600 mr-2" />
                  Warranty Support Contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="font-semibold">Warranty Hotline:</p>
                    <p>+91 9415139283 (24/7 Support)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>warranty@vishwakarmafoundry.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">Technical Support:</p>
                    <p>+91 7860686213</p>
                  </div>
                  <div>
                    <p className="font-semibold">Service Coordinator:</p>
                    <p>+91 7007821888</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold">Service Center:</p>
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
