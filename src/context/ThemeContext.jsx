import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const themeContext = createContext();
const ThemeContext = ({ children }) => {
  const [Theme, setTheme] = useState("light");
  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [Theme]);
  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <themeContext.Provider value={{ Theme, switchTheme }}>
        {children}
      </themeContext.Provider>
    </>
  );
};

export default ThemeContext;
export const SetTheme = () => {
  return useContext(themeContext);
};
