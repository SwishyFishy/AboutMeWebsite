import FormTextInput from "../components/FormTextInput";
import FormSubmit from "../components/FormSubmit";

function ContactMe()
{
    return(
        <div id="contact_me">
            <h2>Contact Me</h2>
            <form>
                <FormTextInput label="Email" id="email" placeholder="Your email"/>
                <FormTextInput label="Message" id="message" placeholder="Your message"/>
                <FormSubmit value="Send" callback={(e: any) => {e.preventDefault(); console.log("called");}}/>
            </form>
        </div>
    );
}

export default ContactMe;