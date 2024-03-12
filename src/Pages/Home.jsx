import PageTitle from "../Components/Shared/PageTitle/PageTitle";
import bannerImg from "../assets/images/homeauthor.png";
import projectThree from "../assets/images/homeprojectlevel.png";
import projectOne from "../assets/images/homeprojecttruth.png";
import projectTwo from "../assets/images/homeprojectunexpectedly.png";

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
              <span>Akshit</span>{" "}
              <span>
                <img className='hidden sm:block' src={bannerImg} alt='' />
              </span>{" "}
              <span>Nahata</span>
            </h1>
            <div className='min-w-[163px] sm:hidden'>
              {" "}
              <img src={bannerImg} className='w-full ' alt='' />
            </div>
          </div>
          {/* banner top part for title end*/}

          {/* banner bottm part start*/}
          <div className='p-4 bg-bblue rounded-2xl md:flex md:gap-6 md:py-10 xl:pl-10 xl:pr-5'>
            <h2 className='font-inter font-800 text-2xl text-green mb-8 md:text-7xl xl:7xl '>
              Android Developer
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
            <div className='flex flex-col sm:flex-row   border-b border-black'>
              <div className='w-full font-inter font-800 text-3xl mb-8 sm:w-full md:w-1/3 '>
                Android Engineer
              </div>
              <div className='w-full sm:w-full md:w-1/2 flex-grow'>
                <div className='flex items-center sm:flex-row sm:justify-end gap-6 mb-6'>
                  <p className='text-base bg-bblue rounded-2xl px-3 py-3 md:px-8'>
                    2023 - Present
                  </p>
                  <p className='text-base'>Jaguar LandRover</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row  border-b border-black mt-6'>
              <div className='w-full font-inter font-800 text-3xl mb-8 sm:w-full md:w-1/3 '>
                Android Engineer
              </div>
              <div className='w-full sm:w-full md:w-1/2 flex-grow mb-6'>
                <div className='flex items-center sm:flex-row gap-6 sm:justify-end'>
                  <p className='text-base bg-bblue rounded-2xl px-3 py-3 md:px-8'>
                    2023 - Present
                  </p>
                  <p className='text-base'>Jaguar LandRover</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row mb-2 mt-6'>
              <div className='w-full font-inter font-800 text-3xl mb-8 sm:w-full md:w-1/3 '>
                Android Engineer
              </div>
              <div className='w-full sm:w-full md:w-1/2 flex-grow'>
                <div className='flex items-center sm:flex-row gap-6 sm:justify-end'>
                  <p className='text-base bg-bblue rounded-2xl px-3 py-3 md:px-8'>
                    2023 - Present
                  </p>
                  <p className='text-base'>Jaguar LandRover</p>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Section end */}
        </div>
      </div>
    </div>
  );
}
