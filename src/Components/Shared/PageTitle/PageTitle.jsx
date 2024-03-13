/* eslint-disable react/prop-types */

/**
 * PageTitle component for setting the title of the page using React Helmet.
 * @module PageTitle
 * @param {object} props - Props for the PageTitle component.
 * @param {string} props.title - Title of the page.
 * @returns {JSX.Element} PageTitle component JSX
 */
import { Helmet } from "react-helmet-async";

/**
 * PageTitle component function
 * @param {object} props - Props for the PageTitle component.
 * @param {string} props.title - Title of the page.
 * @returns {JSX.Element} JSX for PageTitle component
 */
export default function PageTitle({ title }) {
  return (
    <>
      <Helmet>
        <title>{title} | Akshit Nahata</title>
      </Helmet>
    </>
  );
}
