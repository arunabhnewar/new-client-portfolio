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

        {/* Experience Section start */}
        <div className='container max-w-1000 w-full mx-auto mt-[176px] px-6'>
          <h1 className='font-heading font-700 text-[84px] text-green tracking-normal '>
            Work Experience
          </h1>
          <p className=' text-dark text-3xl font-400 tracking-wide w-[900px] leading-[34px] '>
            My portfolio showcases several professional Android apps available
            on the Google Play Store, that demonstrate my expertise in utilising
            a wide range of tools and technologies.
          </p>
        </div>
        {/* Experience Section end */}
      </div>
    </>
  );
}
