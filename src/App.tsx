import React from "react";
import { Navbar, ScrollToTopBtn, Toast } from "./components";
import { AppRouter } from "./navigation";

function App() {
  return (
    <div>
      <Toast
        toast={"Success"}
        toastDescription="This is a success toast component"
      />
      <ScrollToTopBtn />
      <AppRouter />
      <Navbar />/
    </div>
  );
}

export default App;
