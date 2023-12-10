import { useState } from "react";

function Input({lableText, validationFunction, ...props}) {

    const [state, setState] = useState({
        value: "",
        isBlur: false,
        error: false
    })


    function handleBlur() {
        setState((prevState) => {
            return {
                ...prevState,
                isBlur: true,
            }
        })
    }

    function handleChange(event) {
        setState((prevState) => {
            return {
                ...prevState,
                value: event.target.value,
                isBlur: false,
            }
        })
    }

    const error = validationFunction(state);

    return ( 
        <div className="control">
            <label htmlFor={props.id}>{lableText}</label>
            <input onBlur={handleBlur} onChange={handleChange} value={state.value} {...props} />
            {error && <p>{error}</p>}
        </div>
     );
}

export default Input;