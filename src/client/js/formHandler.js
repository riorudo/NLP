function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value
    let formText = document.getElementById('text').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    const url = 'http://localhost:8081/sentiment';
    // fetch('http://localhost:8081/sentiment')
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementById('results').innerHTML = res.message
    //     })
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
            if (data && data.entities && Object.keys(data.entities).length > 0) {
                Client.renderEntities(data.entities);
            } else {
                document.getElementById('error').innerHTML = 'No information found. Please try with another url or test.';
            }
            document.getElementById('loadingModal').style.display = 'none';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export {handleSubmit}
