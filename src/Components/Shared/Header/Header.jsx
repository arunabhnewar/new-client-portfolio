import { Link, useLocation } from "react-router-dom";
import arrow from "../../../assets/icons/arrow.svg";
import arrowBlack from "../../../assets/icons/arrow2.svg";
import closeImg from "../../../assets/icons/close.svg";
import menuImg from "../../../assets/icons/menu.svg";
import logo from "../../../assets/images/logo.webp";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <header className={isHomePage ? "bg-white" : "bg-green"}>
        <div className='container max-w-1000 w-full mx-auto flex justify-between  p-5 items-center'>
          {/* Header left content start */}
          <a className='flex title-font font-medium items-center  '>
            <img src={logo} alt='logo' className='w-12 h-12 rounded-full' />
            {isHomePage ? (
              <span className='ml-3 font-inter font-700 text-4xl text-black '>
                AN
              </span>
            ) : (
              <span className='ml-3 font-inter font-700 text-4xl text-white '>
                AN
              </span>
            )}
          </a>
          {/* Header left content end */}

          {/* Header mid content start */}
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center '>
            {isHomePage ? (
              <Link to='menu'>
                <img
                  src={menuImg}
                  alt='menu'
                  className='cursor-pointer w-[40px] h-[40px] '
                />
              </Link>
            ) : (
              <Link to='/'>
                <img
                  src={closeImg}
                  alt='close'
                  className='cursor-pointer w-[40px] h-[40px] '
                />
              </Link>
            )}
          </nav>
          {/* Header mid content end */}

          {/* Header right content start */}
          <Link to='contact' className='w-[147px] h-[50px] hidden sm:block '>
            {isHomePage ? (
              <button className='flex justify-center items-center  w-full h-full bg-[#025A4E] border-0  focus:outline-none  rounded-full text-white text-lg font-500 font-inter gap-2 '>
                Let’s talk
                <img src={arrow} alt='' />
              </button>
            ) : (
              <button className='flex justify-center items-center  w-full h-full bg-white border-0  focus:outline-none  rounded-full text-black text-lg font-500 font-inter gap-2 '>
                Let’s talk
                <img src={arrowBlack} alt='' />
              </button>
            )}
          </Link>
          {/* Header right content end */}
        </div>

        <hr className='container max-w-[955px] w-full mx-auto md:w-11/12 sm:w-full ' />
      </header>
    </>
  );
}
