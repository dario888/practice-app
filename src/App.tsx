import React from "react";
import { Navbar } from "./components";
import { AppRouter } from "./navigation";

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
