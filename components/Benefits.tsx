import { motion } from 'framer-motion';
import Image from 'next/image';

const Benefits = () => {
  return (
    <div className="px-5 lg:px-0 mt-20 lg:mt-[100px]"> {/* Adjust top margin here */}
      <div className="lg:w-[950px] lg:h-[248px] lg:mx-auto p-1 lg:mt-[100px] mx-auto mb-20 lg:mb-0">
        <h2 className="text-4xl font-bold">Unlock the potential of your dollars</h2>
        <p className="text-3xl">
          Whether it is for personal use or business purposes, LQUSD tokens offer many benefits as a trusted stablecoin on Cardano. The LQUSD tokens are affordable and can be transferred 24/7 to everyone with an internet connection.
        </p>
      </div>
      <section className="bg-ash-gray">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="container mx-auto space-y-1 lg:px-10"> {/* Adjust padding here */}
            <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:w-[950px] lg:mx-auto"> {/* Adjust width and centering here */}
              <div className="lg:pr-10"> {/* Adjust padding-right here */}
                <h3 className="text-rich-black text-3xl font-bold mb-5">Instant payment. Easy to use.</h3>
                <p className="text-rich-black text-lg leading-7 tracking-tighter mb-5">
                  In a few clicks and seconds of travel, LQUSD are sent all around the globe without settlement due to the power of the blockchain technology.
                </p>
              </div>
              <Image src="/images/a.png" alt="Instant payment" width={540} height={320} />
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-5 lg:space-y-0 lg:w-[950px] lg:mx-auto"> {/* Adjust width and centering here */}
              <Image src="/images/b.png" alt="Always open" width={540} height={320} />
              <div className="lg:pl-10"> {/* Adjust padding-left here */}
                <h3 className="text-rich-black text-3xl font-bold mb-5">Always open</h3>
                <p className="text-rich-black text-lg leading-7 tracking-tighter mb-5">
                  LQUSD does not know any borders or opening hours. The tokens can be sent everywhere in the world within seconds to everyone with an internet connection. This process access to dollars to people without a banking account.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:w-[950px] lg:mx-auto"> {/* Adjust width and centering here */}
              <div className="lg:pr-10"> {/* Adjust padding-right here */}
                <h3 className="text-rich-black text-3xl font-bold mb-5">Cheap access to Dollars.</h3>
                <p className="text-rich-black text-lg leading-7 tracking-tighter mb-5">
                LQUSD on the Cardano blockchain is affordable. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <Image src="/images/C.png" alt="Cheap Access" width={540} height={320} />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Benefits;
