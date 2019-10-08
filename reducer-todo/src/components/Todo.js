import React from 'react'

const Todo = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.item}</h2>
            <p>{props.completed}</p>
            <p>{props.id}</p>
        </div>
    )
}

export default Todo
