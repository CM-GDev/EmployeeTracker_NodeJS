// Establish required packages and modules 
const cTable = require('console.table');
const dbConnect = require('./dbConnect');

// Function for viewing all employees
const viewAllEmployees = async () => {
    // Establish navigate function for later use
    const navigate = require('./navigate');
    // Connect to database
    const db = await dbConnect()

    // db.query for joining employee table with role table and extracting to const [employeeTable]
    const [employeeTable] = await db.query(`SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id as manager, role.title, role.salary, department.name as department
    FROM employee, role, department
    WHERE role.department_id = department.id
    AND employee.role_id = role.id`)
    // AND employee.manager_id = employee.id`)
    
    // passing db.query table to cTable for formatting before console logging
    const table = cTable.getTable(employeeTable);
    console.log(table);
    // Run navigate function
    navigate();
}

// Export module
module.exports = viewAllEmployees