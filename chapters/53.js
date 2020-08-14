export default `
<h3>53. Обработка ошибок</h3>

<p>Ошибки в Node.js обрабатываются с помощью исключений. 

<h5>Создание исключения</h5>

<p>Исключение создается с помощью ключевого слова <span>throw</span>. 

<code>
throw value
</code>

<p>При достижении данной строки кода выполнение программы останавливается и управление передается ближайшему обработчику исключений. 

<p>Как правило, в клиентском коде <span>value</span> может быть любым допустимым типом данных, таким как строка, число или объект. 

<p>В Node.js мы выбрасываем только объекты ошибки. 

<h5>Объект ошибки</h5>

<p>Объект ошибки - это объект, который является либо экземпляром объекта <span>Error</span>, либо наследником класса <span>Error</span>, предоставляемого <a href="https://nodejs.org/api/errors.html">модулем Error</a>. 

<code>
throw new Error('Ran out of coffee')
</code>

<p>Или 

<code>
class NotEnoughCoffeeError extends Error {
    // ...
}
throw new NotEnoughCoffeeError()
</code>

<h5>Обработка исключений</h5>

<p>Исключение обрабатывается в блоке <span>try/catch</span>. 

Любое исключение, возникшее в <span>try</span>, обрабатывается ближайшим <span>catch</span>. 

<code>
try {
    // ... 
} catch (e) {}
</code>

<p><span>e</span> - это значение исключения. 

<p>Вы можете добавить несколько обработчиков для обработки разных ошибок. 

<h5>Обработка непойманных (неперехваченных) исключений</h5>

<p>Если в процессе выполнения программы возникнет неперехваченное исключение, выполнение программы остановится. 

<p>Для решения данной проблемы необходимо добавить обработчик события <span>uncaughtException</span> объекта <span>process</span>: 

<code>
process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) // вызов данного метода является обязательным
})
</code>

<p>Получать модуль <span>process</span> не требуется, поскольку он внедрен по умолчанию. 

<h5>Исключения и промисы</h5>

<p>С помощью промисов можно выполнить разные операции и обработать ошибки в самом конце: 

<code>
doSomething1()
    .then(doSomething2)
    .then(doSomething3)
    .catch(err => console.error(err))
</code>

<p>Как узнать, где возникла ошибка? Для этого можно обрабатывать ошибки в каждой функции, которая вызывается (<span>doSomethingX</span>), и внутри обработчика ошибок выбрасывать новую ошибку, которая будет перехвачена внешним <span>catch</span>: 

<code>
const doSomething1 = () => {
    //...
    try {
        //...
    } catch (err) {
        //... обрабатываем ошибку локального
        throw new Error(err.message)
    }
    //...
}
</code>

<p>Для локальной обработки ошибок без их обработки внутри вызываемой функции, можно разорвать цепочку и создать в каждом <span>then()</span> специальную функцию:

<code>
doSomething1()
.then(() => {
    return doSomething2().catch(err => {
    // обрабатываем ошибку
    throw err // разрываем цепочку!
    })
})
.then(() => {
    return doSomething2().catch(err => {
    // обрабатываем ошибку
    throw err // разрываем цепочку!
    })
})
.catch(err => console.error(err))
</code>

<h5>Обработка ошибок с помощью async/await</h5>

<p>При использовании async/await вам также нужно обрабатывать ошибки: 

<code>
async function someFunction() {
    try {
        await someOtherFunction()
    } catch (err) {
        console.error(err.message)
    }
}
</code>
`