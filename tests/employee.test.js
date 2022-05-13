const Employee = require("../lib/Employee");
const employee = new Employee("chika", "1", "chikakim@gmail.com");

test("test if we can get the correct values for each field", () => {
  expect(employee.name).toBe("chika");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("chikakim@gmail.com");
});

test("test if we can get the name from getName()", () => {
  expect(employee.getName()).toBe("chika");
});

test("test if we can get the id from getId()", () => {
  expect(employee.getId()).toBe("1");
});

test("test if we can get the email from getEmail()", () => {
  expect(employee.getEmail()).toBe("chikakim@gmail.com");
});

test("test if we can get the role from the getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
