import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { setNavBackground, toggleNavVisible, setCurrentPath, setExpand } from '../redux/slices/headerSlice';


const EXPAND_STORAGE_KEY = 'expand';

const Header = () => {
  const navBackground = useSelector((state) => state.header.navBackground);
  const isNavVisible = useSelector((state) => state.header.isNavVisible);
  const currentPath = useSelector((state) => state.header.currentPath);
  const expand = useSelector((state) => state.header.expand);

  const dispatch = useDispatch();

  const navRef = useRef<string>();
  navRef.current = navBackground;

  const router = useRouter();

  const handleNav = () => {
    dispatch(toggleNavVisible());
  }

  useEffect(() => {
    dispatch(setCurrentPath(router.pathname));
  }, [router.pathname, handleNav]);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (show) {
        dispatch(setNavBackground('#4b2962'));
      } else {
        dispatch(setNavBackground('transparent'));
      }
    };
  
    // Check if window is defined (we are on client)
    if (typeof window !== 'undefined') {
      console.log('useEffect is running on the client');
      console.log('window:', window);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      console.log('useEffect is running on the server');
    }
  }, []);     

  // To avoid SSR error, set the state after initial render
  useEffect(() => {
    const expandFromStorage = localStorage.getItem(EXPAND_STORAGE_KEY) === "1";
    dispatch(setExpand(expandFromStorage));
  }, []);

  // Save the state to local storage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(EXPAND_STORAGE_KEY, expand ? "1" : "0");
    }
  }, [expand]);   

  return (
    <header style={{ backgroundColor: navBackground }} className="transition-all duration-500 ease-in-out py-3 px-6 fixed w-full z-max grid grid-cols-3 items-center">
      <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ type: 'spring', stiffness: 120 }}>
        <div className="flex items-center text-white text-lg font-bold pl-0 pt-3 lg:pl-6 lg:mr-24">
          <Image src="/images/1_2.png" alt="Logo" width={120} height={120} className="lg:ml-12 lg:w-auto w-32"/>
        </div>
      </motion.div>
      <nav className="lg:flex hidden space-x-6 justify-center">
        <div className="flex justify-center space-x-6">
          {currentPath === '/' ? (
            <>
              <ScrollLink onClick={() => scroll.scrollToTop()} className="link-move-down">
                <span className="cursor-pointer text-white font-bold">LQUSD</span>
              </ScrollLink>
              <ScrollLink to="how-it-works" smooth duration={1000} className="link-move-down">
                <span className="cursor-pointer text-white font-bold">How It Works</span>
              </ScrollLink>
            </>
          ) : (
            <>
              <Link href="/" className={currentPath === '/' ? 'cursor-pointer text-white font-bold active' : 'cursor-pointer text-white font-bold'}>
                LQUSD
              </Link>
              <Link href="/#how-it-works" className={currentPath === '/#how-it-works' ? 'cursor-pointer text-white font-bold active' : 'cursor-pointer text-white font-bold'}>
                How It Works
              </Link>
            </>
          )}
          <Link href="/Transparency" className={currentPath === '/Transparency' ? 'cursor-pointer text-white font-bold active' : 'cursor-pointer text-white font-bold'}>
            Transparency
          </Link>
        </div>
      </nav>
      <div className="lg:flex hidden justify-end items-center space-x-4 mr-6">
        <Link href="/signin" className="cursor-pointer text-white font-bold">
          Sign In
        </Link>
        <button className="border-white border-2 bg-transparent text-white font-bold py-1 px-3 lg:py-2 lg:px-6">Get Started</button>
      </div>
      <div className="lg:hidden flex justify-end items-center custom-hamburger pr-3 lg:pr-6">
        <button onClick={handleNav} className="p-1 -m-1">
          <Image src={isNavVisible ? "/menu-2.svg" : "/menu.svg"} alt="Hamburger Menu" width={25} height={25} />
        </button>
        {isNavVisible && (
          <div className="fixed top-0 right-0 h-full w-full z-20 flex flex-col bg-white p-5 space-y-5">
            <button onClick={handleNav} className="self-end p-3 -m-3">
              <Image src="/menu-2.svg" alt="Close" width={25} height={25} />
            </button>
            {currentPath === '/' ? (
              <>
                <ScrollLink onClick={() => { scroll.scrollToTop(); handleNav(); }} className="link-move-down">
                  <span className="cursor-pointer text-eggplant font-bold text-lg">LQUSD</span>
                </ScrollLink>
                <ScrollLink to="how-it-works" smooth duration={1000} onClick={handleNav} className="link-move-down">
                  <span className="cursor-pointer text-eggplant font-bold text-lg">How It Works</span>
                </ScrollLink>
              </>
            ) : (
              <>
                <Link href="/" onClick={handleNav} className={router.pathname === '/' ? 'cursor-pointer text-eggplant font-bold text-lg active' : 'cursor-pointer text-eggplant font-bold text-lg'}>
                  LQUSD
                </Link>
                <Link href="/#how-it-works" onClick={handleNav} className={router.pathname === '/#how-it-works' ? 'cursor-pointer text-eggplant font-bold text-lg active' : 'cursor-pointer text-eggplant font-bold text-lg'}>
                  How It Works
                </Link>
              </>
            )}
            <Link href="/Transparency" onClick={handleNav} className={router.pathname === '/Transparency' ? 'cursor-pointer text-eggplant font-bold text-lg active' : 'cursor-pointer text-eggplant font-bold text-lg'}>
              Transparency
            </Link>
            <Link href="/signin" onClick={handleNav} className="cursor-pointer text-eggplant font-bold text-lg">
              Sign In
            </Link>
            <button className="border-eggplant border-2 bg-transparent text-eggplant font-bold py-1 px-3 lg:py-2 lg:px-6">Get Started</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
