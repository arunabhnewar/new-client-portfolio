/**
 * Main component for rendering different headers based on current location.
 * @module Main
 * @returns {JSX.Element} Main component JSX
 */
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import MenuHeader from "../Components/Shared/MenuHeader/MenuHeader";
import SecondHeader from "../Components/Shared/SecondHeader/SecondHeader";

/**
 * Main function component
 * @returns {JSX.Element} JSX for Main component
 */
export default function Main() {
  const location = useLocation();

  // Paths that require the second header
  const secondHeaderPaths = ["/project", "/about", "/contact"];

  // Path for the menu header
  const menuHeaderPath = "/menu";

  // Check if the second header should be used based on the current location
  const useSecondHeader = secondHeaderPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  // Check if the menu header should be used based on the current location
  const useMenuHeader = location.pathname.startsWith(menuHeaderPath);

  // Render appropriate header component based on the current location
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
