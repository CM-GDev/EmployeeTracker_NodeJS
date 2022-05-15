const cTable = require('console.table');
const dbConnect = require('./dbConnect');

const addNewDepartment = () => {
// Questions for adding new department
const addDepartmentQuest = [
    {
        type: 'input',
        name: 'name',
        message: "What's the name of the Department?",
    },
    {// Creating a list input type for user to navigate application
        type: 'list',
        message: 'What would you like to do?',
        name: 'optSelected',
        choices: ['View all Departments', 'View all Roles','View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Quit'],
    },
 ];
}

module.exports = addNewDepartment