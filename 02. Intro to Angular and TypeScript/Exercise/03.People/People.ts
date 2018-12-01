import { Junior, Senior, Manager } from './Employees';

let george = new Junior('George', 22);
let jivko = new Senior('Jivko', 32);
let pesho = new Manager('Pesho', 34);

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