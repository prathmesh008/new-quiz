import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import * as Action from '../Redux/Questionreducer'
import { getServerData } from "../Helper/Helper";

export const useFetchQuestions = (quizId) => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        (async () => {
            try {
                const url = quizId
                    ? `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions?id=${quizId}`
                    : `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`;

                const [{ questions, answers }] = await getServerData(url, (data) => data)

                if (questions.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: questions }));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question: questions, answers }))

                } else {
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movenextquestion()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveprevquestion()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

export const jumpToQuestion = (index) => async (dispatch) => {
    try {
        dispatch(Action.jumpToQuestionAction({ trace: index }));
    } catch (error) {
        console.log(error)
    }
}