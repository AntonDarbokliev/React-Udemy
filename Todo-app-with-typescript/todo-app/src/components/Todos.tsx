import Todo from "../models/Todo"
import TodoItem from "./Todo"

import classes from './Todos.module.css'


const Todos : React.FC<{ items : Todo[]}> = (props) => {

    return (
    <>
    <ul className={classes.todos}>
        {props.items.map(item => {
            return (
                <TodoItem item={item}/>
            )
        })}
    </ul>
    </>)
}

export default Todos