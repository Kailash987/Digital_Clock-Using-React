import React,{useState} from "react";
function ToDoList(){
    
    const [tasks,setTasks]=useState(["Eat BreakFast","Workout"])
    const [newTasks,setNewTasks]=useState("");
    function handleTask(event){
        setNewTasks(event.target.value)
    }
    function handleAddTask(){
        
        setTasks(t=>[...t,newTasks]);
        setNewTasks(""); 
        
    }
    function handleRemoveTask(index){
        setTasks(c=>c.filter((_,i)=>i!==index))
    }
    function handleMoveTaskUp(index){
        
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function handleMovedTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
        
    }
    return(
        <div>
            <h2>To Do List</h2>
            <div>
                <input type="text" value={newTasks} onChange={handleTask} placeholder="Enter the Task"></input>
                <button onClick={handleAddTask}>Add</button>
            </div>
            <ol>
                {tasks.map((tasks,index)=>
                    <li key={index}>
                    <span>{tasks}</span>
                    <button onClick={()=>handleRemoveTask(index)}>Delete</button>
                    <button onClick={()=> handleMoveTaskUp(index)}>UP</button>
                    <button onClick={()=> handleMovedTaskDown(index)}>DOWN</button>
                </li>
                )}
            </ol>
        </div>
    )
}
export default ToDoList;