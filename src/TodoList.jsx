import { useState } from "react";
export default function TodoList(){
    let[todos,setTodos]=useState(["sampele task"]);
    let[newtodos,setnewtodos]=useState("")

    function addnewtask(){
        setTodos([...todos,newtodos])
        setnewtodos("")
    }

    function updatetodovalue(event){
        setnewtodos(event.target.value);
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
                        <li>{todo}</li>
                    ))}
            </ul>
        </div>
    );
}