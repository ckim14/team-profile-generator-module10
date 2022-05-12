// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const createSite = require("./src/htmltemplate.js");
const { resolve } = require("path");
const { response } = require("express");
const members = [];

//add manager - first person to be added to the team
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
      members.push({ type: "manager", ...answers });
      buildTeam();
    });
};

//add more team members or write html
const buildTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "add",
        message: "Would you like to add a team member?",
        choices: ["No", "Add Engineer", "Add Intern"],
      },
    ])
    .then((response) => {
      if (response.add == "Add Engineer") {
        addEngineer();
      } else if (response.add === "Add Intern") {
        addIntern();
      } else {
        writeToFile();
      }
    });
};

//add engineer
const addEngineer = () => {
  return inquirer
    .prompt([
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
    ])
    .then((answers) => {
      console.log(answers);
      members.push({ type: "engineer", ...answers });
      buildTeam();
    });
};

//add intern
const addIntern = () => {
  return inquirer
    .prompt([
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
    ])
    .then((answers) => {
      console.log(answers);
      members.push({ type: "intern", ...answers });
      buildTeam();
    });
};

//Create a function to write html file
const writeToFile = () => {
  console.log("we here");
  fs.writeFile("./dist/index.html", createSite(members), "utf-8");
};

// Function call to initialize app by first adding manager
addManager();
