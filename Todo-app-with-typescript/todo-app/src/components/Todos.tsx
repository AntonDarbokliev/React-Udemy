import Todo from "../models/Todo"

// import React from 'react'


const Todos : React.FC<{ items : Todo[]}> = (props) => {
    return (
    <>
    <ul>
        {props.items.map(item => {
            return (
                <li key={item.id}>{item.text}</li>
            )
        })}
    </ul>
    </>)
}

export default Todos