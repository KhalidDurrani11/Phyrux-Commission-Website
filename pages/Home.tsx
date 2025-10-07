import React, { useState, useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { SERVICES, TESTIMONIALS } from '../constants';
import TestimonialCard from '../components/TestimonialCard';
import { ArrowRight } from '@phosphor-icons/react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, filter: 'blur(5px)', y: 10 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

const Typewriter: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
    const [displayedText, setDisplayedText] = useState('');
    const controls = useAnimation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    controls.start({
                       scale: [1, 1.05, 1],
                       transition: { duration: 0.5 }
                    });
                }
            }, 60);
        }, delay);

        return () => {
            clearTimeout(timeout)
        };
    }, [text, delay, controls]);

    return (
        <motion.span animate={controls} className="relative">
            {displayedText}
            <motion.span
                className="absolute right-0 top-0 bottom-0 w-0.5 bg-brand-blue"
                initial={{ opacity: 1 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8 }}
            />
        </motion.span>
    );
};


const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden p-4">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3B82F61A,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3B82F633,transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_center,rgba(17,17,17,0.1),rgba(17,17,17,1))]"></div>
        </div>
        
        {/* HUD Brackets */}
        <div className="absolute inset-8 md:inset-16 lg:inset-24 border-2 border-brand-blue/10 dark:border-brand-blue/20 rounded-lg pointer-events-none">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.5 }} className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-brand-blue"></motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.6 }} className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-brand-blue"></motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.7 }} className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-brand-blue"></motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.8 }} className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-brand-blue"></motion.div>
        </div>


        <div className="relative z-10">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-label="Phyrux Commissions"
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-brand-dark dark:text-brand-light leading-tight mb-4 flex flex-wrap justify-center gap-x-2 md:gap-x-4"
          >
            <span className="dark:animate-glow-purple">
                {"Phyrux".split("").map((char, index) => (
                    <motion.span key={`phyrux-${index}`} variants={letterVariants} className="inline-block">
                        {char}
                    </motion.span>
                ))}
            </span>
            <span>
                {"Commissions".split("").map((char, index) => (
                  <motion.span key={`comm-${index}`} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
            </span>
          </motion.h1>
          
          <h2 className="font-mono text-lg md:text-2xl text-brand-blue dark:animate-glow h-8">
            <Typewriter text="Engineering Visual Dominance" delay={1800} />
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4 }}
            className="mt-6 max-w-2xl mx-auto text-brand-dark/70 dark:text-brand-light/70 md:text-lg animate-text-focus"
          >
            We are a collective of digital artisans forging unforgettable brand experiences.
            From pixel-perfect designs to cinematic video, we craft the future of creative engagement.
          </motion.p>
          
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4.2 }}
          >
            <Link
              to="/portfolio"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white uppercase tracking-widest text-lg group overflow-hidden"
            >
              <span className="absolute inset-0 bg-brand-purple transition-transform duration-300 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="absolute inset-0 bg-brand-blue transition-transform duration-300 ease-out transform translate-x-full group-hover:translate-x-0"></span>
              <span className="absolute inset-0 border-2 border-brand-purple/50 group-hover:border-brand-blue"></span>
              <span className="relative z-10">View Our Work</span>
            </Link>
             <Link
              to="/contact"
              className="font-mono uppercase tracking-widest text-brand-dark/90 dark:text-brand-light/90 hover:text-brand-blue transition-colors duration-300 group flex items-center gap-2"
            >
              Start a Project <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-brand-dark">
        <div className="container mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.6 }}
             className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Our Core Arsenal</h2>
            <p className="mt-3 max-w-2xl mx-auto text-brand-dark/70 dark:text-brand-light/70">A glimpse into the specialized tools we use to bring visions to life.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link to={`/services/${slugify(service.title)}`} className="block group h-full">
                    <div className="relative p-8 h-full bg-white dark:bg-brand-gray/50 backdrop-blur-sm border border-gray-200 dark:border-brand-gray/60 rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:border-brand-blue/50 group-hover:shadow-brand-blue/20 group-hover:shadow-2xl group-hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 dark:from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 text-center">
                            <div className="mb-4 inline-block p-4 bg-gray-100 dark:bg-brand-dark rounded-full border-2 border-gray-200 dark:border-brand-gray">
                               <service.icon size={40} className="text-brand-blue drop-shadow-[0_0_8px_var(--tw-shadow-color)] shadow-brand-blue transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wide text-brand-dark dark:text-brand-light">{service.title}</h3>
                            <p className="mt-2 text-brand-dark/70 dark:text-brand-light/70 text-sm">{service.description}</p>
                        </div>
                    </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="text-center mt-12"
          >
            <Link
              to="/services"
              className="font-mono text-lg uppercase tracking-widest text-brand-dark/90 dark:text-brand-light/90 hover:text-brand-blue transition-colors duration-300 group inline-flex items-center gap-2"
            >
              Explore All Services <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-100 dark:bg-brand-gray/30">
        <div className="container mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.6 }}
             className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Client Transmissions</h2>
            <p className="mt-3 max-w-2xl mx-auto text-brand-dark/70 dark:text-brand-light/70">Signals received from partners we've empowered.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;