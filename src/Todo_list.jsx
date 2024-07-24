import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Todo_list(){

const [task,setTask]=useState(["breakfast","lunch","dinner"])
const [newTask,setNewTask]=useState("")

function handleInputChange(e){
     setNewTask(e.target.value)
}
function add(){
   
    if(newTask.trim()!==""){
        setTask(t=>[...t,newTask])
        setNewTask("")

    }

 
}
function deleteTask(index){

    const updatedTasks=task.filter((_,i)=> i!==index)
    setTask(updatedTasks)

}
function moveUp(index){
    const updatedTasks=[...task]
    if(index>0){
   
    [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
    setTask(updatedTasks)}

}
function moveDown(index){

    const updatedTasks=[...task]
    if(index<task.length-1){
   
    [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
    setTask(updatedTasks)}

}


    return(
        <>
        <div className="container">
            <h1>Todo List</h1>
            <div>
                <input type="text" 
                        placeholder="Enter task...."
                        value={newTask}
                        onChange={handleInputChange}
                        className="search"/>
                        <Button variant="success"onClick={add} className="buttons add-button">Add</Button>
                        
            </div>
            <ol className="list">
                {task.map((tasks,index)=><li key={index}>
                    <span className="text">{tasks}</span>
                    {/* <button  variant="dark" onClick={()=>deleteTask(index)}>Delete</button> */}
                    <ButtonGroup aria-label="Basic example">
                    <Button className="buttons move-button" variant="secondary" onClick={()=>moveUp(index)}>UP</Button>
                    <Button className="buttons"  variant="secondary" onClick={()=>moveDown(index)}>DOWN</Button>
                    <Button className="buttons delete-button"  variant="danger" onClick={()=>deleteTask(index)}>Delete</Button>
                    </ButtonGroup>
                </li>)}
            </ol>
        </div>
        </>
    )
    
}

export default Todo_list