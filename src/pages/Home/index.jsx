import colors from "../../Utils/Style/colors";
import styled from "styled-components";
import presentation from '../../assests/presentation.svg'
import {StyledLink} from "../../components/Header";

/*
const StyledButton = styled.button`
  padding-inline: 1rem;
  font-size: 1.8rem;
  color: white; 
  border: none;
  border-radius: 30px; 
  background-color: ${colors.primary};
`
*/

const StrongParagraph = styled.p`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  width: 35rem;
`
const DivContainer = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
function Home() {
  return (
    <div style={{background: colors.backgroundLight}}>
        {/*<h2>Page d'accueil 🏡</h2>*/}
        <DivContainer>
            <div>
                <StrongParagraph>
                    Repérez vos besoins,
                    on s’occupe du reste, avec les meilleurs talents
                </StrongParagraph>
                <StyledLink $isFullLink to="/survey/1">Faire le test</StyledLink>

            </div>
            <img src={presentation} alt='LOGO'/>
        </DivContainer>
    </div>
  );
}

export default Home;
