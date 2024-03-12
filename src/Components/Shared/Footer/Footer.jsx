import { Link, useLocation } from "react-router-dom";
import bigArrow from "../../../assets/icons/bigArrow.svg";

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
            <p className='font-400 font-product leading-8 text-2xl tracking-wide text-green  '>
              akshitemail@mail.com
            </p>
          </Link>

          <div className='flex justify-between items-end'>
            <h1 className='uppercase font-heading font-400 text-dark text-8xl  '>
              Let’s Talk
            </h1>
            <div className='w-10 h-10   '>
              <img src={bigArrow} alt='' className='w-full h-full' />
            </div>
          </div>
        </div>
      )}
      {/* Lets Talk section end */}

      {/* Footer Start */}
      <div className='container max-w-1000 w-full mx-auto mt-[124px] px-6 pb-10'>
        <div className='flex justify-between items-center'>
          {/* email content start */}
          <div className='font-helvetica font-400 text-lg leading-[21.47px] text-dark '>
            <p>Hey get in touch</p>
            <p>akshit6302@gmail.com</p>
          </div>
          {/* email content start */}

          {/* social media content start */}
          <div>
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
          <div className='text-right font-helvetica font-400 text-lg leading-[21.47px] text-dark'>
            <p>Designed by </p>
            <p>
              <Link to='https://www.figma.com/@ericandtheweb' target='_blank'>
                © ericandtheweb
              </Link>
            </p>
          </div>
          {/* copyright content end */}
        </div>
      </div>
      {/* Footer end */}
    </>
  );
}
