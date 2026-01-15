
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, SERVICES, REVIEWS } from '../constants';
import AIImage from '../components/AIImage';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <AIImage 
            prompt="A stunning, wide-angle cinematic shot of a luxury Gold Coast home with professional landscaping, lush tropical gardens, and a perfect green lawn. Morning golden hour light." 
            alt="Gold Coast Landscaping Hero" 
            className="w-full h-full object-cover filter brightness-50"
            aspectRatio="16:9"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Perfect Gardens, <span className="text-primary italic">Stress-Free.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-stone-200">
              Reliable, professional landscaping and garden maintenance across the Gold Coast. We bring your outdoor vision to life.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-all shadow-xl"
              >
                Ask for a Quote
              </Link>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="bg-white hover:bg-stone-100 text-earth px-8 py-4 rounded-lg font-bold text-lg text-center transition-all shadow-xl flex items-center justify-center"
              >
                <i className="fas fa-phone-alt mr-2"></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-earth mb-4">Why Choose Bob's Bushery?</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Local Expertise", icon: "fa-map-marked-alt", text: "We know the Gold Coast climate and soil like the back of our hands." },
              { title: "Fully Insured", icon: "fa-shield-alt", text: "Rest easy knowing your property is covered by professional liability insurance." },
              { title: "Passionate Service", icon: "fa-heart", text: "We treat every garden as if it were our own. No shortcuts, just quality." }
            ].map((item, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-2xl text-center border border-stone-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-green-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-earth mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-lg">From basic mowing to complex landscape design, we handle it all with precision.</p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center mt-4 md:mt-0 hover:underline">
              View all services <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-56 overflow-hidden">
                  <AIImage 
                    prompt={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    aspectRatio="16:9"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to={`/services#${service.id}`} className="text-earth font-bold text-sm uppercase tracking-wider">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-20 bg-earth text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 text-9xl text-white/10 opacity-20 transform translate-x-12 -translate-y-12">
            <i className="fas fa-quote-right"></i>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">What Our Clients Say</h2>
            <p className="text-2xl italic mb-8">"{REVIEWS[0].comment}"</p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold">
                {REVIEWS[0].name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-bold">{REVIEWS[0].name}</p>
                <p className="text-sm text-stone-400">{REVIEWS[0].location}</p>
              </div>
            </div>
            <Link to="/reviews" className="inline-block mt-12 text-primary font-bold border-b border-primary pb-1">Read more reviews</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to transform your garden?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Contact Bob's Bushery today for a free, no-obligation quote and expert advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-xl hover:bg-stone-100 transition-all shadow-lg">
              Get My Free Quote
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-primary transition-all">
              <i className="fas fa-phone-alt mr-2"></i> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
