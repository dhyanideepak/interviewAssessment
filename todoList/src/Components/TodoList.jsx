import { useState } from "react";
import "../styles/TodoList.css";

function TodoList(){
    const [todos,setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const addTodo = () => {
      if (newTodo.trim()) {
        const newTask = {task: newTodo, isCompleted: false}
        setTodos([...todos,newTask]);
        setNewTodo('')
      }
    };
    const toggleCompleted=(index)=>{
        const updateTodos = todos.map((todo,i)=>
            i===index ?  {...todo, isCompleted : !todo.isCompleted}: todo
        )
        setTodos(updateTodos)
    }
    const deleteTodo=(index)=>{
        setTodos(todos.filter((_,i)=>i!==index))

    }
    return (
        <>
        <div>
            <h1 >Todo List</h1>
            <input type="text" value={newTodo}  onChange={(e)=>{setNewTodo(e.target.value)}} placeholder="Enter a new task"/>
            <button onClick={addTodo} >Add </button>
            
            <ul style={{listStyle:'none'}}>
                {todos.map((todo,index)=>(
                    
                    <li key={index} >
                        <input type="checkbox" checked={todo.isCompleted} onChange={()=>toggleCompleted(index)} />
                        <span >
                        {todo.task}
                        </span>

                        <button onClick={()=> deleteTodo(index)} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        
        </>
    )
}

export default TodoList;
