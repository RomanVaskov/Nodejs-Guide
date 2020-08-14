export default `
<h3>49. Модуль http</h3>

<p>Модуль <span>http</span> ядра Node.js является ключевым модулем для работы с сетью. 

<p>Он добавляется следующим образом: 

<code>
const http = require('http')
</code>

<p>Данный модуль предоставляет некоторые свойства, методы и классы. 

<h5>Свойства</h5>

<h6><span>http.METHODS</span></h6>

<p>Данное свойство содержит список поддерживаемых HTTP-методов:

<code>
> require('http').METHODS
[ 'ACL',
    'BIND',
    'CHECKOUT',
    'CONNECT',
    'COPY',
    'DELETE',
    'GET',
    'HEAD',
    'LINK',
    'LOCK',
    'M-SEARCH',
    'MERGE',
    'MKACTIVITY',
    'MKCALENDAR',
    'MKCOL',
    'MOVE',
    'NOTIFY',
    'OPTIONS',
    'PATCH',
    'POST',
    'PROPFIND',
    'PROPPATCH',
    'PURGE',
    'PUT',
    'REBIND',
    'REPORT',
    'SEARCH',
    'SUBSCRIBE',
    'TRACE',
    'UNBIND',
    'UNLINK',
    'UNLOCK',
    'UNSUBSCRIBE' ]
</code>

<h6><span>http.STATUS_CODE</span></h6>

<p>Данное свойство содержит список статус-кодов HTTP-ответа и их описание: 

<code>
> require('http').STATUS_CODES
{ '100': 'Continue',
    '101': 'Switching Protocols',
    '102': 'Processing',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '207': 'Multi-Status',
    '208': 'Already Reported',
    '226': 'IM Used',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '307': 'Temporary Redirect',
    '308': 'Permanent Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Payload Too Large',
    '414': 'URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Range Not Satisfiable',
    '417': 'Expectation Failed',
    '418': 'I\'m a teapot',
    '421': 'Misdirected Request',
    '422': 'Unprocessable Entity',
    '423': 'Locked',
    '424': 'Failed Dependency',
    '425': 'Unordered Collection',
    '426': 'Upgrade Required',
    '428': 'Precondition Required',
    '429': 'Too Many Requests',
    '431': 'Request Header Fields Too Large',
    '451': 'Unavailable For Legal Reasons',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    '506': 'Variant Also Negotiates',
    '507': 'Insufficient Storage',
    '508': 'Loop Detected',
    '509': 'Bandwidth Limit Exceeded',
    '510': 'Not Extended',
    '511': 'Network Authentication Required' }
</code>

<h6><span>http.globalAgent</span></h6>

<p>Содержит ссылку на глобальный экземпляр объекта Agent, который является экземпляром класса <span>http.Agent</span>. 

<p>Этот класс используется для управления постоянством соединения и возможностью его повторного использования HTTP-клиентами, и является важным компонентом работы с сетью. 

<h5>Методы</h5>

<h6><span>http.createServer()</span></h6>

<p>Возвращает новый экземпляр класса <span>http.Server</span>. 

<p>Например: 

<code>
const server = http.createServer((req, res) => {
    // обрабатываем запросы
})
</code>

<h6><span>http.request()</span></h6>

<p>Отправляет запрос на сервер, создавая экземпляр класса <span>http.ClientRequest</span>. 

<h6><span>http.get()</span></h6>

<p>Похож на <span>http.request()</span>, но автоматически устанавливает метод GET и вызывает <span>req.end()</span>. 

<h5>Классы</h5>

<p>Модуль <span>http</span> предоставляет 5 классов: 

<ul>
    <li>http.Agent</li>
    <li>http.ClientRequest</li>
    <li>http.Server</li>
    <li>http.ServerResponse</li>
    <li>http.IncomingMessage</li>
</ul>

<h6><span>http.Agent</span></h6>

Node.js создает экземпляр класса <span>http.Agent</span> для управления постоянством соединения и возможностью его повторного использования HTTP-клиентами. 

<p>Данный объект позволяет убедиться, что каждый запрос к серверу помещается в очередь и что при этом повторно используется один и тот же сокет. 

<p>Он также поддерживает пул сокетов (socket pull). Это очень важно для производительности. 

<h6><span>http.ClientRequest</span></h6>

<p>Объект <span>http.ClientRequest</span> создается при вызове <span>http.request()</span> или <span>http.get()</span>. 

<p>При получении ответа вызывается событие <span>response</span> с экземпляром <span>http.IncomingMessage</span> в качестве аргумента. 

<p>Данные ответа можно прочитать двумя способами: 

<ul>
    <li>с помощью метода <span>response.read()</span></li>
    <li>посредством обработчика события <span>data</span> в колбеке <span>response</span> (так можно обрабатывать поток данных)</li>
</ul>

<h6><span>http.Server</span></h6>

<p>Данный клас, как правило, возвращается при создании сервера с помощью <span>http.createServer()</span>. 

<p>После получения объекта сервера вы получаете доступ к его методам:

<ul>
    <li><span>close()</span> - запрещает серверу устанавливать новые соединения</li>
    <li><span>listen()</span> - запускает HTTP-сервер для установки соединений</li>
</ul>

<h6><span>http.ServerResponse</span></h6>

<p>Создается <span>http.Server</span> и передается в качестве второго аргумента событию <span>request</span>. 

<p>В коде, обычно, именуется как <span>res</span>: 

<code>
const server = http.createServer((req, res) => {
    // res - это объект http.ServerResponse 
})
</code>

<p>В каждом обработчике вызывается метод <span>end()</span>, уведомляющий сервер, что сообщение готово к отправке клиенту. Этот метод должен вызываться в каждом ответе. 

<p>Для работы с HTTP-заголовками используются следующие методы: 

<ul>
    <li><span>getHeadersNames()</span> - возвращает список установленных заголовков</li>
    <li><span>getHeaders()</span> - возвращает копию установленных заголовков</li>
    <li><span>setHeader('headername', value)</span> - устанавливает значение заголовка</li>
    <li><span>getHeader('headername')</span> - возвращает установленный заголовок</li>
    <li><span>hasHeader('headername')</span> - возвращает true при наличии заголовка</li>
    <li><span>headersSent()</span> - возвращает true, если заголовки были отправлены клиенту</li>
</ul>

<p>После работы с заголовками вы можете отправить их клиенту с помощью <span>response.writeHead()</span>, который принимает статус-код, опциональное сообщение о статусе и объект заголовков. 

<p>Для отправки данных клиенту в теле ответа следует использовать <span>write()</span>. Данный метод отправит буфферизованные данные в виде потока ответа. 

<p>Если заголовки не были отправлены посредством <span>response.writeHead()</span>, сначала будут отправлены заголовки со статус-кодом и сообщением, которые можно редактировать с помощью <span>statusCode</span> и <span>statusMessage</span>: 

<code>
response.statusCode = 500 
response.statusMessage = 'Internal Server Error'
</code>

<h6><span>http.IncomingMessage</span></h6>

<p>Объект <span>http.IncomingMessage</span> создается: 

<ul>
    <li><span>http.Server</span> при обработке события <span>request</span></li>
    <li><span>http.ClientRequest</span> при обработке события <span>response</span></li>
</ul>

<p>Данный объект может использоваться для доступа к следующему содержимому ответа: 

<ul>
    <li>статусу - с помощью методов <span>statusCode</span> и <span>statusMessage</span></li>
    <li>заголовкам - с помощью методов <span>headers</span> или <span>rawHeaders</span></li>
    <li>HTTP-методу - с помощью <span>method</span></li>
    <li>версии HTTP - с помощью <span>httpVersion</span></li>
    <li>URL - с помощью <span>url</span></li>
    <li>сокету - с помощью <span>socket</span></li>
</ul>

<p>Также могут быть получены данные из потока, поскольку <span>http.IncomingMessage</span> реализует интерфейс потока для чтения. 
`