import { useState, createContext } from "react";
import { PropsWithChildren } from "react";

// Create the context that form elements reference to get/set for element values
export const CONTEXT_FormData: React.Context<any> = createContext({});
export const CONTEXT_SetFormData: React.Context<Function> = createContext({} as unknown as Function);

function Form<T extends object>({initialValues, children}: PropsWithChildren<{initialValues: T}>)
{
    // State to manage form elements
    const [values, setValues] = useState<T>(initialValues);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({...values, [e.target.id]: e.target.value});
    }

    return(
        <CONTEXT_FormData value={values ? values : {}}>
            <CONTEXT_SetFormData value={handleInput}>
                <form>
                    {children}
                </form>
            </CONTEXT_SetFormData>
        </CONTEXT_FormData>
    )
}

export default Form;