"use strict";
exports.__esModule = true;
var Employees_1 = require("./Employees");
var george = new Employees_1.Junior('George', 22);
var jivko = new Employees_1.Senior('Jivko', 32);
var pesho = new Employees_1.Manager('Pesho', 34);
george.work();
george.work();
jivko.work();
jivko.work();
jivko.work();
jivko.work();
pesho.work();
pesho.work();
pesho.work();
george.setSalary(2000);
pesho.setSalary(8000);
pesho.dividend = 1000;
george.collectSalary();
pesho.collectSalary();