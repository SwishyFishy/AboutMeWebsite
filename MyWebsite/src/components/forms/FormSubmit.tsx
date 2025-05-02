type props_FormSubmit = {
    value: string,
    callback: any
}

function FormSubmit({value, callback}: props_FormSubmit)
{
    return(
        <div id="form_submit">
            <label htmlFor="submit" className="hidden"></label>
            <input type="submit" name="submit" id="submit" value={value} onClick={callback}/>
        </div>
    );
}

export default FormSubmit;