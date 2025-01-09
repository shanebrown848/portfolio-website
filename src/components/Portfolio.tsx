import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Sinister Gate Designs Website',
    description: 'Creative studio specializing in cybersecurity and tech solutions.',
    image: '/public/project pic 2.jpg',
    tags: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com',
    demo: 'https://sinistergatedesign.com',
    category: 'Web Development',
  },
  {
    title: 'Network Security Scanner',
    description: 'Automated security scanning tool for network vulnerability assessment',
    image: '/public/project pic 3.png',
    tags: ['Python', 'Security', 'Networking'],
    github: 'https://github.com',
    category: 'Cybersecurity',
  },
  {
    title: 'GateKeeper AI',
    description: 'AI system designed to gather and process data from your website, enhancing user interaction',
    image: '/public/project pic 1.jpg',
    tags: ['Python', 'Java', 'HTML', 'CSS'],
    github: 'https://github.com',
    demo: 'https://sinistergatedesign.com',
    category: 'Web Development',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Cybersecurity'];

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}