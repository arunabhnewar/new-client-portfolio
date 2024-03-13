/**
 * Contact component for displaying contact information and hero section.
 * @module Contact
 * @returns {JSX.Element} Contact component JSX
 */
import { Link } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import PageTitle from "../Components/Shared/PageTitle/PageTitle";
import authorBig from "../assets/images/authorBig.webp";

/**
 * Contact component function
 * @returns {JSX.Element} JSX for Contact component
 */
export default function Contact() {
  return (
    <>
      <PageTitle title='Contact' />

      <div className='bg-white w-full  fade-in'>
        {/* Contact hero section start */}

        <div className='container max-w-1000 w-full mx-auto mt-[160px] sm:mt-[210px] px-2 pb-20'>
          <div className='relative w-[380px]'>
            <p className='font-heading font-400 text-[13px] lg:text-[32px] md:text-[32px]  sm:text-[24px] text-black pl-1'>
              akshitemail@mail.com
            </p>
            <p className=' bg-[#D7D7D5] w-[98px] h-[98px] xsm:w-[120px] xsm:h-[120px] flex justify-center items-center rounded-full border-2 mix-blend-difference text-[#FDA5B1]  absolute right-[240px]  md:right-[-46px] sm:right-[29px] xsm:right-[156px] xsm:top-[0px]'>
              <Link
                to='mailto:akshit6302@gmail.com'
                className='font-product font-400 text-white md:text-base sm:text-sm text-xs text-center'>
                <span className='text-black mix-blend-passthrough'>
                  {" "}
                  Copy <br /> Email
                </span>
              </Link>
            </p>
          </div>
          <div className='max-w-[1000px] h-[192px] w-full mt-[22px] '>
            <div className='flex justify-end'>
              <div className='max-w-[130px] lg:max-w-[343px] md:max-w-[250px] sm:max-w-[150px] xsm:max-w-[140px] rotate-[10deg] mt-[-92px] sm:mt-[-103px] xsm:mt-[-70px] md:mt-[-164px] translate-x-[-76px] pl-[7px] sm:pl-0 '>
                <img className='w-full' src={authorBig} alt='' />
              </div>
            </div>
            <h3 className='sm:tracking-[1.2px] mt-[-78px] md:mt-[-258px] sm:mt-[-133px] xsm:mt-[-135px]   font-product font-400 md:leading-[63.6px] sm:leading-10 xsm:leading-[1.3] uppercase  md:text-[42px]	 sm:text-3xl text-lg pl-1 text-[#FDA5B1] mix-blend-difference'>
              I'm open for projects , feel free to contact me to see how we can
              collaborate
            </h3>
          </div>
        </div>

        {/* Contact hero section end */}
        <Footer />
      </div>
    </>
  );
}
