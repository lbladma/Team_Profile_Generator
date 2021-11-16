const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');


test('this creates the engineer object', () => {
    const engineer = new Engineer('test', 1, 'test123@gmail.com', 'test123');

    expect(engineer.github).toEqual(expect.any(String));
});


test('checks for engineers github', () => {
    const engineer = new Engineer('test', 1, 'test123@gmail.com', 'test123');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('checks for role of engineer', () => {
    const engineer = new Engineer('test', 1, 'test123@gmail.com', 'test123');

    expect(engineer.getRole()).toEqual("Engineer");
});