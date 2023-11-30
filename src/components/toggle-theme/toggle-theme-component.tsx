import React, { useContext } from "react";
import { Button, TargetToggle, TargetIcon } from "./toggle-theme-style.tsx";
import { ThemeContext } from "../../contexts/ThemesContext.tsx";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ToggleTheme = () => {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  
  return (
    <Button onClick={ onToggleTheme } className={ theme }>
      <TargetToggle className={ theme }/>
      <TargetIcon>
        <MdDarkMode className="icon" fill="#d3d3d3"/>
        <MdOutlineLightMode className="icon" fill="#555555" />
      </TargetIcon>
    </Button>
  );
};

export default ToggleTheme;
