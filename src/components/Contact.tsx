import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Twitter, Instagram, Linkedin, Factory, AlertCircle, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.data.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(response.data.message || t.errorMessage);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || t.networkError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.contactTitle}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contactDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-blue-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">{t.contactInfo}</h3>
              <p className="text-blue-100 mb-8">
                {t.contactInfoDesc}
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.callUs}</p>
                    <p className="text-blue-100">+91 7860686213, 9415139283, 7007821888</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.email}</p>
                    <p className="text-blue-100">info@vishwakarmafoundry.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.factoryAddress}</p>
                    <p className="text-blue-100">Kashmiria Chauraha NTPC Bypass Road Tanda- Ambedkar Nagar (Uttar Pradesh) 224190</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.workingHours}</p>
                    <p className="text-blue-100">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-blue-500">
                <h4 className="font-semibold mb-4">{t.followUs}</h4>
                <div className="flex space-x-4">
                  <button className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400 transition-colors" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400 transition-colors" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400 transition-colors" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </button>
                  <button className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 space-y-4">
              <Link 
                to="/whatsapp-inquiry"
                className="w-full bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{t.whatsappInquiry}</span>
              </Link>
              
              <button className="w-full bg-gray-800 text-white p-4 rounded-xl hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Factory className="h-5 w-5" />
                <span>{t.requestFactoryVisit}</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.sendMessage}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.emailAddress}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.subject}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none"
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="">{t.selectSubject}</option>
                      <option value="product-inquiry">{t.productInquiry}</option>
                      <option value="half-dala">{t.halfDala}</option>
                      <option value="bhoosi-tank">{t.bhoosiTank}</option>
                      <option value="balwan-tank">{t.balwanTank}</option>
                      <option value="balwan-half-dala">{t.balwanHalfDala}</option>
                      <option value="bran-expert">{t.branExpert}</option>
                      <option value="technical-support">{t.technicalSupport}</option>
                      <option value="pricing">{t.pricing}</option>
                      <option value="factory-visit">{t.factoryVisitRequest}</option>
                      <option value="general">{t.general}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>{t.send}</span>
                    </>
                  )}
                </button>
              </form>

              {/* Error Message */}
              {error && (
                <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>{error.includes('Network') ? t.networkError : t.errorMessage}</span>
                </div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>{t.successMessage}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}