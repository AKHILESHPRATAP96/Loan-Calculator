import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [themeMode, setThemeMode] = useState("light");

  return (
    <GlobalContext.Provider
      value={{ currency, setCurrency, themeMode, setThemeMode }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
