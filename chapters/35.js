export default `
<h3>35. Создание HTTP-сервер</h3>
<p>Вот пример простого HTTP-сервера:

<code>
const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('&lt;>Hello, World!&lt;>')
})

server.listen(port, () => {
    console.log(\`Server running at port &#36;{port}\`)
})
</code>

<p>Проанализируем этот код.

<p>Мы подключаем <a href="https://nodejs.org/api/http.html">модуль http</a>. 

<p>Затем используем этот модуль для создания HTTP-сервера. 

<p>Мы указываем серверу слушать порт <span>3000</span>. После запуска сервера вызывается колбек. 

<p>Данный колбек будет вызываться в ответ на каждый запрос. При получении запроса вызывается <a href="https://nodejs.org/api/http.html#http_event_request">событие request</a>, возвращающее два объекта: запрос (объект <a href="https://nodejs.org/api/http.html#http_class_http_incomingmessage">http.IncomingMessage</a>) и ответ (объект <a href="https://nodejs.org/api/http.html#http_class_http_serverresponse">http.ServerResponse</a>). 

<p><span>request</span> содержит детали запроса. Через него мы получаем доступ к заголовкам и данным запроса. 

<p><span>response</span> используется для формирования ответа клиенту. 

<p>В данном случае, с помощью <span>res.statusCode = 200</span> мы присваиваем свойству <span>statusCode</span> значение <span>200</span> в качестве индикатора успешного выполнения запроса. 

<p>Также мы устанавливаем заголовок:

<code>
res.setHeader('Content-Type', 'text/html')
</code>

<p>И закрываем ответ, добавляя контент в качестве аргумента метода <span>end()</span>:

<code>
res.end('Hello, World!')
</code>
`