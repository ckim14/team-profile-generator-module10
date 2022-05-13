const Intern = require("../lib/intern");
const intern = new Intern(
  "Will Smith",
  "3",
  "willsmith@yahoo.com",
  "Rutgers University"
);

test("test if we can get the correct values for each field", () => {
  expect(intern.name).toBe("Will Smith");
  expect(intern.id).toBe("3");
  expect(intern.email).toBe("willsmith@yahoo.com");
  expect(intern.school).toBe("Rutgers University");
});

test("test if we can get the name from getName()", () => {
  expect(intern.getName()).toBe("Will Smith");
});

test("test if we can get the id from getId()", () => {
  expect(intern.getId()).toBe("3");
});

test("test if we can get the email from getEmail()", () => {
  expect(intern.getEmail()).toBe("willsmith@yahoo.com");
});

test("test if we can get the school name from getSchool()", () => {
  expect(intern.getGitHub()).toBe("Rutgers University");
});

test("test if we can get the role from the getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
