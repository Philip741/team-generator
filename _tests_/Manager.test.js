const { TestWatcher } = require("@jest/core");
const Manager = require("../lib/Manager");


let manager = new Manager("testEmployee","12345", "testEmail@email.com","9995551212");
test("manager.getRole() should return the role that is a value of the manager class", () => {
    expect(manager.getRole()).toBe("Manager");
});
test("manager.getId() should return the ID that is passed to the manager class", () => {
    expect(manager.getId()).toBe("12345");
});
test("manager.getName() should return the name that is passed to the manager class", () => {
    expect(manager.getName()).toBe("testEmployee");
});
test("manager.getEmail() should return the email address that is passed to the manager class", () => {
    expect(manager.getEmail()).toBe("testEmail@email.com");
});
test("manager.getOfficeNumber() should return the phone number that is passed to the manager class", () => {
    expect(manager.getOfficeNumber()).toBe("9995551212");
});