import React from 'react'



const Todo = (props) => {
    
    console.log(props)


    const toggleHandler = event => {
        event.preventDefault();
        props.dispatch({type: 'TOGGLE_COMPLETED', payload:props.todo.id})
    }


    const removeHandler = event => {
        event.preventDefault();
        props.dispatch({type: 'REMOVE_TODO', payload: props.todo.id})
    }


    return (
        <div onClick={toggleHandler}>
            
            <p>{props.todo.id}</p>
            <h1>{props.todo.item}</h1>
            
            {props.todo.completed ? (
                <h3>Complete</h3>
            ):(
            <h3>Incomplete</h3>    
            )}
            <button onClick={removeHandler}>Remove</button>
        </div>
    )
}

export default Todo
// onClick={() =>}
