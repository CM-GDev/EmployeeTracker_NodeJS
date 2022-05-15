const cTable = require('console.table');
const dbConnect = require('./dbConnect');

const viewAllDepts = async () => {
    const navigate = require('./navigate');
    const db = await dbConnect()

    const [deptTable] = await db.query('SELECT * FROM department')
   
    const table = cTable.getTable(deptTable);
    console.log(table);
    navigate(); 
}

module.exports = viewAllDepts