const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');


test('this creates an employee object', () => {
    const employee = new Employee('test', 1, 'test123@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('checks for employee name', () => {
    const employee = new Employee('test', 1, 'test123@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));

});


test('checks for employee ID', () => {
    const employee = new Employee('test', 1, 'test123@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));

});


test('checks for employee email', () => {
    const employee = new Employee('test', 1, 'test123@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


test('gets role of employee', () => {
    const employee = new Employee('test', 1, 'test123@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});