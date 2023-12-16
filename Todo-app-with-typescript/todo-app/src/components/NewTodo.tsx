import { useRef } from "react"

const NewTodo: React.FC<{addTodo : (text : string) => void}> = (props) => {
    const todoRef = useRef<HTMLInputElement>(null)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        const text = todoRef.current!.value
        props.addTodo(text)
    } 

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="todoText">Todo text</label>
            <input type="text" id="todoText" ref={todoRef} />
            <button>Submit</button>
        </form>
    )
} 

export default NewTodo