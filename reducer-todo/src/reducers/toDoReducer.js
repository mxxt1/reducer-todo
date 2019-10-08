//Initial state

export const initialState = {
    todos: [
        {
            item: 'Seed ToDo',
            completed: false,
            id: Date.now()
        }
    ]
};


export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false, 
                id: Date.now()
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
                //the payload
            };
        default:
            return state;

    }//switch


}//reducer


