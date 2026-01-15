
import React from 'react';
import { Link } from 'react-router-dom';
import AIImage from '../components/AIImage';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <section className="py-20 bg-earth text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Story</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">Rooted in the Gold Coast, committed to quality landscaping.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <AIImage 
                prompt="A professional, friendly-looking middle-aged man in a green work uniform, smiling, holding a rake in a beautiful sun-drenched Gold Coast garden. Cinematic, realistic." 
                alt="Bob at work" 
                className="rounded-2xl shadow-2xl relative z-10 w-full" 
                aspectRatio="4:3"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-2xl -z-0 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 border-4 border-earth rounded-2xl -z-0"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-earth mb-6">Born from a passion for nature</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2014 by Bob, a lifelong Gold Coast resident with a green thumb, Bob's Bushery started as a one-man operation with a single mower and a vision: to provide the most reliable garden care in the region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we have grown into a small, dedicated team of landscaping professionals. Despite our growth, our core values remain the same: reliability, meticulous attention to detail, and a genuine love for the Australian outdoors.
              </p>
              
              <div className="space-y-6 my-10">
                {[
                  { title: "Experience", desc: "Over 10 years of transforming Gold Coast gardens.", icon: "fa-calendar-check" },
                  { title: "Reliability", desc: "We turn up when we say we will. Every time.", icon: "fa-clock" },
                  { title: "Quality", desc: "No job is finished until it meets our high standards.", icon: "fa-check-circle" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 text-primary"><i className={`fas ${item.icon} text-2xl`}></i></div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800 transition-all">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="py-16 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-earth mb-10">The Bob's Bushery Promise</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-primary text-4xl font-bold mb-2">100%</h4>
              <p className="text-gray-600 font-semibold">Satisfaction Guaranteed</p>
            </div>
            <div>
              <h4 className="text-primary text-4xl font-bold mb-2">500+</h4>
              <p className="text-gray-600 font-semibold">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-primary text-4xl font-bold mb-2">10+</h4>
              <p className="text-gray-600 font-semibold">Years Experience</p>
            </div>
            <div>
              <h4 className="text-primary text-4xl font-bold mb-2">Gold</h4>
              <p className="text-gray-600 font-semibold">Coast Local Specialists</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
