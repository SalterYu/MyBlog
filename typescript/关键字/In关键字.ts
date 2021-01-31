interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges"in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate"in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}
