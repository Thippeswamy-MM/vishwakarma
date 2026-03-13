import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Wrench, Factory, Truck, Shield, ArrowLeft, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations';

export default function WhatsAppInquiry() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
    urgency: 'standard'
  });

  const products = [
    'Half Dala Machine',
    'Bhoosi Tank Model', 
    'Balwan Tank Model',
    'Balwan Half Dala',
    'Bran Expert',
    'Custom Manufacturing',
    'Spare Parts',
    'Technical Support'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `*New Inquiry - Vishwakarma Foundry Works*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Company:* ${formData.company || 'N/A'}\n` +
      `*Product Interested:* ${formData.product}\n` +
      `*Quantity:* ${formData.quantity || 'Not specified'}\n` +
      `*Urgency:* ${formData.urgency}\n\n` +
      `*Message:* ${formData.message}\n\n` +
      `*Sent from Website Inquiry Form*`
    );

    // Open WhatsApp with pre-filled message
    const whatsappNumber = '917860686213'; // From the Header component
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('Redirecting to WhatsApp with your inquiry details...');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-green-100 hover:text-white transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="h-5 w-5" />
              {t.home}
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="h-12 w-12" />
              <h1 className="text-4xl md:text-5xl font-bold">{t.whatsappInquiryTitle}</h1>
            </div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t.quotePageSubtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* WhatsApp Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-green-600" />
                {t.whatsappInquiryTitle}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.emailAddress} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.phoneNumber} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.companyNameLabel}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.productInterestedLabel}
                    </label>
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">{t.whatsappProductSelectPlaceholder}</option>
                      {products.map(product => (
                        <option key={product} value={product}>{product}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.quantityLabel}
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={t.quantityPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.urgencyLabel}
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="standard">{t.urgencyStandard}</option>
                    <option value="urgent">{t.urgencyUrgent}</option>
                    <option value="express">{t.urgencyExpress}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={t.additionalRequirementsPlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  {t.whatsappInquiryTitle}
                </button>
              </form>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>{t.whatsappNoteLabel}</strong> {t.whatsappNoteText}
                </p>
              </div>
            </div>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-8">
            {/* WhatsApp Benefits */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-green-600" />
                {t.whatsappInquiryTitle}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.whatsappInstantResponseTitle}</h4>
                    <p className="text-sm text-gray-600">{t.whatsappInstantResponseDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.whatsappDirectCommunicationTitle}</h4>
                    <p className="text-sm text-gray-600">{t.whatsappDirectCommunicationDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.whatsappMediaSharingTitle}</h4>
                    <p className="text-sm text-gray-600">{t.whatsappMediaSharingDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.whatsappMobileFriendlyTitle}</h4>
                    <p className="text-sm text-gray-600">{t.whatsappMobileFriendlyDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.productSpecsTitle}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.productSpecsMaterialTitle}</h4>
                    <p className="text-sm text-gray-600">{t.productSpecsMaterialDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Factory className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.productSpecsCapacityTitle}</h4>
                    <p className="text-sm text-gray-600">1 Ton/Hour processing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.productSpecsPowerOptionsTitle}</h4>
                    <p className="text-sm text-gray-600">39 HP Tractor / 30 HP Electric</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.productSpecsWarrantyTitle}</h4>
                    <p className="text-sm text-gray-600">1 year manufacturer warranty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4">{t.whatsappDirectContactTitle}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">{t.callUs}</p>
                    <p className="text-sm">+91 7860686213</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">{t.whatsappInquiry}</p>
                    <p className="text-sm">+91 7860686213</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">{t.contactEmailLabel}</p>
                    <p className="text-sm">info@vishwakarmafoundry.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">{t.responseTimeHeading}</p>
                    <p className="text-sm">{t.responseTime30min}</p>
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
