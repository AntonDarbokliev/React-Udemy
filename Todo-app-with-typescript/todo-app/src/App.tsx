import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import Todo from './models/Todo'
import NewTodo from './components/NewTodo'



function App() {

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
  
  return (
    <>
    <NewTodo addTodo={addTodo} />      
    <Todos items={todos} removeTodo={removeTodo}/>     
    </>
  )
}

export default App
