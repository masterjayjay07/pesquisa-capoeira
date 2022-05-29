import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import MariaFilipaPage from "../pages/maria-filipa";
import MestreBimbaPage from "../pages/mestre-bimba";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mestrebimba" element={<MestreBimbaPage />} />
        <Route path="/mariafilipa" element={<MariaFilipaPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
