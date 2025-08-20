import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/ImageGallery';

const PortfolioPage = () => {
  const portfolioData = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      description: "Modern UI/UX for a fashion retailer.",
      category: "Web Design",
      imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      alt: "Fashion e-commerce website redesign",
      fallback: "/assets/placeholders/ecommerce.jpg"
    },
    {
      id: 2,
      title: "Brand Identity for Cafe",
      description: "Logo and branding for a local coffee shop.",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Cafe branding and logo",
      fallback: "/assets/placeholders/cafe.jpg"
    },
    {
      id: 3,
      title: "Mobile App for Fitness",
      description: "iOS/Android app for personal trainers.",
      category: "App Development",
      imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      alt: "Fitness mobile app UI",
      fallback: "/assets/placeholders/fitness.jpg"
    },
    {
      id: 4,
      title: "Portfolio Website for Photographer",
      description: "Minimalist portfolio for a professional photographer.",
      category: "Web Design",
      imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      alt: "Photographer portfolio website",
      fallback: "/assets/placeholders/photographer.jpg"
    },
    {
      id: 5,
      title: "Restaurant Menu App",
      description: "Digital menu and ordering system for restaurants.",
      category: "App Development",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant menu app UI",
      fallback: "/assets/placeholders/restaurant.jpg"
    },
    {
      id: 6,
      title: 'Unique Shower Enclosure',
      category: 'Bathroom',
      imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&w=800',
      alt: 'Simple shower tiling in a real home',
      description: 'Expert craftsmanship in creating a custom design for a unique and functional shower enclosure.',
      location: 'Sheffield, UK',
      projectDate: '2024-06-18',
      fallback: '/assets/placeholders/shower.jpg',
      type: 'portfolio'
    },
    {
      id: 7,
      title: 'Restaurant Kitchen Walls',
      category: 'Commercial',
      imageUrl: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&w=800',
      alt: 'Restaurant kitchen tiling with staff at work',
      description: 'Using premium, easy-to-clean tiles for a hygienic and durable commercial kitchen environment.',
      location: 'Newcastle, UK',
      projectDate: '2024-07-22',
      fallback: '/assets/placeholders/kitchen.jpg',
      type: 'portfolio'
    },
    {
      id: 8,
      title: 'Residential Hallway Floor',
      category: 'Floor',
      imageUrl: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&w=800',
      alt: 'Hallway tiling in a lived-in home',
      description: 'Flawless floor installation with attention to detail, ensuring a smooth and aesthetically pleasing finish.',
      location: 'Bristol, UK',
      projectDate: '2024-08-15',
      fallback: '/assets/placeholders/hallway.jpg',
      type: 'portfolio'
    },
    {
      id: 9,
      title: 'Heritage Restoration Project',
      category: 'Heritage',
      imageUrl: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&w=800',
      alt: 'Restoration tiling in a classic British home',
      description: 'Careful restoration of period features using historically accurate materials and techniques.',
      location: 'York, UK',
      projectDate: '2024-09-10',
      fallback: '/assets/placeholders/heritage.jpg',
      type: 'portfolio'
    },
    {
      id: 10,
      title: 'Luxury Hotel Entrance',
      category: 'Commercial',
      imageUrl: 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&w=800',
      alt: 'Hotel entrance tiling in a welcoming setting',
      description: 'High-end commercial installation creating an impressive first impression with premium materials.',
      location: 'Edinburgh, UK',
      projectDate: '2024-10-05',
      fallback: '/assets/placeholders/hotel.jpg',
      type: 'portfolio'
    },
    {
      id: 11,
      title: 'Pool Area Tiling',
      category: 'Outdoor',
      imageUrl: 'https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&w=800',
      alt: 'Poolside tiling in a family-friendly environment',
      description: 'Specialized pool-safe tiling ensuring both beauty and safety around water features.',
      location: 'Cardiff, UK',
      projectDate: '2024-11-12',
      fallback: '/assets/placeholders/pool.jpg',
      type: 'portfolio'
    },
    {
      id: 12,
      title: 'Geometric Pattern Design',
      category: 'Feature',
      imageUrl: 'https://images.pexels.com/photos/130976/pexels-photo-130976.jpeg?auto=compress&w=800',
      alt: 'Geometric tile pattern in a creative home project',
      description: 'Bespoke geometric designs showcasing our ability to create stunning visual features.',
      location: 'Glasgow, UK',
      projectDate: '2024-12-01',
      fallback: '/assets/placeholders/geometric.jpg',
      type: 'portfolio'
    }
  ];
  // Category filtering logic
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(portfolioData.map(project => project.category))];
  const filteredProjects = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Our <span className="gradient-text">Work</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore a selection of our completed tiling projects, showcasing our craftsmanship and attention to detail across various styles and spaces.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 ${selectedCategory === category ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Portfolio Gallery */}
      <ImageGallery images={filteredProjects} columns={3} gap={6} />
    </div>
  );
}

export default PortfolioPage;
