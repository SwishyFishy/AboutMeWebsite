import Form from "../components/forms/Form";
import FormTextInput from "../components/forms/FormTextInput";
import FormEmailInput from "../components/forms/FormEmailInput";
import FormSubmit from "../components/forms/FormSubmit";

import '../styles/ContactMe.css';

type FormValues = {
    name: string,
    email: string,
    message: string
}

const initialValues: FormValues = {name: '', email: '', message: ''};

function ContactMe()
{
    return(
        <div id="contact_me">
            <h2>Contact Me</h2>
            <Form<FormValues> initialValues={initialValues}>
                <FormTextInput label="Name" id="name" placeholder="Your name" isArea={false}/>
                <FormEmailInput label="Email" id="email" placeholder="Your email"/>
                <FormTextInput label="Message" id="message" placeholder="Your message" isArea={true}/>
                <FormSubmit value="Send"/>
            </Form>
            <section>
                <h3>Or contact me via my online presence:</h3>
                <span>
                    <i className="fa-brands fa-github"/>
                    <a href="https://github.com/SwishyFishy" target="__blank">SwishyFishy on GitHub</a>
                </span>
                <span>
                    <i className="fa-brands fa-discord"/>
                    <a href="https://discord.com/users/sw1shyfishy" target="__blank">sw1shyfishy on Discord</a>
                </span>
            </section>
        </div>
    );
}

export default ContactMe;