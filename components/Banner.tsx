import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="lg:bg-transparent bg-eggplant bg-cover text-ash-gray text-sm p-4 h-full">
      <motion.div initial={{ y: -250 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
        <div className="container mx-auto flex items-center h-full">
          {/* Icon and Link have been removed */}
          {/* Add more links as needed */}
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
