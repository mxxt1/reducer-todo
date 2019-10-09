//Initial state

export const initialState = [
    {
            item: 'Seed ToDo',
            completed: false,
            id: Date.now()
        }
    
    ];



export const reducer = (state, action) => {
    console.log(state);

    switch(action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false, 
                id: Date.now()
            }
            console.log(state);
            
            return [
                ...state,
                newTodo
             ];
        case 'TOGGLE_COMPLETED':
            console.log(`Toggled`);
           return state.map(item => {
               console.log(item);
                if (item.id === action.payload){
                    return{...item, completed: !item.completed}; 
                } else {
                    return item;
                }
            });
           
        default:
            return state;

    }//switch


}//reducer


