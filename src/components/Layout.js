import React from "react";
import "../base.css";

import cn from "classnames";
import UseTheme from "./hooks/UseTheme";

export default function Layout({ children }) {
  const { isDark } = UseTheme();
  return <div className={cn("layout", { dark: isDark })}>{children}</div>;
}
