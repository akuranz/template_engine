class Employee {
  contructor(name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
  }
  getName() {
    this.email = email;
  }

  getID() {}

  getEmail() {}
}

const e = new Employee("Alice", 100, "Manager");

module.exports = Employee;

// class Shape {
//     // Just like constructor funcnpm tions, classes can accept arguments
//     constructor(area, perimeter) {
//       this.area = area;
//       this.perimeter = perimeter;
//     }

//     printInfo() {
//       console.log(`Area: ${this.area}`);
//       console.log(`Perimeter: ${this.perimeter}`);
//     }
//   }

//   const shape = new Shape(25, 25);

//   shape.printInfo();
