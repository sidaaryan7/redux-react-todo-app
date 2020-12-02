import React from 'react'
import {connect} from 'react-redux';
import ShowTodo from './ShowTodo.js';

const mapStateToProps =(state)=>{
    return{
        todos:state.todos
    }
} 

function DisplayTodo(props) {
    
    return (
        <div>
            {props.todos.map(todo=>(
                <ShowTodo key={todo.id} id ={todo.id}todo={todo.todo}/>
            ))}
        </div>
    )
}

export default connect(mapStateToProps)(DisplayTodo);