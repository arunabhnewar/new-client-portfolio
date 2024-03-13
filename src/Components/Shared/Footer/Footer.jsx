/**
 * Footer component for displaying contact information and social media links.
 * @module Footer
 * @returns {JSX.Element} Footer component JSX
 */
import { Link, useLocation } from "react-router-dom";
import bigArrow from "../../../assets/icons/bigArrow.svg";

/**
 * Footer component function
 * @returns {JSX.Element} JSX for Footer component
 */
export default function Footer() {
  const location = useLocation();
  const currentPage = location.pathname;

  // Function to check if the current page is contact page
  const isContactPage = () => {
    return currentPage === "/contact"; // Adjust this according to your actual route for the contact page
  };

  return (
    <>
      {/* Lets Talk section start */}
      {!isContactPage() && (
        <div className='container max-w-1000 w-full mx-auto mt-[250px] px-6'>
          <Link to='mailto:akshit6302@gmail.com'>
            <p className='font-400 font-product leading-8 text-base lg:text-2xl md:text-xl tracking-wide text-green  '>
              akshit6302@gmail.com
            </p>
          </Link>

          <div className='flex justify-between items-end'>
            <h1 className='uppercase font-heading font-400 text-dark text-5xl lg:text-8xl md:text-6xl  '>
              Let’s Talk
            </h1>
            <div className='lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6    '>
              <img src={bigArrow} alt='' className='w-full h-full mt-[-5px] ' />
            </div>
          </div>
        </div>
      )}
      {/* Lets Talk section end */}

      {/* Footer Start */}
      <div className='container max-w-1000 w-full mx-auto mt-[124px] px-6 pb-10'>
        <div className='flex flex-col sm:flex-row '>
          {/* email content start */}
          <div className='font-helvetica font-400 text-lg leading-[21.47px] text-dark w-full '>
            <p>Hey get in touch</p>
            <p>akshit6302@gmail.com</p>
          </div>
          {/* email content start */}

          {/* social media content start */}
          <div className='w-full pt-5 sm:pt-0'>
            <p className='font-700 font-helvetica text-lg leading-[21.47px] text-dark'>
              <Link
                to='https://www.instagram.com/ak__it/?hl=en'
                target='_blank'
                className='underline'>
                Instagram
              </Link>
              ,{" "}
              <Link
                to='https://www.linkedin.com/in/akshit-nahata-06948a13b/'
                target='_blank'
                className='underline'>
                LinkedIn
              </Link>
            </p>

            <p className='font-700 font-helvetica text-lg leading-[21.47px] text-dark'>
              <Link
                to='https://www.buymeacoffee.com/akshit6302'
                target='_blank'
                className='underline'>
                BuyCoffee
              </Link>
            </p>
          </div>
          {/* social media content end */}

          {/* copyright content start */}
          <div className='text-right font-helvetica font-400 text-lg leading-[21.47px] text-dark w-full sm:block hidden '>
            <p>Designed by </p>
            <p>
              <Link to='https://www.figma.com/@ericandtheweb' target='_blank'>
                © ericandtheweb
              </Link>
            </p>
          </div>
          {/* copyright content end */}

          {/* mobile version copyright content start */}
          <div className='text-left pt-5 sm:pt-0 font-helvetica font-400 text-lg leading-[21.47px] text-dark w-full sm:hidden block '>
            <p>
              Designed by{" "}
              <Link
                to='https://www.figma.com/@ericandtheweb'
                target='_blank'
                className='border-black border-b-2'>
                ericandtheweb
              </Link>{" "}
              <sup>©</sup>2024
            </p>
            <p></p>
          </div>
          {/* mobile version copyright content end */}
        </div>
      </div>
      {/* Footer end */}
    </>
  );
}
