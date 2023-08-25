import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import colors from "../../Utils/Style/colors";
import {useContext, useEffect, useState} from "react";
import {Loader} from "../../Utils/Style/Atom";
import {SurveyContext} from "../../Utils/Context";

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.$isselected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
    const [questions, setQuestions] = useState({});
    const [isDataLoading, setDataLoading] = useState(true)

    const { answers, saveAnswers} = useContext(SurveyContext);

    const {questionID} = useParams()
    // linkID = +questionID;

    const questionNumberInt = parseInt(questionID)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1;

    function saveReply(answer) {
        saveAnswers({ [questionNumberInt]: answer })
    }

    // Cette syntaxe permet aussi bien de faire des calls API.
    // Mais pour utiliser await dans une fonction, il faut que celle-ci soit async (pour asynchrone).
    // Comme la fonction passée à useEffect ne peut pas être asynchrone,
    // il faut utiliser une fonction qui est appelée dans useEffect et déclarée en dehors, comme ici 👇.
    // Essayez de commenter le code créé dans le chapitre et de décommenter fetchData pour voir.

    // async function fetchData() {
    //   try {
    //     const response = await fetch(`http://localhost:8000/survey`)
    //     const { surveyData } = await response.json()
    //     setSurveyData(surveyData)
    //   } catch (error) {
    // console.log('===== error =====', error)
    // setError(true)
    //   }
    // }

    useEffect(() => {
        // fetchData()
        fetch(`http://localhost:8000/survey`)
            .then( (response) => response.json())
            .then( ({surveyData}) => {
                console.log(surveyData)
                setQuestions(surveyData);
                setDataLoading(false);
            })
            .catch((error) => {
                console.error('ERREUR SURVEY ', error);
                setDataLoading(true)
            })
    }, []);
    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumberInt}</QuestionTitle>
            {isDataLoading ? <Loader/> : <QuestionContent>{questions[questionNumberInt]}</QuestionContent>}

            <ReplyWrapper>
                <ReplyBox
                    onClick={() => saveReply(true)}
                    $isselected={answers[questionNumberInt] === true}
                >
                    Oui
                </ReplyBox>
                <ReplyBox
                    onClick={() => saveReply(false)}
                    $isselected={answers[questionNumberInt] === false}
                >
                    Non
                </ReplyBox>
            </ReplyWrapper>

            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {questions[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
    /*function getLinkID (sens) {
        if (linkID >1 && linkID<10) {
            return sens === 'back' ? linkID-1 : linkID +1;
        } else if (linkID ===10) {
            return sens === 'back' ? linkID-1 : linkID;
        } else if (linkID === 1) {
            return sens === 'back' ? linkID : linkID+1;
        }
    }*/

    /*return (
        <div>
            <h1>Questionnaire 🧮</h1>

            <Link to={`/survey/${getLinkID('back')}`}> Précédent </Link>
            <Link to={`/survey/${getLinkID('suivant')}`}> Suivant </Link>
            {/!*<Link to='freelance/42'>Questionnaire Freelance</Link>
            <Link to='client'>Questionnaire Client</Link>*!/}
            <p>Question {linkID}</p>
        </div>
    )*/
}

export default Survey