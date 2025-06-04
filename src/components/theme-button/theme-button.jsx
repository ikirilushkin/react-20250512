import { useContext } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../theme-context";

export const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "dark mode" : "light mode"}
    </Button>
  );
};
