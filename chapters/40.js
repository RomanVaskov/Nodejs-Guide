export default `
<h3>40. Статистика файла</h3>

<p>Каждый файл содержит перечень информации, которую мы можем изучить с помощью Node.js. 

<p>В частности, посредством метода <span>stat()</span> модуля <span>fs</span>. 

<p>Данный метод вызывается с двумя аргументами: путем к файлу и колбеком. Колбек, в свою очередь, содержит два параметра: сообщение об ошибке и статистику файла:

<code>
const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
    if (err) {
        console.error(err)
        return
    }
    // мы имеем доступ к статистике файла через 'stats'
})
</code>

<p>Node.js также предоставляет синхронный метод, который блокирует поток до получения статистики файла: 

<code>
const fs = require('fs')
try {
    const stats = fs.statSync('/Users/joe/test.txt')
} catch (err) {
    console.error(err)
}
</code>

<p>Информация о файле содержится в переменной <span>stats</span>. Какую информацию мы можем получить, используя <span>stats</span>? 

<p>Среди прочего:

<ul>
    <li>файл - это директория или файл? <span>stats.isFile()</span> и <span>stats.isDirectory()</span></li>
    <li>файл - это символическая ссылка? <span>stats.isSymbolicLink()</span></li>
    <li>размер файла в байтах, <span>stats.size</span></li>
</ul>

<p>Существует множество других методов, но чаще всего используются указанные выше. 

<code>
const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
    if (err) {
        console.error(err)
        return
    }

    stats.isFile() // true
    stats.isDirectory() // false
    stats.isSymbolicLink() // false
    stats.size // 1024000 //= 1MB
})
</code>
`