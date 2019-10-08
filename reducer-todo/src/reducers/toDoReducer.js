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
            console.log(state);
            
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case 'TOGGLE_COMPLETED':
            console.log(`Toggled`);

            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;

    }//switch


}//reducer


