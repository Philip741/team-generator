const { TestWatcher } = require("@jest/core");
const Engineer = require("../lib/Engineer");

let engineer = new Engineer("testEmployee","12345", "testEmail","testGithub");
test("engineer.getRole() should return the role that is a value of the Engineer class", () => {
    expect(engineer.getRole()).toBe("Engineer");
});
test("engineer.getName() should return the name that is passed the Engineer class", () => {
    expect(engineer.getName()).toBe("testEmployee");
});
test("engineer.getId() should return the ID that is passed the Engineer class", () => {
    expect(engineer.getId()).toBe("12345");
});
test("engineer.getGithub() should return the github username that is passed the Engineer class", () => {
    expect(engineer.getGithub()).toBe("testGithub");
});