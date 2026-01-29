import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Facebook, Twitter, Instagram, Linkedin, Factory } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Vishwakarma Foundry Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our agricultural machinery? Our team is here to help you find the perfect equipment for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-blue-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-blue-100 mb-8">
                Reach out to us for any inquiries about our agricultural machinery and manufacturing services.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">+91 9415139283, 7860686213, 7007821888</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">info@vishwakarmafoundry.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Factory Address</p>
                    <p className="text-blue-100">Kashmiria Chauraha NTPC Bypass Road Tanda- Ambedkar Nagar (Uttar Pradesh) 224190</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-blue-100">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-blue-500">
                <h4 className="font-semibold mb-4">Follow Us</h4>
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
              <button className="w-full bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Inquiry</span>
              </button>
              
              <button className="w-full bg-gray-800 text-white p-4 rounded-xl hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Factory className="h-5 w-5" />
                <span>Request Factory Visit</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
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
                      Email Address *
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
                      Phone Number *
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
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none"
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="half-dala">Half Dala Machine</option>
                      <option value="bhoosi-tank">Bhoosi Tank Model</option>
                      <option value="balwan-tank">Balwan Tank Model</option>
                      <option value="balwan-half-dala">Balwan Half Dala</option>
                      <option value="bran-expert">Bran Expert</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="factory-visit">Factory Visit Request</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements and how we can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Thank you! Your inquiry has been sent successfully. Our team will contact you within 24 hours.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}