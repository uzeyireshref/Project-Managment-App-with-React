import React, { useState } from 'react'

const NewTask = ({onAdd}) => {
    const [enteredTask,setEnteredTask]=useState('');
    const handleClick=()=>{
        if(enteredTask.trim()===''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

  return (
    <div className='d-flex my-2 mb-4'>
        <input onChange={(e)=>setEnteredTask(e.target.value)} value={enteredTask} type="text" className='task-input rounded-2 outline-none' />
        <button onClick={handleClick} className='btn btn-dark mx-2'>Add Task</button>
    </div>
  )
}

export default NewTask