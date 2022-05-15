// Questions for adding a new role
const addRoleQuest = [
    {
        type: 'input',
        name: 'roleName',
        message: "What's the name of the role?",
    },
    {
        type: 'input',
        name: 'salary',
        message: "What is the salary of the role?",
    },
    {
        type: 'list',
        message: "Which department does the role belong to?",
        name: 'department',
        choices: [],
    },
    {// Creating a list input type for user to navigate application
        type: 'list',
        message: 'What would you like to do?',
        name: 'optSelected',
        choices: ['View all Departments', 'View all Roles','View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Quit'],
    },
 ];
