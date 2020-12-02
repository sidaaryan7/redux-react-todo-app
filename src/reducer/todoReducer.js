const initialState={
    todos:[
        {id:1,todo:"learn react"},
        {id:2,todo:"learn angular"},
        {id:3,todo:"learn vue js"}
    ]
}


function todoReducer(state=initialState,action){
    switch(action.type){
        case "ADD":return Object.assign({},state,{
            todos:state.todos.concat(action.payload)
        })

        case "DELETE":return Object.assign({},state,{
            todos:state.todos.filter(todo=>(
                todo.id!==action.payload
            ))
        })
        default:return state
    }
}

export default todoReducer;