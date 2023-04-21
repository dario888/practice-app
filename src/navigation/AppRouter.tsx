import { Navigate, Outlet, useRoutes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import DetailCharacterPage from "../pages/detailCharacterPage/DetailCharacterPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import { STORAGE_KEYS, getFromLocalStorage } from "../utils";

const isAuthenticated = getFromLocalStorage(STORAGE_KEYS.AUTH);

export const PublicRoutesLayout = () => {
  return !isAuthenticated ? <Outlet /> : <Navigate to={"/home"} />;
};

export const PrivateRoutesLayout = () => {
  return !!isAuthenticated ? <Outlet /> : <Navigate to="/" />;
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
