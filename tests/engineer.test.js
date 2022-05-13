const Engineer = require("../lib/engineer");
const engineer = new Engineer(
  "Steve Wozniak",
  "2",
  "stevewozniak@yahoo.com",
  "ckim14"
);

test("test if we can get the correct values for each field", () => {
  expect(engineer.name).toBe("Steve Wozniak");
  expect(engineer.id).toBe("2");
  expect(engineer.email).toBe("stevewozniak@yahoo.com");
  expect(engineer.github).toBe("ckim14");
});

test("test if we can get the name from getName()", () => {
  expect(engineer.getName()).toBe("Steve Wozniak");
});

test("test if we can get the id from getId()", () => {
  expect(engineer.getId()).toBe("2");
});

test("test if we can get the email from getEmail()", () => {
  expect(engineer.getEmail()).toBe("stevewozniak@yahoo.com");
});

test("test if we can get the github username from getGithub()", () => {
  expect(engineer.getGitHub()).toBe("ckim14");
});

test("test if we can get the role from the getRole() method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
