import Footer from "../Components/Shared/Footer/Footer";
import PageTitle from "../Components/Shared/PageTitle/PageTitle";
import authorMid from "../assets/images/authorMid.webp";

export default function Projects() {
  return (
    <div>
      <PageTitle title='Project' />
      <div className='bg-white w-full min-h-[100vh] '>
        {/* Project Hero Section start */}
        <div className='container max-w-1000 w-full mx-auto mt-[76px] px-4'>
          {/* banner top part for title start */}
          <h1 className='text-7xl sm:text-9xl md:text-[200px] text-green font-helvetica font-700	tracking-wide md:tracking-[20px] text-center'>
            Android
          </h1>
          <div className='flex flex-col items-center relative justify-center'>
            <div className=' max-w-[60px] sm:max-w-[80px] md:max-w-[200px] w-full rotate-[350deg] mt-[-30px] md:mt-[55px] absolute z-[1]'>
              <img className='w-full' src={authorMid} alt='' />
            </div>
            <h1 className='text-5xl sm:text-8xl md:text-[160px] md:left-[0] md:right-[0] md:text-center text-green font-helvetica font-400	tracking-wide md:tracking-[8px] absolute  top-[-8px] '>
              ENGINEER
            </h1>
          </div>
          <p className='relative top-[180px] right-[-30px] text-2xl'>
            Nice to see you here! I am another
            <br /> android engineer Based Manchester, UK.
          </p>
          {/* banner top part for title start */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
