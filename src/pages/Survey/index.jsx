import {Link, useParams} from "react-router-dom";

function Survey() {
    const {questionID} = useParams()
    // linkID = +questionID;

    const questionNumberInt = parseInt(questionID)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionID}</h2>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
            {questionNumberInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            )}
        </div>
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