import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
export default function TodoList(){
    let[todos,setTodos]=useState([{task:"sample-task",id:uuidv4()}]);//use of they key at that place..
    let[newtodos,setnewtodos]=useState("")

    function addnewtask(){
        setTodos((prevtodos)=>{
            return  [...prevtodos,{task:newtodos,id:uuidv4()}]
        });
        setnewtodos("")
    }

    function updatetodovalue(event){
        setnewtodos(event.target.value);
    }

    function deletetodo(id){
        setTodos(()=>todos.filter((prevtodos)=>prevtodos.id!=id));
    }

    let uppercaseall=()=>{
        setTodos((todos)=>(
            todos.map((todos)=>{
                return {
                    ...todos,
                    task:todos.task.toUpperCase(),
                };
            })
        ));
    };

    let uppercaseone=(id)=>{
        setTodos((todos)=>(
            todos.map((todos)=>{
                if(todos.id==id){
                    return {
                        ...todos,
                        task:todos.task.toUpperCase(),
                    };
                }
                else{
                    return todos;
                } 
            })
        ));
    }
    return(
        <div>
            <input placeholder="Add a Task " value={newtodos} onChange={updatetodovalue} />
            <br />
            <button onClick={addnewtask}>Add</button>
            <br />
            <hr />
            <h1>ToDo List!</h1>
            <ul>
                    {todos.map((todo)=>(
                        // eslint-disable-next-line react/jsx-key
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deletetodo(todo.id)}>Delete</button>
                            <button onClick={()=>uppercaseone(todo.id)}>uppercaseone</button>
                        </li> 
                    ))}
            </ul>
            <br />
            <br />
            <button onClick={uppercaseall}>uppercase </button>
        </div>
    );
}