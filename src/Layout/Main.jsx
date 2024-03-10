import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";
import SecondHeader from "../Components/Shared/SecondHeader/SecondHeader";

export default function Main() {
  const location = useLocation();

  const secondHeaderPaths = ["/project", "/about", "/contact"];

  const useSecondHeader = secondHeaderPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <>
      {useSecondHeader ? <SecondHeader /> : <Header />}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
