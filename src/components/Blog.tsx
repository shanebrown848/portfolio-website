import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: 'The Importance of Personal Websites for Tech Professionals',
    excerpt:
      'In Todays competitive job market having a personal website is more than just an optional asset, its a necessity.',
    date: '2025-01-08',
    readTime: '2 min read',
    image: '/public/project pic 4.png',
  },
  {
    title: 'Cybersecurity in Web Development: Why Secure Code Matters',
    excerpt:
      'Web development is not just about creating visually appealing interfaces, its about building secure, reliable platforms that users can trust.',
    date: '2025-01-08',
    readTime: '2 min read',
    image: '/public/project pic 5.png',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-600">{post.excerpt}</p>
                <a
                  href="https://www.sinistergatedesign.com/tech-talk-cybersecurity-trends"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}