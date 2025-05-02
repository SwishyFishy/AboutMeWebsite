import FormTextInput from "../components/FormTextInput";
import FormSubmit from "../components/FormSubmit";

import '../styles/ContactMe.css';

function ContactMe()
{
    return(
        <div id="contact_me">
            <h2>Contact Me</h2>
            <form>
                <FormTextInput label="Email" id="email" placeholder="Your email" large={false}/>
                <FormTextInput label="Message" id="message" placeholder="Your message" large={true}/>
                <FormSubmit value="Send" callback={(e: any) => {e.preventDefault(); console.log("called");}}/>
            </form>
        </div>
    );
}

export default ContactMe;