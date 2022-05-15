const cTable = require('console.table');
const dbConnect = require('./dbConnect');

const viewAllEmployees = async () => {
    const navigate = require('./navigate');
    const db = await dbConnect()
 
    const [employeeTable] = await db.query('SELECT * FROM employee')
    
    const table = cTable.getTable(employeeTable);
    console.log(table);
    navigate();
}

module.exports = viewAllEmployees