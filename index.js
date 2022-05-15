// Establishing external modules/packages required for this code
const inquirer = require('inquirer');
const ASCIIart = require('./dist/ASCIIart');
const seedDB = require('./dist/seedDb');


//Start with ASCII art
const color = 'blue'
ASCIIart(color);

// Initial prompt
const initQuestions = [
    {// A greeting and brief description of the application
        type: "confirm",
        name: "introMssg",
        message: "Welcome to your Employee Tracker application. From here you can view and manage the departments, roles, and employees in your company. Hit enter to begin",
        default: true,
    },
 ];

function init() {
    inquirer.prompt(initQuestions).then(() => {
        seedDB();
    });
};

init();
