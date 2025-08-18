import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/ImageGallery';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    { 
      id: 1, 
      title: 'Luxury Bathroom Renovation', 
      category: 'Bathroom', 
      src: 'https://images.unsplash.com/photo-1584622650111-9da237120b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Luxurious bathroom with large format marble tiles', 
      description: 'Showcasing expert craftsmanship with premium marble tiles for a durable and elegant finish.',
      location: 'London, UK',
      projectDate: '2024-01-15',
      type: 'portfolio'
    },
    { 
      id: 2, 
      title: 'Modern Kitchen Backsplash', 
      category: 'Kitchen', 
      src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Contemporary kitchen with subway tile backsplash installation', 
      description: 'Professional installation of premium subway tiles creating a clean, modern kitchen aesthetic.',
      location: 'Manchester, UK',
      projectDate: '2024-02-20',
      type: 'portfolio'
    },
    { 
      id: 3, 
      title: 'Durable Garage Floor', 
      category: 'Floor', 
      src: 'https://images.unsplash.com/photo-1600585152915-d08a228c8d52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Hard-wearing tiled garage floor', 
      description: 'Robust floor installation using high-quality, durable tiles built to last, showcasing our guaranteed quality.',
      location: 'Birmingham, UK',
      projectDate: '2024-03-10',
      type: 'portfolio'
    },
    { 
      id: 4, 
      title: 'Chic Patio Tiling', 
      category: 'Outdoor', 
      src: 'https://images.unsplash.com/photo-1594359715953-cb511b94e761?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Stylish outdoor patio with large format tiles', 
      description: 'Comprehensive service from design to installation for a beautiful and durable outdoor space.',
      location: 'Leeds, UK',
      projectDate: '2024-04-05',
      type: 'portfolio'
    },
    { 
      id: 5, 
      title: 'Commercial Office Flooring', 
      category: 'Commercial', 
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Modern office with professional tiled flooring', 
      description: 'Efficient and timely completion of a large-scale commercial flooring project, minimizing disruption.',
      location: 'Liverpool, UK',
      projectDate: '2024-05-12',
      type: 'portfolio'
    },
    { 
      id: 6, 
      title: 'Unique Shower Enclosure', 
      category: 'Bathroom', 
      src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Shower with expertly installed mosaic tile walls', 
      description: 'Expert craftsmanship in creating a custom design for a unique and functional shower enclosure.',
      location: 'Sheffield, UK',
      projectDate: '2024-06-18',
      type: 'portfolio'
    },
    { 
      id: 7, 
      title: 'Restaurant Kitchen Walls', 
      category: 'Commercial', 
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Professional tiled walls in a commercial kitchen', 
      description: 'Using premium, easy-to-clean tiles for a hygienic and durable commercial kitchen environment.',
      location: 'Newcastle, UK',
      projectDate: '2024-07-22',
      type: 'portfolio'
    },
    { 
      id: 8, 
      title: 'Residential Hallway Floor', 
      category: 'Floor', 
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Beautiful tiled hallway floor in a modern home', 
      description: 'Flawless floor installation with attention to detail, ensuring a smooth and aesthetically pleasing finish.',
      location: 'Bristol, UK',
      projectDate: '2024-08-15',
      type: 'portfolio'
    },
    { 
      id: 9, 
      title: 'Heritage Restoration Project', 
      category: 'Heritage', 
      src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Traditional Victorian tile pattern restoration', 
      description: 'Careful restoration of period features using historically accurate materials and techniques.',
      location: 'York, UK',
      projectDate: '2024-09-10',
      type: 'portfolio'
    },
    { 
      id: 10, 
      title: 'Luxury Hotel Entrance', 
      category: 'Commercial', 
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Grand hotel entrance with marble tile flooring', 
      description: 'High-end commercial installation creating an impressive first impression with premium materials.',
      location: 'Edinburgh, UK',
      projectDate: '2024-10-05',
      type: 'portfolio'
    },
    { 
      id: 11, 
      title: 'Pool Area Tiling', 
      category: 'Outdoor', 
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Swimming pool area with non-slip safety tiles', 
      description: 'Specialized pool-safe tiling ensuring both beauty and safety around water features.',
      location: 'Cardiff, UK',
      projectDate: '2024-11-12',
      type: 'portfolio'
    },
    { 
      id: 12, 
      title: 'Geometric Pattern Design', 
      category: 'Feature', 
      src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      alt: 'Creative geometric tile pattern installation', 
      description: 'Bespoke geometric designs showcasing our ability to create stunning visual features.',
      location: 'Glasgow, UK',
      projectDate: '2024-12-01',
      type: 'portfolio'
    },
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Portfolio Gallery */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        key={selectedCategory} // Re-animate when category changes
      >
        <ImageGallery 
          images={filteredProjects}
          columns={3}
          gap={8}
          enableModal={true}
          showLoadingStates={true}
          className="mb-8"
        />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}+</div>
          <div className="text-gray-600">Projects Completed</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length - 1}</div>
          <div className="text-gray-600">Service Categories</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
          <div className="text-gray-600">Client Satisfaction</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
