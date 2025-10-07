
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

// Fix: Replaced global motion with import
import { motion } from 'framer-motion';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

const Services: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto py-16 px-4 sm:px-8">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Our Arsenal</h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">We wield a diverse set of creative tools to execute any mission with precision and flair.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/services/${slugify(service.title)}`} className="block h-full">
                <ServiceCard service={service} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Services;