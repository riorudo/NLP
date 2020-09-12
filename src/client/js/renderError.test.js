const renderError = require('./renderError');

test('Insert error over DOM manipulation', () => {
    document.body.innerHTML = `
    <section id="errorBox" class="box error">
        <div id="error"></div>
    </section>
  `;
    renderError.renderError('error');
    expect(document.getElementById('errorBox').innerHTML.trim()).toBe(`<div id="error"><span>error</span></div>`);
});
