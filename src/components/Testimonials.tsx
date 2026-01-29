 
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5,
      text: 'Found my dream apartment in Bandra within just 3 days! The AI recommendations were spot-on and saved me so much time. The virtual tours feature is amazing.',
      property: '2BHK in Bandra West',
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      rating: 5,
      text: 'As a first-time buyer, Vishwakarma foundry works made everything simple. The EMI calculator and neighborhood insights helped me make an informed decision. Excellent service!',
      property: '3BHK in Koramangala',
    },
    {
      id: 3,
      name: 'Anjali Reddy',
      location: 'Hyderabad',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      text: 'Listed my property and got 20+ inquiries in the first week. The analytics dashboard helped me track everything. Sold at the best price thanks to Vishwakarma foundry works!',
      property: 'Villa in Jubilee Hills',
    },
    {
      id: 4,
      name: 'Arjun Patel',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5,
      text: 'The direct chat with agents feature is brilliant. No middlemen, no confusion. Transparent pricing and verified listings gave me complete confidence.',
      property: 'Office Space in CP',
    },
    {
      id: 5,
      name: 'Meera Singh',
      location: 'Pune',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
      rating: 5,
      text: 'Vishwakarma foundry works\'s 24/7 support team is incredible. They helped me with documentation and even connected me with legal experts. Highly recommended!',
      property: '1BHK in Koregaon Park',
    },
    {
      id: 6,
      name: 'Vikram Agarwal',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg',
      rating: 5,
      text: 'The property comparison feature helped me evaluate 5 different apartments side by side. Made my decision process so much easier. Great platform!',
      property: '2BHK in Adyar',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who found their perfect property with Vishwakarma foundry works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="h-12 w-12 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Property Info */}
              <div className="bg-blue-50 rounded-lg p-3 mb-6">
                <p className="text-sm text-blue-800 font-medium">Property: {testimonial.property}</p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Trusted by Thousands</h3>
            <p className="text-blue-100 text-lg">Here's what our numbers say about customer satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <p className="text-blue-100">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15 Days</div>
              <p className="text-blue-100">Average Sale Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Happy Families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}