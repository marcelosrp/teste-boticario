import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/";
import { GlobalStorage } from "./context/GlobalStorage";

const App = () => {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </GlobalStorage>
  );
};

export default App;
