import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/globalState'

export const AddTodo = () => {
    const { dispatch } = useContext(TodoContext)
    const [ todoItem, setTodoItem ]  = useState("")

    const addItem = (e:any) =>{
        e.preventDefault()
        dispatch({
            type: "ADD_TODO", 
            payload: todoItem
        })
        setTodoItem("")
    }
    return (
        <div>
            <form onSubmit={(e)=>{addItem(e)}}>
                <input type="text" value={todoItem} required onChange={(ev)=>{setTodoItem(ev.target.value)}}/>
                <button> Add Item
                </button>
            </form>
        </div>
    )
}
