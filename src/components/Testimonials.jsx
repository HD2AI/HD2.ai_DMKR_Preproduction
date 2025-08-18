import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

import Modal from './Modal'; // Import the Modal component
const Testimonials = () => { 
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwf18%3D',
      content: 'DMKR.co.uk transformed our outdated bathroom into a modern oasis. The attention to detail and craftsmanship exceeded our expectations. Highly recommend!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D',
      content: 'As an interior designer, I\'ve worked with many tiling companies, but DMKR.co.uk stands out for their precision and reliability. They\'re my go-to for all client projects.',
      rating: 5
    },
    {
      name: 'Anthony Hines',
      role: 'Property Developer',
      image: 'https://images.unsplash.com/photo-1639723281234-b010287598a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fA%3D%3D',
      content: 'DMKR.co.uk\'s tiling work on our recent development was top-notch. Their efficiency and attention to detail helped us stay on schedule and deliver a high-quality finish.',
      rating: 5
    },
 {
      name: 'David Miller',
      role: 'Supermarket Manager',
      image: 'https://images.unsplash.com/photo-1628157588525-cd2fd53fc02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbiUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      content: 'DMKR.co.uk did an excellent job tiling our supermarket in Leicester. They were very efficient and made sure everything was cleaned up thoroughly before the store reopened.',
      rating: 5
    },
 {
      name: 'Mark Williams',
      role: 'Customer',
      image: 'https://images.unsplash.com/photo-1599566150163-c68e19ee19f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D',
      content: 'We hired DMKR.co.uk to retile a section of our supermarket floor. They worked quickly and with minimal disruption, ensuring we could continue trading with little impact. Great job!',
      rating: 5
    },
 {
      name: 'Jason Douglas',
      role: 'Property Developer',
      image: 'https://images.unsplash.com/photo-1631484900054-43632e888725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fA%3D%3D',
      content: 'We\'ve used DMKR.co.uk for multiple development projects. Their consistent quality and professionalism make them a valuable partner for our luxury builds.',
      rating: 5
    }
  ];
  const galleryImages = [
    { alt: 'Modern kitchen backsplash', url: 'https://images.unsplash.com/photo-1616112868599-36782245735b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { alt: 'Luxury bathroom renovation', url: 'https://images.unsplash.com/photo-1584622650111-9da237120b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { alt: 'Commercial restaurant floor', url: 'https://images.unsplash.com/photo-1588776537401-efbf3a0048f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { alt: 'Outdoor patio tiling', url: 'https://images.unsplash.com/photo-1594359715953-cb511b94e761?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { alt: 'Minimalist floor design', url: 'https://images.unsplash.com/photo-1621984676971-b86b6c4a9d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
    { alt: 'Unique shower enclosure', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

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
    <>
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
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="testimonial-card bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col w-full flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-indigo-800/50">
                  <img
                    className="w-full h-full object-cover"
                    alt={`Portrait of ${testimonial.name}`}
                    src={testimonial.image}
                    onError={(e) => {
                      console.error('Testimonial image failed to load:', testimonial.image);
                      e.target.style.display = 'none';
                    }}
                  />
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
                {galleryImages.map((image, i) => ( 
                  <div
                    key={i}
                    className="relative h-24 rounded-lg overflow-hidden group cursor-pointer"
                    onClick={() => openModal(image.url)}
                  >
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      alt={image.alt}
                      src={image.url}
                      onError={(e) => {
                        console.error('Gallery image failed to load:', image.url);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-xs font-medium text-white">View</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold gradient-text mb-2">200+</div>
              <p className="text-lg font-medium mb-1">Completed Projects</p>
              <p className="text-sm text-muted-foreground">Across residential and commercial spaces</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <img
        src={selectedImage}
        alt="Project Image"
        className="max-w-full max-h-[80vh] object-contain rounded-lg"
        onError={(e) => {
          console.error('Modal image failed to load:', selectedImage);
          e.target.style.display = 'none';
        }}
      />
    </Modal>
    </>
 );
};

export default Testimonials;
