export default `
<h3>43. Запись файла</h3>

<p>Простейшим способом записи данных в файл является использование метода <span>fs.writeFile()</span>. 

<p>Например:

<code>
const fs = require('fs')

const content = 'Some content!'

fs.writeFile('/Users/joe/test.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    // файл записан успешно
})
</code>

<p>В качестве альтерантивы можно использовать метод <span>fs.writeFileSync()</span>:

<code>
const fs = require('fs')

const content = 'Some content!'

try {
    const data = fs.writeFileSync('/Users/joe/test.txt', content)
    // файл успешно записан 
} catch (err) {
    console.error(err)
}
</code>

<p>По умолчанию данные методы перезаписывают существующий файл. 

<p>Стандартное поведение можно изменить с помощью соответствующего флага: 

<code>
fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => { })
</code>

<p>Другие флаги:

<ul>
    <li><span>r+</span> - открыть файл для чтения и записи</li>
    <li><span>w+</span> - открыть файл для чтения и записи, поместив курсор в начало файла. Файл создается при отсутствии</li>
    <li><span>a</span> - открыть файл для записи, поместив курсор в конец файла. Файл создается при отсутствии</li>
    <li><span>a+</span> - открыть файл для чтения и записи, поместив курсор в конец файла. Файл создается при отсутствии</li>
</ul>

<p>Подробнее о флагах можно почитать <a href="https://nodejs.org/api/fs.html#fs_file_system_flags">здесь</a>. 

<h5>Дополнение файла</h5>

<p>Удобным методом для добавлени контента в конец файла является <span>fs.appendFile()</span> (и его синхронная версия <span>fs.appendFileSync()</span>):

<code>
const content = 'Some content!'

fs.appendFile('file.log', content, err => {
    if (err) {
        console.error(err)
        return
    }
    // выполнено! 
})
</code>

<h5>Использование потоков</h5>

<p>Все эти методы записывают весь файл перед тем, как вернуть управление программе (в асинхронных версиях это означает выполнение колбека). 

<p>Поэтому для записи больших файлов используются потоки. 
`