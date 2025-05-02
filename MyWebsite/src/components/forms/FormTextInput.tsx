import { useState } from "react";

import '../../styles/FormTextInput.css';

type props_FormTextInput = {
    label: string,
    id: string,
    placeholder: string;
    large: boolean
}

function FormTextInput({label, id, placeholder, large}: props_FormTextInput)
{
    // Store input data in state
    const [text, setText] = useState<string>("");
    const handleInput = (e: any) => {
        setText(e.currentTarget.value);
    }

    return(
        <div id="form_text_input" className={large ? "textarea" : "textinput"}>
            <label htmlFor={id}>{label}: </label>
            {large ?
            <textarea name={id} id={id} placeholder={placeholder} value={text} onChange={handleInput}/> :
            <input type="text" name={id} id={id} placeholder={placeholder} value={text} onChange={handleInput}/>}
        </div>
    );
}

export default FormTextInput;