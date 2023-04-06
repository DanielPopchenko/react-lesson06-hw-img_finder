import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

export default function UseTheme() {
  const value = useContext(ThemeContext);
  return value;
}
