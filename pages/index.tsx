import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll'; // Import the Link component from react-scroll
import Link from 'next/link'; // Import the Link component from next/link

export default function Home() {
  return (
    <div>
      <Head>
        <title>LQUSD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-custom-bg">
        <Header />
        <Banner />
        <section className="lg:bg-no-repeat lg:bg-cover lg:container lg:mx-auto lg:p-5 lg:h-screen lg:flex lg:items-center lg:justify-center bg-cover container mx-auto p-3 h-screen flex items-center justify-center">
          <div className="text-white max-w-[825px] h-[235px] flex flex-col items-start lg:ml-[-100px] ml-0">
          <Image src="/images/4c.png" alt="Logo" width={261} height={261} />
            <h2 className="lg:text-6xl text-4xl font-extrabold mb-5 mt-10">Why use LQUSD?</h2>
            <p className="lg:text-xl text-lg mb-5">
              LQUSD tokens offer the stability and simplicity of fiat currencies coupled with the innovative nature of blockchain technology, representing a perfect combination of both worlds.
              LQUSD is always redeemable 1:1 for U.S. dollars for selected users.
            </p>
            <div className="flex space-x-4">
              <ScrollLink to="how-it-works" smooth duration={1000} className="border-2 border-white px-4 py-2 rounded-md cursor-pointer">How it Works</ScrollLink>
              <Link href="/Transparency">
                <button className="border-2 border-white px-4 py-2 rounded-md">Trust and Transparency</button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Benefits />
      <HowItWorks />
      <Footer />
    </div>
  )
}
