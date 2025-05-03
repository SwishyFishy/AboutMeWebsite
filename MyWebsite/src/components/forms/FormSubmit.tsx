type props_FormSubmit = {
    value: string,
    submissionTrigger: any
}

function FormSubmit({value, submissionTrigger}: props_FormSubmit)
{
    return(
        <div id="form_submit">
            <label htmlFor="submit" className="hidden"></label>
            <input type="submit" name="submit" id="submit" value={value} onClick={submissionTrigger}/>
        </div>
    );
}

export default FormSubmit;