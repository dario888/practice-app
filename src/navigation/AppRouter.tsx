import { Outlet, useRoutes } from "react-router-dom";
// import { getFromLocalStorage, STORAGE_KES } from "../utils";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import DetailCharacterPage from "../pages/detailCharacterPage/DetailCharacterPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

export const PublicRoutesLayout = () => {
  //   const isAuthenticated = getFromLocalStorage(STORAGE_KES.AUTH);
  //   return !isAuthenticated ? <Outlet /> : <Navigate to={"/home"} />;
  return <Outlet />;
};

export const PrivateRoutesLayout = () => {
  // const isAuthenticated = getFromLocalStorage(STORAGE_KES.AUTH);
  // return !!isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  return <Outlet />;
};

const appRoutes = [
  {
    element: <PrivateRoutesLayout />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "details-character", element: <DetailCharacterPage /> },
    ],
  },
  {
    element: <PublicRoutesLayout />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  { element: <NotFoundPage />, path: "/*" },
];

export const AppRouter = () => {
  return useRoutes(appRoutes);
};
