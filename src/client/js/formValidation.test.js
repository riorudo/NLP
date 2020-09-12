const validation = require('./formValidation');

test('Form validation', () => {
    expect(validation.formValidation('www.example.com')).toBe(true);
});

test('Url pattern validation', () => {
    expect(validation.urlValidation('.example.com')).toBe(false);
});
