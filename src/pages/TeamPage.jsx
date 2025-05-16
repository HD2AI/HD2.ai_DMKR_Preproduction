
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    { id: 1, name: 'Daniel M.', role: 'Founder & Master Tiler', imageAlt: 'Portrait of Daniel M.' },
    { id: 2, name: 'Katherine R.', role: 'Project Manager', imageAlt: 'Portrait of Katherine R.' },
    { id: 3, name: 'Robert K.', role: 'Lead Installer', imageAlt: 'Portrait of Robert K.' },
    { id: 4, name: 'Olivia S.', role: 'Design Consultant', imageAlt: 'Portrait of Olivia S.' },
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
          Meet Our <span className="gradient-text">Team</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          The skilled professionals behind DMKR.co.uk, dedicated to quality and customer satisfaction.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            className="bg-secondary/50 rounded-lg border border-border/50 text-center p-6"
          >
            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
              <img 
                className="w-full h-full object-cover"
                alt={member.imageAlt}
               src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
            </div>
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-indigo-400 text-sm mb-3">{member.role}</p>
            <p className="text-muted-foreground text-xs mb-4">
              Bringing expertise and passion to every project.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-indigo-400 transition-colors">
              <Linkedin className="h-5 w-5 mx-auto" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
  