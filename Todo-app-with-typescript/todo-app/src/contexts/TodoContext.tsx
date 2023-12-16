import React, { PropsWithChildren, createContext, useState } from "react";
import Todo from "../models/Todo";


type todosObj = {
    items : Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;

}

export const TodoContext = createContext<todosObj>({
    items: [],
    addTodo: (text:string) => {},
    removeTodo: (id:string) => {},
})


const TodoContextProvider : React.FC<PropsWithChildren> = (props) => {

    const [todos,setTodos] = useState<Todo[]>([])

    function addTodo(text : string) {
  
      const todo = new Todo(text)
  
        setTodos(state => {
          return [...state,todo]
        })
    }
  
    function removeTodo(id : string) {    
        const filteredTodos = todos.filter(x => x.id !== id)
        
        setTodos(filteredTodos)
    }

    const contextValue : todosObj  = {
        items :todos,
        addTodo,
        removeTodo
    }

    return(
        <TodoContext.Provider value={contextValue}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider