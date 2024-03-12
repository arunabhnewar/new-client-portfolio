import Footer from "../Components/Shared/Footer/Footer";
import PageTitle from "../Components/Shared/PageTitle/PageTitle";
import authorMid from "../assets/images/authorMid.webp";

export default function AboutMe() {
  return (
    <>
      <PageTitle title='About' />

      <div className='bg-white w-full min-h-[100vh] '>
        {/* About Hero Section start */}
        <div className='container max-w-1000 w-full mx-auto mt-[76px] px-6'>
          <div className='max-w-[800px] mx-auto'>
            <h5 className='text-right text-green font-400 text-xl leading-5'>
              Based <br /> Manchester, UK.
            </h5>

            <div className='flex flex-row  items-end mt-[16px] gap-x-8'>
              <div className='basis-4/6 text-right'>
                <h3 className='uppercase font-heading font-700 text-6xl text-green'>
                  I’m an <br /> Android <br /> Developer{" "}
                </h3>
              </div>
              <div className='basis-2/6 w-[246px]  ml-auto '>
                <img src={authorMid} alt='' className='w-full ' />
              </div>
            </div>
          </div>
        </div>
        {/* About Hero Section start */}

        {/* Work Experience Section start */}
        <div className='container max-w-1000 w-full mx-auto mt-[176px] px-6'>
          <h1 className='font-heading font-700 text-[84px]  text-green tracking-normal '>
            Work Experience
          </h1>
          <p className=' text-dark  text-3xl  font-400 tracking-wide  w-[900px]  leading-[34px] '>
            My portfolio showcases several professional Android apps available
            on the Google Play Store, that demonstrate my expertise in utilising
            a wide range of tools and technologies.
          </p>
        </div>
        {/* Work Experience Section end */}

        {/* Experience Section start */}
        <div className='container max-w-1000 w-full mx-auto mt-[166px] px-6'>
          {/* Android developer experience start */}
          <div>
            <div className='flex justify-between items-center'>
              <h4 className='font-heading font-500 text-black text-5xl  '>
                Android Developer
              </h4>

              <p className='text-right text-green font-400 text-xl '>
                Jaguar LandRover <br /> 2023 - Present
              </p>
            </div>

            <hr className='mt-7 border-black' />
          </div>
          {/* Android developer experience end */}

          {/* Contract Android developer experience start */}
          <div className='mt-7'>
            <div className='flex justify-between items-center'>
              <h4 className='font-heading font-500 text-black text-5xl  '>
                Contract Android Developer
              </h4>

              <p className='text-right text-green font-400 text-xl '>
                IDS Logic <br /> Sept - Dec 2022
              </p>
            </div>

            <hr className='mt-7 border-black' />
          </div>
          {/* Contract Android developer experience end */}

          {/* Freelance Developer experience start */}
          <div className='mt-7'>
            <div className='flex justify-between items-center'>
              <h4 className='font-heading font-500 text-black text-5xl  '>
                Freelance Developer
              </h4>

              <p className='text-right text-green font-400 text-xl '>
                Freelance <br /> Nov 2021 - Sept 2022
              </p>
            </div>

            <hr className='mt-7 border-black' />
          </div>
          {/* Freelance Developer  experience end */}
        </div>
        {/* Experience Section end */}

        <Footer />
      </div>
    </>
  );
}
