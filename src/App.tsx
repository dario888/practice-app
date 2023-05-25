import React from "react";
import { Navbar, ScrollToTopBtn } from "./components";
import { AppRouter } from "./navigation";

function App() {
  return (
    <div>
      <ScrollToTopBtn />
      <AppRouter />
      <Navbar />/
    </div>
  );
}

export default App;
