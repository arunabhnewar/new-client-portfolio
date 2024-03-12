import Footer from "../Components/Shared/Footer/Footer";
import PageTitle from "../Components/Shared/PageTitle/PageTitle";
import authorMid from "../assets/images/authorMid.webp";
import projectIcon from "../assets/images/projecticon1.png";
export default function Projects() {
  return (
    <div className="overflow-hidden">
      <PageTitle title="Project" />
      <div className="bg-white w-full min-h-[100vh] ">
        <div className="container max-w-1000 w-full mx-auto mt-[76px] px-4">
          <h1 className="text-6xl uppercase  sm:text-9xl md:text-[200px] lg:text-[210px]  text-green font-antonio font-700	tracking-wide sm:tracking-[12px]  md:tracking-[20px] md:tracking-[24px] lg:tracking-[48px] text-center">
            Android
          </h1>
          <div>
            <div className=" max-w-[60px] sm:max-w-[100px] md:max-w-[175px] lg:max-w-[232px] w-full rotate-[350deg] m-auto mt-[-30px] sm:mt-[-60px] md:mt-[-95px] lg:mt-[-138px]">
              <img className="w-full" src={authorMid} alt="" />
            </div>
            <h1 className="mt-[-65px] sm:mt-[-100px] md:mt-[-170px] lg:mt-[-215px] text-6xl sm:text-9xl md:text-[220px]  text-center text-green font-bebas font-400	tracking-wide sm:tracking-[8px] md:tracking-[10px] lg:tracking-[38px] ">
              ENGINEER
            </h1>
            <p className="font-inter text-xs w-[222px]  m-auto sm:w-[467px]  md:w-[667px] lg:w-full pt-4  md:text-2xl ">
              Nice to see you here! I am another
              <br /> android engineer Based Manchester, UK.
            </p>
          </div>
          {/* project sction start */}
          <div className="mt-14">
            <h2 className="font-product font-500 text-6xl md:text-[150px] ">Projects</h2>
            <p className="font-product font-300 text-2xl pt-6 pb-10">
              I am proud to present my portfolio that showcases a wide range of
              projects I have worked on across different industries.{" "}
            </p>
          </div>
        </div>
        <div className="bg-[#000] py-10">
          <div className="container max-w-1000 w-full mx-auto  px-4">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-12 sm:col-span-12 bg-lgreen rounded-2xl py-10 px-6">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-6 sm:col-span-12">
                    <div className="min-w-[200px]">
                      <img src={projectIcon} alt="project icon" />
                    </div>
                    <h2 className="font-heading font-600 text-4xl md:text-[50px] md:font-400 pt-10">
                      Level Shoes
                    </h2>
                  </div>
                  <div className="col-span-12 md:col-span-6 sm:col-span-12">
                    <p className="font-product font-300 text-2xl">
                      "Level Shoes has blended the worlds of digital and
                      physical to provide seamless experiences to consumers
                      wherever and however they are engaging with the brand"
                    </p>
                    <p className="font-product font-300 text-2xl pt-10">
                      - Rania Masri, Chief Transformation Officer,
                      <br /> Chalhoub Group.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12  sm:col-span-12 md:col-span-6 bg-yellow rounded-2xl py-10 px-6">
                <div className="min-w-[200px]">
                  <img src={projectIcon} alt="project icon" />
                </div>
                <h2 className="font-heading font-600 text-4xl md:text-[50px] md:font-400 pt-10">UnExpectedly</h2>
                <p className="font-product font-300 text-2xl pt-6">
                  Unexpectedly is a captivating dating Android app. It leverages
                  advanced technology to create meaningful connections in
                  unexpected ways.
                </p>
              </div>
              <div className="col-span-12  md:col-span-6 bg-dblue rounded-2xl py-10 px-6">
                <div className="min-w-[200px]">
                  <img src={projectIcon} alt="project icon" />
                </div>
                <h2 className="font-heading font-600 text-4xl md:text-[50px] md:font-400 pt-10">Truth Or Dare</h2>
                <p className="font-product font-300 text-2xl pt-6">
                  An interactive multiplayer game which leverages users
                  imagination and link it to the amount of fun they can have
                  with this application.
                </p>
              </div>
            </div>
            {/* project sction end */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
