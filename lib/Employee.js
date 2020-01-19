class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = "Employee";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.title;
  }
}

const employee = new Employee("Alice", 100, "test@test.com");

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee;
