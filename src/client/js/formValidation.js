function formValidation(formUrl, formText) {
    if (!formUrl && !formText) {
        Client.renderError("Please enter a url or a text for entity extraction.");
        return false;
    } else if (formUrl && formText) {
        if (!urlValidation(formUrl)) {
            Client.renderError("Please enter a valid url, for instance: https://en.wikipedia.org/wiki/Natural_language_processing.");
            return false;
        }
        alert('If a url and a text is present, only the url will be considered.');
        document.getElementById('text').value = ''; // reset text
        if (!urlValidation(formUrl)) {
            Client.renderError("Please enter a valid url, for instance: https://en.wikipedia.org/wiki/Natural_language_processing.");
            return false;
        }
    }
    return true;
}

function urlValidation(url) {
    // Pattern from https://stackoverflow.com/a/5717133/8712609
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator/ fragment locator
    return !!pattern.test(url);
}

export {urlValidation}
export {formValidation}
