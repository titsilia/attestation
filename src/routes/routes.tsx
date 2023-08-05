import { Routes, Route } from "react-router-dom";
import Main from "../blocks/pages/main/main";
import UserPage from "../blocks/pages/user/user";
import NotFound from "../blocks/pages/NotFound/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/user/:login" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
