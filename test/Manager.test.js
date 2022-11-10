const Manager = require('../lib/Manager');

test('Can get name via function', () => {
    let sample = new Manager('Kai', 1, 'test@jest.org')
    expect(sample.getName()).toBe('Kai')
})
test('Can get ID via function', () => {
    let sample = new Manager('Kai', 1, 'test@jest.org')
    expect(sample.getId()).toBe(1)
})
test('Can get email via function', () => {
    let sample = new Manager('Kai', 1, 'test@jest.org')
    expect(sample.getEmail()).toBe('test@jest.org')
})
test('Can get Github via function', () => {
    let sample = new Manager('Kai', 1, 'test@jest.org', 123)
    expect(sample.getOfficeNumber()).toBe(123)
})