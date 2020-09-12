function renderResult(data) {
    const entities = data.entities;
    const test = data.text;
    const resultsBox = document.getElementById('resultsBox');
    const resultsElem = document.getElementById('results');
    let templateEntityStr = ``;
    for (let entityKey in entities) {
        const newEntity = `<div class="entity box">
                                <div id="${entityKey}" class="entityKey">
                                    ${uppercaseFirst(entityKey)}
                                </div>
                                <div id="${entityKey}_items" class="entityItems">
                                    ${renderEntityItems(entityKey, entities[entityKey])}
                                </div>
                            </div>`;
        templateEntityStr = `${templateEntityStr}${newEntity}`;
    }
    resultsElem.insertAdjacentHTML("afterbegin", templateEntityStr);
    resultsBox.style.display = 'block';
}

function renderEntityItems(entityKey, entityItems) {
    let templateEntityItemsStr = '';
    for (let entityItem in entityItems) {
        const newEntityItem = `<span id="${entityKey}_${entityItem}" class="entityItem">${entityItems[entityItem]}</span>`;
        templateEntityItemsStr = `${templateEntityItemsStr}${newEntityItem}, `;
    }
    return templateEntityItemsStr.substring(0, templateEntityItemsStr.length - 2);
}

function uppercaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {uppercaseFirst}
export {renderResult}
