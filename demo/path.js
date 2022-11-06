const path = require('node:path')
const chalk = require('chalk')

console.log('Название файла: ', path.basename(__filename))
console.log('Имя директории: ', path.dirname(__filename))
console.log('Расширение файла: ', path.extname(__filename))
console.log('Parse: ', path.parse(__filename))
console.log(chalk.magenta('Parse: ', path.parse(__filename).dir))
console.log(chalk.red(path.join(__dirname, 'server', 'index.js')))