const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');


test('this checks the manager object', () => {
    const manager = new Manager('test', 1, 'test123@gmail.com', 2)

    expect(manager.officeNum).toEqual(expect.any(Number));
});


test('this checks for the managers office number', () => {
    const manager = new Manager('test', 1, 'test123@gmail.com', 2)

    expect(manager.getRole()).toEqual("Manager");
});
