import React,{ useState } from "react"

function ToDoList(){

    const [tasks,setTasks]=useState([]);
    const [task, setTask]=useState("");

    function handleChange(event){
        setTask(event.target.value);
    }
    function addTask(){
        if(task.trim() !== ""){
      setTasks(t=>[...t, task]);
      setTask("");
        }
    }
    function deleteTask(ind){
 const updatedTasks=tasks.filter((element,i)=> i!== ind);
 setTasks(updatedTasks);
    }
    function moveTaskUp(ind){
        if(ind >0){
            const updatedTasks=[...tasks];
            [updatedTasks[ind],updatedTasks[ind - 1]]=[updatedTasks[ind - 1],updatedTasks[ind]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(ind){
 
        if(ind < tasks.length - 1){
            const updatedTasks=[...tasks];
            [updatedTasks[ind],updatedTasks[ind + 1]]=[updatedTasks[ind + 1],updatedTasks[ind]];
            setTasks(updatedTasks);
        }


    }
return (<div className="todolist">
     <h1>To-Do-List</h1>
     <div>
        <input type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={handleChange} />
        <button className="addbtn" onClick={addTask}>ADD</button>
     </div>
     <ol>
        {
            tasks.map((element,index)=>
            <li key={index}>
                <span className="text">{element}</span>
                <button className="deletebtn" onClick={()=>deleteTask(index)}>DELETE</button>
                <button className="movebtn" onClick={()=>moveTaskUp(index)}>🔼</button>
                <button className="movebtn" onClick={()=>moveTaskDown(index)}>🔽</button>
            </li>)
        }
     </ol>
</div>);
}
export default ToDoList