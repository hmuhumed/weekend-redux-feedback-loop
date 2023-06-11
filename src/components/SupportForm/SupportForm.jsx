import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function SupportForm () {

    const history = useHistory();

    const dispatch = useDispatch();

    const [support , setSupport] = useState(0);

    const handleSupportClick = () => {
        setSupport('');

        dispatch({
            type: 'SUPPORT',
            payload: support
        })

        history.push('/Comments')
    }

    return (
        <>
            <h1>How well are you supported?</h1>
            <label>Support?</label>
            <br></br>
            <input 
            type="number"
            value={support}
            onChange={(event) => setSupport(event.target.value)}
            />

            <button type='submit' onClick={handleSupportClick}>Next</button>
        </>
    )


}

export default SupportForm;