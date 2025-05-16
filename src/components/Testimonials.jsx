
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'woman-homeowner',
      content: 'TileMaster Pro transformed our outdated bathroom into a modern oasis. The attention to detail and craftsmanship exceeded our expectations. Highly recommend!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Interior Designer',
      image: 'male-designer',
      content: 'As an interior designer, I\'ve worked with many tiling companies, but TileMaster Pro stands out for their precision and reliability. They\'re my go-to for all client projects.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Restaurant Owner',
      image: 'woman-business-owner',
      content: 'The team at TileMaster Pro completed our restaurant renovation on time and within budget. The custom mosaic work they did is now the highlight of our dining area!',
      rating: 4
    },
    {
      name: 'David Thompson',
      role: 'Property Developer',
      image: 'male-property-developer',
      content: 'We\'ve used TileMaster Pro for multiple development projects. Their consistent quality and professionalism make them a valuable partner for our luxury builds.',
      rating: 5
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden gradient-bg">
      <div className="blur-overlay top-20 left-[10%]"></div>
      <div className="blur-overlay bottom-20 right-[30%]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers have to say about our tiling services.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="testimonial-card bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-indigo-800/50">
                  <img
                    className="w-full h-full object-cover" 
                    alt={`Portrait of ${testimonial.name}`}
                    src="https://images.unsplash.com/photo-1586732711591-12c04655338f" />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-indigo-400 text-indigo-400" />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-muted-foreground" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-background/20 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">See Our Work in Action</h3>
              <p className="text-muted-foreground mb-6">
                Browse our portfolio of completed projects to see the quality and craftsmanship we bring to every job.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'Modern kitchen backsplash',
                  'Luxury bathroom renovation',
                  'Outdoor patio tiling',
                  'Commercial restaurant floor',
                  'Custom mosaic shower',
                  'Minimalist floor design'
                ].map((project, i) => (
                  <div key={i} className="relative h-24 rounded-lg overflow-hidden group">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                      alt={project}
                      src="https://images.unsplash.com/photo-1569462989100-fc19203374cc" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-xs font-medium text-white">View</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <p className="text-lg font-medium mb-1">Completed Projects</p>
              <p className="text-sm text-muted-foreground">Across residential and commercial spaces</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
  