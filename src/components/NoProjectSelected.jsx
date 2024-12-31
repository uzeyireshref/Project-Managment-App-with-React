import React from 'react'
import todo from '../imgs/todo.png'
import Button from './Button'
const NoProjectSelected = ({startProject}) => {
  return (
    <div className='NoProject w-50 d-flex flex-column text-center justify-content-center align-items-center p-2'>
        <img src={todo} className='w-25 object-fit-cover' alt="no project selected" />
        <h1>No Project selected!</h1>
        <p>Select a project or get start a new one!</p>
        <Button onClick={startProject}>
            Create new Project!
        </Button>

    </div>
  )
}

export default NoProjectSelected