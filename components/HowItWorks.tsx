import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      url={url}
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

const HowItWorks = () => {
  const videoUrl = 'https://www.example.com/my-video.mp4'; // Replace with your video URL

  return (
    <section id="how-it-works" className="relative mt-10">
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white to-pale-blue z-0"></div>
      <motion.div className="relative p-5 mx-5 lg:px-10 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="container mx-auto">
          <h2 className="text-center text-rich-black text-4xl font-extrabold mb-10">How it works</h2>

          <VideoPlayer url={videoUrl} />

          <div className="flex flex-col bg-white border-transparent rounded shadow p-12 lg:w-[950px] lg:mx-auto"> {/* Adjust width and centering here */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-10 mt-20">
              <div className="w-full lg:w-1/2 mb-5 lg:mb-0 lg:ml-40">
                <h3 className="text-rich-black text-3xl font-bold mb-5">Cardano blockchain</h3>
                <p className="text-rich-black text-lg leading-7 tracking-tighter mb-5">
                  LQUSD tokens are built on the Cardano blockchains offering easy integration and adoption. 
                  LQUSD tokens offer a smart alternative to fiat gateways and can be used with digital wallet apps to decentralised finance (DeFi) protocols and payment services.
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <img src="/images/blockchain.svg" alt="Cardano blockchain" className="w-1/2 h-auto" /> {/* Replace with your actual SVG */}
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-10">
              <div className="w-full lg:w-1/2 flex justify-center items-center mb-5 lg:mb-0">
                <img src="/images/vault.svg" alt="100% backed by reserves" className="w-1/2 h-auto" /> {/* Replace with your actual SVG */}
              </div>
              <div className="w-full lg:w-1/2 lg:mr-40">
                <h3 className="text-rich-black text-3xl font-bold mb-5">100% backed by reserves</h3>
                <p className="text-rich-black text-lg leading-7 tracking-tighter mb-5">
                  All LQUSD tokens are pegged at 1-to-1 with a matching fiat currency (e.g., 1 LQUSD = 1 USD) and are backed 100% by reserves. The reserves match or exceed the amount required to redeem all LQUSD tokens in circulation.
                </p>
              </div>              
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
              <div className="w-full lg:w-1/2 mb-5 lg:mb-0 lg:ml-40">
                <h3 className="text-rich-black text-3xl font-bold mb-5">Fully transparent</h3>
                <p className="text-rich-black text-lg leading-7 tracking-tighter mb-5">
                  LQUSD tokens’ issued and reserve assets are publicly available and updated. The transparency of the blockchain allows anyone to verify the reserves at any time.
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <img src="/images/high_assurance.svg" alt="Fully transparent" className="w-1/2 h-auto" /> {/* Replace with your actual SVG */}
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-10">
              <div className="w-full lg:w-1/2 flex justify-center items-center mb-5 lg:mb-0">
                <img src="/images/badge.svg" alt="Regulatory-compliant" className="w-1/2 h-auto" /> {/* Replace with your actual SVG */}
              </div>
              <div className="w-full lg:w-1/2 lg:mr-40">
                <h3 className="text-rich-black text-3xl font-bold mb-5">Regulatory-compliant</h3>
                <p className="text-rich-black text-lg leading-7 tracking-tighter mb-5">
                  LQUSD maintains world-class standardised compliance measures for anti-money laundering (AML), countering the financing of terrorism (CFT), sanctions, and know your customer (KYC) laws and regulations.
                </p>
              </div>              
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
