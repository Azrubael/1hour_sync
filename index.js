/*  Запуск простого HTTP сервера без применения библиотеки Express, Koa,
    Hapi или какого-то фреймворка.
    Как видно, требуется автоматизировать достаточно больщой объем работы,
    который становится тем значительнее, чем сожнее структура сервера SPA
    (Single Page Application)
*/

const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const ttt = require('./data.js')
const http = require('http')
const PORT = process.env.PORT || 9001

// Немного поигрался с цветным выводом в консоль
console.log(chalk.blue('Hello NodeJS'))
console.log(chalk.green(ttt))
console.log(chalk.red(__dirname))
console.log(chalk.magenta(__filename))


// Теперь создаются сервера 'http'
const server = http.createServer((req, res) => {

/* Простейшее отображение двустраниц, см. первый коммит
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
    } */

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error 500')
                } else {
                    res.writeHead(200, { 'Content-Type': contentType })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content)
        }
    })

/*     это завершение требуется только для первого коммита
    res.end()  */

    // вывод в консоль путей, после загрузки домашней страницы
    console.log(req.url)
    // метода 'end' завершает ответ сервера и передает ему какое-то соощение
    
})

server.listen(PORT, () => {
    console.log(`Через порт ${PORT} запущен сервер...`)
})