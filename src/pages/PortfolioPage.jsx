import React from 'react';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const projects = [
    { id: 1, title: 'Luxury Bathroom Renovation', category: 'Bathroom', imageUrl: 'https://images.unsplash.com/photo-1584622650111-9da237120b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Luxurious bathroom with large format marble tiles', imageDesc: 'Showcasing expert craftsmanship with premium marble tiles for a durable and elegant finish.' },
    { id: 2, title: 'Modern Kitchen Backsplash', category: 'Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Contemporary kitchen with subway tile backsplash installation', imageDesc: 'Professional installation of premium subway tiles creating a clean, modern kitchen aesthetic.' },
    { id: 3, title: 'Durable Garage Floor', category: 'Floor', imageUrl: 'https://images.unsplash.com/photo-1600585152915-d08a228c8d52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Hard-wearing tiled garage floor', imageDesc: 'Robust floor installation using high-quality, durable tiles built to last, showcasing our guaranteed quality.' },
    { id: 4, title: 'Chic Patio Tiling', category: 'Outdoor', imageUrl: 'https://images.unsplash.com/photo-1594359715953-cb511b94e761?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Stylish outdoor patio with large format tiles', imageDesc: 'Comprehensive service from design to installation for a beautiful and durable outdoor space.' },
    { id: 5, title: 'Commercial Office Flooring', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Modern office with professional tiled flooring', imageDesc: 'Efficient and timely completion of a large-scale commercial flooring project, minimizing disruption.' },
    { id: 6, title: 'Unique Shower Enclosure', category: 'Bathroom', imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Shower with expertly installed mosaic tile walls', imageDesc: 'Expert craftsmanship in creating a custom design for a unique and functional shower enclosure.' },
    { id: 7, title: 'Restaurant Kitchen Walls', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Professional tiled walls in a commercial kitchen', imageDesc: 'Using premium, easy-to-clean tiles for a hygienic and durable commercial kitchen environment.' },
    { id: 8, title: 'Residential Hallway Floor', category: 'Floor', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Beautiful tiled hallway floor in a modern home', imageDesc: 'Flawless floor installation with attention to detail, ensuring a smooth and aesthetically pleasing finish.' },
    { id: 9, title: 'Heritage Restoration Project', category: 'Heritage', imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Traditional Victorian tile pattern restoration', imageDesc: 'Careful restoration of period features using historically accurate materials and techniques.' },
    { id: 10, title: 'Luxury Hotel Entrance', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Grand hotel entrance with marble tile flooring', imageDesc: 'High-end commercial installation creating an impressive first impression with premium materials.' },
    { id: 11, title: 'Pool Area Tiling', category: 'Outdoor', imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Swimming pool area with non-slip safety tiles', imageDesc: 'Specialized pool-safe tiling ensuring both beauty and safety around water features.' },
    { id: 12, title: 'Geometric Pattern Design', category: 'Feature', imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', imageAlt: 'Creative geometric tile pattern installation', imageDesc: 'Bespoke geometric designs showcasing our ability to create stunning visual features.' },
  ];

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img  
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              alt={project.imageAlt}
              src={project.imageUrl} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
              <span className="text-sm text-indigo-300 bg-indigo-900/50 px-2 py-0.5 rounded">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
