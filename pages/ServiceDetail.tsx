
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { SERVICES, PORTFOLIO_ITEMS } from '../constants';
import PortfolioItem from '../components/PortfolioItem';
import { motion } from 'framer-motion';
import { ArrowLeft } from '@phosphor-icons/react';

// Helper to convert slug back to title case for matching
const slugToTitle = (slug: string) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const ServiceDetail: React.FC = () => {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();

    // This check is for TypeScript to ensure serviceSlug is not undefined.
    if (!serviceSlug) {
        return (
            <AnimatedPage>
                <div className="container mx-auto py-16 px-4 sm:px-8 text-center">
                    <h1 className="text-4xl font-bold text-brand-red">Error</h1>
                    <p className="text-gray-400 mt-4">Service slug is missing.</p>
                </div>
            </AnimatedPage>
        );
    }

    const serviceTitle = slugToTitle(serviceSlug);
    const service = SERVICES.find(s => s.title === serviceTitle);
    const relatedPortfolioItems = PORTFOLIO_ITEMS.filter(item => item.category === serviceTitle);

    if (!service) {
        return (
            <AnimatedPage>
                <div className="container mx-auto py-16 px-4 sm:px-8 text-center">
                    <h1 className="text-4xl font-bold text-brand-red">Service Not Found</h1>
                    <p className="text-gray-400 mt-4">The service you're looking for doesn't exist.</p>
                    <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-mono text-lg uppercase tracking-widest text-gray-300 hover:text-brand-blue transition-colors duration-300 group">
                        <ArrowLeft size={22} /> Back to Services
                    </Link>
                </div>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <div className="container mx-auto py-16 px-4 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <Link to="/services" className="mb-4 inline-flex items-center gap-2 font-mono uppercase tracking-widest text-sm text-gray-400 hover:text-brand-blue transition-colors duration-300 group">
                        <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" /> All Services
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{service.title}</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">{service.description}</p>
                </motion.div>
                
                {relatedPortfolioItems.length > 0 ? (
                     <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {relatedPortfolioItems.map(item => (
                            <PortfolioItem key={item.id} item={item} />
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 font-mono">No portfolio items found for this service yet. Stay tuned!</p>
                    </div>
                )}
            </div>
        </AnimatedPage>
    );
};

export default ServiceDetail;
