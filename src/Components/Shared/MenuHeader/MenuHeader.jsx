import { Link } from "react-router-dom";
import arrowBlack from "../../../assets/icons/arrow2.svg";
// import closeImg from "../../../assets/icons/close.svg";
import logo from "../../../assets/images/logo.webp";

export default function MenuHeader() {
  return (
    <>
      <header className='bg-green fade-in'>
        <div className='container max-w-1000 w-full mx-auto flex justify-between  p-5 items-center'>
          {/* Header left content start */}
          <a className='flex title-font font-medium items-center  '>
            <img src={logo} alt='logo' className='w-12 h-12 rounded-full' />
            <span className='ml-3 font-inter font-700 text-4xl text-white '>
              AN
            </span>
          </a>
          {/* Header left content end */}

          {/* Header mid content start */}
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center '>
            <Link to='/' className='font-inter font-700 text-4xl text-white'>
              {/* <img
                src={closeImg}
                alt='close'
                className='cursor-pointer w-[40px] h-[40px] '
              /> */}
              HOME
            </Link>
          </nav>
          {/* Header mid content end */}

          {/* Header right content start */}
          <Link to='contact' className='w-[147px] h-[50px] hidden sm:block '>
            <button className='flex justify-center items-center  w-full h-full bg-white border-0  focus:outline-none  rounded-full text-black text-lg font-500 font-inter gap-2 '>
              Let’s talk
              <img src={arrowBlack} alt='' />
            </button>
          </Link>
          {/* Header right content end */}
        </div>

        <hr className='container max-w-[955px] w-full mx-auto md:w-11/12 sm:w-full fade-in' />
      </header>
    </>
  );
}
