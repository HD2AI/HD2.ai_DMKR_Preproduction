
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Bathroom Tiling', href: '/portfolio?filter=bathroom' }, // Example filter
    { name: 'Kitchen Backsplashes', href: '/portfolio?filter=kitchen' },
    { name: 'Floor Installations', href: '/portfolio?filter=floor' },
    { name: 'Outdoor Tiling', href: '/portfolio?filter=outdoor' },
    { name: 'Commercial Projects', href: '/portfolio?filter=commercial' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/#testimonials' }, // Link to section on home page
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ];

  const handleScrollToTestimonials = (e) => {
    // Check if on home page before scrolling
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('testimonials');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not on home page, Link component will handle navigation to '/'
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Link to="/" className="flex items-center">
 <img
 src="/dmkr-logo.png" // Use the full absolute path
 alt="DMKR logo"
 className="h-12 w-auto mr-3" // Increased size
 style={{
 filter: 'brightness(0) invert(1) sepia(1) hue-rotate(240deg) saturate(3)', // Adjust hue and brightness for color matching and better visibility
                  mixBlendMode: 'screen' // Experiment with blend modes if needed for contrast
                }}
 />
              </Link>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional tiling services for residential and commercial projects. Quality craftsmanship, premium materials, and exceptional results.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((linkItem) => (
                <li key={linkItem.name}>
                  <Link 
                    to={linkItem.href} 
                    onClick={linkItem.href === '/#testimonials' ? handleScrollToTestimonials : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {linkItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <a href="mailto:info@DMKR.co.uk" className="text-muted-foreground hover:text-foreground">info@DMKR.co.uk</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <a href="tel:5551234567" className="text-muted-foreground hover:text-foreground">(0) 7392-556260</a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground shrink-0 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="text-muted-foreground">
                  The office, Suite 260<br />
                  Keldregate,  HD21LE
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Powered by <a href="https://hd2.ai">HD2.ai</a> DMKR.co.uk. All rights reserved.            
          </p>

          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  