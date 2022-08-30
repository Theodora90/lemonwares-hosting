import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Layout/Nav/navBar";

function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}

export default App;
