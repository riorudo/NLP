function renderEntities(entities) {
    const errorElem = document.getElementById('error');
    const resultsElem = document.getElementById('results');
    let templateEntityStr = '';
    for (let entityKey in entities) {
        const newEntity = `<div class="entity box">
                                <div id="${entityKey}" class="entityKey">
                                    ${jsUcfirst(entityKey)}
                                </div>
                                <div id="${entityKey}_items" class="entityItems">
                                    ${renderEntityItems(entityKey, entities[entityKey])}
                                </div>
                            </div>`;
        templateEntityStr = `${templateEntityStr}${newEntity}`;
    }
    // for (let i = 0; i < Object.keys(entities).length; i++) {
    //     const newSection = `<section id="section${i + 1}" data-nav="Section ${i + 1}">
    //                             <div class="landing__container">
    //                                 <h2>Section ${i + 1}</h2>
    //                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    //                                 <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    //                             </div>
    //                         </section>`;
    //     templateElemStr = `${templateElemStr}${newSection}`;
    // }
    resultsElem.insertAdjacentHTML("afterbegin", templateEntityStr);
}

function renderEntityItems(entityKey, entityItems) {
    let templateEntityItemsStr = '';
    for (let entityItem in entityItems) {
        const newEntityItem = `<span id="${entityKey}_${entityItem}" class="entityItem">${entityItems[entityItem]}</span>`;
        templateEntityItemsStr = `${templateEntityItemsStr}${newEntityItem}, `;
    }
    return templateEntityItemsStr.substring(0, templateEntityItemsStr.length - 2);
}


function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {renderEntities}
