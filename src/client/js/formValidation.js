function formValidation(formUrl, formText) {
    if (!formUrl && !formText) {
        Client.renderError("Please enter a url or a text for entity extraction.");
        return false;
    } else if (formUrl && formText) {
        alert('If a url and a text is present, only the url will be considered.')
    }
    return true;
}

export {formValidation}
