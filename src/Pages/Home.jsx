/**
 * Home component for displaying the home page content.
 * @module Home
 * @returns {JSX.Element} Home component JSX
 */
import HomeFooter from "../Components/Shared/HomeFooter/HomeFooter";
import PageTitle from "../Components/Shared/PageTitle/PageTitle";
import bannerImg from "../assets/images/homeauthor.webp";
import projectThree from "../assets/images/homeprojectlevel.png";
import projectOne from "../assets/images/homeprojecttruth.png";
import projectTwo from "../assets/images/homeprojectunexpectedly.png";

/**
 * Home component function
 * @returns {JSX.Element} JSX for Home component
 */
export default function Home() {
  return (
    <div>
      <PageTitle title='Home' />
      <div className='bg-white w-full min-h-[100vh] fade-in'>
        {/* Home Hero Section start */}
        <div className='container max-w-1000 w-full mx-auto mt-[76px] px-4'>
          {/* banner top part for title start */}
          <div className='flex flex-nowrap items-center justify-center gap-3 px-4 pt-16 pb-10 sm:pt-16 sm:pb-12'>
            <h1 className='text-4xl font-inter font-900 text-black flex flex-col sm:flex-row sm:items-center sm:gap-3 sm:text-6xl md:text-7xl lg:text-8xl'>
              <span>Amitabh</span>
              {/* Large screen Sticker Image start*/}
              <span className='bg-[#C7C7C7] rounded-full'>
                <img className='hidden sm:block' src={bannerImg} alt='' />
              </span>{" "}
              {/* Large screen Sticker Image end*/}
              <span>Newar</span>
            </h1>

            {/*mobile screen Sticker Image start*/}
            <div className='min-w-[163px] sm:hidden bg-[#C7C7C7] rounded-full'>
              <img src={bannerImg} className='w-full ' alt='' />
            </div>

            {/*mobile screen Sticker Image end*/}
          </div>
          {/* banner top part for title end*/}

          {/* banner bottm part start*/}
          <div className='p-4 bg-bblue rounded-2xl md:flex md:gap-6 md:py-10 xl:pl-10 xl:pr-5'>
            <h2 className='font-inter font-800 text-2xl text-green mb-8 md:text-7xl xl:7xl '>
              Graphics Designer
            </h2>
            <p className='font-inter font-400 text-base text-black sm:text-xl md:text-2xl lg:text-3xl'>
              I create art that is both aesthetically pleasing and emotionally
              resonant. I also design user interfaces that are intuitive and
              user-friendly.
            </p>
          </div>
          {/* banner bottm part end*/}

          {/* project part start*/}
          <div className='mt-36'>
            <h2 className='font-inter font-800 text-5xl sm:text-[80px] text-green mb-16'>
              Projects
            </h2>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-7'>
              <div className='bg-bpink rounded-[48px]  flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center  p-10 '>
                  <div className='min-w-[282px]'>
                    <img
                      className='w-full'
                      src={projectOne}
                      alt='Truth Or Dare'
                    />
                  </div>
                  <h3 className='font-inter font-500 text-2xl mt-10 mb-4 sm:text-[40px] '>
                    Truth Or Dare
                  </h3>
                </div>
              </div>
              <div className='bg-bred rounded-[48px]  flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center  p-10 '>
                  <div className='min-w-[282px]'>
                    <img
                      className='w-full'
                      src={projectTwo}
                      alt='Unexpectedly'
                    />
                  </div>
                  <h3 className='font-inter font-500 text-2xl mt-10 mb-4 sm:text-[40px] '>
                    Unexpectedly
                  </h3>
                </div>
              </div>
              <div className='bg-bblue rounded-[48px]  flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center  p-10 '>
                  <div className='min-w-[282px] max-w-[345px]'>
                    <img
                      className='w-full'
                      src={projectThree}
                      alt='Level Shoes'
                    />
                  </div>
                  <h3 className='font-inter font-500 text-2xl mt-10 mb-4 sm:text-[40px] '>
                    Level Shoes
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* project  part end*/}

          {/* Experience Section start */}
          <div className='mt-36'>
            <h2 className='font-inter font-800 text-5xl sm:text-[80px] text-green mb-16 '>
              Experience
            </h2>

            <div className='flex flex-col  sm:flex-row   border-b border-black'>
              <div className='w-full font-inter font-600 text-[28px] md:text-[36px] mb-8 sm:w-full md:w-1/2 '>
                Lorem Ipsum
              </div>
              <div className='w-full sm:w-full md:w-1/2 flex-grow mb-6'>
                <div className='flex'>
                  <p className='min-w-unset sm:min-w-[200px] md:min-w-[220px] lg:min-w-[233px] text-center text-[18px] md:h-[54px] lg:text-2xl bg-bblue rounded-2xl px-3 py-3 md:px-8'>
                    2024 - Present
                  </p>
                  <p className='min-w-unset sm:min-w-[210px] text-center text-[18px] lg:text-2xl  rounded-2xl px-3 py-3 md:px-8'>
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center sm:flex-row  border-b border-black mt-6'>
              <div className='w-full font-inter font-600 text-[28px] md:text-[36px] mb-8 sm:w-full md:w-1/2 '>
                Lorem Ipsum
              </div>
              <div className='w-full sm:w-full md:w-1/2 flex-grow mb-6'>
                <div className='flex'>
                  <p className='min-w-unset sm:min-w-[200px] md:min-w-[220px] lg:min-w-[233px] text-center text-[18px] lg:text-2xl bg-bblue rounded-2xl px-3 py-3 md:px-8'>
                    2022 - 2024
                  </p>
                  <p className='min-w-unset sm:min-w-[210px] text-center text-[18px] lg:text-2xl  rounded-2xl px-3 py-3 md:px-8'>
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row mb-2 mt-6'>
              <div className=' font-inter font-600 text-[28px] md:text-[36px] mb-8 w-full md:w-1/2 '>
                Lorem Ipsum
              </div>
              <div className=' w-full md:w-1/2 flex-grow'>
                <div className='flex '>
                  <p className='min-w-unset sm:min-w-[200px] md:min-w-[220px] lg:min-w-[233px] text-center text-[18px] lg:text-2xl bg-bblue rounded-2xl px-3 py-3 md:px-8'>
                    2018 - 2021
                  </p>
                  <p className=' min-w-unset sm:min-w-[210px] text-center text-[18px] lg:text-2xl  rounded-2xl px-3 py-3 md:px-8'>
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Section end */}

          <HomeFooter />
        </div>
      </div>
    </div>
  );
}
