import '../../styles/FormSubmit.css';

type props_FormSubmit = {
    value: string,
}

function FormSubmit({value}: props_FormSubmit)
{
    return(
        <div id="form_submit">
            <label htmlFor="submit" className="hidden"></label>
            <input type="submit" name="submit" id="submit" value={value}/>
        </div>
    );
}

export default FormSubmit;