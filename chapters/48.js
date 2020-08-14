export default `
<h3>48. Модуль events</h3>

<p>Модуль <span>events</span> предоставляет класс EventEmitter, предназначенный для обработки событий. 

<code>
const EventEmitter = require('events')
const door = new EventEmitter()
</code>

<p>Обработчик событий сам вызывает два события:

<ul>
    <li><span>newListener</span> - при добавлении обработчика</li>
    <li><span>removeListener</span> - при удалении обработчика</li>
</ul>

<p>Рассмотрим наиболее полезные методы данного модуля: 

<h5>emitter.addListener()</h5>

<p>Является алиасом для <span>emitter.on()</span>. 

<h5>emitter.emit()</h5>

<p>Вызывает событие. При этом последовательно вызываются все зарегистрированные обработчики. 

<code>
door.emit('slam') // вызываем событие 'slam'
</code>

<h5>emitter.eventNames()</h5>

<p>Возвращает массив строк, представляющих собой события, зарегистрированные для текущего объекта <span>EventEmitter</span>: 

<code>
door.eventsName()
</code>

<h5>emitter.getMaxListeners()</h5>

<p>Возвращает количество обработчиков, которые могут быть зарегистрированы для одного объекта <span>EventEmitter</span>, обычно это число равняется 10, но оно может быть увеличено или уменьшено посредством <span>setMaxListeners()</span>: 

<code>
door.getMaxListeners()
</code>

<h5>emitter.listenerCount()</h5>

<p>Возвращает количество обработчиков события, переданного в качестве аргумента: 

<code>
door.listenerCount('open')
</code>

<h5>emitter.off()</h5>

<p>Алиас для <span>emitter.removeListener()</span>, появившийся в Node.js 10. 

<h5>emitter.on()</h5>

<p>Добавляет колбек, который вызывается при возникновении события. 

<p>Например: 

<code>
door.on('open', () => {
    console.log('Door was opened')
})
</code>

<h5>emitter.once()</h5>

<p>Добавляет колбек, который вызывается при первом после регистрации возникновении события. Этот колбек вызывается лишь один раз. 

<code>
const EventEmitter = require('events')
const ee = new EventEmitter()

ee.once('my-event', () => {
    // вызвать колбек один раз 
})
</code>

<h5>emitter.prependListener()</h5>

<p>Когда вы добавляете обработчик с помощью <span>on</span> или <span>addListener</span>, данный обработчик добавляется в конец очереди обработчиков и вызывается последним. Посредством <span>prependListener</span> обработчик добавляется в начало очереди. 

<h5>emitter.prependOnceListener()</h5>

<p>Аналогично <span>emitter.prependListener()</span>, за исключением того, что колбек вызывается только один раз. 

<h5>emitter.removeAllListeners()</h5>

<p>Удаляет все обработчики для объекта <span>EventEmitter</span>, обрабатывающие определенное событие: 

<code>
door.removeAllListeners('open')
</code>

<h5>emitter.removeListener()</h5>

<p>Удаляет определенный обработчик. Для этого нужно сохранить колбек в переменную: 

<code>
const doSomething = () => {}
door.on('open', doSomething)
door.removeListener('open', doSomething)
</code>

<h5>emitter.setMaxListeners()</h5>

<p>Устанавливает максимальное количество обработчиков, которые можно добавить для объекта <span>EventEmitter</span>: 

<code>
door.setMaxListeners(50)
</code>
`