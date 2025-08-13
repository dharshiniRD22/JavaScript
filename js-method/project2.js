//employee constructor function
function Employee(id, name, department, salary ){
    this.id = id;
     this.name = name;
     this.department = department;
     this.salary = salary;
}

//create a simple employee Database (object)
const employeeDB = {};
// function to add employee to the database
function addEmployee(id, name, department, salary) {
    const Employee = new Employee(id, name, department, salary);
    employeeDB[id] = newEmployee;
    console.log("employee with ID"+ id+ "added")
}
//function to get all employees(object.values)
function GetAllEmployees(){
    const employees = Object.values(employeeDB);
    console.log("List of Eployees");
    employees.forEach((employee) =>{
        console.log(`${employee.name}, Department: ${employee.department}, Salary: ${employee.salary}`);
    })
}

 //function to get employee details by ID(onject.enteries)

  function getEmployeeDetails(id){
    if(employeeDB[id]){
        return Object.enteries(employeeDB[id])
    }
    return `Employee with ID ${id} is not found`;

  }

  // function to update employee details 

   function updateEmployee(id, updateDetails){
    if(employeeDB[id]){
        Object.assign(employeeDB[id], updateDetails)
    }
    else{
        console.log(`Employee with ID ${id} is not found`)
    }
   }

   //  function  freeze employee data 
   function freezeEmployee(id){
    if(employeeDB[id]){
        Object.freeze(employeeDB[id])
        console.log("Employee data freezed")
    }
    else{
        console.log(`Employee with ID ${id} is not found`)
    }
   }

   //function to seal employee data
    function freezeEmployee(id){
        if(employeeDB[id]){
            Object.seal(employeeDB[id])
            console.log("Employee data sealed")
        }
        else{
            console.log(`Employee with ID ${id} is not found`)
        }
    }

    // usage

    addEmployee(1, "alice", "engineering", 70000 )
    addEmployee(2, "bob", "marketing", 50000 )
    addEmployee(3, "charlie", "HR", 60000 )

    // view employees
     GetAllEmployees();

     // get employee details with Id
      console.log(getEmployeeDetails(2))