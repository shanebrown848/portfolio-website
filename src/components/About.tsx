import React from 'react';
import { Code, Shield, Globe } from 'lucide-react';

const skills = [
  {
    category: 'Web Development',
    icon: Code,
    items: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'React', 'Node.js'],
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    items: ['Penetration Testing', 'Security Auditing', 'Network Security', 'Vulnerability Assessment', 'Incident Response', 'Forensics', 'Secure Coding Practices'],
  },
  {
    category: 'Other',
    icon: Globe,
    items: ['Project Management', 'Technical Writing', 'Team Leadership', 'Communication Skills', 'Problem-Solving', 'Time Management', 'Collaboration'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/profile-pic.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm Shane Brown, a passionate and driven tech enthusiast with a strong foundation in Cybersecurity
              and web development. My experience includes penetration testing, security auditing, and network security,
              along with creating innovative websites and interactive applications. I'm always eager to learn new skills
              and take on challenging projects. I thrive in collaborative environments and am dedicated to creating 
              impactful solutions in the tech world.
            </p>
            
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <div className="flex items-center mb-2">
                    <skillGroup.icon className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-lg">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}