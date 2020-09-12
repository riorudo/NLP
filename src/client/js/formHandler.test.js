const formHandler = require('./formHandler');

test('Check if online', () => {
    expect(formHandler.isOnline()).toBe(true);
});
