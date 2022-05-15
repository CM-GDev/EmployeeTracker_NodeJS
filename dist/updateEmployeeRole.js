const inquirer = require('inquirer');
const dbConnect = require('./dbConnect');

const updateEmployeeRole = async () => {
    const navigate = require('./navigate');
    const db = await dbConnect();
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
    ];
    inquirer.prompt(updateEmployeeRoleQuest).then((answers) => {
        const sql ='UPDATE reviews SET review = ? WHERE id = ?'
        const values = [answers.newRole, answers.roleUpdate]
        console.log(values);
        // db.query(sql, values);
        console.log(`Added ${answers.roleName} to the database`);
        navigate()
    });
}

module.exports = updateEmployeeRole