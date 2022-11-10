const Employee = require('../lib/Employee');

test('Can get name via function', () => {
    let sample = new Employee('Kai', 1, 'test@jest.org')
    expect(sample.getName()).toBe('Kai')
})
test('Can get ID via function', () => {
    let sample = new Employee('Kai', 1, 'test@jest.org')
    expect(sample.getId()).toBe(1)
})
test('Can get email via function', () => {
    let sample = new Employee('Kai', 1, 'test@jest.org')
    expect(sample.getEmail()).toBe('test@jest.org')
})
