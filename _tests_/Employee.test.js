const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee');

let employee = new Employee("testEmployee","12345", "testEmail@email.com", "testRole");
test("employee.getRole() should return role argument passed to Employee class", () => {
    expect(employee.getRole()).toBe("testRole");
});
test("employee.getName() should return name argument passed to Employee class", () => {
    expect(employee.getName()).toBe("testEmployee");
});
test("employee.getId() should return the ID passed to Employee class", () => {
    expect(employee.getId()).toBe("12345");
});
test("employee.getEmail() should return the email passed to Employee class", () => {
    expect(employee.getEmail()).toBe("testEmail@email.com");
});
