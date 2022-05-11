// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { resolve } = require("path");
const members = [];

// TODO: Create an array of questions for team input

//ask their role type
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name? (required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID? (required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your employee's ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address? (required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "What is your office number? (required)",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(answers);
      members.push(manager);
      buildTeam();
    });
};

const buildTeam = () => {
  return inquirer
    .prompt([
      {
        type: "checkbox",
        name: "add",
        message: "Would you like to add a team member?",
        choices: ["No", "Add Engineer", "Add Intern"],
        validate: (addInput) => {
          console.log(input);
          return input.length != 1 ? "You must choose an option." : true;
        },
      },
    ])
    .then((answers) => {
      if (answers == "Add Engineer") {
        addEngineer();
      } else if (answers == "Add Intern") {
        addIntern();
      } else {
        writeToFile();
      }
    });
  console.log("we are here 1");
};

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name? (required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is their employee ID? (required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter their employee's ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address? (required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter their email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username? (required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter their GitHub username.");
          return false;
        }
      },
    },
  ]);
};
const addIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name? (required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is their employee ID? (required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter their employee's ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address? (required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter their email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Please provide the school they are attending.",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please provide the school they are attending.");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("You can now see your README file.");
//   });
// }

// TODO: Create a function to initialize app
function init() {
  addManager().then(function (userInput) {
    console.log("we are here 2");
  });
}

// Function call to initialize app
init();
