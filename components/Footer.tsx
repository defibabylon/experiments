//Footer.tsx

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="p-5 bg-dark-slate-gray">
      <motion.div initial={{ y: 250 }} animate={{ y: 10 }} transition={{ type: 'spring', stiffness: 120 }}>
        <nav className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="text-ash-gray text-lg font-bold mb-5 lg:mb-0">LQUSD</div>
          <div className="space-y-4 lg:space-y-0 lg:space-x-4">
            <Link href="/how-it-works" className="text-ash-gray">
              How It Works
            </Link>
            <Link href="/transparency" className="text-ash-gray">
              Transparency
            </Link>
            {/* Add more links as needed */}
          </div>
        </nav>
      </motion.div>
    </footer>
  );
};

export default Footer;
