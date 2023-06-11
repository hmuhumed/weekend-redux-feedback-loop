import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function UnderstandingForm () {

    const history = useHistory();

    const dispatch = useDispatch();

    const [understanding , setUnderstanding] = useState(0);

    const handleUnderstandingClick = () => {

        setUnderstanding('')
        

        dispatch({
            type: 'UNDERSTANDING',
            payload:   understanding
        })

        history.push('/Support')

    }

    return (
        <>
            <h1>How's your understanding</h1>
            <label>Understanding</label>
            <br></br>
            <input
            type='number'
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}
            />

            <button type='submit' onClick={handleUnderstandingClick}>NEXT</button>
        </>

    )
}

export default UnderstandingForm;


