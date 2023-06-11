import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function FeelingForm () {

    const history = useHistory();

    const dispatch = useDispatch();

    

    const [feeling , setFeeling] = useState(0);

   

    
        const handleFeelingClick = () => {
            
            setFeeling('')

            console.log('Added to reducer ' , feeling)
            dispatch({
                type: 'FEELING',
                payload: feeling
            })

            history.push('/Understanding')
    }

    console.log(feeling);
    return (
        <>
            
                <h1>How are you feeling today? </h1>
                <label> Feeling?</label>
                <br></br>
                <input
                type='number'
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                /> 

                <button  onClick={handleFeelingClick}>Next</button>
            
        
        
        
        </>



    )
    
}

export default FeelingForm;