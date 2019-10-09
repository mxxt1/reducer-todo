import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/toDoReducer';
import Todo from './Todo';

const TodoList = () => {

    const [todoList, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState(''); 

        console.log(todoList);

    const changeHandler = event =>{
        setNewTodo(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();
        dispatch({type: 'ADD_TODO', payload: newTodo});
        setNewTodo('');
    }

    // const toggleHandler = event => {
    //     event.preventDefault();
    //     // setToggleItem(item.id);
    //     // console.log(toggleItem);
    //     dispatch({type:'TOGGLE_COMPLETED', payload: item.id});
    // }



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
            {todoList.map((item,index) => {
                console.log(item);
              return( 
              <div key={index}>    
              <Todo 
              key={index}
              dispatch={dispatch} 
              todo={item} 
              />
              </div>
              )
            })}
        </div>
    );
}

export default TodoList

// () => dispatch({type: 'ADD_TODO', payload: newTodo})