const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Emp = require("./lib");

const idArray = [];
const empArray = [];

start();

function start() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your manager's name?",
          name: "managerName"
        },
        {
          type: "input",
          message: "What is your manager's id?",
          name: "managerId", //add error handling for is NAN
          validate: id => {
            if (idArray.includes(id)) {
              console.log("\nId already Taken");
              return false;
            }
            return true;
          }
        },
        {
          type: "input",
          message: "What is your manager's email?",
          name: "managerEmail",
          validate: inp => inp.includes("@") && inp[inp.length - 4] === "."
        },
        {
          type: "input",
          message: "What is your manager's office number?",
          name: "managerOffice"
        }
      ])
      .then(({ managerName, managerId, managerEmail, managerOffice }) => {
        idArray.push(managerId);
        empArray.push(
          new Emp.Manager(managerName, managerId, managerEmail, managerOffice)
        );
        console.log(empArray);
        chooseEmpType();
      });
  }

  function chooseEmpType() {
    inquirer
      .prompt({
        name: "type",
        message: "What type of Employee would you like to create?",
        type: "list",
        choices: ["Engineer", "Intern", "I don't want to add anymore employees"]
      })
      .then(({ type }) => {
        switch (type) {
          case "Engineer":
            return createEngineer();
          case "Intern":
            return createIntern();
          case "I don't want to add anymore employees":
            return buildTemplate();
        }
      });
  }
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your engineer's name?",
          name: "engineerName"
        },
        {
          type: "input",
          message: "What is your engineer's id?",
          name: "engineerId", //add error handling for repeat ids
          validate: id => {
            if (idArray.includes(id)) {
              console.log("\nId already Taken");
              return false;
            }
            return true;
          }
        },
        {
          // test@gmail.com
          type: "input",
          message: "What is your engineer's email?",
          name: "engineerEmail",
          validate: inp => {
            if (inp.includes("@") && inp[inp.length - 4] === ".") {
              return true;
            } else if (!inp.includes("@")) {
              console.log('\n Must have "@" symbol!');
              return false;
            } else if (inp[inp.length - 4] !== ".") {
              console.log("\n Must end in .com || .edu ||.org || etc");
              return false;
            }
          }
        },
        {
          type: "input",
          message: "What is your engineer's GitHub username?",
          name: "engineerUsername"
        }
      ])
      .then(({ engineerName, engineerId, engineerEmail, engineerUsername }) => {
        idArray.push(engineerId);
        empArray.push(
          new Emp.Engineer(
            engineerName,
            engineerId,
            engineerEmail,
            engineerUsername
          )
        );
        console.log(empArray);
        chooseEmpType();
      });
  }
  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your intern's name?",
          name: "internName"
        },
        {
          type: "input",
          message: "What is your intern's id?",
          name: "internId", //add error handling for repeat ids
          validate: id => {
            if (idArray.includes(id)) {
              console.log("\nId already Taken");
              return false;
            }
            return true;
          }
        },
        {
          // test@gmail.com
          type: "input",
          message: "What is your intern's email?",
          name: "engineerEmail",
          validate: inp => {
            if (inp.includes("@") && inp[inp.length - 4] === ".") {
              return true;
            } else if (!inp.includes("@")) {
              console.log('\n Must have "@" symbol!');
              return false;
            } else if (inp[inp.length - 4] !== ".") {
              console.log("\n Must end in .com || .edu ||.org || etc");
              return false;
            }
          }
        },
        {
          type: "input",
          message: "What is your intern's school?",
          name: "internSchool"
        }
      ])
      .then(({ internName, internId, internEmail, internSchool }) => {
        idArray.push(internId);
        empArray.push(
          new Emp.Intern(internName, internId, internEmail, internSchool)
        );
        console.log(empArray);
        chooseEmpType();
      });
  }
  function buildTemplate() {
    function writeToFile(fileName, data) {}
  }

  createManager();
}

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");
