const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.title = "Engineer";
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.title;
  }
}

const engineer = new Engineer(
  "Alice",
  100,
  "Manager",
  "test@test.com",
  "akuranz"
);
console.log(engineer.github);

module.exports = Engineer;
