abstract class Employee {
  name: string;
  age: number;
  salary: number;
  tasks: Array<string>;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = [];
  }

  work(): void {
    let currentTask: string = this.tasks.shift();
    console.log(this.name + currentTask);
    this.tasks.push(currentTask);
  }

  getSalary(): number {
    return this.salary;
  }

  setSalary(value: number): void {
    this.salary = value;
  }

  collectSalary(): void {
    console.log(`${this.name} recieved ${this.getSalary()} this month.`);
  }
}

class Junior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(' is working on a simple task.');
  }
}

class Senior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(' is working on a complicated task.');
    this.tasks.push(' is taking time off work.');
    this.tasks.push(' is supervising junior workers.');
  }
}

class Manager extends Employee {
  dividend: number;

  constructor(name: string, age: number) {
    super(name, age);
    this.dividend = 0;
    this.tasks.push(' scheduled a meeting.');
    this.tasks.push(' is preparing a quarterly meeting.');
  }

  getSalary(): number {
    return this.salary + this.dividend;
  }
}

export { Junior, Senior, Manager };