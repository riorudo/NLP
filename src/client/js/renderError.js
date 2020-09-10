function renderError(error) {
    const errorBox = document.getElementById('errorBox');
    const errorElem = document.getElementById('error');
    let templateErrorStr = `<span>${error}</span>`;
    errorElem.insertAdjacentHTML("afterbegin", templateErrorStr);
    errorBox.style.display = 'block';
}

export {renderError}
