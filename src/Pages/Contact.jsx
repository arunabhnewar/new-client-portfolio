import { Link } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import PageTitle from "../Components/Shared/PageTitle/PageTitle";
import authorBig from "../assets/images/authorBig.webp";

export default function Contact() {
  return (
    <>
      <PageTitle title='Contact' />

      <div className='bg-white w-full  fade-in'>
        {/* Contact hero section start */}
        <div className='container max-w-1000 w-full mx-auto mt-[110px] px-6 pb-20'>
          <div className='relative'>
            <div className='grid  grid-cols-3 grid-rows-1 items-stretch'>
              <div className='col-span-2 mx-auto'>
                <div className='bg-dark lg:w-[100px] lg:h-[100px] md:w-[90px] md:h-[90px] sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] flex justify-center items-center rounded-full border-2 border-black lg:mt-16  mt-0'>
                  <Link
                    to='mailto:akshit6302@gmail.com'
                    className='font-product font-400 text-white md:text-base sm:text-sm text-xs text-center'>
                    Copy <br /> Email
                  </Link>
                </div>
              </div>

              <div className='sm:rotate-[10deg]'>
                <img src={authorBig} alt='' />
              </div>
            </div>

            {/* Hero text */}
            <div className='absolute lg:top-[18%] top-[25%] z-10'>
              <p className='font-heading font-400 lg:text-[27px] md:text-2xl  sm:text-lg text-sm text-black pl-1'>
                akshitemail@mail.com
              </p>

              <div className='max-w-[1000px] h-[192px] w-full mt-[22px]'>
                <h3 className='tracking-[2.62px] font-product font-400 md:leading-[63.6px] sm:leading-10 leading-6 uppercase  md:text-4xl sm:text-3xl text-lg pl-1 text-green'>
                  I'm open for freelance projects, feel free to contact me to
                  see how we can collaborate.
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Contact hero section end */}
        <Footer />
      </div>
    </>
  );
}
