
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button'; 

// Placeholder content - In a real app, this would fetch data based on postId
const blogPostsData = {
  1: { 
    title: 'Choosing the Right Tile for Your Bathroom', 
    date: '2025-04-15', 
    imageUrl: 'https://images.unsplash.com/photo-1559143616-2a8d10344837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Various bathroom tile samples',
    imageDesc: 'High-resolution photo displaying a variety of bathroom tile samples including ceramic, porcelain, and natural stone.',
    content: `
      <p>Selecting the perfect tile for your bathroom involves balancing aesthetics, functionality, and budget. Here are key factors to consider:</p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Water Resistance:</strong> Bathrooms are high-moisture environments. Porcelain tiles are virtually waterproof (absorption rate <0.5%), making them ideal. Glazed ceramic tiles are also suitable, while natural stone may require sealing.</li>
        <li><strong>Durability & Maintenance:</strong> Porcelain is highly durable and resists scratches and stains. Ceramic is also durable but can chip more easily. Natural stone varies in durability and often requires more maintenance.</li>
        <li><strong>Slip Resistance:</strong> Safety is paramount. Look for tiles with a higher coefficient of friction (COF) rating, especially for floor tiles. Textured finishes offer better grip than polished ones.</li>
        <li><strong>Size & Scale:</strong> Large-format tiles can make a small bathroom feel bigger due to fewer grout lines. Mosaics are great for shower floors (more grout lines = more grip) and accent walls.</li>
        <li><strong>Style & Aesthetics:</strong> Consider the overall design theme – modern, traditional, rustic? Tile color, pattern, and finish play a huge role in achieving the desired look.</li>
        <li><strong>Grout:</strong> Choose a grout color that complements or contrasts your tiles. Consider epoxy grout for better stain and mold resistance, although it's more expensive and harder to install than traditional cement grout.</li>
        <li><strong>Budget:</strong> Prices vary significantly. Ceramic is often the most budget-friendly, followed by porcelain. Natural stone and high-end designer tiles can be considerably more expensive. Factor in installation costs too.</li>
      </ul>
      <p>Consulting with a professional tiler can help you navigate these choices and ensure a beautiful, long-lasting result for your bathroom renovation.</p>
    ` 
  },
  2: { 
    title: 'Grout Guide: Epoxy vs. Cement', 
    date: '2025-03-28', 
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Close up of grout lines between tiles',
    imageDesc: 'Macro photograph showing clean grout lines between modern grey tiles, comparing epoxy and cement grout appearance.',
    content: `
      <p>Grout does more than just fill the gaps between tiles; it provides structural support and prevents water ingress. The two main types are cement-based and epoxy grout. Here's a comparison:</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Cement-Based Grout</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Composition:</strong> A mixture of cement, water, and sometimes sand (sanded for wider joints, unsanded for narrower joints).</li>
        <li><strong>Pros:</strong> More affordable, easier to install and clean up during installation, wide range of colors.</li>
        <li><strong>Cons:</strong> Porous (absorbs water and stains unless sealed), requires periodic sealing, prone to cracking over time, can harbor mold/mildew if not maintained.</li>
        <li><strong>Best For:</strong> Dry areas, budget-conscious projects, DIY installations.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Epoxy Grout</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Composition:</strong> Made from epoxy resins and a filler powder.</li>
        <li><strong>Pros:</strong> Non-porous (waterproof and highly resistant to stains, chemicals, and grease), extremely durable, doesn't require sealing, inhibits mold/mildew growth, maintains color consistency.</li>
        <li><strong>Cons:</strong> More expensive, significantly harder and faster-setting during installation (less forgiving), can discolor porous tiles if not cleaned quickly, often has a slight plastic sheen.</li>
        <li><strong>Best For:</strong> Wet areas (showers, kitchens), high-traffic floors, areas requiring high hygiene standards, projects where longevity and low maintenance are key.</li>
      </ul>
      <p>While epoxy grout offers superior performance, its challenging installation often makes it better suited for professional tilers. Cement grout remains a reliable option, especially when properly sealed and maintained.</p>
    ` 
  },
  3: { 
    title: 'Tiling Trends for 2025', 
    date: '2025-03-10', 
    imageUrl: 'https://images.unsplash.com/photo-1576563692289-2d1369f69165?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Mood board with trendy tile designs',
    imageDesc: 'Flat lay photo of a designer mood board featuring trendy tile samples, color palettes, and fabric swatches for 2025 interior design.',
    content: `
      <p>Tiling is constantly evolving. Here are some key trends shaping interior design in 2025:</p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Large-Format Tiles:</strong> Bigger tiles (e.g., 24x48 inches or larger) continue to gain popularity, creating a seamless look with fewer grout lines, especially on floors and shower walls.</li>
        <li><strong>Natural & Earthy Tones:</strong> Warm neutrals, terracotta, sage green, and deep blues are in vogue, bringing a sense of calm and connection to nature indoors.</li>
        <li><strong>Textured Finishes:</strong> Tiles with 3D patterns, fluted surfaces, or tactile finishes add depth and visual interest to walls. Think beyond smooth surfaces.</li>
        <li><strong>Pattern Play:</strong> Bold geometric patterns, updated subway tile layouts (vertical stacks, herringbone), and intricate mosaic designs are making a comeback as feature elements.</li>
        <li><strong>Terrazzo & Stone Looks:</strong> Porcelain tiles mimicking the look of terrazzo, marble, slate, and other natural stones offer durability and lower maintenance than the real thing.</li>
        <li><strong>Matte Finishes:</strong> While polished tiles still have their place, matte finishes are increasingly popular for a sophisticated, understated elegance. They also tend to show water spots and smudges less.</li>
        <li><strong>Sustainability:</strong> Look for tiles made from recycled materials or produced using eco-friendly manufacturing processes.</li>
      </ul>
      <p>Don't be afraid to mix and match trends or use tiles in unexpected ways, like tiling a ceiling or creating a tiled headboard. The key is to choose styles that resonate with your personal taste and complement your home's architecture.</p>
    ` 
  },
};

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = blogPostsData[postId];

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <p className="text-muted-foreground mt-4">Sorry, we couldn't find the blog post you're looking for.</p>
        <Button asChild variant="link" className="mt-6">
           <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <article className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
             <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 gradient-text">
              {post.title}
            </h1>
          </header>
          
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8 bg-secondary/50">
             <img  
                className="w-full h-full object-cover" 
                alt={post.imageAlt}
              src={post.imageUrl} />
          </div>

          <div 
            className="prose prose-invert lg:prose-lg max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
        </article>
      </motion.div>
    </div>
  );
};

export default BlogPostPage;
