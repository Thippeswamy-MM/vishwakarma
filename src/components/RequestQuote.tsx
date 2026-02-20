import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Wrench, Factory, Truck, Shield, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations';

export default function RequestQuote() {
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
    // Handle form submission
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header Section */}
          <div className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="h-5 w-5" />
              {t.home}
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.quotePageTitle}</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              {t.quotePageSubtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.quoteFormTitle}</h2>
              
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="standard">{t.urgencyStandard}</option>
                    <option value="urgent">{t.urgencyUrgent}</option>
                    <option value="express">{t.urgencyExpress}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.additionalRequirementsLabel}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder={t.additionalRequirementsPlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {t.submitQuoteButton}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.whyChooseVishwakarmaTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.whyPremiumQualityTitle}</h4>
                    <p className="text-sm text-gray-600">{t.whyPremiumQualityDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.whyCompetitivePricingTitle}</h4>
                    <p className="text-sm text-gray-600">{t.whyCompetitivePricingDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.whyExpertSupportTitle}</h4>
                    <p className="text-sm text-gray-600">{t.whyExpertSupportDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.whyFastDeliveryTitle}</h4>
                    <p className="text-sm text-gray-600">{t.whyFastDeliveryDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.productSpecsTitle}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.productSpecsMaterialTitle}</h4>
                    <p className="text-sm text-gray-600">{t.productSpecsMaterialDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Factory className="h-5 w-5 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.productSpecsCapacityTitle}</h4>
                    <p className="text-sm text-gray-600">1 Ton/Hour processing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.productSpecsPowerOptionsTitle}</h4>
                    <p className="text-sm text-gray-600">39 HP Tractor / 30 HP Electric</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.productSpecsWarrantyTitle}</h4>
                    <p className="text-sm text-gray-600">1 year manufacturer warranty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4">{t.needHelpTitle}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">{t.callUs}</p>
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
                    <p className="text-sm">{t.responseTime24h}</p>
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
