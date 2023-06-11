import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function CommentsForm () {


    const history = useHistory();
    

    const dispatch = useDispatch();
    const [comments , setComments] = useState('')

    const handleCommentsClick = () => {
        setComments('')

        dispatch({
            type: 'COMMENTS', 
            payload: comments
        })

        history.push('/Review')
    }

    return (
        <>
            <h1>Any comments you want to leave? </h1>
            <label>Comments?</label>
            <br></br>
            <input 
            type="text"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            />
            <button onClick={handleCommentsClick}>Next</button>
        
        </>
    )

}

export default CommentsForm;