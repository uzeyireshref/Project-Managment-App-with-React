
import { useEffect, useState } from 'react';
import './App.css';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSideBar from './components/ProjectSideBar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [startProjects, setStartProjects] = useState(() => {
   
    const savedData = localStorage.getItem('startProjects');
    return savedData
      ? JSON.parse(savedData)
      : {
          selectedProjectId: undefined,
          projects: [],
          tasks: [],
        };
  });


  useEffect(() => {
    localStorage.setItem('startProjects', JSON.stringify(startProjects));
  }, [startProjects]);
  
  const handleAddTask=(text)=>{
setStartProjects(prevProject=>{
  const taskId=Math.random()*100;
  const newTask={
    text:text,
    projectId:prevProject.selectedProjectId,
    id:taskId
  }
  return{
    ...prevProject,
    tasks:[...prevProject.tasks,newTask]
  
  }
  
})
  }


 
const handleDeleteTask=(id)=>{
  setStartProjects(prevProject=>{
     return{
    ...prevProject,
    tasks:prevProject.tasks.filter(task=>task.id!==id),
  }
 })
 
}


  const handleSelected=(id)=>{
   setStartProjects(prevProject=>{
    return{
      ...prevProject,
      selectedProjectId:id,
    }
   })
  }
  const handleStartProject=()=>{
    setStartProjects(prevProject=>{
      return{
        ...prevProject,
        selectedProjectId:null,
      }
    })
  }

  const handleCancel=()=>{
  setStartProjects(prevProject=>{
    return{
      ...prevProject,
      selectedProjectId:undefined,
    }
  })
  }
  const handleAddProject=(Project)=>{
    setStartProjects(prevProject=>{
      const projectId=Math.random()*1000
      const newProject={
        ...Project,
        id:projectId
      }
      return{
        ...prevProject,
        selectedProjectId:undefined,
        projects:[...prevProject.projects,newProject]
        
      }
    })
  }
  const handleDelete=()=>{
    setStartProjects(prevProject=>{
      return{
        ...prevProject,
        selectedProjectId:undefined,
        projects:prevProject.projects.filter((project)=>project.id !==prevProject.selectedProjectId),
      }
    })
  }

console.log(startProjects);
const selectedProject=startProjects.projects.find(project=>project.id===startProjects.selectedProjectId)

const selectedTask=startProjects.tasks.filter(
  (task) => task.projectId === startProjects.selectedProjectId 
)
 

let content=<SelectedProject  tasks={selectedTask} onDeleteTask={handleDeleteTask} onAddTask={handleAddTask} onDelete={handleDelete} project={selectedProject}/>
 
 
  if(startProjects.selectedProjectId===undefined){
    content=<NoProjectSelected startProject={handleStartProject}/>
  }else if (startProjects.selectedProjectId===null){
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
  }
  return (
    <main className='d-flex '>
<ProjectSideBar selectedProjectId={startProjects.selectedProjectId} onSelect={handleSelected} projects={startProjects.projects} startProject={handleStartProject}/>
   {content}
    </main>
  );
}

export default App;
