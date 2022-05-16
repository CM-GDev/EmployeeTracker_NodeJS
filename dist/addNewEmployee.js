const inquirer = require('inquirer');
const dbConnect = require('./dbConnect');

const addNewEmployee = async () => {
    const navigate = require('./navigate');
    const db = await dbConnect();
    
    const [roleTable] = await db.query('SELECT * FROM role');
    const [employeeTable] = await db.query('SELECT * FROM employee');
    
    const possibleRoles=[];

    for(let i=0; i<roleTable.length; i++) {
        possibleRoles.push(roleTable[i].title)
    }
    // console.log(possibleRoles)
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
            choices: possibleRoles,
        },
        {
            type: 'list',
            message: "Who is the employee's manager",
            name: 'manager',
            choices: [],
        },
    ];

    inquirer.prompt(addEmployeeQuest).then((answers) => {
        const sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)"
        const values = [answers.firstName, answers.lastName, answers.role, answers.manager];
        console.log(values);
        db.query(sql, values,(err, result) => {
            if (err) {
                throw err;
            } else{
                console.log(`Added ${answers.firstName} ${answers.lastName}to the database`);
                navigate() 
            }
        });   
    });
}

module.exports = addNewEmployee