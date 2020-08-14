export default `
<h3>38. Получение данных из тела запроса</h3>

<p>Вот как можно извлечь данные, содержащиеся в теле запроса в формате JSON. 

<p>Допустим, мы получили такой запрос: 

<code>
const axios = require('axios')

axios.post('https://whatever.com/todos', {
    todo: 'Buy the milk'
})
</code>

<p>Серверный код выглядит так: 

<code>
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/todos', (req, res) => {
    console.log(req.body.todo)
})
</code>

<p>Если вы не используете Express и хотите сделать тоже самое на ванильном Node.js, придется попотеть, поскольку Express делает многие вещи автоматически. 

<p>При инициализации сервера посредством <span>http.createServer()</span>, колбек вызывается, когда сервер получил все HTTP-заголовки, но не тело запроса. 

<p>Объект <span>request</span>, переданный в колбек соединения, это поток. 

<p>Поэтому мы должны отслеживать получение содержимого тела запроса, которое поступает по частям. 

<p>Сначала мы получаем данные, обрабатывая событие потока <span>data</span>, и когда данные заканчиваются, возникает событие <span>end</span>:

<code>
const server = http.createServer((req, res) => {
    // мы можем получить заголовки 
    req.on('data', chunk => {
        console.log(\`Data chunk available: &#36;{chunk}\`)
    })
    req.on('end', () => {
        // данные получены в полном объеме
    })
})
</code>

<p>Поэтому для получения данных, предположим, что мы ожидаем получить строку, мы должны помещать части в массив: 

<code>
const server = http.createServer((req, res) => {
    let data = []
    req.on('data', chunk => {
        data.push(chunk)
    })
    req.on('end', () => {
        JSON.parse(data).todo // 'Buy the milk'
    })
})
</code>
`