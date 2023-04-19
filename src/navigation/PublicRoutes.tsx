import { Outlet, useRoutes } from "react-router-dom";
// import { getFromLocalStorage, STORAGE_KES } from "../utils";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";

export const PublicRoutesLayout = () => {
  //   const isAuthenticated = getFromLocalStorage(STORAGE_KES.AUTH);
  //   return !isAuthenticated ? <Outlet /> : <Navigate to={"/home"} />;
  return <Outlet />;
};

const publicRoutes = [
  {
    element: <PublicRoutesLayout />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
];

export const PublicRouter = () => {
  return useRoutes(publicRoutes);
};
