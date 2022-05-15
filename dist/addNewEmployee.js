// Questions for adding a new employee
const addEmployeeQuest = [
    {
        type: 'input',
        name: 'firstName',
        message: "What's the employee's first name?",
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What's the employee's last name?",
    },
    {
        type: 'list',
        message: "What's the employee's role?",
        name: 'role',
        choices: [],
    },
    {
        type: 'list',
        message: "Who is the employee's manager",
        name: 'manager',
        choices: [],
    },
    {// Creating a list input type for user to navigate application
        type: 'list',
        message: 'What would you like to do?',
        name: 'optSelected',
        choices: ['View all Departments', 'View all Roles','View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Quit'],
    },
 ];
