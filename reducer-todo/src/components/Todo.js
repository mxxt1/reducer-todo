import React, {useReducer, useState} from 'react'
import { reducer, initialState } from '../reducers/toDoReducer'


const Todo = (props) => {
    const [{todos}, dispatch] = useReducer(reducer, initialState);
    const [completed, setCompleted] = useState(props.completed)
    console.log(todos)


    const toggleHandler = event => {
        event.preventDefault();
        setCompleted(props.id)
        dispatch({type: 'TOGGLE_COMPLETED', payload:completed})
    }


    return (
        <div onClick={toggleHandler}>
            
            <p>{props.id}</p>
            <h1>{props.item}</h1>
            
            {props.completed ? (
                <h3>Complete</h3>
            ):(
            <h3>Incomplete</h3>    
            )}
            

        </div>
    )
}

export default Todo
// onClick={() =>}
