const inquirer = require('inquirer');
const dbConnect = require('./dbConnect');

const updateEmployeeRole = async () => {
    const navigate = require('./navigate');
    const db = await dbConnect();
   
    const [employeeTable] = await db.query('SELECT * FROM employee');

    const possibleEmployees=[];

    for(let i=0; i<roleTable.length; i++) {
        possibleEmployees.push(employeeTable[i].last_name)
    }

    const [roleTable] = await db.query('SELECT * FROM role');
    const possibleRoles =[];

    for(let i=0; i<roleTable.length; i++) {
        possibleRoles.push(roleTable[i].title)
    }
   
    // Questions for updating employee role
    const updateEmployeeRoleQuest = [
        {
            type: 'list',
            name: 'roleUpdate',
            message: "Which employee's role do you want to update?",
            choices: possibleEmployees
        },
        {
            type: 'list',
            message: "Which role do you want to assign the selected employee?",
            name: 'newRole',
            choices: possibleRoles,
        },
    ];
    inquirer.prompt(updateEmployeeRoleQuest).then((answers) => {
        const sql ='UPDATE employee SET role_id = ? WHERE last_name = ?'
        const values = [answers.newRole, answers.roleUpdate]
        console.log(values);
        // db.query(sql, values);
        console.log(`Added ${answers.roleName} to the database`);
        navigate()
    });
}

module.exports = updateEmployeeRole