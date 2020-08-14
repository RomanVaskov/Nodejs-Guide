export default `
<h3>37. Отправка POST-запроса</h3>

<p>Существует множество способов отправки POST-запроса в зависимости от уровня абстракции. 

<p>Одним из простейших способов это сделать является использование <a href="https://github.com/axios/axios">библиотеки Axios</a>. 

<code>
const axios = require('axios')

axios 
    .post('https://whatever.com/todos', {
        todo: 'Buy the milk'
    })
    .then(res => {
        console.log(\`statusCode: &#36;{res.statusCode}\`)
    })
    .catch(err => console.error(err))
</code>

<p>Axios нуждается в сторонней библиотеке. 

<p>POST-запрос можно отправить с помощью стандартного модуля Node.js, однако код при этом будет более многословным:

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

const req = https.request(options, res => {
    console.log(\`statusCode: &#36;{res.statusCode}\`)

    res.on('data', d => {
    process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.write(data)
req.end()
</code>
`