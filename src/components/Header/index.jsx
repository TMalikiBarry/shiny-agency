import {Link} from "react-router-dom";
import styled from "styled-components";
import colors from "../../Utils/Style/colors";
import logo_light from "../../assests/shiny-logo_light.svg"

const MyNav = styled.nav`
  margin-inline: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

export default function Header() {
    return (
            <MyNav>
                <img src={logo_light} alt={'logo de jour'}/>
                <div>
                    <StyledLink to="/">Accueil</StyledLink>
                    <StyledLink to="/flances">Profils</StyledLink>
                    <StyledLink to="/survey/2" $isFullLink>Faire le test</StyledLink>
                </div>

            </MyNav>
    )

}