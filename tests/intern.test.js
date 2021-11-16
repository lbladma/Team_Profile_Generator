const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');


test('this checks if the intern object is created', () => {
    const intern = new Intern('test', 1, 'test123@gmail.com', 'UNC');

    expect(intern.school).toEqual(expect.any(String));
});


test('this checks for interns school', () => {
    const intern = new Intern('test', 1, 'test123@gmail.com', 'UNC');

    expect(intern.getSchool()).toEqual(expect.any(String));
});


test('checks for the role of interns', () => {
    const intern = new Intern('test', 1, 'test123@gmail.com', 'UNC');

    expect(intern.getRole()).toEqual("Intern");
});