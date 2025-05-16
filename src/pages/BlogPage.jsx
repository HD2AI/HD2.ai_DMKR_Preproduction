
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Placeholder content - In a real app, this would come from an API or CMS
  const posts = [
    { id: 1, title: 'Choosing the Right Tile for Your Bathroom', excerpt: 'Factors to consider when selecting bathroom tiles: durability, water resistance, style, and budget.', date: '2025-04-15', imageAlt: 'Various bathroom tile samples', imageDesc: 'High-resolution photo displaying a variety of bathroom tile samples including ceramic, porcelain, and natural stone.' },
    { id: 2, title: 'Grout Guide: Epoxy vs. Cement', excerpt: 'Understanding the pros and cons of different grout types for longevity and maintenance.', date: '2025-03-28', imageAlt: 'Close up of grout lines between tiles', imageDesc: 'Macro photograph showing clean grout lines between modern grey tiles, comparing epoxy and cement grout appearance.' },
    { id: 3, title: 'Tiling Trends for 2025', excerpt: 'Explore the latest styles: large formats, bold patterns, natural textures, and sustainable options.', date: '2025-03-10', imageAlt: 'Mood board with trendy tile designs', imageDesc: 'Flat lay photo of a designer mood board featuring trendy tile samples, color palettes, and fabric swatches for 2025 interior design.' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Tiling <span className="gradient-text">Insights Blog</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Tips, trends, and advice from the experts at DMKR.co.uk.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            className="bg-secondary/50 rounded-lg border border-border/50 overflow-hidden flex flex-col"
          >
            <div className="h-48 bg-gradient-to-br from-indigo-900 to-purple-900 relative">
               <img  class="w-full h-full object-cover opacity-70" alt={post.imageAlt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold mb-3 flex-grow">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium self-start"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground">
          More articles coming soon. Stay tuned for expert tiling advice!
        </p>
      </motion.div>
    </div>
  );
};

export default BlogPage;
  