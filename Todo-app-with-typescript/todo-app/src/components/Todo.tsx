import Todo from "../models/Todo"

const TodoItem : React.FC <{item : Todo}> = (props) => {
    return(
        <li key={props.item.id}>{props.item.text}</li>
    )
}

export default TodoItem