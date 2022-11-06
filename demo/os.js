const os = require('node:os')

console.log('Операционная система: ', os.platform())
console.log('Архитектура процессора: ', os.arch())
console.log('Данные процессоров: ', os.cpus())
console.log('Свободно памяти: ', os.freemem(), ' из ', os.totalmem())
console.log('Домашняя директория: ', os.homedir())
console.log('Длительность текущей работы OS: ', os.uptime(), 'секунд или', os.uptime()/3600, 'часа')