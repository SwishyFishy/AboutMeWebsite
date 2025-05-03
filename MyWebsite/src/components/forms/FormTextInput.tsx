import { useContext } from "react";
import { CONTEXT_FormData, CONTEXT_SetFormData } from "./Form";

import '../../styles/FormTextInput.css';

type props_FormTextInput = {
    label: string,
    id: string,
    placeholder: string;
    isArea: boolean
}

function FormTextInput({label, id, placeholder, isArea}: props_FormTextInput)
{
    const data = useContext(CONTEXT_FormData);
    const setData = useContext(CONTEXT_SetFormData);

    return(
        <div id="form_text_input" className={isArea ? "textarea" : "textinput"}>
            <label htmlFor={id}>{label}: </label>
            {isArea ?
            <textarea name={id} id={id} placeholder={placeholder} value={data[id as keyof typeof data]} onChange={(e) => {setData(e)}}/> :
            <input type="text" name={id} id={id} placeholder={placeholder} value={data[id as keyof typeof data]} onChange={(e) => {setData(e)}}/>}
        </div>
    );
}

export default FormTextInput;