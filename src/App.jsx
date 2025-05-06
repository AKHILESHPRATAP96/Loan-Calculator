import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./theme/theme";
import { GlobalContext } from "./context/GlobalContext";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ExchangeRates from "./pages/ExchangeRates";
import Navbar from "./components/Navbar";

const App = () => {
  const { themeMode } = useContext(GlobalContext);
  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exchange-rates" element={<ExchangeRates />} />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
