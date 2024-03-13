/**
 * Header component for displaying the header of the website.
 * @module Header
 * @returns {JSX.Element} Header component JSX
 */
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/arrow.svg";
import menuImg from "../../../assets/icons/menu.svg";
import logo from "../../../assets/images/logo.webp";

/**
 * Header component function
 * @returns {JSX.Element} JSX for Header component
 */
export default function Header() {
  return (
    <>
      <header className='bg-white fade-in'>
        <div className='container max-w-1000 w-full mx-auto flex justify-between  p-5 items-center'>
          {/* Header left content start */}
          <a className='flex title-font font-medium items-center  '>
            <img src={logo} alt='logo' className='w-12 h-12 rounded-full' />
            <span className='ml-3 font-inter font-700 text-4xl text-black '>
              AN
            </span>
          </a>
          {/* Header left content end */}

          {/* Header mid content start */}
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center '>
            <Link to='menu'>
              <img
                src={menuImg}
                alt='menu'
                className='cursor-pointer w-[40px] h-[40px] '
              />
            </Link>
          </nav>
          {/* Header mid content end */}

          {/* Header right content start */}
          <Link to='contact' className='w-[147px] h-[50px] hidden sm:block '>
            <button className='flex justify-center items-center  w-full h-full bg-[#025A4E] border-0  focus:outline-none  rounded-full text-white text-lg font-500 font-inter gap-2 '>
              Let’s talk
              <img src={arrow} alt='' />
            </button>
          </Link>
          {/* Header right content end */}
        </div>

        <hr className='container max-w-[955px] w-full mx-auto md:w-11/12 sm:w-full fade-in' />
      </header>
    </>
  );
}
