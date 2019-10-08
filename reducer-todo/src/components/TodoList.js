import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/toDoReducer';
import Todo from './Todo';

const TodoList = () => {

    const [{todos}, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState(''); 

    console.log(todos);

    const changeHandler = event =>{
        setNewTodo(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();
        dispatch({type: 'ADD_TODO', payload: newTodo});
        setNewTodo('');
    }



    return (
        <div>
            <div>
                <form>
                <input 
                    type="text" 
                    placeholder="Enter to-do"
                    name='newTodo'
                    value={newTodo}
                    onChange={changeHandler}
                />
                <button onClick={submitHandler}>Submit</button>
                </form>
            </div>
            {todos.map((item,index) => {
              return( 
              <Todo 
              key={index} 
              {...item} 
              />
              )
            })}
        </div>
    );
}

export default TodoList

// () => dispatch({type: 'ADD_TODO', payload: newTodo})