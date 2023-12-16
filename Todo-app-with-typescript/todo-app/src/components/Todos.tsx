import Todo from "../models/Todo"
import TodoItem from "./Todo"

// import React from 'react'


const Todos : React.FC<{ items : Todo[]}> = (props) => {

    return (
    <>
    <ul>
        {props.items.map(item => {
            return (
                <TodoItem item={item}/>
            )
        })}
    </ul>
    </>)
}

export default Todos