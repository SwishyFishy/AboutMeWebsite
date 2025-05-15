import { useState, createContext } from "react";
import { PropsWithChildren } from "react";
import { useForm } from "@formspree/react";

// Create the context that form elements reference to get/set for element values
export const CONTEXT_FormData: React.Context<object> = createContext({});
export const CONTEXT_SetFormData: React.Context<Function> = createContext(new Function);

function Form<T extends object>({initialValues, children}: PropsWithChildren<{initialValues: T}>)
{
    // State to manage form elements
    const [values, setValues] = useState<T>(initialValues);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({...values, [e.target.id]: e.target.value});
    }
    const [error, setError] = useState<boolean>(false);

    // Manage form submission
    const [state, submitForm] = useForm(import.meta.env.VITE_CONTACT_FORM_CODE);
    const handleSubmit = (e: any) => {
        let isValid: boolean = true;

        for (const [key, value] of Object.entries(values))
        {
            if (value == "")
            {
                isValid = false;
                setError(true);
                break;
            }
        }

        if (isValid && !state.submitting)
        {
            // Submit the form to FormSpree
            submitForm(e);

            // Reset the form elements
            setValues(initialValues);
            setError(false);
        }
        else
        {
            e.preventDefault();
        }
    }

    return(
        <CONTEXT_FormData value={values ? values : {}}>
            <CONTEXT_SetFormData value={handleInput}>
                <form onSubmit={handleSubmit}>
                    {children}
                </form>
                <span id="error" className={error ? "italics" : "hidden"}>Please fill out all fields.</span>
            </CONTEXT_SetFormData>
        </CONTEXT_FormData>
    )
}

export default Form;