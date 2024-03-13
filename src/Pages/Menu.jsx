/**
 * Menu component for displaying menu options.
 * @module Menu
 * @returns {JSX.Element} Menu component JSX
 */
import { Link } from "react-router-dom";
import PageTitle from "../Components/Shared/PageTitle/PageTitle";

/**
 * Menu component function
 * @returns {JSX.Element} JSX for Menu component
 */
export default function Menu() {
  return (
    <>
      <PageTitle title='Menu' />
      <div className='bg-green w-full min-h-[100vh] fade-in'>
        <div className='container max-w-1000 w-full mx-auto pt-24 px-6'>
          {/* Project content start */}
          <div className='flex'>
            <sup className='font-400 text-base xl:text-[32px] lg:text-2xl md:text-xl  leading-9 pe-4 font-inter text-white '>
              01
            </sup>
            <Link to='/projects'>
              <h1 className='text-white font-inter font-700 leading-[48px] xl:leading-[120px] lg:leading-[90px] md:leading-[60px] text-5xl xl:text-[120px] lg:text-7xl  md:text-6xl '>
                Projects
              </h1>
            </Link>
          </div>
          <hr className=' mx-auto mt-6 xl:mt-12 lg:mt-10 md:mt-8 border-[#81ada7]' />
          {/* Project content end */}

          {/* About me content start */}
          <div className='flex mt-[78px]'>
            <sup className='font-400 text-base xl:text-[32px] lg:text-2xl md:text-xl  leading-9 pe-4 font-inter text-white '>
              02
            </sup>
            <Link to='/about'>
              <h1 className='text-white font-inter font-700 leading-[48px] xl:leading-[120px] lg:leading-[90px] md:leading-[60px] text-5xl xl:text-[120px] lg:text-7xl  md:text-6xl '>
                About me
              </h1>
            </Link>
          </div>
          <hr className=' mx-auto mt-6 xl:mt-12 lg:mt-10 md:mt-8 border-[#81ada7]' />
          {/* About me content end */}

          {/* Contact content start */}
          <div className='flex mt-[78px] pb-[200px]'>
            <sup className='font-400 text-base xl:text-[32px] lg:text-2xl md:text-xl  leading-9 pe-4 font-inter text-white '>
              03
            </sup>
            <Link to='/contact'>
              <h1 className='text-white font-inter font-700 leading-[48px] xl:leading-[120px] lg:leading-[90px] md:leading-[60px] text-5xl xl:text-[120px] lg:text-7xl  md:text-6xl '>
                Contact
              </h1>
            </Link>
          </div>
          {/* Contact content end */}
        </div>
      </div>
    </>
  );
}
