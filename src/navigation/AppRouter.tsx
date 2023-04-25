import { Navigate, Outlet, useRoutes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import DetailCharacterPage from "../pages/detailCharacterPage/DetailCharacterPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import { useAppSelector } from "../hooks";
import { getStateFromAuthReducer } from "../store";

export const PublicRoutesLayout = () => {
  const { isAuthenticated } = useAppSelector(getStateFromAuthReducer);
  return !isAuthenticated ? <Outlet /> : <Navigate to={"/home"} />;
};

export const PrivateRoutesLayout = () => {
  const { isAuthenticated } = useAppSelector(getStateFromAuthReducer);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
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
