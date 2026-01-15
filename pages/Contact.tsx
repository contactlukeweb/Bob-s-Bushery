
import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xqeeabzo", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', serviceRequired: '', message: '' });
      } else {
        alert("There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was a problem submitting your form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <section className="py-20 bg-earth text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Get a Quote</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">Tell us about your garden project and we'll get back to you with a competitive quote.</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-earth mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-50 text-primary flex items-center justify-center rounded-xl text-xl shrink-0">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Call Us</p>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-600 hover:text-primary transition-colors text-lg">{BUSINESS_INFO.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-50 text-primary flex items-center justify-center rounded-xl text-xl shrink-0">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Email Us</p>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-600 hover:text-primary transition-colors text-lg break-all">{BUSINESS_INFO.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-50 text-primary flex items-center justify-center rounded-xl text-xl shrink-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Service Area</p>
                      <p className="text-gray-600 text-lg">All Gold Coast suburbs (Ormeau to Coolangatta)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200">
                <h4 className="font-bold text-lg mb-4">Why get a quote from us?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-gray-700">
                    <i className="fas fa-check text-primary"></i>
                    <span>Completely free & no obligation</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700">
                    <i className="fas fa-check text-primary"></i>
                    <span>Competitive local pricing</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700">
                    <i className="fas fa-check text-primary"></i>
                    <span>Expert advice from Bob himself</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700">
                    <i className="fas fa-check text-primary"></i>
                    <span>Rapid response within 24 hours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl border border-stone-100 p-8 md:p-12">
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-green-100 text-primary flex items-center justify-center rounded-full mx-auto mb-8 text-4xl">
                      <i className="fas fa-check"></i>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-earth mb-4">Request Sent!</h2>
                    <p className="text-gray-600 text-lg mb-8">
                      Thank you for contacting Bob's Bushery. We've received your request and will be in touch shortly to discuss your garden.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-bold border-b border-primary hover:text-green-800"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8" action="https://formspree.io/f/xqeeabzo" method="POST">
                    <h3 className="text-3xl font-serif font-bold text-earth">Ask for a Quote</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Your Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                          placeholder="0400 000 000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Service Required</label>
                        <select
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                        >
                          <option value="">Select a service...</option>
                          {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                          <option value="Other">Other / Not Sure</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Message / Garden Details</label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                        placeholder="Tell us a bit about your property and what you need help with..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-green-800 text-white font-bold py-5 rounded-xl text-xl transition-all shadow-xl disabled:opacity-50 flex items-center justify-center space-x-3"
                    >
                      {loading ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i>
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <span>Submit Quote Request</span>
                      )}
                    </button>
                    <p className="text-center text-gray-500 text-sm italic">
                      All submissions are sent directly to <span className="font-bold text-primary">{BUSINESS_INFO.quoteEmail}</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-96 relative w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920" alt="Gold Coast Service Area Map" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 p-6 rounded-2xl shadow-xl border border-stone-200 text-center backdrop-blur-sm">
            <h4 className="font-bold text-earth text-xl mb-1">Our Service Area</h4>
            <p className="text-primary font-bold">Gold Coast & Surroundings</p>
            <p className="text-gray-500 text-sm mt-2">Mobile service to your doorstep.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
