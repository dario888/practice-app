import React from "react";
import { Navbar } from "./components";
import { AppRouter } from "./navigation";

function App() {
  return (
    <div>
      <AppRouter />
      <Navbar />
    </div>
  );
}

export default App;
