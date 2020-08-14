export default `
<h3>42. Чтение файла</h3>

<p>Простейшим способом прочитать содержимое файла является использование метода <span>fs.readFile()</span>, которому передается путь, кодировка и колбек, вызываемый с содержимым файла (и ошибкой):

<code>
const fs = require('fs')

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})
</code>

<p>В качестве альтурнативы можно использовать <span>fs.readFileSync()</span>:

<code>
const fs = require('fs')

try {
    const data = fs.readFileSync('/Users/joe/test.txt', 'utf8')
    console.log(data)
} catch (err) {
    console.error(err)
}
</code>

<p>Оба метода считывают содержимое файла в память перед тем, как вернуть данные. 

<p>Это означает, что большие файлы будут существенно влиять на расход памяти и скорость выполнения программы. 

<p>В этом случае файлы лучше читать с помощью потоков. 
`