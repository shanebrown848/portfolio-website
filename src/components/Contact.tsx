import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          

         {/* Contact Information */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-center mb-4">Contact Information</h3>
            <ul className="space-y-4 text-center">
              <li>
                <span className="block text-gray-700 font-medium">Email:</span>
                <a
                  href="mailto:shanebrown848@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  shanebrown848@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-gray-700 font-medium">Phone:</span>
                <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                  (928) 724-8038
                </a>
              </li>
              <li>
                <span className="block text-gray-700 font-medium">GitHub:</span>
                <a
                  href="https://github.com/shanebrown848"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/shanebrown848
                </a>
              </li>
              <li>
                <span className="block text-gray-700 font-medium">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/shane-brown-1807b6318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/shane-brown-1807b6318
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

