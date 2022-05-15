const inquirer = require('inquirer');
const dbConnect = require('./dbConnect');

const addNewDepartment = async () => {
    const navigate = require('./navigate');
    const db = await dbConnect()

    // Question for adding new department
    const newDeptNameQuest = [{
            type: 'input',
            name: 'name',
            message: "What's the name of the Department?",
        }];

    inquirer.prompt(newDeptNameQuest).then((answers) => {
        const sql = "INSERT INTO department (name) VALUES (?)"
        const newDept = answers.name;
        // console.log(newDept);
        db.query(sql, newDept);
        console.log(`Added ${answers.name} to the database`);
        navigate() 
    })
    
}

module.exports = addNewDepartment