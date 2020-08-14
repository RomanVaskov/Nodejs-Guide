export default `
<h3>34. Event Emitter (обработчик событий)</h3>

<p>Если вы работали с JavaScript в браузере, то знаете, что большая часть взаимодействия с пользователем осуществляется через обработку событий: клики мышкой, нажатие клавиш клавиатуры, движение мышки и т.д. 

<p>На стороне сервера Node.js предоставляет нам возможность создания похожей системы с помощью <a href="https://nodejs.org/api/events.html">модуля events</a>. 

<p>Этот модуль, в частности, предоставляет класс <span>EventEmitter</span>, который используется для обработки событий. 

<p>Он инициализируется следующим образом: 

<code>
    const EventEmitter = require('events')
    const eventEmitter = new EventEmitter()
</code>

<p>Этот объект, среди прочего, содержит методы <span>on</span> и <span>emit</span>. 

<ul>
    <li><span>emit</span> используется для регистрации события</li>
    <li><span>on</span> используется для добавления колбека, вызываемого при возникновении события</li>
</ul>

<p>Давайте, например, создадим событие <span>start</span>, при возникновении которого будет выводиться сообщение в консоль: 

<code>
eventEmitter.on('start', () => {
    console.log('started')
})
</code>

<p>При запуске

<code>
    eventEmitter.emit('start')
</code>

<p>запускается обработчик события и сообщение выводится в консоль. 

<p>Вы можете передавать обработчику событий аргументы во втором параметре <span>emit()</span>: 

<code>
eventEmitter.on('start', number => {
    console.log(\`started &#36;{number}\`)
})

eventEmitter.emit('start', 23)
</code>

<p>Несколько аргументов: 

<code>
eventEmitter.on('start', (start, end) => {
    console.log(\`started from &#36;{start} to &#36;{end}\`)
})

eventEmitter.emit('start', 1, 100)
</code>

<p>Объект EventEmitter также содержит другие методы, такие как: 

<ul>
    <li><span>once()</span>: добавляет разовый обработчик</li>
    <li><span>removeListener() / off()</span>: удаляет определенный обработчик</li>
    <li><span>removeAllListeners()</span>: удаляет все обработчики</li>
</ul>
`