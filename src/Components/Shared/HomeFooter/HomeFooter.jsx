import { Link } from "react-router-dom";

export default function HomeFooter() {
  return (
    <>
      {/* Home Footer start */}
      <div className=' mt-36 bg-bblue rounded-[48px] sm:h-[315px] h-[446px] p-12 mb-10'>
        {/* Home Footer Top content start */}

        <div className='flex sm:justify-between sm:flex-row flex-col sm:items-center sm:gap-2 gap-0'>
          <h2 className='font-inter font-700 text-black text-[48px] lg:text-[80px] md:text-[70px] sm:text-[60px] '>
            Let’s talk
          </h2>

          <Link to='mailto:akshit6302@gmail.com'>
            <button className='bg-green text-white   rounded-full font-inter font-500  sm:text-lg text-base max-w-[247px] h-[67px] md:max-w-[331px] sm:w-[230px] w-full '>
              akshit6302@gmail.com
            </button>
          </Link>
        </div>
        {/* Home Footer Top content end */}

        <hr className='border-dark mt-4 sm:mt-0 ' />

        {/* Home Footer Bottom content start */}
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center pt-[40px] sm:pt-[80px] '>
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-x-5 gap-y-5 sm:gap-y-0 gap-x-0 '>
            <Link
              className='text-sm md:text-xl font-700 font-inter sm:text-base underline '
              to='https://www.instagram.com/ak__it/?hl=en'
              target='_blank'>
              Instagram
            </Link>

            <Link
              className='text-sm md:text-xl font-700 font-inter sm:text-base underline '
              to='https://www.linkedin.com/in/akshit-nahata-06948a13b/'
              target='_blank'>
              LinkedIn
            </Link>

            <Link
              className='text-sm md:text-xl font-700 font-inter sm:text-base underline '
              target='_blank'
              to='https://www.buymeacoffee.com/akshit6302'>
              {" "}
              Buy Coffee
            </Link>
          </div>

          <div className='text-sm md:text-xl font-700 font-inter sm:text-base  pt-5 sm:pt-0'>
            <p>
              Designed by
              <Link target='_blank' to='https://www.figma.com/@ericandtheweb'>
                {" "}
                ericandtheweb
              </Link>
            </p>
          </div>
        </div>
        {/* Home Footer Bottom content end */}
      </div>
      {/* Home Footer end */}
    </>
  );
}
