import Form from "../components/forms/Form";
import FormTextInput from "../components/forms/FormTextInput";
import FormSubmit from "../components/forms/FormSubmit";

import '../styles/ContactMe.css';

function ContactMe()
{
    return(
        <div id="contact_me"> 
            <h2>Contact Me</h2>
            <Form<{email: string, message: string}> initialValues={{email: '', message: ''}}>
                <FormTextInput label="Email" id="email" placeholder="Your email" isArea={false}/>
                <FormTextInput label="Message" id="message" placeholder="Your message" isArea={true}/>
                <FormSubmit value="Send" submissionTrigger={(e: any) => {e.preventDefault(); console.log("called");}}/>
            </Form>
        </div>
    );
}

export default ContactMe;