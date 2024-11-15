import React from 'react';
import { ExternalLink } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      year: 2023,
      url: "https://efss-eg.com/ga2023.php",
      title: "Annual Conference 2023"
    },
    {
      year: 2022,
      url: "https://efss-eg.com/ga2022.php",
      title: "Research Symposium 2022"
    },
    {
      year: 2021,
      url: "https://efss-eg.com/ga2021.php",
      title: "International Workshop 2021"
    },
    {
      year: 2020,
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "International Workshop 2021"
    },
    {
      year: 2019,
      url: "https://efss-eg.com/ga2019.php",
      title: "International Workshop 2021"
    },
    {
      year: 2018,
      url: "https://efss-eg.com/ga2018.php",
      title: "International Workshop 2021"
    },
    {
      year: 2017,
      url: "https://efss-eg.com/ga2017.php",
      title: "International Workshop 2021"
    },
    // Add more images as needed
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">Event Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  <p className="text-gray-200">{image.year}</p>
                  <button className="mt-2 inline-flex items-center text-white hover:text-[#1abc9c] transition-colors">
                    View Gallery
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;