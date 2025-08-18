import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Blog content with relevant tiling industry images
  const posts = [
    { 
      id: 1, 
      title: 'Choosing the Right Tile for Your Bathroom', 
      excerpt: 'Factors to consider when selecting bathroom tiles: durability, water resistance, style, and budget.', 
      date: '2025-04-15', 
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-9da237120b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      imageAlt: 'Elegant bathroom with luxury marble tiles', 
      imageDesc: 'A beautifully designed bathroom featuring premium marble tiles, demonstrating the importance of material selection.' 
    },
    { 
      id: 2, 
      title: 'Grout Guide: Epoxy vs. Cement', 
      excerpt: 'Understanding the pros and cons of different grout types for longevity and maintenance.', 
      date: '2025-03-28', 
      imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      imageAlt: 'Close-up of professional grouting work', 
      imageDesc: 'Professional tiler applying grout between tiles, showing the precision required for quality installation.' 
    },
    { 
      id: 3, 
      title: 'Tiling Trends for 2025', 
      excerpt: 'Explore the latest styles: large formats, bold patterns, natural textures, and sustainable options.', 
      date: '2025-03-10', 
      imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      imageAlt: 'Modern geometric tile pattern design', 
      imageDesc: 'Contemporary geometric tile patterns showcasing the latest trends in interior design for 2025.' 
    },
    { 
      id: 4, 
      title: 'Maintenance Tips for Long-Lasting Tiles', 
      excerpt: 'How to keep your tiles looking pristine for years with proper cleaning and care routines.', 
      date: '2025-02-20', 
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      imageAlt: 'Cleaning supplies for tile maintenance', 
      imageDesc: 'Professional cleaning equipment and supplies used for maintaining tiled surfaces.' 
    },
    { 
      id: 5, 
      title: 'The Benefits of Porcelain vs Ceramic Tiles', 
      excerpt: 'Compare durability, cost, and applications to make the best choice for your project.', 
      date: '2025-02-05', 
      imageUrl: 'https://images.unsplash.com/photo-1600566752734-c3d7ba62c2bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      imageAlt: 'Various tile samples showing different materials', 
      imageDesc: 'Collection of porcelain and ceramic tile samples demonstrating different textures and finishes.' 
    },
    { 
      id: 6, 
      title: 'Planning Your Kitchen Backsplash Project', 
      excerpt: 'Step-by-step guide to designing and installing the perfect kitchen backsplash.', 
      date: '2025-01-18', 
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
      imageAlt: 'Modern kitchen with subway tile backsplash', 
      imageDesc: 'Beautiful modern kitchen featuring a classic subway tile backsplash installation.' 
    }
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
            <div className="h-48 relative overflow-hidden">
               <img 
                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                 alt={post.imageAlt} 
                 src={post.imageUrl} 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold mb-3 flex-grow">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium self-start transition-colors"
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
