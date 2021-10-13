const { TestWatcher } = require("@jest/core");
const Intern = require("../lib/Intern");


let intern = new Intern("testEmployee","12345", "testEmail@email.com","testSchool");
test("intern.getRole() should return the role that is a value of the Intern class", () => {
    expect(intern.getRole()).toBe("Intern");
});
test("intern.getId() should return the ID that is passed to the Intern class", () => {
    expect(intern.getId()).toBe("12345");
});
test("intern.getName() should return the name that is passed to the Intern class", () => {
    expect(intern.getName()).toBe("testEmployee");
});
test("intern.getEmail() should return the email address that is passed to the Intern class", () => {
    expect(intern.getEmail()).toBe("testEmail@email.com");
});
test("intern.getSchool() should return the school name that is passed to the Intern class", () => {
    expect(intern.getSchool()).toBe("testSchool");
});