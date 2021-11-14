import { Routes, Route } from "react-router-dom";
import { DetailsPage } from "../../../pages/DetailsPage";
import { MainPage } from "../../../pages/MainPage";

export const Routing = () => (
  <Routes>
    <Route path="/:id" element={<DetailsPage />} />
    <Route path="/" element={<MainPage />} />
  </Routes>
);
