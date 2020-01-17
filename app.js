// const fs = require("fs");
// const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "managerName"
    }
  ])
  .then(function(res) {
    if (res.managerName === "Abby") {
      inquirer.prompt([
        {
          type: "input",
          message: "What is your engineer's name?",
          name: "engineerName"
        }
      ]);
    }
  });
// function startPrompts() {
//   function askQuestions() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           message: "Please build your team",
//           name: "prompt"
//         },
//         {
//           type: "input",
//           message: "What is your manager's name?",
//           name: "managerName"
//         },
//         {
//           type: "input",
//           message: "What is your manager's id?",
//           name: "managerId" //add error handling for repeat ids
//         },
//         {
//           type: "input",
//           message: "What is your manager's email?",
//           name: "managerEmail"
//         },
//         {
//           type: "input",
//           message: "What is your manager's office number?",
//           name: "managerOffice"
//         },
//         {
//           type: "list",
//           message: "Which type of team member would you like to add?",
//           name: "employeeType",
//           choices: [
//             "Engineer",
//             "Intern",
//             "I don't want to add anymore employees"
//           ]
//         }
//       ])
//       .then(res => {
//         if (res.choices === "Engineer" || res.choices === "Intern") {
//           askQuestions();
//         }
//       });
//   }
// }

// ----LONG WAY----
// inquirer.prompt([
//   {
//     type: "input",
//     message: "Please build your team",
//     name: "prompt"
//   },
//   {
//     type: "input",
//     message: "What is your manager's name?",
//     name: "managerName"
//   },
//   {
//     type: "input",
//     message: "What is your manager's id?",
//     name: "managerId" //add error handling for repeat ids
//   },
//   {
//     type: "input",
//     message: "What is your manager's email?",
//     name: "managerEmail"
//   },
//   {
//     type: "input",
//     message: "What is your manager's office number?",
//     name: "managerOffice"
//   },
//   {
//     type: "list",
//     message: "Which type of team member would you like to add?",
//     name: "employeeType",
//     choices: ["Engineer", "Intern", "I don't want to add anymore employees"]
//   },
//   {
//     type: "input",
//     message: "What is your engineer's name?",
//     name: "engineerName",
//     when: answers => answers.employeeType === "Engineer"
//   },
//   {
//     type: "input",
//     message: "What is your engineer's id?",
//     name: "engineerId", //add error handling for repeat ids
//     when: answers => answers.employeeType === "Engineer"
//   },
//   {
//     type: "input",
//     message: "What is your engineer's email?",
//     name: "engineerEmail",
//     when: answers => answers.employeeType === "Engineer"
//   },
//   {
//     type: "input",
//     message: "What is your engineer's GitHub username?",
//     name: "managerOffice",
//     when: answers => answers.employeeType === "Engineer"
//   },
//   {
//     type: "list",
//     message: "Which type of team member would you like to add?",
//     name: "employeeType",
//     choices: ["Engineer", "Intern", "I don't want to add anymore employees"],
//     when: answers => answers.employeeType === "Engineer"
//   },
//   {
//     type: "input",
//     message: "What is your intern's name?",
//     name: "internName",
//     when: answers => answers.employeeType === "Intern"
//   },
//   {
//     type: "input",
//     message: "What is your intern's id?",
//     name: "internId", //add error handling for repeat ids
//     when: answers => answers.employeeType === "Intern"
//   },
//   {
//     type: "input",
//     message: "What is your intern's email?",
//     name: "internEmail",
//     when: answers => answers.employeeType === "Intern"
//   },
//   {
//     type: "input",
//     message: "What is your intern's school?",
//     name: "internSchool",
//     when: answers => answers.employeeType === "Intern"
//   },
//   {
//     type: "list",
//     message: "Which type of team member would you like to add?",
//     name: "employeeType",
//     choices: ["Engineer", "Intern", "I don't want to add anymore employees"],
//     when: answers => answers.employeeType === "Intern"
//   }
// ]);
//   .then(function(res) {
//     console.log(res.employeeType);
//   });
//
