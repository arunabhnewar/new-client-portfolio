import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";

export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
