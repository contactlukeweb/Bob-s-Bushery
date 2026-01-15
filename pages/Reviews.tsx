
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <section className="py-20 bg-earth text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">Don't just take our word for it—see what our Gold Coast clients think.</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="flex items-center space-x-2"><i className="fab fa-google text-4xl"></i> <span className="font-bold">4.9/5 Google Reviews</span></div>
            <div className="flex items-center space-x-2"><i className="fab fa-facebook text-4xl"></i> <span className="font-bold">5/5 Facebook Rating</span></div>
            <div className="flex items-center space-x-2"><i className="fas fa-award text-4xl"></i> <span className="font-bold">Locally Trusted Expert</span></div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {[...REVIEWS, ...REVIEWS].map((review, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full text-xl font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.location} &bull; {review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-500 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < review.rating ? '' : 'text-stone-300'}`}></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed">"{review.comment}"</p>
                <div className="mt-6 pt-6 border-t border-stone-200 flex items-center text-primary font-bold text-sm">
                  <i className="fas fa-check-circle mr-2"></i> Verified Customer
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-earth rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-serif font-bold mb-6">Had a great experience with Bob?</h3>
            <p className="text-stone-300 mb-8 max-w-lg mx-auto">We value your feedback! Reviews help us grow and help other Gold Coast locals find reliable garden care.</p>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="bg-white text-earth px-8 py-3 rounded-lg font-bold hover:bg-stone-100 transition-all inline-block">
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
