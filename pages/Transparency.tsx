import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Chart from '../components/Chart'; // Import the Chart component

const Transparency = () => {
  return (
    <div>
      <Head>
        <title>Transparency | LQUSD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-custom-bg">
        <Header />
        <section className="lg:bg-no-repeat lg:bg-cover lg:container lg:mx-auto lg:p-5 lg:h-screen lg:flex lg:items-center lg:justify-center bg-cover container mx-auto p-3 h-screen flex items-center justify-center">
          <div className="text-white max-w-[825px] h-[235px] flex flex-col items-center lg:ml-[-200px] ml-0"> {/* Add 'items-center' to center the text */}
            <h2 className="lg:text-6xl text-4xl font-extrabold mb-5 mt-10 text-center">Transparency</h2> {/* Add 'text-center' to center the text */}
            <p className="lg:text-xl text-lg mb-5 text-center"> {/* Add 'text-center' to center the text */}
              At LQUSD, we believe in complete transparency. We provide regular updates on our reserves and operations to ensure our users are always informed.
            </p>
            <Chart /> {/* Include the Chart component */}
          </div>
        </section>
      </div>

      <div className="text-white max-w-[825px] h-[235px] flex flex-col items-center lg:ml-[-200px] ml-0">
        <h2 className="lg:text-6xl text-4xl font-extrabold mb-5 mt-10 text-center">Transparency</h2>
        <p className="lg:text-xl text-lg mb-5 text-center">
            At LQUSD, we believe in complete transparency. We provide regular updates on our reserves and operations to ensure our users are always informed.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Transparency;
