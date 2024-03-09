/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet-async";

export default function PageTitle({ title }) {
  return (
    <>
      <Helmet>
        <title>{title} | Akshit Nahata</title>
      </Helmet>
    </>
  );
}
