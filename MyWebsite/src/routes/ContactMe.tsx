import Form from "../components/forms/Form";
import FormTextInput from "../components/forms/FormTextInput";
import FormEmailInput from "../components/forms/FormEmailInput";
import FormSubmit from "../components/forms/FormSubmit";

import '../styles/ContactMe.css';

type formValues = {
    name: string,
    email: string,
    message: string
}

function ContactMe()
{
    return(
        <div id="contact_me"> 
            <h2>Contact Me</h2>
            <Form<formValues> initialValues={{name: '', email: '', message: ''}}>
                <FormTextInput label="Name" id="name" placeholder="Your name" isArea={false}/>
                <FormEmailInput label="Email" id="email" placeholder="Your email"/>
                <FormTextInput label="Message" id="message" placeholder="Your message" isArea={true}/>
                <FormSubmit value="Send" submissionTrigger={(e: any) => {e.preventDefault(); console.log("called");}}/>
            </Form>
        </div>
    );
}

export default ContactMe;