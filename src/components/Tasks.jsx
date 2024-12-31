import NewTask from "./NewTask";

export default function Tasks({onAddTask,tasks,onDelete}){
    
    
    return(
    <section>
     <h2>Tasks</h2>
   <NewTask  onAdd={onAddTask}/>
   
     {tasks.length===0 && <p>There is no tasks yet!</p>}
     {tasks.length>0 && <ul>
        {tasks.map(task=>(<li className='task  ' key={task.id}>
            <span className="d-flex justify-content-between align-items-center">{task.text} <button className="btn" onClick={()=>onDelete(task.id)}>clear</button></span>
            <hr />
        </li>))}

</ul> }
    </section>
    )
}