import { useState } from "react";

type props_FormTextInput = {
    label: string,
    id: string,
    placeholder: string;
}

function FormTextInput({label, id, placeholder}: props_FormTextInput)
{
    // Store input data in state
    const [text, setText] = useState<string>("");
    const handleInput = (e: any) => {
        setText(e.currentTarget.value);
    }

    return(
        <div id="form_text_input">
            <label htmlFor={id}>{label}: </label>
            <input type="text" name={id} id={id} placeholder={placeholder} value={text} onChange={handleInput}/>
        </div>
    );
}

export default FormTextInput;