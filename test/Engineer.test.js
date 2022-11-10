const Engineer = require('../lib/Engineer');

test('Can get name via function', () => {
    let sample = new Engineer('Kai', 1, 'test@jest.org')
    expect(sample.getName()).toBe('Kai')
})
test('Can get ID via function', () => {
    let sample = new Engineer('Kai', 1, 'test@jest.org')
    expect(sample.getId()).toBe(1)
})
test('Can get email via function', () => {
    let sample = new Engineer('Kai', 1, 'test@jest.org')
    expect(sample.getEmail()).toBe('test@jest.org')
})
test('Can get Github via function', () => {
    let sample = new Engineer('Kai', 1, 'test@jest.org', 'github')
    expect(sample.getGithub()).toBe('github')
})
