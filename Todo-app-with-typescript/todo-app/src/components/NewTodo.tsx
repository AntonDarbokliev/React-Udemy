import { TodoContext } from '../contexts/TodoContext'
import classes from './NewTodo.module.css'

import { useContext, useRef } from "react"

const NewTodo: React.FC = () => {
    const todoRef = useRef<HTMLInputElement>(null)

    const {addTodo} = useContext(TodoContext)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        const text = todoRef.current!.value
        addTodo(text)
    } 

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <label htmlFor="todoText">Todo text</label>
            <input type="text" id="todoText" ref={todoRef} />
            <button>Submit</button>
        </form>
    )
} 

export default NewTodo