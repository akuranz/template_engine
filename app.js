const fs = require("fs");
// const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "Please build your team",
    name: "username"
  },
  {
    type: "input",
    message: "What is your manager's name?",
    name: "managerName"
  },
  {
    type: "input",
    message: "What is your manager's id?",
    name: "managerId" //add error handling for repeat ids
  },
  {
    type: "input",
    message: "What is your manager's email?",
    name: "managerEmail"
  },
  {
    type: "input",
    message: "What is your manager's office number?",
    name: "managerOffice"
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "employeeType",
    choices: ["Engineer", "Intern", "I don't want to add anymore employees"]
  }
]);
