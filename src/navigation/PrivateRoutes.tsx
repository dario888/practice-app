import { Outlet, useRoutes } from "react-router-dom";
// import { getFromLocalStorage, STORAGE_KES } from "../utils";
import HomePage from "../pages/home/HomePage";
import EpisodesPage from "../pages/episodes/EpisodesPage";
import CharactersPage from "../pages/characters/Characters";
import AboutPage from "../pages/about/AboutPage";
import DetailCharacterPage from "../pages/detailCharacterPage/DetailCharacterPage";

export const PrivateRoutesLayout = () => {
  //   const isAuthenticated = getFromLocalStorage(STORAGE_KES.AUTH);
  //   return !isAuthenticated ? <Outlet /> : <Navigate to={"/home"} />;
  return <Outlet />;
};

const privateRoutes = [
  {
    element: <PrivateRoutesLayout />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "episodes", element: <EpisodesPage /> },
      { path: "characters", element: <CharactersPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "details-character", element: <DetailCharacterPage /> },
    ],
  },
];

export const PrivateRouter = () => {
  return useRoutes(privateRoutes);
};
