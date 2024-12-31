import React from 'react'
import Tasks from './Tasks';

const SelectedProject = ({project,onDelete,onAddTask,tasks,onDeleteTask}) => {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
  return (
    <div className='project-page mt-5 mx-2 p-3'>
        <div className="header d-flex w-100 justify-content-between">
        <header>
           <h1> {project.title}</h1>
        </header>
        <button className='btn  btn-dark' onClick={onDelete}>
            Delete
        </button>
        </div>
        <p className='text-secondary mt-2'>{formattedDate}</p>
   
        <p className='fs-5'>{project.description}</p>
        <hr/>

      <Tasks tasks={tasks} onAddTask={onAddTask} onDelete={onDeleteTask}/>
    </div>
  )
}

export default SelectedProject