import {createGlobalStyle} from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../Context";
import colors from "./colors";

const MyStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
  
  body {
    color: ${(props) => props.isDarkMode ? 'white': 'black'};
    background-color: ${({isDarkMode}) => isDarkMode ? colors.backgroundDark: colors.backgroundLight};
  }
`

export default function GlobalStyle() {

    const { theme } = useContext(ThemeContext);

    return (<MyStyle isDarkMode={theme === 'dark'}/>)
}