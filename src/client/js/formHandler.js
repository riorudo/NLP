function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value
    let formText = document.getElementById('text').value
    const url = 'http://localhost:8081/sentiment';
    resetResponse();
    if (!window.navigator.onLine) {
        Client.renderError("You are offline! Please try to reconnect your device.");
        return;
    }
    if (!Client.formValidation(formUrl, formText)) {
        return;
    }
    document.getElementById('loadingModal').style.display = 'block';
    fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formUrl ? JSON.stringify({url: formUrl}) : JSON.stringify({text: formText}), // body data type must match "Content-Type" header
    })
        .then(res => res.json())
        .then(data => {
            console.log('Success:', data);
            if (data && data.entities && Object.keys(data.entities).length > 0 && data.text !== 'Sorry, but the Website is not available without javascript') {
                Client.renderResult(data);
            } else {
                Client.renderError(data.message ? data.message : "No information found. Please try with another url or text.");
            }
            document.getElementById('loadingModal').style.display = 'none';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function resetResponse() {
    document.getElementById('resultsBox').style.display = 'none';
    document.getElementById('errorBox').style.display = 'none';
    document.getElementById('results').innerHTML = '';
    document.getElementById('error').innerHTML = '';
}

export {handleSubmit}
