const Manager = require("../lib/Manager");
const manager = new Manager("chika", "1", "chikakim@gmail.com", "123");

test("test if we can get the constructor values for the manager object", () => {
  expect(manager.name).toBe("chika");
  expect(manager.id).toBe("1");
  expect(manager.email).toBe("chikakim@gmail.com");
  expect(manager.officeNumber).toBe("123");
});

test("test if we can get the name from getName()", () => {
  expect(manager.getName()).toBe("chika");
});

test("test if we can get the id from getId()", () => {
  expect(manager.getId()).toBe("1");
});

test("test if we can get the email from getEmail()", () => {
  expect(manager.getEmail()).toBe("chikakim@gmail.com");
});

test("test if we can get the office number from getOfficeNumber() ", () => {
  expect(manager.getOfficeNumber()).toBe("123");
});

test("test if we can get the role from the getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
