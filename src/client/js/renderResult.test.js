const renderResult = require('./renderResult');

test('First letter to uppercase', () => {
    expect(renderResult.uppercaseFirst('lowercase')).toBe('Lowercase');
});
