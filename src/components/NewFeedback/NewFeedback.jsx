import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewFeedback () {

    const history = useHistory()


    const dispatch = useDispatch()

    const newReducers = ( ) => {

        dispatch({
            type: 'NOTHING',
            payload: []
        })


        history.push('/')
    }


    return (
        <>
            <h1>Feedback</h1>

            <h1>Thank you!</h1>
            <button onClick={newReducers}>Leave New Feedback</button>
        
        
        
        </>
    )
}

export default NewFeedback;