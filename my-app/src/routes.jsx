import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/index";
import { NotFound } from "./pages/notFound/index";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
