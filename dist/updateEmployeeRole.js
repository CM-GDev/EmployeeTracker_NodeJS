

// Questions for updating employee role
const updateEmployeeRoleQuest = [
    {
        type: 'list',
        name: 'roleUpdate',
        message: "Which employee's role do you want to update?",
        choices: []
    },
    {
        type: 'list',
        message: "Which role do you want to assign the selected employee?",
        name: 'newRole',
        choices: [],
    },
    {// Creating a list input type for user to navigate application
        type: 'list',
        message: 'What would you like to do?',
        name: 'optSelected',
        choices: ['View all Departments', 'View all Roles','View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Quit'],
    },
 ];