const inquirer = require('inquirer');
const dbConnect = require('./dbConnect');

const addNewRole = async () => {
    const navigate = require('./navigate');
    const db = await dbConnect();
    
    const [deptTable] = await db.query('SELECT * FROM department');
    // console.log(deptTable)
    // console.log(deptTable[1].name);
    // console.log(deptTable.length)

    const possibleDept=[];

    for(let i=0; i<deptTable.length; i++) {
        possibleDept.push(deptTable[i].name)
    }

    // Questions for adding a new role
    const roleQuest = [
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
            choices: possibleDept,
        }
    ];

    inquirer.prompt(roleQuest).then((answers) => {
        const sql = "INSERT INTO role (title, salary, department_id) VALUES (?)"
        const values = [answers.roleName, answers.salary, answers.department];
        console.log(values);
        // db.query(sql, values);
        console.log(`Added ${answers.roleName} to the database`);
        navigate() 
    });

}

module.exports = addNewRole