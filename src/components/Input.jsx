

export default function Input({label,textArea,ref,type,...props}){
 
    return (
        <div className="inputs d-flex flex-column mt-3">
<label >{label}</label>
{textArea?

<textarea ref={ref}  className=" input " {...props}/>:

<input ref={ref} type={type} className="input" {...props}/>}

        </div>
    )
}