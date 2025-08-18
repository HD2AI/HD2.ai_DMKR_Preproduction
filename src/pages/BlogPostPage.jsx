import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SimpleImage from '@/components/SimpleImage'; 

// Updated blog posts data with matching images from BlogPage
const blogPostsData = {
  1: { 
    title: 'Choosing the Right Tile for Your Bathroom', 
    date: '2025-04-15', 
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-9da237120b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Elegant bathroom with luxury marble tiles',
    imageDesc: 'A beautifully designed bathroom featuring premium marble tiles, demonstrating the importance of material selection.',
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
    imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Close-up of professional grouting work',
    imageDesc: 'Professional tiler applying grout between tiles, showing the precision required for quality installation.',
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
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Modern geometric tile pattern design',
    imageDesc: 'Contemporary geometric tile patterns showcasing the latest trends in interior design for 2025.',
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
  4: { 
    title: 'Maintenance Tips for Long-Lasting Tiles', 
    date: '2025-02-20', 
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Cleaning supplies for tile maintenance',
    imageDesc: 'Professional cleaning equipment and supplies used for maintaining tiled surfaces.',
    content: `
      <p>Proper maintenance is essential for keeping your tiles looking beautiful and lasting for decades. Here's your comprehensive guide to tile care:</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Daily Maintenance</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Regular Cleaning:</strong> Sweep or vacuum daily to remove dirt and grit that can scratch surfaces. Use a damp mop with pH-neutral cleaner.</li>
        <li><strong>Immediate Spill Cleanup:</strong> Clean spills immediately to prevent staining, especially on natural stone or unglazed tiles.</li>
        <li><strong>Proper Ventilation:</strong> Ensure good air circulation in wet areas to prevent mold and mildew growth.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Weekly Deep Cleaning</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Grout Care:</strong> Use a grout brush with mild cleaner to prevent buildup. Avoid acidic cleaners on natural stone.</li>
        <li><strong>Proper Products:</strong> Use cleaners specifically designed for your tile type. Avoid bleach on colored grout.</li>
        <li><strong>Rinse Thoroughly:</strong> Always rinse cleaning products completely to prevent residue buildup.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Annual Maintenance</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Grout Sealing:</strong> Reseal grout lines annually, or as needed, to maintain water resistance.</li>
        <li><strong>Stone Sealing:</strong> Natural stone tiles may need sealing every 1-2 years depending on use and stone type.</li>
        <li><strong>Professional Inspection:</strong> Have a professional assess your tiles and grout condition annually.</li>
      </ul>
      <p>Following these maintenance practices will help preserve your investment and keep your tiled surfaces looking pristine for years to come.</p>
    ` 
  },
  5: { 
    title: 'The Benefits of Porcelain vs Ceramic Tiles', 
    date: '2025-02-05', 
    imageUrl: 'https://images.unsplash.com/photo-1600566752734-c3d7ba62c2bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Various tile samples showing different materials',
    imageDesc: 'Collection of porcelain and ceramic tile samples demonstrating different textures and finishes.',
    content: `
      <p>Choosing between porcelain and ceramic tiles is one of the most important decisions in any tiling project. Understanding their differences will help you make the best choice:</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Ceramic Tiles</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Composition:</strong> Made from clay, sand, and other natural materials, fired at lower temperatures (1800-2100°F).</li>
        <li><strong>Water Absorption:</strong> Higher porosity (3-7% absorption rate), making them less suitable for wet areas.</li>
        <li><strong>Durability:</strong> Good for low to medium traffic areas, but can chip or crack under heavy use.</li>
        <li><strong>Cost:</strong> Generally more affordable, making them ideal for budget-conscious projects.</li>
        <li><strong>Installation:</strong> Easier to cut and install, suitable for DIY projects.</li>
        <li><strong>Best For:</strong> Interior walls, light-traffic floors, budget renovations.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Porcelain Tiles</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Composition:</strong> Made from refined clay and feldspar, fired at higher temperatures (2200-2300°F).</li>
        <li><strong>Water Absorption:</strong> Very low porosity (<0.5% absorption rate), virtually waterproof.</li>
        <li><strong>Durability:</strong> Extremely durable, resistant to scratches, stains, and frost damage.</li>
        <li><strong>Versatility:</strong> Suitable for both indoor and outdoor use, including freezing climates.</li>
        <li><strong>Maintenance:</strong> Lower maintenance due to density and non-porous surface.</li>
        <li><strong>Best For:</strong> High-traffic areas, wet areas, outdoor applications, commercial spaces.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Making the Right Choice</h3>
      <p>Consider your specific needs: budget, location, traffic levels, and aesthetic preferences. While porcelain offers superior performance, ceramic can be perfect for many applications at a lower cost.</p>
    ` 
  },
  6: { 
    title: 'Planning Your Kitchen Backsplash Project', 
    date: '2025-01-18', 
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Modern kitchen with subway tile backsplash',
    imageDesc: 'Beautiful modern kitchen featuring a classic subway tile backsplash installation.',
    content: `
      <p>A well-designed kitchen backsplash can transform your cooking space while providing practical protection. Here's your step-by-step planning guide:</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Design Planning</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Measure Accurately:</strong> Calculate the square footage, accounting for outlets, windows, and cutouts.</li>
        <li><strong>Choose Your Style:</strong> Consider subway, mosaic, natural stone, or large format tiles based on your kitchen's aesthetic.</li>
        <li><strong>Color Coordination:</strong> Select colors that complement your cabinets, countertops, and overall kitchen design.</li>
        <li><strong>Pattern Selection:</strong> Decide on layout patterns like running bond, herringbone, or vertical stack.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Material Considerations</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Easy Cleaning:</strong> Choose tiles that resist grease and stains - glazed ceramic or porcelain work well.</li>
        <li><strong>Heat Resistance:</strong> Ensure tiles can handle heat from cooking, especially behind the stove.</li>
        <li><strong>Grout Choice:</strong> Consider epoxy grout for better stain resistance in high-use areas.</li>
        <li><strong>Edge Finishing:</strong> Plan for trim pieces or edge treatments for a professional look.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Installation Timeline</h3>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Preparation:</strong> 1 day for surface prep and layout planning.</li>
        <li><strong>Installation:</strong> 1-2 days for tile installation, depending on complexity.</li>
        <li><strong>Grouting:</strong> 1 day for grouting and initial cleanup.</li>
        <li><strong>Finishing:</strong> 1 day for final cleanup and sealing (if required).</li>
      </ul>
      <p>Professional installation ensures the best results, especially for complex patterns or challenging layouts. The investment in quality workmanship pays off in durability and appearance.</p>
    ` 
  },
};

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = blogPostsData[postId];

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <p className="text-muted-foreground mt-4">Sorry, we couldn't find the blog post you're looking for.</p>
        <Button asChild variant="link" className="mt-6">
           <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
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
          
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-xl">
             <SimpleImage
                src={post.imageUrl}
                alt={post.imageAlt}
                className="w-full h-full object-cover"
                showPlaceholder={true}
                placeholderType="blog"
                placeholderText={post.title}
                onError={() => console.error('Blog post image failed to load:', post.imageUrl)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
