export default `
<h3>33. Async/Await</h3>

<p>Прошло совсем немного времени с момента появления промисов в 2015 году, а уже в 2017 асинхронный JavaScript был еще больше упрощен благодаря синтаксису async/await. 

<p>Асинхронные функции - это комбинация промисов и генераторов, обычно, их называют высокоуровневой абстракцией над промисами. Позвольте повторить, async/await основан на промисах. 

<h5>Зачем нужен async/await?</h5>

<p>Async/await представляет собой надстройку над промисами и не разрушает концепцию цепочки промисов. 

<p>Когда промисы были представлены в 2015, их главной задачей являлось решение проблемы асинхронного кода, и они ее решили, но спустя 2 года стало очевидно, что промисы не являются окончательным решением. 

<p>Промисы должны были решить проблему, известную как ад колбеков, но ни содержали собственную сложность, связанную с их синтаксисом. 

<p>Они являлись хорошим примитивом, на основе которого можно было разработать лучшее решение, и через некоторое время мы получили асинхронные функции. 

<p>Они делаеют код похожим на синхронный, оставаясь асинхронным и неблокирующим за сценой. 

<h5>Как это работает?</h5>

<p>Асинхронная функция возвращает промис, например:

<code>
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 3000)
    })
}
</code>

<p>При вызове этой функции вы предваряете его ключевым словом <span>await</span>, и вызов функции ожидает выполнения или отклонения промиса. Одна особенность: функция должна быть определена как асинхронная. Например:

<code>
    const doSomething = async () => {
        console.log(await doSomethingAsync())
    }
</code>

<h5>Простой пример</h5>

<p>Вот простой пример использования async/await для асинхронного выполнения функции:

<code>
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 3000)
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')

// => Before After I did something
</code>

<h5>Все дело в промисах</h5>

<p>Предварение функции ключевым словом <span>async</span> означает, что она вернет промис. 

<p>Даже если не сделать этого явно, все равно будет возвращен промис. 

<p>Вот почему следующий код является валидным: 

<code>
const aFunction = async () => 'test'

aFucntion().then(alert) // 'test'
</code>

<p>И этот также: 

<code>
const aFucntion = async () => Promise.resolve('test')

aFunction().then(alert) // 'test'
</code>

<h5>Код намного легче читать</h5>

<p>Как видите, наш код выглядит очень простым. Сравните его с кодом, в котором использует цепочка из промисов или с колбеками. 

<p>Это очень простой пример, главные преимущества использования async/await начинают в полной мере проявляться в более сложных случаях. 

<p>Например, вот как мы получаем ресурс и разбираем его с помощью промисов: 

<code>
const getFirstUserData = () => {
    return fetch('/users.json') // получаем список пользователей
        .then(response => response.json()) // разбираем JSON 
        .then(users => users[0]) // получаем первого пользователя 
        .then(user => fetch(\`/users/&#36;{user.name}\`)) // получаем данные пользователя 
        .then(userResponse => userResponse.json) // разбираем JSON 
}

getFirstUserData()
</code>

<p>Вот тот же функционал, реализованный с помощью async/await: 

<code>
const getFirstUserData = async () => {
    const response = await fetch('/users.json')
    const users = await response.json()
    const user = users[0]
    const userResponse = await fetch(\`/users/&#36;{user.name}\`)
    const userData = await userResponse.json()
    return userData
}

getFirstUserData()
</code>

<h5>Серия из нескольких функций</h5>

<p>Асинхронные функции легко собираются в цепочки и при этом синтаксис выглядит намного прще, чем при использовании промисов: 

<code>
const promiseToDoSomething = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 10000)
    })
}

const watchOverSomeoneDoingSomething = async () => {
    cons something = await promiseToDoSomething()
    return something + '\nand I watched'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + '\nand I watched as well'
    }
    
watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
})
    
/*
    I did something
    and I watched
    and I watched as well
*/
</code>

<h5>Простая отладка</h5>

<p>Отладка промисов - задача не из легких, поскольку отладчик не может последовательно разбирать асинхронный код. 

<p>Async/await позволяет это делать, поскольку для компилятора такой код является синхронным. 
`