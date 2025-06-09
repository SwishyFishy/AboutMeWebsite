import { useState, createContext } from "react";
import { PropsWithChildren } from "react";
import { useForm } from "@formspree/react";

import FormMessage from "./FormMessage";

// Create the context that form elements reference to get/set for element values
export const CONTEXT_FormData: React.Context<object> = createContext({});
export const CONTEXT_SetFormData: React.Context<Function> = createContext(new Function);

function Form<T extends object>({initialValues, formspree, children}: PropsWithChildren<{initialValues: T, formspree: string}>)
{
    // State to manage form elements
    const [values, setValues] = useState<T>(initialValues);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({...values, [e.target.id]: e.target.value});
    }
    const [error, setError] = useState<string>("");
    const [sent, setSent] = useState<boolean>(false);
    const [trySend, setTrySend] = useState<boolean>(false);

    // Manage form submission
    const [state, submitForm] = useForm(formspree);
    const handleSubmit = (e: any) => {
        let isValid: boolean = true;

        for (const [key, value] of Object.entries(values))
        {
            if (value == "")
            {
                isValid = false;
                setError(key);
                break;
            }
        }

        if (isValid && !state.submitting)
        {
            // Submit the form to FormSpree
            submitForm(e);

            // Reset the form elements
            setValues(initialValues);
            setError("");

            // Show the sent message
            setSent(true);
        }
        else
        {
            e.preventDefault();
            setTrySend(true);
        }
    }

    return(
        <CONTEXT_FormData value={values ? values : {}}>
            <CONTEXT_SetFormData value={handleInput}>
                <div id="form">
                    <form onSubmit={handleSubmit}>
                        {children}
                    </form>
                    <FormMessage display={error != ""}>Please fill out {error} field.</FormMessage>
                    <FormMessage display={sent}>Message sent!</FormMessage>
                    <FormMessage display={!sent} active={trySend}>Message failed to send.</FormMessage>
                </div>
            </CONTEXT_SetFormData>
        </CONTEXT_FormData>
    )
}

export default Form;