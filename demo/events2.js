const EventEmitter= require('events')

const emitter = new EventEmitter()

// Пример наследования собственным классом при обработке событий
class Dispatcher extends EventEmitter {
    subscribe(eventName, callback) {
        console.log('[Подписывание на событие...]')
        //this.on - нужны для того, чтобы подписаться на какое-либо событие
        //метод 'on' наследуется от EventEmitter
        this.on(eventName, callback)
    }

    dispatch(eventName, data) {
        console.log('[Отправка события...]')
        //this.emit - нужны для того, чтобы подписаться на какое-либо событие
        //метод 'emit' наследуется от EventEmitter
        this.emit(eventName, data)
    }
}

// Создание экземпляра класса 'Dispatcher', которы наследует 'EventEmitter'
const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log('ON aa: ', data)
})

// Порядок 'dispatch' и 'subscribe' важен
setTimeout( () => {
    dis.dispatch('aa', {aa: 39})
}, 1000)
