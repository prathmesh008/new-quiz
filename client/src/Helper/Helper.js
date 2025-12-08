import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts(result) {
    return result.filter(r => r !== undefined).length;
}

export function earnpoints(result, answers, queue) {
    let totalScore = 24; // Starting points

    // Iterate through all questions
    for (let i = 0; i < queue.length; i++) {
        // Determine points for this question based on index
        let questionPoints = 3;
        if (i >= 8 && i < 16) questionPoints = 4;
        else if (i >= 16) questionPoints = 5;

        const userAnswer = result[i];
        const correctAnswer = answers[i];

        // Check if answered
        if (userAnswer !== undefined) {
            if (userAnswer === correctAnswer) {
                totalScore += questionPoints;
            } else {
                totalScore -= 0.25;
            }
        }
    }
    return totalScore;
}

export function flagresult(totalPoints, earnPoints) {
    return (totalPoints * 33 / 100) <= earnPoints; /** earn 33% marks */
}

/** check user auth  */
export function CheckUserExist({ children }) {
    const auth = useSelector(state => state.result.userid)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
export async function getServerData(url, callback) {
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}


/** post server data */
export async function postServerData(url, result, callback) {
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}