import { useContext } from "react";
import { CONTEXT_FormData, CONTEXT_SetFormData } from "./Form";

import '../../styles/FormEmailInput.css';

type props_FormEmailInput = {
    label: string,
    id: string,
    placeholder: string;
}

function FormEmailInput({label, id, placeholder}: props_FormEmailInput)
{
    const data: object = useContext(CONTEXT_FormData);
    const setData: Function = useContext(CONTEXT_SetFormData);

    return(
        <div id="form_email_input" className="emailinput">
            <label htmlFor={id}>{label}: </label>
            <input type="email" name={id} id={id} placeholder={placeholder} value={data[id as keyof typeof data]} onChange={(e) => {setData(e)}}/>
        </div>
    );
}

export default FormEmailInput;