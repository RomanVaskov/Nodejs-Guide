export default `
<h3>51. Поток</h3>

<h5>Что такое поток?</h5>

<p>Поток - одна из главных причин высокой производительности Node.js-приложений. 

<p>Это способ чтения/записи файлов, работы с сетью или любого другого обмена информацией между конечными устройствами. 

<p>Потоки не являются уникальными для Node.js. Они появились в операционных системах семейства Unix, программы могут взаимодействовать друг с другом с помощью потоков через оператор "pipe" (<span>|</span>). 

<p>Например, когда вы указываете программе прочитать файл, файл считывается в память от начала до конца, затем вы его обрабатываете. 

<p>Потоки позволяют читать и обрабатывать файл по частям без его помещения в память. 

Node.js предоставляет <a href="https://nodejs.org/api/stream.html">модуль поток</a>. Все потоки являются экземплярами <span>EventEmitter</span>. 

<h5>Почему потоки?</h5>

<p>Потоки по сравнению с другими способами получения данных обладают двумя главными преимуществами:

<ul>
    <li>эффективное использование памяти: вам не нужно загружать все данные в память перед их использованием</li>
    <li>повышение производительности: данные можно использовать сразу, не дожидаясь окончания их получения</li>
</ul>

<h5>Пример потока</h5>

<p>Типичным примером использования потока является чтение файла с диска. 

<p>Данные можно прочитать с помощью модуля <span>fs</span> и отправить в ответе при установлении соединения с сервером: 

<code>
const http = require('http')
const fs = require('fs')

cnst server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/data.txt', (err, data) => {
        res.end(data)
    })
})
server.listen(3000)
</code>

<p><span>readFile()</span> читает содержимое файла и вызывает колбек. 

<p><span>res.end(data)</span> - это колбек, возвращающий содержимое файла клиенту. 

<p>Если файл является большим, данная операция займет много времени. Вот тот же пример с использованием потоков: 

<code>
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(__dirname + '/data.txt')
    stream.pipe(res)
})
server.listen(3000)
</code>

<p>Теперь, вместо того, чтобы ждать завершения чтения файла, мы начинаем отправлять его клиенту по частям сразу после получения очередной порции. 

<h5>pipe()</h5>

<p>В приведенном примере имеется строка <span>stream.pipe(res)</span>: в потоке вызывается метод <span>pipe()</span>. 

<p>Что делает этот код? Он получает ресурсы и создает тоннель к пункту назначения. 

<p>Мы вызываем его в потоке, поэтому в данном случае происходит туннелирование в HTTP-ответ. 

<p>Метод <span>pipe()</span> возвращает поток к пункту назначения, что позволяет создавать цепочки из вызовов <span>pipe()</span>: 

<code>
src.pipe(dest1).pipe(dest2)
</code>

<p>Данная консрукция аналогична следующей:

<code>
src.pipe(dest1)
dest1.pipe(dest2)
</code>

<h5>Прикладные интерфейсы Node.js, поддерживающие потоки</h5>

<p>Из-за преимуществ, предоставляемых потоками, многие модули ядра Node.js поддерживают работу с ними: 

<ul>
    <li><span>process.stdin</span> - возвращает поток к устройству ввода</li>
    <li><span>process.stdout</span> - возвращает поток к устройству вывода</li>
    <li><span>process.stderr</span> - возвращает поток к устройству обработки ошибок</li>
    <li><span>fs.createReadStream()</span> - создает поток для чтения файла</li>
    <li><span>fs.createWritableStream()</span> - создает поток для записи файла</li>
    <li><span>net.connect()</span> - инициализирует основанное на потоках соединение</li>
    <li><span>http.request()</span> - возвращает экземпляр класса <span>http.ClientRequest</span>, который является потоком для записи</li>
    <li><span>zlib.createGzip()</span> - сжимает данные с помощью gzip (алгоритм сжатия) внутри потока</li>
    <li><span>zlib.createGunzip()</span> - разворачивает сжатый (gzip) поток</li>
    <li><span>zlib.createDeflate()</span> - сжимает данные с помощью deflate (алгоритм сжатия) внутри потока</li>
    <li><span>zlib.createInflate()</span> - разворачивает сжатый (deflate) поток</li>
</ul>

<h5>Типы потоков</h5>

<p>Существует 4 класса потоков: 

<ul>
    <li><span>для чтения (readable)</span>: поток, который может служить началом тоннеля, но не его концом (т.е. мы можем получать данные из потока, но не записывать их в него). При записи данных в такой поток, они помещаются в буфер и находятся там до тех пор, пока не будут прочитаны</li>
    <li><span>для записи (writable)</span>: поток, который может служить концом тоннеля, но не его началом (т.е. мы можем записывать данные в такой поток, но не получать их из него)</li>
    <li><span>дуплексные (duplex)</span>: двунаправленный поток, обычно, является комбинацией потоков для чтения и записи</li>
    <li><span>трансформирующиеся (transform)</span>: такие потоки похожи на дуплексные, однако точкой их выхода является преобразованная точка входа</li>
</ul>

<h5>Как создать поток для чтения?</h5>

<p>Поток для чтения предоставляется модулем поток, мы инициализируем и реализуем его с помощью метода <span>readable._read()</span>: 

<code>
const Stream = require('stream')
const readableStream = new Stream.Readable()
</code>

<p>Затем реализуем <span>_read</span>: 

<code>
readableStream._read = () => {}
</code>

<p>Реализовать <span>_read</span> также можно посредством опции <span>read</span>: 

<code>
const readableStream = new Stream.Readable({
    read() {}
})
</code>

<p>После этого мы можем помещать данные в поток: 

<code>
readableStream.push('hi!')
readableStream.push('ho!')
</code>

<h5>Как создать поток для записи?</h5>

<p>Для создания потока для записи мы расширяем стандартный объект <span>Writable</span> и реализуем его метод <span>_write</span>. 

<p>Сначала мы создаем объект потока: 

<code>
const Stream = require('stream')
const writableStream = new Stream.Writable()
</code>

<p>Затем реализуем <span>_write</span>: 

<code>
writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}
</code>

<p>После этого мы можем его туннелировать: 

<code>
process.stdin.pipe(writableStream)
</code>

<h5>Как получить данные из потока для чтения?</h5>

<p>Данные из потока для чтения можно получить с помощью потока для записи: 

<code>
const Stream = require('stream')

const readableStream = new Stream.Readable({
    read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')
</code>

<p>Вы также можете читать поток напрямую, используя событие <span>readable</span>: 

<code>
readableStream.on('readable', () => {
    console.log(readableStream.read())
})
</code>

<h5>Как отправить данные в поток для записи?</h5>

<p>Используйте метод <span>write()</span>:

<code>
writableStream.write('hey!\n')
</code>

<h5>Как сообщить потоку для записи, что запись данных завершена?</h5>

<p>Используйте метод <span>end()</span>:

<code>
const Stream = require('stream')

const readableStream = new Stream.Readable({
    read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

writableStream.end()
</code>
`