import { Routes, Route } from "react-router-dom";
import allRoutes from "./allRoutes";

const Router = () => {
  return (
    <Routes>
      {allRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Router;
