import classes from './TodoItem.module.css'

import Todo from "../models/Todo"

const TodoItem : React.FC <{item : Todo}> = (props) => {
    return(
        <li className={classes.item} key={props.item.id}>{props.item.text}</li>
    )
}

export default TodoItem