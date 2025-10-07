import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { SOCIAL_LINKS } from '../constants';

// Fix: Replaced global motion with import
import { motion } from 'framer-motion';
import { PaperPlaneRight } from '@phosphor-icons/react';

const Contact: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto py-16 px-4 sm:px-8">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Establish Contact</h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">Ready to start a project or just want to connect? Send a transmission.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <motion.form
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="relative">
                    <input type="text" id="name" required className="peer w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white placeholder-transparent focus:outline-none focus:border-brand-blue" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-3 -top-2.5 bg-brand-dark px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-brand-blue">Name</label>
                </div>
                <div className="relative">
                    <input type="email" id="email" required className="peer w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white placeholder-transparent focus:outline-none focus:border-brand-blue" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-3 -top-2.5 bg-brand-dark px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-brand-blue">Email</label>
                </div>
                <div className="relative">
                    <textarea id="message" required rows={5} className="peer w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white placeholder-transparent focus:outline-none focus:border-brand-blue" placeholder="Message"></textarea>
                    <label htmlFor="message" className="absolute left-3 -top-2.5 bg-brand-dark px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-brand-blue">Message</label>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 font-bold text-white uppercase tracking-widest bg-brand-red hover:bg-brand-blue transition-all duration-300 rounded-md group">
                    Send Message
                    <PaperPlaneRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </motion.form>

            {/* Info Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
            >
                <div>
                    <h3 className="text-2xl font-bold uppercase text-brand-blue tracking-wider">Social Channels</h3>
                    <p className="text-gray-400 mt-2">Follow our journey and see our latest work.</p>
                    <div className="flex space-x-4 mt-4">
                        {SOCIAL_LINKS.map(link => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-gray border border-gray-700 rounded-full hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                                <link.icon size={24} className="text-white"/>
                            </a>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold uppercase text-brand-blue tracking-wider">Direct Inquiry</h3>
                    <p className="text-gray-400 mt-2">For urgent or detailed project discussions.</p>
                    <a href="mailto:contact@phyrux.com" className="font-mono text-lg text-white hover:text-brand-red transition-colors duration-300 mt-2 inline-block">
                        contact@phyrux.com
                    </a>
                </div>
            </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;