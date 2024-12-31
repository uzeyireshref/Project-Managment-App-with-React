import Input from "./Input";
import { useRef } from "react";

import '../App.css'
import Modal from './Modal';
export default function NewProject({onAdd,onCancel}){
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();
    const modal=useRef();

    const handleSave=()=>{
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=dueDate.current.value;

        if(enteredTitle.trim()===''||enteredDescription.trim()===''||enteredDueDate.trim()===''){
           modal.current.open()
           return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }
    return (
        <>
        <Modal buttonCaption='Close'  ref={modal}>
            <h1 className="my-2">Please write valid context</h1>
            <p className="my-2">Make sure all input fields is not empthy!</p>
        </Modal>
        <div className="newProject mt-5  px-5">
            <menu className="menu buttons d-flex justify-content-end pt-3 ">
               <li> <button onClick={onCancel} className="btn btn-secondary">
                    Cancel
                </button></li>
                <li>  <button onClick={handleSave}className="btn btn-dark"  >
                    Save
                </button></li>
                </menu>
                <div>
                    <Input type='text' ref={title} label={'Project Title'} />
                    <Input type='text-area' ref={description} label={'Description'} textArea />
                    <Input type='date' ref={dueDate} label={'Due Date'} />
                </div>
        

        </div>
        </>
    )
}