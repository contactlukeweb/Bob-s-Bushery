
import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';
import AIImage from '../components/AIImage';

const Services: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <section className="py-20 bg-earth text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">Comprehensive garden solutions tailored to your unique outdoor space.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col lg:items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="lg:w-1/2">
                  <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <AIImage 
                      prompt={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                      aspectRatio="16:9"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-primary text-2xl mb-2 shadow-inner">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description} We pride ourselves on using the latest commercial-grade equipment and best practices to ensure your garden doesn't just look good today, but thrives in the long run.
                  </p>
                  <ul className="space-y-3 text-gray-700 font-medium">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-primary"></i>
                      <span>Free on-site consultation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-primary"></i>
                      <span>Personalised maintenance schedule</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-check text-primary"></i>
                      <span>Fixed price quotes - no hidden fees</span>
                    </li>
                  </ul>
                  <div className="pt-6">
                    <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800 transition-all">
                      Request this service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-earth mb-12">Service FAQs</h2>
          <div className="space-y-6 text-left">
            <details className="bg-white p-6 rounded-xl shadow-sm cursor-pointer group">
              <summary className="font-bold text-lg list-none flex justify-between items-center">
                Do you provide one-off clean-ups or just regular maintenance?
                <i className="fas fa-plus text-primary group-open:rotate-45 transition-transform"></i>
              </summary>
              <p className="mt-4 text-gray-600">Both! We handle one-off massive clean-ups (perfect for pre-sale or end-of-lease) as well as recurring maintenance packages.</p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm cursor-pointer group">
              <summary className="font-bold text-lg list-none flex justify-between items-center">
                What areas of the Gold Coast do you service?
                <i className="fas fa-plus text-primary group-open:rotate-45 transition-transform"></i>
              </summary>
              <p className="mt-4 text-gray-600">We cover the entire Gold Coast from Ormeau in the north to Coolangatta in the south, and out to the Hinterland.</p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-sm cursor-pointer group">
              <summary className="font-bold text-lg list-none flex justify-between items-center">
                Are you available on weekends?
                <i className="fas fa-plus text-primary group-open:rotate-45 transition-transform"></i>
              </summary>
              <p className="mt-4 text-gray-600">We operate primarily Mon-Fri but offer Saturday mornings for urgent clean-ups and quotes by appointment.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
