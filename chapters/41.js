export default `
<h3>41. Путь к файлу</h3>

<p>Любой файл имеет адрес или путь. 

<p>На Linux и macOS путь может выглядеть так:

<code>
/Users/joe/file.txt
</code>

<p>А на Windows так:

<code>
C:\\Users\\joe\\file.txt
</code>

<p>Следует быть очень внимательным при работе с путями в приложении, поскольку это может иметь решающее значение. 

<p>Соответствующий модуль подключается следующим образом:

<code>
const path = require('path')
</code>

<p>После этого его можно использовать. 

<h5>Получение информации из <span>path</span></h5>

<p>Для извлечения информации из пути используются следующие методы:

<ul>
    <li><span>dirname</span> - директория, в которой находится файл</li>
    <li><span>basename</span> - название файла</li>
    <li><span>extname</span> - расширение файла</li>
</ul>

<p>Например:

<code>
const notes = '/Users/joe/notes.txt'

path.dirname(notes) // /Users/joe 
path.basename(notes) // notes.txt 
path.extname(notes) // .txt 
</code>

<p>Вы можете получить название файла без расширения:

<code>
path.basename(notes, path.extname(notes)) // notes 
</code>

<h5>Работа с путями</h5>

<p>Вы можете соединить две или более части пути посредством <span>path.join()</span>:

<code>
const name = 'joe'
path.join('/', 'Users', name, 'notes.txt')
</code>

<p>Абсолютный путь файла на основе относительного можно получить с помощью <span>path.resolve()</span>:

<code>
path.resolve('joe.txt') // '/Users/joe/joe.txt'
</code>

<p>В данном случае, Node.js просто добавляет <span>/joe.txt</span> к адресу текущей (рабочей) директории. Если вы определите первый параметр - директорию, <span>resolve</span> использует ее как основу для второго параметра - файла:

<code>
path.resolve('tmp', 'joe.txt') // '/Users/joe/tmp/joe.txt'
</code>

<p>Если первый параметр начинается со слеша - это абсолютный путь: 

<code>
path.resolve('/etc', 'joe.txt') // '/etc/joe.txt'
</code>

<p>Еще одной полезной функцией является <span>path.normalize()</span>, которая пытается вычислить актуальный путь на основе относительных спецификаторов типа <span>.</span>, <span>..</span> или двойного слеша:

<code>
path.normalize('/Users/joe/..//test.txt') // /Users/test.txt
</code>

<p><span>resolve</span> и <span>normalize</span> не проверяют, существует ли путь на самом деле. Они лишь вычисляют путь на основе полученной информации. 
`