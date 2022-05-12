// Establishing external modules/packages required for this code
const inquirer = require('inquirer');
const cTable = require('console.table');
const logo = require('asciiart-logo')

// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const generateInitHTML = require('./dist/generateInitHTML');
// const appendEngineer = require('./dist/appendEngineer');
// const appendIntern = require('./dist/appendIntern');
// const appendEnd = require('./dist/appendEnd')
const fs = require("fs");

// ASCII-art Logo for the Application
console.log(
    logo({
        name: 'Employee Manager',
        font: 'ANSI Shadow',
        lineChars: 8,
        padding: 2,
        margin: 3,
        borderColor: 'blue',
        logoColor: 'bold-blue',
        textColor: 'blue',
    })
    .emptyLine()
    .right('version 1.0.0')
    .render()
);


// Initial questions for Manager's info
const initQuestions = [
    {// A greeting and brief description of the application
        type: "confirm",
        name: "introMssg",
        message: "Welcome to your Employee Tracker application. From here you can view and manage the departments, roles, and employees in your company. Hit enter to begin",
        default: true,
    },
    {// Creating a list input type for user to select additional team members
        type: 'list',
        message: 'What would you like to do?',
        name: 'optSelected',
        choices: ['View all Departments', 'View all Roles','View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
    },
 ];

// Questions about engineer team member
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What's the name of the Engineer?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's the Engineer's email address?",
        // validating correct email address format
        validate(value) {
            const pass = value.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
            if (pass){
                return true;
            }
            return 'Please enter a valid email address'
        },
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What's the Engineer's GitHub username?",
    },
    {//Creating a list input type for user to select additional team members or exit the program
        type: 'list',
        message: 'Would you like to add another team member? Please select an option from the following list',
        name: 'optSelected',
        choices: ['Engineer', 'Intern', 'Done building my team'],
    },
 ];

 // Questions about intern team member
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What's the name of the Intern?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's the Intern's email address?",
        // validating correct email address format
        validate(value) {
            const pass = value.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
            if (pass){
                return true;
            }
            return 'Please enter a valid email address'
        },
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the Intern atteding or has graduated from?",
    },
    {//Creating a list input type for user to select additional team members or exit the program
        type: 'list',
        message: 'Would you like to add another team member? Please select an option from the following list',
        name: 'optSelected',
        choices: ['Engineer','Intern','Done building my team'], 
    },
 ];

 function init() {
   inquirer.prompt(initQuestions).then((answers) => {
    console.log(`Your selection: ${answers.optSelected}`);
       // Creating new Manager(golf) object from Manager Class
        // const golf = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        // Passing Manager's class information to generateInitHTML JS file
        // const initHTMLContent = generateInitHTML(golf);
        // console.log(golf);
        // Code using "fs" to write initial team HTML file
        // fs.writeFile("Team.html", initHTMLContent, (err) =>
        //     err ? console.log(err) : console.log(`Manager information saved!
        //     `));
        // setTimeout(() =>{
        //     //Depending on what option the user selected, the appropriate questions will follow
        //     if (answers.optSelected == 'Engineer') {
        //         engQuests();
        //     } else if (answers.optSelected == 'Intern'){
        //         internQuests();
        //     } else {
        //         fs.appendFile("Team.html", appendEnd, (err) =>
        //         err ? console.log(err) : console.log('Your Team Profile Page is Complete!'));
        //     }
        // }, 1000);
    });
 };

//  function engQuests() {
//     inquirer.prompt(engineerQuestions).then((answers) => {
//         // Creating new Engineer(compChip)) object from Engineer Class
//         const compChip = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
//         // console.log(compChip);
//         // Passing compChip class information to appendEngineer JS file
//         const appendContent = appendEngineer(compChip);
//         // Code using "fs" to append to Team.html file
//         fs.appendFile("Team.html", appendContent, (err) =>
//             err ? console.log(err) : console.log(`Engineer information saved!
//             `));
//         setTimeout(() =>{
//             //Depending on what option the user selected, the appropriate questions will follow or HTML page is done.
//             if (answers.optSelected == 'Engineer') {
//                 engQuests();
//             } else if (answers.optSelected == 'Intern'){
//                 internQuests();
//             } else {
//                 fs.appendFile("Team.html", appendEnd, (err) =>
//                 err ? console.log(err) : console.log('Your Team Profile Page is Complete!'));
//             }
//         }, 1000);
//     });
//   }

//   function internQuests() {
//     inquirer.prompt(internQuestions).then((answers) => {
//         // Creating new Intern object from Intern Class
//         const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//         // Passing Intern class information to appendIntern JS file
//         const appendContent = appendIntern(intern);
//         // console.log(intern);
//         // Code using "fs" to append to Team.html file
//         fs.appendFile("Team.html", appendContent, (err) =>
//             err ? console.log(err) : console.log(`Intern information saved!
//             `));
//         setTimeout(() =>{
//             //Depending on what option the user selected, the appropriate questions will follow or HTML page is done.
//             if (answers.optSelected == 'Engineer') {
//                 engQuests();
//             } else if (answers.optSelected == 'Intern'){
//                 internQuests();
//             } else {
//                 fs.appendFile("Team.html", appendEnd, (err) =>
//                 err ? console.log(err) : console.log('Your Team Profile Page is Complete!'));
//             }
//         }, 1000);
//     });
//   }
 
 init();