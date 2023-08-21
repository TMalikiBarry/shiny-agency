import {useParams} from "react-router-dom";
function FreelanceForm() {
    console.log(useParams());

    const {questionID} =useParams();

    return (
        <div>
            <h2>Questionnaire Freelance {questionID}</h2>
        </div>
    )
}
export default FreelanceForm
