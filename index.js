const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const ttt = require('./data.js')
const http = require('http')
const PORT = 9001

console.log(chalk.blue('Hello NodeJS'))
console.log(chalk.green(ttt))
console.log(chalk.red(__dirname))
console.log(chalk.magenta(__filename))

// Немного поигрался с цветным выводом в консоль
// Теперь создаются сервера 'http'
const server = http.createServer((req, res) => {
    // Ответ сервера о том, что все Ок
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) { throw err }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
        })
    }
    if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if (err) { throw err }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
        })
    }

    // вывод в консоль путей, после загрузки домашней страницы
    console.log(req.url)
    // метода 'end' завершает ответ сервера и передает ему какое-то соощение
    
})

server.listen(PORT, () => {
    console.log(`На ${PORT} запущен сервер...`)
})