export default `
<h3>11. Вывод результатов в командную строку</h3>

<h5>Стандартный вывод посредством модуля <span>console</span></h5>

<p>Node.js предоставляет <a href="https://nodejs.org/api/console.html">модуль console</a>, содержащий множество очень полезных способов взаимодействия с командной строкой. 

<p>Он похож на объект <span>console</span> браузера. 

<p>Одним из основных методов данного модуля является <span>console.log()</span>, который выводит в консоль переданную строку. 

<p>Если вы передадите объект, он будет преобразован в строку. 

<p>Мы можем передавать <span>console.log</span> несколько переменных:

<code>
const x = 'x'
const y = 'y'
console.log(x, y)
</code>

<p>и Node.js выведет в консоль обе. 

<p>Мы также можем форматировать строку с помощью спецификаторов:

<p>Например:

<code>
console.log('My %s has %d years', 'cat', 2)
</code>

<ul>
    <li><span>%s</span> - форматирует переменную как строку</li>
    <li><span>%d</span> - форматирует переменную как число</li>
    <li><span>%i</span> - приводит переменную к целому числу</li>
    <li><span>%o</span> - форматирует переменную как объект</li>
</ul>

<p>Например:

<code>
console.log('%o', Number)
</code>

<h5>Очистка консоли</h5>

<p><span>console.clear()</span> очищает консоль (поведение зависит от используемой консоли).

<h5>Подсчет элементов</h5>

<p><span>console.count()</span> - полезный метод. 

<p>Изучите этот код:

<code>
const x = 1 
const y = 2 
const z = 3
console.count(
    'The value of x is ' + x +
    ' and has been checked .. how many times?'
)
console.count(
    'The value of x is ' + x +
    ' and has been checked .. how many times?'
)
console.count(
    'The value of y is ' + y +
    ' and has been checked .. how many times?'
)
</code>

<p>Счетчик считает и показывает количество отображений строки. 

<code>
The value of x is 1 and has been checked .. how many times?: 1
The value of x is 1 and has been checked .. how many times?: 2
The value of y is 2 and has been checked .. how many times?: 1  
</code>

<p>Так вы можете посчитать количество яблок и апельсинов:

<code>
const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => console.count(fruit))
apples.forEach(fruit => console.count(fruit))
</code>

<h5>Отображение трассировки стека</h5>

<p>Возникают ситуации, когда необходимо отобразить трассировку стека функции, например, для того, чтобы ответить на вопрос "Как мы достигли этой части кода?"

<p>Вы можете сделать это с помощью <span>console.trace()</span>:

<code>
const function2 = () => console.trace()
const function1 = () => function2()
function1()
</code>

<p>Это выведет в консоль трассировку стека. Вот что мы увидим в командной строке, если выполним приведенный код в REPL:

<code>
Trace
    at function2 (repl:1:33)
    at function1 (repl:1:25)
    at repl:1:1
    at ContextifyScript.Script.runInThisContext (vm.js:44:33)
    at REPLServer.defaultEval (repl.js:239:29)
    at bound (domain.js:301:14)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at REPLServer.onLine (repl.js:440:10)
    at emitOne (events.js:120:20)
    at REPLServer.emit (events.js:210:7)
</code>

<h5>Подсчет времени выполнения кода</h5>

<p>Вы легко можете посчитать, сколько времени выполнялась функция при помощи <span>time()</span> и <span>timeEnd()</span>:

<code>
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
    console.time('doSomething()')
    // выполняем какие-либо операции и засекаем время их выполнения
    doSomething()
    console.timeEnd('doSomething()')
}
measureDoingSomething()
</code>

<h5>stdout и stderr</h5>

<p>Как мы знаем, console.log() отлично подходит для вывода сообщений в консоль. Это называется стандартным выводом или <span>stdout</span>. 

<p><span>console.error()</span> отображает поток <span>stderr</span>. 

<p>Данный поток не выводится в консоль, а записывается в журнал ошибок (error log). 

<h5>Стилизуем вывод</h5>

<p>Вы можете раскрасить текст, выводимый в консоль, с помощью <a href="https://gist.github.com/iamnewton/8754917">обратных последовательностей (escape sequences)</a>. Эти последовательности представлют собой набор символов, идентифицирующих цвет. 

<p>Например:

<code>
console.log('\x1b[33m%s\x1b[0m', 'hi!')
</code>

<p>Если набрать приведенный код в REPL, то <span>hi!</span> будет желтого цвета. 

<p>Рассмотренный способ довольно трудоемкий. Простейшим способом раскрасить консольный вывод - использовать библиотеку. Одной из таких библиотек является <a href="https://github.com/chalk/chalk">Chalk</a>, которая кроме определения цвета, позволяет сделать текст полужирным, наклонным или подчеркнутым. 

<p>Устанавливаем библиотеку посредством <span>npm install chalk</span> и используем ее следующим образом:

<code>
const chalk = require('chalk')
console.log(chalk.yellow('hi!'))
</code>

<p>Использование <span>chalk.yellow</span> гораздо проще, чем запоминание сложных последовательностей. Это также делает код более читаемым. 

<h5>Создание индикатора прогресса</h5>

<p><a href="https://www.npmjs.com/package/progress">Progress</a> - отличная библиотека для создания индикаторов прогресса в терминале. Устанавливаем ее с помощью <span>npm install progress</span>. 

<p>Данный сниппет создает индикатор прогресса, состоящий из 10 шагов. Каждые 100 мс выполняется один шаг. При заполнении индикатора мы отключаем счетчик: 

<code>
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) clearInterval(timer)
}, 100)
</code>
`