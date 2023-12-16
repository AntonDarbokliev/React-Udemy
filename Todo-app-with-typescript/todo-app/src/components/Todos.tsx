import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import TodoItem from "./Todo"

import classes from './Todos.module.css'


const Todos : React.FC = () => {

    const {items,removeTodo} = useContext(TodoContext)

    return (
    <>
    <ul className={classes.todos}>
        {items.map(item => {
            return (
                <TodoItem key={item.id} item={item} removeTodo={removeTodo}/>
            )
        })}
    </ul>
    </>)
}

export default Todos