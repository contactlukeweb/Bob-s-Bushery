
import React from 'react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import AIImage from '../components/AIImage';

const Projects: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <section className="py-20 bg-earth text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">A showcase of recent garden transformations across the Gold Coast.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-100 transition-all hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <AIImage 
                    prompt={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    aspectRatio="16:9"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-primary text-xs font-bold mb-2 uppercase tracking-wide">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {project.location}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-earth">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-stone-50 p-12 rounded-3xl border border-stone-100">
            <h3 className="text-3xl font-serif font-bold mb-6 text-earth">Want your garden on this list?</h3>
            <p className="text-gray-600 mb-10 max-w-lg mx-auto">Let's discuss how we can transform your backyard into the perfect outdoor living area.</p>
            <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-all inline-block shadow-lg">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
