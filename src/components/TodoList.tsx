import React, { useContext } from 'react'
import { TodoContext } from '../context/globalState'
import { Todo } from '../Types/type'

export const TodoList = () => {
    const { state: { todo }, dispatch } = useContext(TodoContext)

    const deleteTodo = (item: Todo) =>{
        dispatch({
            type: "DELETE_TODO",
            payload: item
        })
    }
    return (
        <div>
            <ul>
                {todo.map((item:any, index)=>
                    <div key={index}>
                        <li >
                            <span>{item}</span>
                            <button onClick={()=>deleteTodo(item)}>X</button>
                        </li>
                    </div>
                )}
            </ul>
 
        </div>
    )
}
