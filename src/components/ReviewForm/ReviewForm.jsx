import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import React from 'react'

function ReviewForm () {


    const history = useHistory()

    const feelingReducer = useSelector(store => store.feelingReducer)
    const understandingReducer = useSelector(store => store.understandingReducer)
    const supportReducer = useSelector(store => store.supportReducer)
    const commentsReducer = useSelector(store => store.commentsReducer)


    const objectReview = {
        feeling: feelingReducer,
        understanding: understandingReducer,
        support: supportReducer,
        comments: commentsReducer
    }

    const handleSubmit = () => {

        axios.post('/feedback' , objectReview)
        .then(response => {
            console.log('Data in databse: ' , objectReview)
        }).catch(err => {
            console.log('Error in post /ReviewForm' , )
        })

        history.push('/Thanks')
    }



    

    




    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feelingReducer}</p>
            <p>Understanding: {understandingReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentsReducer}</p>


            <button onClick={handleSubmit}>Submit</button>

          
        
        </>

    )
}

export default ReviewForm;