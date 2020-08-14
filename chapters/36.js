export default `
<h3>36. Отправка HTTP-запросов</h3>

<h5>Отправка GET-запроса</h5>

<code>
const https = require('https')
const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(\`statusCode: &#36;{res.statusCode}\`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', err => console.error(err))

req.end()
</code>

<h5>Отправка POST-запроса</h5>

<code>
const https = require('https')

const data = JSON.stringify({
    todo: 'Buy the milk'
})

const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length 
    }
}

const req = https.request(options => {
    console.log(\`statusCode: &#36;{res.statusCode}\`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', err => console.error(err))

req.write(data)
req.end()
</code>

<h5>PUT и DELETE</h5>

<p>Запросы PUT и DELETE имеют тот же формат, что и POST-запрос, за исключением значения свойства <span>method</span> объекта <span>options</span>. 
`