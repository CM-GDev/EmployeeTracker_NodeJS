const cTable = require('console.table');
const dbConnect = require('./dbConnect');

const viewAllRoles = async () => {
    const navigate = require('./navigate');
    const db = await dbConnect()
 
    const [roleTable] = await db.query('SELECT * FROM role')
    
    const table = cTable.getTable(roleTable);
    console.log(table);
    navigate();
}

module.exports = viewAllRoles