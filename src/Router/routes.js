import React, { useContext } from "react";
import SurveyBody from "../components/SurveyBody";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Survey",
    toolbar: () => <p className="text-white">Bandhan Retailer</p>,
    main: () => <SurveyBody />,
  },
];

export default routes;
