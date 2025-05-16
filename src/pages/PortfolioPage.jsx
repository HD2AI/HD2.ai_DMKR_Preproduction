
import React from 'react';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const projects = [
    { id: 1, title: 'Modern Bathroom Oasis', category: 'Bathroom', imageAlt: 'Modern bathroom with grey tiles and walk-in shower', imageDesc: 'Ultra high-resolution photo of a luxurious modern bathroom featuring large-format grey porcelain tiles, a glass walk-in shower, and sleek chrome fixtures.' },
    { id: 2, title: 'Sleek Kitchen Backsplash', category: 'Kitchen', imageAlt: 'White subway tile kitchen backsplash', imageDesc: 'Photo-realistic image of a bright kitchen with a clean white subway tile backsplash, quartz countertops, and stainless steel appliances.' },
    { id: 3, title: 'Elegant Living Room Floor', category: 'Floor', imageAlt: 'Large format porcelain tiles in a living room', imageDesc: 'High-res photo showcasing elegant large-format marble-effect porcelain floor tiles in a spacious, well-lit living room setting.' },
    { id: 4, title: 'Custom Mosaic Shower Niche', category: 'Bathroom', imageAlt: 'Intricate mosaic tile design in a shower niche', imageDesc: 'Detailed close-up photo of a custom-designed intricate glass mosaic tile pattern inside a recessed shower niche.' },
    { id: 5, title: 'Durable Outdoor Patio', category: 'Outdoor', imageAlt: 'Natural stone tiles on an outdoor patio', imageDesc: 'High-resolution image of a stylish outdoor patio area paved with durable, non-slip natural slate stone tiles, furnished with outdoor seating.' },
    { id: 6, title: 'Restaurant Feature Wall', category: 'Commercial', imageAlt: 'Textured tile feature wall in a restaurant', imageDesc: 'Photo-realistic depiction of a trendy restaurant interior highlighting a feature wall covered in textured, geometric ceramic tiles.' },
    { id: 7, title: 'Minimalist Entryway Floor', category: 'Floor', imageAlt: 'Polished concrete look tiles in an entryway', imageDesc: 'Ultra high-res photo of a minimalist house entryway featuring large, polished concrete-effect floor tiles for a seamless look.' },
    { id: 8, title: 'Luxury Master Bath', category: 'Bathroom', imageAlt: 'Marble tiles in a luxurious master bathroom', imageDesc: 'Stunning high-resolution photograph of a luxury master bathroom fully tiled with Calacatta marble, featuring a freestanding tub and double vanity.' },
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
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img  
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              alt={project.imageAlt}
             src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
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
  