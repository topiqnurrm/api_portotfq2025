'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GalleryHome() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const galleries = [
    {
      id: 1,
      title: "Skills",
      description: "Discover my technical and professional skill sets and expertise",
      icon: "⚡",
      path: "/galeri/skills",
      count: "Coming soon",
      color: "from-indigo-500 to-blue-600",
      available: false
    },
    {
      id: 2,
      title: "Achievements",
      description: "Milestones and accomplishments throughout my professional journey",
      icon: "🏆",
      path: "/galeri/achievements",
      count: "Coming soon",
      color: "from-yellow-500 to-orange-600",
      available: false
    },
    {
      id: 3,
      title: "Certification",
      description: "Browse through my professional certifications and credentials",
      icon: "🎓",
      path: "/galeri/certification",
      count: "83 certificates",
      color: "from-blue-500 to-purple-600",
      available: true
    },
    {
      id: 4,
      title: "Publications",
      description: "Articles, papers, and content I've published and contributed to",
      icon: "📚",
      path: "/galeri/publications",
      count: "Coming soon",
      color: "from-green-500 to-teal-600",
      available: false
    },
    {
      id: 5,
      title: "Activities",
      description: "Explore photos and moments from various activities and events",
      icon: "📸",
      path: "/galeri/kegiatan",
      count: "belum selesai",
      color: "from-pink-500 to-rose-600",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to API Porto TFQ 2025
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my digital portfolio showcasing skills, achievements, certifications, publications, and activities
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleries.map((gallery) => (
            <Link
              key={gallery.id}
              href={gallery.available ? gallery.path : '#'}
              className={`block ${!gallery.available ? 'cursor-not-allowed' : ''}`}
              onMouseEnter={() => gallery.available && setHoveredCard(gallery.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative h-72 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  gallery.available
                    ? 'hover:shadow-2xl hover:scale-105'
                    : 'opacity-60'
                } ${hoveredCard === gallery.id ? 'transform scale-105' : ''}`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gallery.color} opacity-90`}></div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                </div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  <div>
                    <div className="text-5xl mb-4">{gallery.icon}</div>
                    <h2 className="text-2xl font-bold mb-2">{gallery.title}</h2>
                    <p className="text-white/90 text-sm leading-relaxed">{gallery.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {gallery.count}
                    </span>
                    {gallery.available ? (
                      <span className="flex items-center gap-2 text-sm font-medium">
                        View Gallery
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-xs font-medium bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        Locked
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                {gallery.available && hoveredCard === gallery.id && (
                  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                )}

                {/* Available Badge */}
                {gallery.available && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    LIVE
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {galleries.map((gallery) => (
            <div key={`stat-${gallery.id}`} className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-center">
              <div className="text-2xl mb-1">{gallery.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {gallery.available ? gallery.count.split(' ')[0] : '—'}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{gallery.title}</div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-2xl">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              💡 <strong>Tip:</strong> Click on any available gallery card to explore its contents. 
              Currently showing <span className="font-bold text-blue-600">83 certifications</span>. More galleries are coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}