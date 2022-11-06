//File system
const fs = require('node:fs')
const path = require('node:path')
const dd = 'testDir'

fs.mkdir(path.join(__dirname, dd), (err) => {
    const ls = __dirname + '\\' + dd
    fs.access(ls, err => {
        console.log(`Папка ${err ? 'уже существует' : 'не существует'}`)
    })
/*     if (err) {
        throw err 
    }  */
    console.log(`Папка ${ls} создана`)
})

const filePath = path.join(__dirname, dd, 'newTextFile.txt')

fs.writeFile(filePath, "NodeJS has been created a new file!", err => {
    if (err) {
        throw err
    }
    console.log('Новый файл создан')
    fs.appendFile(filePath, "\nNodeJS has been appended in the new file!", err => {
        if (err) {
            throw err
        }
        console.log('В файл добавлена новая строка')
        // чтение из файла в буфер, преобразование в строку и вывод в консоль
        fs.readFile(filePath, (err, content) => {
            if (err) {
                throw err
            }
            const data = Buffer.from(content)
            console.log("\nСодержание записанного в файл: \n", data.toString())
        })
        // чтение из файла и конвертация в кодировку utf-8 на лету
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if (err) {
                throw err
            }
            const data = Buffer.from(content)
            console.log("\nПовторное чтение записанного в файл:\n", data.toString())
        })     
    })
})




