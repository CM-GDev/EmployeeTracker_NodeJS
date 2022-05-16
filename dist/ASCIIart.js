// ASCII-art Logo for the Application
// Establish required package
const logo = require('asciiart-logo');

const ASCIIart = (color) => {
    console.log(
        logo({
            name: 'Employee Manager',
            font: 'ANSI Shadow',
            lineChars: 8,
            padding: 2,
            margin: 3,
            borderColor: `${color}`,
            logoColor: `bold-${color}`,
            textColor: `${color}`,
        })
        .emptyLine()
        .right('version 1.0.0')
        .render()
    );
}
// Exporting module
module.exports = ASCIIart