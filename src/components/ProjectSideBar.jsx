import Button from "./Button"


export default function ProjectSideBar({startProject,projects,onSelect,selectedProjectId}){

    return(
     <aside className="sideBar bg-dark text-white mt-5">
        <h2 className="mb-3">Projects</h2>
        <div>
         <Button onClick={startProject}>
            +Add Project
         </Button>
        </div>
<ul className="mt-3 p-0">
{projects.map(project=>{
   let classes = `btn  w-100 my-2`;
   if (selectedProjectId === project.id) {
     classes += ' btn-light';
   } else {
     classes += ' btn-secondary';
   }
   console.log('Selected Project ID:', selectedProjectId);
console.log('Current Project ID:', project.id);
    return (
        <li key={project.id} className="project-names">
        <button onClick={()=>onSelect(project.id)} className={classes}>{project.title}</button>
    </li>)
})}
</ul>
    </aside >
    )
}