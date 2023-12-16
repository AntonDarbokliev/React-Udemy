import classes from './TodoItem.module.css'

import Todo from "../models/Todo"

const TodoItem : React.FC <{item : Todo, removeTodo : (id:string) => void}> = (props) => {
    return(
        <li onClick={ () => props.removeTodo(props.item.id)} className={classes.item}>{props.item.text}</li>
    )
}

export default TodoItem