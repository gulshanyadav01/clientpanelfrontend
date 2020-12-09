import React from 'react'
import { useHistory } from 'react-router-dom'

const  Fine = () =>  {  
    const history = useHistory();
    const onSubmitHandler = () => { 
        history.push("/login");
    }

    return (
        <div>
            <h1 onClick = {onSubmitHandler} className = "text-white bg-red-400 text-xl mt-50"> hello </h1>
        </div>
    )
}

export default Fine;
