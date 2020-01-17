const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, title, email, username) {
    super(name, id, title, email);
    this.username = username;
  }

  getGitHub() {}

  getRole() {
    return `Engineer`;
  }
}

const engineer = new Engineer(
  "Alice",
  100,
  "Manager",
  "test@test.com",
  "akuranz"
);

module.exports = Engineer;
