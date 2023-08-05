import { Routes, Route } from "react-router-dom";
import Main from "../blocks/main/main";
import UserPage from "../blocks/main/user";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/user/:login" element={<UserPage />} />
    </Routes>
  );
};
