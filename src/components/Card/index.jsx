import PropTypes from "prop-types";
import DefaultPicture from '../../assests/profile.png'
import styled from "styled-components";
import colors from "../../Utils/Style/colors";

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  margin: 2rem 0;
  height: 200px;
  width: 200px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  box-shadow: 1px 1px 3px #e9e9ec;
  width: 350px;
  transition: 200ms;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" height={80} width={80} />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
}

Card.defaultProps = {
    label : '',
    title : '',
    picture : DefaultPicture
}

export default Card