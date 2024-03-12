import { Link } from "react-router-dom";
import email from "../../../assets/icons/email.svg";
import plus from "../../../assets/icons/plus.svg";

export default function SecondHeader() {
  return (
    <>
      <header>
        <div className='container max-w-1000 w-full mx-auto flex justify-between  p-5 items-center  fade-in'>
          {/* Header left content start */}
          <a className='flex title-font font-medium items-center  '>
            <h1 className='font-700 font-syne text-2xl text-dark'>Akshit</h1>
          </a>
          {/* Header left content end */}

          {/* Header mid content start */}
          <nav className='md:ml-auto md:mr-auto gap-x-2 md:gap-x-4 flex flex-wrap items-center text-base justify-center '>
            <h6 className='font-500  md:text-lg text-base uppercase font-helvetica text-black hidden sm:block'>
              Let’s Connect
            </h6>
            <Link to='mailto:akshit6302@gmail.com' className='hidden sm:block'>
              <button className='bg-green text-white w-[200px] md:w-[223px] h-[40px] rounded-3xl  flex justify-center items-center font-helvetica md:text-base text-sm md:gap-x-2 gap-x-1 '>
                akshit6302@gmail.com
                <img src={email} alt='' />
              </button>
            </Link>
          </nav>
          {/* Header mid content end */}

          {/* Header right content start */}
          <Link to='menu' className='flex items-center gap-x-1 justify-center'>
            <img src={plus} alt='plus' className='block sm:hidden' />

            <h3 className='font-500 text-lg text-dark uppercase font-helvetica'>
              Menu
            </h3>
          </Link>
          {/* Header right content end */}
        </div>
      </header>
    </>
  );
}
