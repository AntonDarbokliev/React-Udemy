import Todo from "../models/Todo"
import TodoItem from "./Todo"

import classes from './Todos.module.css'


const Todos : React.FC<{ items : Todo[],removeTodo : (id:string) => void}> = (props) => {

    return (
    <>
    <ul className={classes.todos}>
        {props.items.map(item => {
            return (
                <TodoItem key={item.id} item={item} removeTodo={props.removeTodo}/>
            )
        })}
    </ul>
    </>)
}

export default Todos