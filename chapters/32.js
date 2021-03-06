export default `
<h3>32. Промисы</h3>

<h5>Введение</h5>

<code>
let done = true 

const isDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I build'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})

const checkIfItsDone = () => {
    isItDoneYet 
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
}
</code>

<p>Обычно, промис определяется как прокси для значения, которое будет доступно в будущем (promise - обещание). 

<p>Промисы являются средством для работы с асинхронным кодом без использования колбеков. 

<p>Промисы являются частью языка на протяжении многих лет (они были стандартизированы и представлены в ES2015 и оптимизированы в async/await в 2017 году). 

<p>В основе асинхронных функций лежат промисы, поэтому понимание того, как они работают является основой для понимания того, как работает async/await. 

<h5>Как работают промисы?</h5>

<p>Когда промис вызывается, начинается стадия ожидания. Это означает, что вызванная функция продолжает выполняться до разрешения промиса, возвращая запрошенные данные. 

<p>Созданный промис завершается стадией выполнения или отклонения, что влечет за собой вызов колбека (переданного в <span>then</span> или <span>catch</span>). 

<h5>Какие прикладные интерфейсы используют промисы?</h5>

<p>Промисы используются такими современными API, как:

<ul>
    <li>Battery</li>
    <li>Fetch</li>
    <li>Сервис-воркеры</li>
</ul>

<p>Едва ли в современном JavaScript вам удастся обойтись без промисов, так что давайте рассмотрим их подробнее. 

<h5>Создание промиса</h5>

<p>Promise API предоставляет конструктор промиса, который вызывается с помощью <span>new Promise()</span>:

<code>
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})
</code>

<p>Как видите, промис проверяет глобальную константу <span>done</span>, и, если ее значением является <span>true</span>, промис выполняется (вызывается колбек <span>resolve</span>); иначе, вызывается колбек <span>reject</span>, промис отклоняется (если ни один из названных колбеков не будет вызван, промис останется в стадии ожидания). 

<p>С помощью <span>resolve</span> и <span>reject</span> мы можем сообщать колбеку, каким было состояние промиса, и что с ним следует делать. В приведенном примере мы возвращали строку, но это может быть объект или <span>null</span>. В примере мы создаем промис таким способом, что он сразу начинает выполняться. Это важно для понимания раздела "Использование промиса" ниже. 

<p>Более распространенным случаем использования промисов является так называемая промисификация. Эта техника заключается в использовании обычной функции, принимающей колбек, являющийся промисом:

<code>
const fs = require('fs') 

const getFile = filename => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err) // 'reject' вызывается при отклонении промиса с или без ошибки, переданной в качестве аргумента,
                            // и мы не хотим двигаться дальше
                return 
            }
            resolve(data) 
        })
    })
}

getFile('/etc/password')
    .then(data => console.log(data))
    .catch(err => console.error(err))
</code>

<p>В последних версиях Node.js, вам не нужно делать промисификацию вручную для многих прикладных интерфейсов. Существует <a href="https://nodejs.org/docs/latest-v11.x/api/util.html#util_util_promisify_original">модуль util</a>, который делает это за вас, обеспечивая возврат правильного значения промисифицируемой функции. 

<h5>Использование промиса</h5>

<p>В предыдущем разделе мы рассмотрели, как создать промис. 

<p>Теперь давайте посмотрим, как можно его использовать. 

<code>
const isItDoneYet = new Promise(...)
// ... 

const checkIfItsDone = () => {
    isItDoneYet
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
}
</code>

<p>В функции <span>checkIfItsDone()</span> определяются функции, запускаемые при выполнении промиса <span>isItDoneYet</span> (в колбеке <span>then</span>) или при его отклонении (в колбеке <span>catch</span>). 

<h5>Цепочка из промисов</h5>

<p>Промисы могут возвращаться в качестве значений других промисов, формируя цепочки из промисов. 

<p>Отличным примером цепочки промисов является Fetch API, который может использоваться для получения ресурса и работы с ним посредством очереди - цепочки из промисов. 

<p>Fetch API - это механизм, основанный на промисах, и вызов <span>fetch()</span> эквивалентен созданию собственного промиса с помощью <span>new Promise()</span>: 

<h5>Пример цепочки промисов</h5>

<code>
const status = response => {
    if (response.status >= 200 && response.status &lt; 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch('/todos.json')
    .then(status)   // обратите внимание, что функция 'status' вызывается именно здесь и возвращает промис
    .then(json)     // единственным отличием является то, что функция 'json' возвращает промис, который разрешается 'data'
    .then(data => { // поэтому 'data' является первым параметром анонимной функции
        console.log('Request succeeded with JSON response ', data)
    })
    .catch(error => {
        console.log('Request failed ', error)
    })
</code>

<p>В приведенном примере мы вызываем <span>fetch()</span> для получения списка задач из файла <span>todos.json</span>, находящегося в корневой директории, затем мы создаем цепочку промисов. 

<p>Запуск <span>fetch()</span> возвращает <a href="https://fetch.spec.whatwg.org/#concept-response">ответ</a>, имеющий много свойств, среди которых мы обращаемся к следующим: 

<ul>
    <li><span>status</span> - числовое значение кода статуса HTTP-ответа</li>
    <li><span>statusText</span> - статусное сообщение, например, <span>OK</span> в случае успешного запроса</li>
</ul>

<p><span>response</span> также имеет метод <span>json()</span>, который возвращает промис, выполняющийся с разобранным (распарсенным) содержимым тела ответа. 

<p>С учетом изложенного, вот что происходит: первый промис в цепочке - это определенная нами функция <span>status()</span>, которая проверяет статус ответа, и, в случае, когда такой статус выходит за пределы диапазона 200-299, промис отклоняется. 

<p>При отклонении промиса операция сразу переходит к блоку <span>catch()</span>, в консоль выводится текст <span>Request failed</span> и сообщение об ошибке. 

<p>При успешном запросе вызывается функция <span>json()</span>. Поскольку предыдущий промис вернул объект <span>response</span>, мы получаем его в качестве параметра во втором промисе. 

<p>Далее мы разбираем (парсим) ответ, так что третий промис получает данные в нужном формате:

<code>
.then(data => console.log('Request succeeded with JSON response ', data))
</code>

<p>И мы просто выводим эти данные в консоль. 

<h5>Обработка ошибок</h5>

<p>В примере у нас имелся блок <span>catch</span> в конце цепочки промисов. 

<p>Когда что-либо в цепочке завершается с ошибкой или когда промис отклоняется, управление переходит к блюжайшему блоку <span>catch</span>. 

<code>
new Promise((resolve, reject) => {
        throw new Error('Error')
    }).catch(err => {
        console.error(err)
    })
    
    // или
    
    new Promise((resolve, reject) => {
        reject('Error')
    }).catch(err => {
        console.error(err)
    })
</code>

<h5>Цепочка ошибок</h5>

<p>Если в <span>catch()</span> вы получили ошибку, вы можете добавить второй <span>catch()</span> для ее обработки и т.д. 

<code>
new Promise((resolve, reject) => {
        throw new Error('Error')
    })
    .catch(err => {
        throw new Error('Error')
    })
    .catch(err => {
        console.error(err)
    })
</code>

<h5>Оркестровка промисов</h5>

<h6><span>Promise.all()</span></h6>

<p>Если вам необходимо синхронизировать разные промисы, <span>Promise.all</span> позволяет определить список промисов, и сделать что-либо после их выполнения.

<p>Например:

<code>
const f1 = fecth('/something.json')
const f2 = fetch('/something2.json')

Promise.all([f1, f2])
    .then(res => {
        console.log('Array of results ', res)
    })
    .catch(err => {
        console.error(err)
    })
</code>

<p>С помощью деструктурирующего присваивания это можно сделать так: 

<code>
Promise.all([f1, f2]).then(([f1, f2]) => {
    console.log('Results ', res1, re2)
})
</code>

<p>Разумеется, вы не ограничены <span>fetch</span>, в данном шаблоне проектирования могут использоваться любые промисы. 

<h6><span>Promise.race()</span></h6>

<p><span>Promice.race()</span> запускается при выполнении первого промиса, т.е. колбек промиса выполняется один раз с результатом первого выполненного промиса. 

<p>Например: 

<code>
const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first')
})

const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second')
})

Promise.race([first, second]).then(result => {
    console.log(result) // second
})
</code>

<h5>Распространенные ошибки</h5>

<h6>Uncaught TypeError: undefined is not a promise</h6>

<p>Если в консоли вы получили ошибку <span>Uncaught TypeError: undefined is not a promise</span>, убедитесь в том, что используете <span>new Promise()</span>, а не просто <span>Promise()</span>. 

<h6>UnhandledPromiseRejectionWarning</h6>

<p>Это означает, что вызванный вами промис был отклонен, однако отсутствует блок <span>catch</span> для обработки возникшей ошибки. Добавьте <span>catch</span> в конец цепочки для решения этой проблемы.
`