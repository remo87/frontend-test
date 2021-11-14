import React from "react";
import { Details } from "../components/Details";
import { useParams } from "react-router-dom";

export const DetailsPage = () => {
  let { id } = useParams();
  if (!id) return null;
  return <Details id={id} />;
};
