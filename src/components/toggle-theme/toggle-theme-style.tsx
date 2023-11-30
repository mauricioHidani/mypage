import styled from "styled-components";
import Themes from "../../themes/ThemesStyle.tsx";

export const Button = styled.button`
  position: relative;
  width: 54px;
  height: 32px;
  border-radius: 32px;
  border: 2px solid #333;
  background: #d3d3d3;

  &:hover { 
    cursor: pointer; 
  }

  &.${ Themes.dark.name } {
    background: #555;
  }
  &.${ Themes.light.name } {
    background: #d3d3d3;
  }
`;

export const TargetToggle = styled.div`
  z-index: 1;
  position: absolute;
  top: -2px;
  width: 31px;
  height: 31px;
  border-radius: 32px;
  border: 2px solid #555;
  transition: .2s ease-out;

  background: #b6b6b6;
  
  &.${ Themes.dark.name } {
    transform: translateX(calc(22px));
  }
  &.${ Themes.light.name } {
    transform: translateX(-4px);
  }
`;

export const TargetIcon = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  width: 54px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  & > .icon {
    width: 22px;
    height: 22px;
    color: #555;
  }
`;
