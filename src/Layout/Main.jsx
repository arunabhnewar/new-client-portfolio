import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import MenuHeader from "../Components/Shared/MenuHeader/MenuHeader";
import SecondHeader from "../Components/Shared/SecondHeader/SecondHeader";

export default function Main() {
  const location = useLocation();

  const secondHeaderPaths = ["/project", "/about", "/contact"];

  const menuHeaderPath = "/menu";

  const useSecondHeader = secondHeaderPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const useMenuHeader = location.pathname.startsWith(menuHeaderPath);
  return (
    <>
      {useSecondHeader ? (
        <SecondHeader />
      ) : useMenuHeader ? (
        <MenuHeader />
      ) : (
        <Header />
      )}
      <Outlet />
    </>
  );
}
