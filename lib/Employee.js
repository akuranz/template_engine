class Employee {
  constructor(name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
  }

  getName(name) {
    return this.name;
  }

  getId(id) {
    return this.id;
  }

  getEmail(email) {
    return this.email;
  }

  getRole() {
    return `Employee`;
  }
}

const employee = new Employee("Alice", 100, "Manager", "test@test.com");
console.log(employee.email);

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee;
