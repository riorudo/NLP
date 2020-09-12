const validation = require('./formValidation');

test('Form validation', () => {
    expect(validation.formValidation('www.example.com')).toBe(true);
});

test('Url pattern validation', () => {
    expect(validation.urlValid('.example.com')).toBe(false);
});
