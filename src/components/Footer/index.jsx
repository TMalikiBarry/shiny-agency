import styled from 'styled-components'
import colors from '../../Utils/Style/colors'
import {useContext} from "react";
import {ThemeContext} from "../../Utils/Context";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
`

const NightModeButton = styled.button`
    background-color: transparent;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`

function Footer() {
    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer